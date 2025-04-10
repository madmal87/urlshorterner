
exports.handler = async (event) => {
    const urlMap = {
        'jombaca': 'https://www.facebook.com/share/p/1YuEQD1KDw/',
        'ptdi': 'https://library.uitm.edu.my/news/1842-majlis-iftar-bersama-perpustakaan-tun-dr-ismail',
        'ppd': 'https://library.uitm.edu.my/news/1840-perbincangan-program-khidmat-komuniti-bersama-pejabat-pendidikan-daerah-segamat',
        'ppd2': 'https://library.uitm.edu.my/news/1840-perbincangan-program-khidmat-komuniti-bersama-pejabat-pendidikan-daerah-segamat',
        'libaturus': 'https://library.uitm.edu.my/news/1832-sesi-libat-urus-pengurusan-rekod-arkib-bersama-perpustakaan-tun-dr-ismail',
        'bacalah': 'https://library.uitm.edu.my/budayailmu/?p=2440',
        'ittest': 'https://johor.uitm.edu.my/index.php?option=com_sppagebuilder&view=page&id=167',
        'conventptdi': 'https://library.uitm.edu.my/news/1820-perbincangan-program-khidmat-komuniti-bersama-smk-canossian-convent-segamat',
        'jadualkkb': 'https://docs.google.com/spreadsheets/d/1rOzv-9UFHyPCSE44v-cwYa29ChMto_hO9oOWNUCrP4A/edit?usp=sharing',
        'shortlink': 'https://docs.google.com/spreadsheets/d/19_QK9FE5E8JMfjt-EQA_LdHgqFAd7vkbqMNrQpIdj-E/edit?usp=sharing',
        'ihyaramadanpg': 'https://www.facebook.com/share/p/18y4dCTLeG/',
        'tap12025': 'https://docs.google.com/presentation/d/16vX0y6JCtrKzKy8EkAcrTNlcKcnr2bIi/edit?usp=sharing&ouid=102746423464810943993&rtpof=true&sd=true',
        'swotptdi': 'https://drive.google.com/file/d/1A9q2nUeG-vEkv58fjpiJpSs8mPupsVXb/view?usp=drive_link',
        'slot1': 'https://www.canva.com/design/DAGj8OxwN-0/lsV25UUzRJtb6bxnNv-Wsg/view?utm_content=DAGj8OxwN-0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd977484f0a',
        'chatgptppd': 'https://docs.google.com/presentation/d/1n5VbrWYV52mFb6QUl8q1BMqI1D2cGNm2WnJUUD9NOwQ/edit?usp=sharing',
        'ilmubestari': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1874-bengkel-ilmu-bestari-literasi-maklumat-dan-jejak-digital',
        'gambarib': 'https://drive.google.com/drive/folders/1mZMZY33jRUR3s13Umu-c7U36pgRFq9Ai?usp=drive_link',
        'mpp': 'https://www.facebook.com/ptdijohor/posts/pfbid02zpqb85hX4SY1FXFA6cLTWmvSN7rQfScNdUQckpWzGBHx3xT7Q3Zz6b5gKbpvarCml',
    };

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