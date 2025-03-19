const urlMap = {
    'jombaca': 'https://www.facebook.com/share/p/1YuEQD1KDw/',
    'ptdi': 'https://library.uitm.edu.my/news/1842-majlis-iftar-bersama-perpustakaan-tun-dr-ismail',
    'ppd': 'https://library.uitm.edu.my/news/1840-perbincangan-program-khidmat-komuniti-bersama-pejabat-pendidikan-daerah-segamat',
    'ppd2': 'https://library.uitm.edu.my/news/1840-perbincangan-program-khidmat-komuniti-bersama-pejabat-pendidikan-daerah-segamat',
    'libaturus': 'https://library.uitm.edu.my/news/1832-sesi-libat-urus-pengurusan-rekod-arkib-bersama-perpustakaan-tun-dr-ismail',
    // Add more mappings as needed
};

exports.handler = async (event) => {
    const id = event.path.split('/').pop(); // Get the ID from the URL
    const longUrl = urlMap[id];

    if (longUrl) {
        // Replace G-XXXXXXXXXX with your actual Measurement ID
        const trackingScript = `
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F2S40LE8QT"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            gtag('event', 'page_view', {
                'page_path': '/${id}',
                'page_title': 'Short Link Redirect',
                'link_destination': '${longUrl}'
            });
            
            // Redirect after a short delay to ensure tracking
            setTimeout(() => {
                window.location.href = '${longUrl}';
            }, 100);
        </script>
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
