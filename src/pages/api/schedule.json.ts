import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
    const KIDSLINE_SITTER_ID = "451147";

    const start = url.searchParams.get('start');
    const end = url.searchParams.get('end');

    if (!start || !end) {
        return new Response(JSON.stringify({
            error: 'Missing start or end date',
        }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const targetUrl = `https://kidsline.me/sitters/ajax_available_calendar/${KIDSLINE_SITTER_ID}.json?start=${start}&end=${end}`;

    try {
        const response = await fetch(targetUrl);

        if (!response.ok) {
            throw new Error(`Kidsline API responded with ${response.status}`);
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                // キャッシュ制御: 1分間キャッシュ
                'Cache-Control': 's-maxage=60, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Failed to fetch from Kidsline:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch schedule' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
