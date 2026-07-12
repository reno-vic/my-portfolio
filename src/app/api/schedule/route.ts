import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isOversizedRequest, rateLimit } from "@/lib/rate-limit";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ownerEmail = process.env.CONTACT_TO_EMAIL || "vicreno08@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Victor Reno Portfolio <onboarding@resend.dev>";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (isOversizedRequest(request, 8_192)) {
      return NextResponse.json({ error: "Call request is too large." }, { status: 413 });
    }

    const limit = rateLimit(request, {
      keyPrefix: "schedule",
      max: 2,
      windowMs: 30 * 60 * 1000,
    });

    if (limit.limited) {
      return NextResponse.json(
        { error: "Too many call requests for now. Please try again in a little while." },
        {
          status: 429,
          headers: {
            "Retry-After": String(limit.retryAfter),
          },
        }
      );
    }

    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const date = clean(body.date, 40);
    const time = clean(body.time, 40);
    const timezone = clean(body.timezone, 100);
    const message = clean(body.message, 1500);
    const website = clean(body.website, 200);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !date || !time || !timezone) {
      return NextResponse.json(
        { error: "Please fill in your name, email, preferred date, preferred time and timezone." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please use a valid email address." }, { status: 400 });
    }

    const requestedDate = new Date(`${date}T00:00:00.000Z`);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    if (Number.isNaN(requestedDate.getTime()) || requestedDate < today) {
      return NextResponse.json({ error: "Please choose today or a future date." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Add RESEND_API_KEY to enable call requests." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeDate = escapeHtml(date);
    const safeTime = escapeHtml(time);
    const safeTimezone = escapeHtml(timezone);
    const safeMessage = escapeHtml(message || "No extra context provided.").replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `New discovery call request from ${name}`,
      text: [
        "New call request from the portfolio website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Preferred date: ${date}`,
        `Preferred time: ${time}`,
        `Timezone: ${timezone}`,
        "",
        "Context:",
        message || "No extra context provided.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.55;color:#1b1c1b">
          <h2 style="margin:0 0 16px">New discovery call request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Preferred date:</strong> ${safeDate}</p>
          <p><strong>Preferred time:</strong> ${safeTime}</p>
          <p><strong>Timezone:</strong> ${safeTimezone}</p>
          <div style="margin-top:20px;padding:16px;border:1px solid #e3bfb3;border-radius:12px;background:#fbf9f7">
            ${safeMessage}
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Error sending call request email:", error);
    return NextResponse.json({ error: "Failed to send call request. Please try again." }, { status: 500 });
  }
}
