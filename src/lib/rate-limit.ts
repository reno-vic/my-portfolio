type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  keyPrefix: string;
  max: number;
  windowMs: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  __portfolioRateLimitStore?: Map<string, RateLimitEntry>;
};

const store = globalForRateLimit.__portfolioRateLimitStore ?? new Map<string, RateLimitEntry>();
globalForRateLimit.__portfolioRateLimitStore = store;

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const cloudflareIp = request.headers.get("cf-connecting-ip")?.trim();

  return forwardedFor || realIp || cloudflareIp || "unknown";
}

export function rateLimit(request: Request, { keyPrefix, max, windowMs }: RateLimitOptions) {
  const now = Date.now();
  const ip = getClientIp(request);
  const key = `${keyPrefix}:${ip}`;
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    cleanup(now);

    return {
      limited: false,
      remaining: max - 1,
      retryAfter: 0,
    };
  }

  if (current.count >= max) {
    return {
      limited: true,
      remaining: 0,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;

  return {
    limited: false,
    remaining: max - current.count,
    retryAfter: 0,
  };
}

export function isOversizedRequest(request: Request, maxBytes: number) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  return Number.isFinite(contentLength) && contentLength > maxBytes;
}

function cleanup(now: number) {
  if (store.size < 500) return;

  for (const [key, value] of store) {
    if (value.resetAt <= now) {
      store.delete(key);
    }
  }
}
