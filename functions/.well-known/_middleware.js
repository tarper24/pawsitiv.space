export async function onRequest(context) {
    const url = new URL(context.request.url);
    if (url.hostname != 'pawsitiv.space') {
        return context.next()
    }

    try {
        url.hostname = 'social.pawsitiv.space';

        return new Response(null, {
            status: 301,
            headers: {
                Location: url.href,
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (err) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}
