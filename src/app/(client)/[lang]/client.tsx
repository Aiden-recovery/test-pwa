'use client';

import "client-only";
import {subscribe} from "@/src/app/subscribe";

interface ClientProps {
    lang: string
};

export default function Client({lang}: ClientProps) {
    return <button onClick={async () => {
        await subscribe();
    }}>
        {lang === 'ko' ? '구독' : 'subscribe'}
    </button>;
}
