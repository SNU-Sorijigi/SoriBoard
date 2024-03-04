import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const body = await request.json();
    const response = await fetch('http://127.0.0.1:8080/time_manage/timemusic/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to create TimeMusic' }), {
            status: 400,
        });
    }
    if (response.ok) {
        const data = await response.json();
        return json(data);
    }
}