export const prerender = false;

import type { APIRoute } from 'astro';

const MAILERLITE_API_KEY = import.meta.env.MAILERLITE_API_KEY || process.env.MAILERLITE_API_KEY || '';
const GROUP_ID = '179331433453585616';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Add subscriber to MailerLite group
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [GROUP_ID],
        status: 'active',
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('MailerLite error:', JSON.stringify(data));
      const msg = data?.message || 'Subscription failed';
      return new Response(JSON.stringify({ error: msg }), {
        status: res.status >= 400 && res.status < 500 ? 400 : 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    console.error('Subscribe error:', e.message);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
