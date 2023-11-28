import Client from "@/app/(client)/[lang]/client";

interface PageProps {
  params: { lang: string };
}


export default async function Home({ params: { lang } }: PageProps) {

  return <Client lang={lang}/>;
}

export async function generateStaticParams() {
  return ['ko', 'en'].map(lang => ({
    lang,
  }));
}
