export const prerender = false;

import type { APIRoute } from 'astro';

const MAILERLITE_API_KEY = import.meta.env.MAILERLITE_API_KEY || process.env.MAILERLITE_API_KEY || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTA4NWNmMzkyODZiMTQyMzI0ZTUzYTcyYTljNDE1MTA2MDBiOWJlMWQwMWY5MjA4NzcxNDRjN2NiODJjZWNmN2NiOGFlODAyNWY4ODRmODIiLCJpYXQiOjE3NzA3OTMzMDEuMTQ3ODkxLCJuYmYiOjE3NzA3OTMzMDEuMTQ3ODk4LCJleHAiOjQ5MjY0NjY5MDEuMTQwMzM5LCJzdWIiOiIyMTI0NTU2Iiwic2NvcGVzIjpbXX0.PH4-MQMeIoKer8Jpi8TDEYk6oHfYZVqQqAwa9FeBbA1E9CLiZx5LfjqIKsMlsPgOBaLxhasyfJjQ29nRGfSaQMyhXvwI3zOISR3dwdtAhgnYtradXZUrqwhfX-arqrb_5deidlAB3Li6_LnMEYZW5M-txGtC8rDZjyM7Kh2o5ITUfAbBG7XF07L3MOQNtY8hGm58xq7-yEcSt5JlRiuzjg6q_UT09b1SxQq_5yV-CMIKQz9wLmxT6ty1FwDd4s4Eu2qVLdT9qJqbbB5oCzoaNdsmYWq8jncMSI4CXIQb5ADHBLlYf_zCzUcg61ckxCtceFaVTBn9ipdM2mAvWTuVKpw4fwXD7M2YRRHYaSF3ynOks5zTtisUm8IrD2yJrYOYWL4lOZlJLn8HTaV2LPA7Jnhotwn6_8uML2eFIIw7StseXuSX_qI1hzrHl0G-MmVQ5S1kIKeLQcD7EK0WU_RMK_pBKYHZbVMrpRuYP-azDD8JaMmumrFeULrTO-GxL3XqYbu0nSS08vUxlsIXYGH2F-cv04fh4KxNw924Dc_t9D0MhIE-Rhpw0ZooePudakBGOx6iY3vq2zOI1RvdyxdI0gC4KKaFs9h1-f0WMT7Dg0Pjdar5tLhbFVlFHIEzoO5av0OCq0cPJwkYSISyEDuBsXM7-cjQO66Zn-jV2nuHiN0';
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
