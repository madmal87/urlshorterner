const urlMap = {
    // Add more mappings as needed
};


const urlMap = {
  
    // Add more mappings as needed



};

exports.handler = async (event) => {
    const pathParts = event.path.split('/');
    const shortLinkId = pathParts[pathParts.length - 1]; // Get the ID from the URL
    const longUrl = urlMap[shortLinkId];

    if (longUrl) {
        // Google Analytics tracking script
        const trackingScript = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Redirecting...</title>
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-F2S40LE8QT"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F2S40LE8QT');
                gtag('event', 'page_view', {
                    'page_path': '/${shortLinkId}',
                    'page_title': 'Short Link Redirect',
                    'link_destination': '${longUrl}'
                });
                
                // Redirect after a short delay to ensure tracking
                setTimeout(() => {
                    window.location.href = '${longUrl}';
                }, 100);
            </script>
        </head>
        <body>
            <p>Redirecting to destination...</p>
        </body>
        </html>
        `;

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: trackingScript
        };
    } else {
        return {
            statusCode: 404,
            body: 'URL not found.',
        };
    }
};