const activities = [
  'Buscar productos',
  'Seleccionar producto',
  'Añadir al carrito',
  'Realizar pago',
  'Recibir confirmación',
];

const releases = [
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

export default function StoryMap() {
  return (
    <section
      className="storymap-grid w-full overflow-x-auto"
      aria-label="Story Map"
      tabIndex={0}
    >
      <div className="min-w-[700px]">
        {/* Encabezado de actividades */}
        <div className="grid grid-cols-5 gap-4 mb-2">
          {activities.map((activity, idx) => (
            <div
              key={activity}
              className="text-center font-semibold text-primary text-base md:text-lg px-2 py-1"
              aria-label={`Actividad: ${activity}`}
            >
              {activity}
            </div>
          ))}
        </div>
        {/* Releases y tarjetas */}
        {releases.map((release, rIdx) => (
          <div key={release.name} className="grid grid-cols-5 gap-4 mb-4 items-start">
            {release.stories.map((stories, cIdx) => (
              <div key={cIdx} className="flex flex-col gap-2 min-h-[60px]">
                {/* Eliminado: etiqueta de release sr-only */}
                {stories.length > 0 ? (
                  stories.map((story, sIdx) => (
                    <div
                      key={sIdx}
                      className="card focusable"
                      tabIndex={0}
                      role="listitem"
                      aria-label={story}
                    >
                      <span className="text-sm md:text-base text-gray-800">{story}</span>
                    </div>
                  ))
                ) : (
                  <div className="min-h-[40px]" aria-hidden="true"></div>
                )}
              </div>
            ))}
            {/* Eliminado: etiqueta de release al inicio de la fila */}
          </div>
        ))}
        {/* Releases en móvil/tablet */}
        <div className="flex flex-row gap-4 mt-2 md:hidden">
          {releases.map((release) => (
            <span
              key={release.name}
              className="inline-block bg-secondary text-white text-xs font-bold rounded px-2 py-1 shadow-card"
            >
              {release.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
