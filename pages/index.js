import Head from 'next/head';
import Image from 'next/image';
import StoryMap from '../components/StoryMap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Story Mapping</title>
        <meta name="description" content="Aplicación móvil de compras en línea — ejemplo de story mapping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="User Story Mapping — Demo" />
        <meta property="og:description" content="Aplicación móvil de compras en línea — ejemplo de story mapping" />
        <meta property="og:image" content="/example-storymap.png" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen flex flex-col items-center bg-background py-8 px-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary text-center">Story Mapping</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">Aplicación móvil de compras en línea — ejemplo de story mapping</p>
        <section className="w-full max-w-5xl flex flex-col items-center justify-center">
          <div className="w-full">
            <StoryMap />
          </div>
        </section>
      </main>
    </>
  );
}
