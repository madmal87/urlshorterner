const urlMap = {
    '1': 'https://www.facebook.com/share/p/1YuEQD1KDw/',
    '2': 'https://another-url.com/page',
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