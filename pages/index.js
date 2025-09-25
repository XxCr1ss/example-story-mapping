import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import StoryMap from '../components/StoryMap';

export default function Home() {
  // Estado: 0 = simple, 1 = extendido
  const [version, setVersion] = useState(0);

  // Datos versión simple
  const activitiesSimple = [
    'Buscar productos',
    'Seleccionar producto',
    'Añadir al carrito',
    'Realizar pago',
    'Recibir confirmación',
  ];
  const releasesSimple = [
    {
      name: 'Release 1',
      stories: [
        [
          'Como usuario, quiero filtrar por categoría.',
          'Como usuario, quiero buscar por palabra clave.',
        ],
        [
          'Como usuario, quiero ver la descripción detallada.',
        ],
        [
          'Como usuario, quiero añadir un producto al carrito.',
        ],
        [
          'Como usuario, quiero elegir el método de pago.',
        ],
        [
          'Como usuario, quiero recibir un correo de confirmación.',
        ],
      ],
    },
    {
      name: 'Release 2',
      stories: [
        [
          'Como usuario, quiero ver productos recomendados.',
        ],
        [
          'Como usuario, quiero ver imágenes del producto.',
        ],
        [
          'Como usuario, quiero modificar cantidades.',
        ],
        [
          'Como usuario, quiero introducir datos de envío.',
        ],
        [
          'Como usuario, quiero recibir un número de seguimiento.',
        ],
      ],
    },
    {
      name: 'Release 3',
      stories: [
        [],
        [
          'Como usuario, quiero ver opiniones de otros compradores.',
        ],
        [
          'Como usuario, quiero eliminar un producto del carrito.',
        ],
        [
          'Como usuario, quiero aplicar cupones de descuento.',
        ],
        [],
      ],
    },
  ];

  // Datos versión extendida (con Sprint y Épicas)
  const activitiesExtended = [
    'Buscar productos',
    'Seleccionar producto',
    'Añadir al carrito',
    'Realizar pago',
    'Recibir confirmación',
  ];
  const releasesExtended = [
    {
      name: 'Sprint 1',
      stories: [
        [
          'Como usuario, quiero filtrar por categoría.',
          'Como usuario, quiero buscar por palabra clave.',
        ],
        [
          'Como usuario, quiero ver la descripción detallada.',
          'Como usuario, quiero ver imágenes del producto.',
        ],
        [
          'Como usuario, quiero añadir un producto al carrito.',
        ],
        [
          'Como usuario, quiero elegir el método de pago.',
        ],
        [
          'Como usuario, quiero recibir un correo de confirmación.',
        ],
      ],
    },
    {
      name: 'Sprint 2',
      stories: [
        [
          'Como usuario, quiero ver productos recomendados.',
        ],
        [
          'Como usuario, quiero ver opiniones de otros compradores.',
        ],
        [
          'Como usuario, quiero modificar cantidades.',
          'Como usuario, quiero eliminar un producto del carrito.',
        ],
        [
          'Como usuario, quiero introducir datos de envío.',
          'Como usuario, quiero aplicar cupones de descuento.',
        ],
        [
          'Como usuario, quiero recibir un número de seguimiento.',
        ],
      ],
    },
  ];
  // Épicas para la versión extendida
  const epicsExtended = [
    'Navegación y descubrimiento',
    'Compra y postventa',
  ];
  // Mapeo de actividades a épicas (índice)
  const activityToEpic = [0, 0, 1, 1, 1];

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
            {version === 1 && (
              <div className="grid grid-cols-5 gap-4 mb-2">
                <span
                  className="col-span-5 bg-secondary text-white text-base md:text-lg font-bold rounded px-4 py-2 shadow-card text-center"
                  style={{ gridColumn: '1 / -1' }}
                >
                  Sprint 1
                </span>
              </div>
            )}
            {version === 0 ? (
              <StoryMap activities={activitiesSimple} releases={releasesSimple} />
            ) : (
              <StoryMap activities={activitiesExtended} releases={releasesExtended} epics={epicsExtended} activityToEpic={activityToEpic} />
            )}
          </div>
        </section>
        <div className="flex gap-4 mt-8 mb-4">
          <button
            className={`px-4 py-2 rounded font-semibold shadow-card border border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-150 ${version === 0 ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary/10'}`}
            onClick={() => setVersion(0)}
            aria-pressed={version === 0}
          >
            Versión simple
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold shadow-card border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-150 ${version === 1 ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary/10'}`}
            onClick={() => setVersion(1)}
            aria-pressed={version === 1}
          >
            Versión extendida (épicas y sprint)
          </button>
        </div>
      </main>
    </>
  );
}
