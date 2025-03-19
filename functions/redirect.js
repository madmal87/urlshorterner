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
        return {
            statusCode: 302,
            headers: {
                Location: longUrl,
            },
        };
    } else {
        return {
            statusCode: 404,
            body: 'URL not found.',
        };
    }
};