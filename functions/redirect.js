
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
        'webmpp': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1880-kunjungan-hormat-majlis-perwakilan-pelajar-mpp-sesi-2024-2025',
        '1s1b': 'https://www.facebook.com/share/p/1EV78ykiNH/',
        'slidechatgpt': 'https://docs.google.com/presentation/d/1FnmdSO3xlKgAaD7tm8_PKtpLyB6gmOXoOUc1Zek9Eco/edit?usp=sharing',
        'sijilgenerator': 'https://docs.google.com/document/d/1unXGShHk1RfYI9canoCaF93sHV-Nh1FnzG3CjbfAdw4/edit?usp=sharing',
        'ptdireport2025': 'https://www.canva.com/design/DAGgYOt2qB4/ah9u0YPqQkRue6dCEIIRUQ/edit',
        'kursuspemimpinmuda': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1901-kursus-kepimpinan-pemimpin-muda-sekolah-kebangsaan-temenggong-abdul-rahman',
        'persaraan': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1902-syawal-dirai-budi-disanjung-majlis-persaraan-hari-raya-ptdi',
        'familyday': 'https://docs.google.com/document/d/1LXko4_fQXT0MfFDtXqhfiu5V3I0RwTOX/edit',
        'sambutanraya': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1926-penglibatan-warga-perpustakaan-tun-dr-ismail-di-majlis-sambutan-hari-raya-perdana-uitm-johor-2025',
        'jommembaca': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1927-jom-baca-bersama-10-minit-nikmati-saat-ini-2',
        'harikeluarga': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1928-program-hari-keluarga-perpustakaan-tun-dr-ismail',
        'myipo': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1929-inovasi-diperkasa-hak-cipta-dilindungi-ptdi-serah-permohonan-rasmi-ke-myipo',
        'keselamatandankesihatan': 'https://library.uitm.edu.my/services/learning/teaching-library-programme/1930-kkp-jadi-fokus-ptdi-bawa-keselamatan-kesihatan-ke-garis-hadapan',
        'sanggar': 'https://library.uitm.edu.my/news/1958-menjulang-bahasa-membentuk-generasi-madani-perbincangan-awal-program-kem-sanggar-bahasa-daerah-segamat',
        'johormembaca': 'https://library.uitm.edu.my/news/1959-uitm-johor-membaca-siri-2-2025-galak-budaya-ilmu-dan-literasi-digital',
        'mobilelibrary': 'https://library.uitm.edu.my/news/1961-mesyuarat-gerak-kerja-mobile-library-ptdi2u-secara-maya',
        'sejarahawal': 'https://library.uitm.edu.my/news/1962-merintis-sejarah-melalui-lisan-ptdi-mulakan-perbincangan-awal-bersama-tokoh-pesara',
        'isucadangan': 'https://forms.gle/h4A6aNoawrPaRnt97',
        'cadanganbuku': 'https://library.uitm.edu.my/news/1967-sistem-permata-perkasa-pembangunan-koleksi-berasaskan-silibus-di-ptdi',
        'cekcura': 'https://www.facebook.com/ptdijohor/posts/pfbid024c9kyhUDxovEMnR89iD1g1Z4UdEXfD9CyMgKLs9aN5L3aPR4qR9UxWuNoNSvUiSQl',
        'mobilelibrary1': 'https://library.uitm.edu.my/news/1990-perpustakaan-bergerak-ptdi2u-tarik-perhatian-warga-kampus',
        'sejarahlisan': 'https://www.youtube.com/watch?v=KKmj1o9piuY',
        'kehadiransejarah': 'https://library.uitm.edu.my/component/jem/event/530:program-awalan-projek-sejarah-lisan-uitm-cawangan-johor',
        'pemuliharaanarkib': 'https://library.uitm.edu.my/news/2002-pemuliharaan-bahan-ilmu-antara-teori-dan-praktikal',
        'libraryjourney': 'https://library.uitm.edu.my/news/2003-program-journey-to-library-tingkat-kefahaman-kemudahan-perpustakaan-digital',
        'liveyt': 'https://youtube.com/live/5qAp2bbvbOU?feature=share',
        'sejarah': 'https://library.uitm.edu.my/news/2013-uitm-johor-mulakan-langkah-awal-projek-sejarah-lisan-bersama-pesara-kampus',
        'libkeyless': 'https://library.uitm.edu.my/component/jem/event/540:lib-keyless-pengintegrasian-teknologi-iot',
        'kehadiran1staf': 'https://library.uitm.edu.my/component/jem/event/544:program-budaya-ilmu-1-staf-1-buku',
        'jalinanmesra': 'https://library.uitm.edu.my/news/2028-jalinan-ilmu-kukuhkan-hubungan-ptdi-dan-smk-canossian-convent-segamat',
        'stemknowledge': 'https://library.uitm.edu.my/news/2029-fun-with-science-ptdi-jayakan-program-a-day-with-stem-knowledge',
        'q12025': 'https://library.uitm.edu.my/news/2030-ptdi-terlibat-dalam-sesi-pembentangan-prestasi-strategik-perpustakaan-uitm-q1-2025',
        'sihat360': 'https://library.uitm.edu.my/news/2031-program-sejahtera-360-sihat-bersama-warga-ptdi-siri-4-2025-jayakan-gaya-hidup-sihat-di-tempat-kerja',
        'libkey': 'https://library.uitm.edu.my/news/2032-lib-keyless-langkah-ke-arah-pengurusan-akses-pintar-di-ptdi',
        '1staf1buku': 'https://library.uitm.edu.my/news/2033-program-1-staf-1-buku-book-review-galak-budaya-membaca-dan-perkongsian-ilmu-di-ptdi',
        'chatgptxcatuitm': 'https://docs.google.com/presentation/d/15GUXJMLxQUtGYE5q5wu4OjTBGiaGeZ2BhT9FEgM-ork/edit?usp=sharing',
        'chatgptx2': 'https://drive.google.com/drive/folders/1ZNMwE88M7gev285-IMzVITfxz_4XoXvQ?usp=sharing',
        'sahabat': 'https://forms.gle/zS6CRjKPPGdiePz88',
        'tiktokmastery': 'https://library.uitm.edu.my/news/anugerah-hab-e-usahawan-tiktok-mastery-perpustakaan-kini-pemangkin-dunia-niaga-digital',
        'johorbersih': 'https://library.uitm.edu.my/news/program-johor-bersih-2-0-ptdi-teguh-sokong-kebersihan-kampus-dan-kelestarian-alam',
        'petronas': 'https://library.uitm.edu.my/news/minda-keusahawanan-alumni-uitm-cetus-inspirasi-mahasiswa-ke-dunia-korporat',
        'arkib': 'https://library.uitm.edu.my/news/melestarikan-warisan-bengkel-teknik-pengawetan-bahan-arkib-tarik-minat-pelajar-uitm',
        'spell': 'https://library.uitm.edu.my/news/s-p-e-l-l-competition-2025-serlahkan-minda-cekap-perkukuh-penguasaan-bahasa',
        'boulevard': 'https://library.uitm.edu.my/news/ptdi-serlah-inovasi-di-pertandingan-poster-consal-boulevard-2025',
        'smkconvent': 'https://library.uitm.edu.my/news/dari-kelas-ke-kehidupan-ptdi-bimbing-pelajar-smk-canossian-convent-tentukan-hala-tuju-lepas-spm',
        'akpk': 'https://library.uitm.edu.my/news/dompet-sihat-hidup-selamat-akpk-didik-warga-kampus-urus-kewangan-bijak',
        'kpdnk': 'https://library.uitm.edu.my/news/advokasi-kepenggunaan-explorace-sinergi-hebat-kampus-dan-komuniti',
        'program360': 'https://library.uitm.edu.my/news/program-sejahtera-360-perkukuh-gaya-hidup-sihat-warga-ptdi',
        'akar': 'https://library.uitm.edu.my/news/akar-membumi-inovasi-menjulang-ptdi-perkasa-budaya-inovatif-bersama-jken',
        'jejakmaklumat1': 'https://library.uitm.edu.my/news/menjejak-ilmu-menyulam-minda-pembukaan-meriah-jejak-maklumat-daerah-segamat-hari-pertama',
        'jejakmaklumat2': 'https://library.uitm.edu.my/news/menjejak-ilmu-menyulam-minda-pembukaan-meriah-jejak-maklumat-daerah-segamat-hari-kedua',
        'telaahbuku': 'https://library.uitm.edu.my/news/program-telaah-ilmu-1-staf-1-buku-book-review-perkukuh-budaya-membaca-di-ptdi',
        'senyum': 'https://library.uitm.edu.my/news/senyum-perkasa-etika-layanan-pelanggan-ptdi',
        'customerchoice': 'https://library.uitm.edu.my/news/puan-norme-terima-sijil-penghargaan-customer-choice-award-tahun-2025',
        'yasiin': 'https://library.uitm.edu.my/news/satu-hati-satu-doa-ptdi-anjur-bacaan-yaasin-doa-bersama',
        'pemantauan': 'https://library.uitm.edu.my/news/pantau-demi-prihatin-pemantauan-fasiliti-ptdi-2-tingkatkan-kualiti-perkhidmatan',
        'sinergippd': 'https://library.uitm.edu.my/news/menjalin-jaringan-strategik-ptdi-perkukuh-kolaborasi-bersama-ppd-muar-ppd-tangkak-ppd-kluang',
        'apc2024': 'https://library.uitm.edu.my/news/syabas-dan-tahniah-penerima-anugerah-perkhidmatan-cemerlang-2024',
        'ytptdi': 'https://l.facebook.com/l.php?u=https%3A%2F%2Fshorturl.at%2FetTNy%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUXNsbEdVNXJFbFFkTUUxYwEeNomLT1czfEIb1xLaMqRsVL2xRA6QgPNgjkKPbF2BYOBxunZyKUV-3JehLj8_aem_RRDn3rV8I0uItM7WC5vvDQ&h=AT0ykAHdCiKxeL9mlYFEma7UW82RJZmzYLoJkH413iuilE5T0NA0sbESjIzu8KRL0aK9ooE9yLOeSCvCkLRIbNWDNyznVgqngMpQ6DDMtrU3CIv6oeCy6OELfdFpx1kR_ViUjWO2qySvukwtXX_m8chRpYXj-LF1&__tn__=-UK-R&c[0]=AT0Vh2rIkm5ws4NafJbruMNwNXgctDkVBwaUYpR1iS71B6GMFdyHqKJ6H6rQNrEkvT2ZeDItvNGfalKCHT-Qg1DDkZwo-6SKu4MRz5fODQ__B7W6HgwjjUG5r8ONXFWqJ3ZyJC7offeMaULLw7rGu-eBfwDnGaPmFb6K8rbRspmX03em3OS7xPShpZljABPc5zgeI8nKOCQTeX9abxgieyvN8A',
        'ptdipodcast': 'https://youtu.be/r446KRkqYEg?si=mbtm7eW4032a74-a',
        'sukab': 'https://library.uitm.edu.my/news/kejayaan-staf-ptdi-di-kejohanan-sukab-uitm-cawangan-johor',
        'selamatdatang': 'https://library.uitm.edu.my/news/sembang-santai-bersama-ketua-pustakawan-uitm-perkasa-aspirasi-ptdi-ke-arah-transformasi-digital',
        'tahniah': 'https://library.uitm.edu.my/news/penghargaan-khas-kepada-warga-ptdi-sempena-lawatan-ketua-pustakawan-uitm',
        'azkacorner': 'https://library.uitm.edu.my/news/majlis-penyerahan-mock-cheque-dan-perasmian-etiqa-azka-corner-oleh-etiqa-family-takaful-berhad',
        'kkssmka': 'https://library.uitm.edu.my/news/program-khidmat-komuniti-sekolah-bersama-sekolah-menengah-al-khairiah-segamat',
        'kkssmkaba': 'https://library.uitm.edu.my/news/pengukuhan-ilmu-di-sekolah-program-khidmat-komuniti-ptdi-tekan-teknik-bacaan-pantas-dan-pencarian-maklumat',
        'welcomepnc': 'https://library.uitm.edu.my/news/kunjungan-penolong-naib-canselor-strategi-memeriahkan-perpustakaan-tun-dr-ismail',
        'selamatdatangli': 'https://library.uitm.edu.my/news/selamat-datang-pelajar-latihan-industri-ke-perpustakaan-tun-dr-ismail',
        'batupahat': 'https://library.uitm.edu.my/news/ptdi-dan-ppd-batu-pahat-jalin-kerjasama-strategik-perkasa-literasi-maklumat-sekolah',
        'podcast2': 'https://library.uitm.edu.my/news/ptdi-on-air-episod-2-inovatif-inspiratif-cerita-kik-pembantu-pustakawan-kini-di-youtube',
        'datoonn': 'https://library.uitm.edu.my/news/menelusuri-sejarah-penandaarasan-lawatan-ptdi-ke-galeri-dato-onn',
        'bendahari': 'https://library.uitm.edu.my/news/ptdi-terus-komited-perkukuh-pengurusan-rekod-secara-sistematik',
        'jalurgemilang': 'https://library.uitm.edu.my/news/kibaran-jalur-gemilang-tanda-cinta-ptdi-kepada-malaysia',
        'sejahtera360': 'https://library.uitm.edu.my/news/program-sejahtera-360-sihat-bersama-ptdi',
        'mindarektor': 'https://library.uitm.edu.my/publication/minda-rektor-johor/profesor-madya-dr-saunah-binti-zainon',
        'ep1alumni': 'https://www.youtube.com/watch?v=5ANQr017Rbs',
        'teksemcee': 'https://docs.google.com/document/d/1KLJeNeaNQN8US4QITsL1WoWFhirMpDM2/edit?usp=sharing&ouid=113157731907556890038&rtpof=true&sd=true',
        'jakoafb': 'https://www.facebook.com/events/1077077431266935/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22your_upcoming_events_unit%22%2C%22surface%22%3A%22bookmark%22%7D]%2C%22ref_notif_type%22%3Anull%7D',
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