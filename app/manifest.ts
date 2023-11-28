import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        "background_color": "#fff",
        "description": "에이든, 루나, 에이버리의 유작. 여기에 남다",
        "display": "standalone",
        "display_override": ["fullscreen", "minimal-ui"],
        "icons": [
            {
                "purpose": "any",
                "sizes": "114x114",
                "src": "/image/favicon/favicon-114x114.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "144x144",
                "src": "/image/favicon/favicon-144x144.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "512x512",
                "src": "/image/favicon/favicon-512x512.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "192x192",
                "src": "/image/favicon/favicon-192x192.png",
                "type": "image/png"
            }
        ],
        "name": "에이슬립피드",
        "prefer_related_applications": false,
        "screenshots": [
            {
                // @ts-ignore
                "form_factor": "wide",
                "label": "Homescreen of Awesome App",
                "sizes": "1080x1920",
                "src": "/image/screenshot/1.jpg",
                "type": "image/jpg"
            },
            {
                // @ts-ignore
                "form_factor": "narrow",
                "label": "Homescreen of Awesome App",
                "sizes": "1080x1920",
                "src": "/image/screenshot/1.jpg",
                "type": "image/jpg"
            }
        ],
        "short_name": "에이슬립피드",
        "start_url": "/",
        "theme_color": "#fff"
    }
}
