export default function StoryMap({ activities, releases, epics, activityToEpic }) {
  // Si hay épicas, agrupar actividades por épica
  let epicRows = [];
  if (epics && activityToEpic) {
    epicRows = epics.map((epic, epicIdx) => {
      // indices de actividades que pertenecen a esta épica
      const indices = activities
        .map((_, idx) => (activityToEpic[idx] === epicIdx ? idx : -1))
        .filter(idx => idx !== -1);
      return { epic, indices };
    });
  }

  const showReleasesLeft = true;

  return (
    <section
      className="storymap-grid w-full overflow-x-auto"
      aria-label="Story Map"
      tabIndex={0}
    >
      <div className="w-full">
        {/* Épicas (si existen) */}
        {epics && activityToEpic && (
          <div className="grid grid-cols-5 gap-4 mb-1">
            {epicRows.map(({ epic, indices }) => (
              <div
                key={epic}
                className={`col-span-${indices.length} text-center font-bold text-accent text-base md:text-lg px-2 py-1 bg-accent/10 rounded`}
                style={{ gridColumn: `${indices[0] + 1} / span ${indices.length}` }}
                aria-label={`Épica: ${epic}`}
              >
                {epic}
              </div>
            ))}
          </div>
        )}
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
          <div key={release.name} className="relative grid grid-cols-5 gap-4 mb-4 items-start">
            {/* MVP label solo en la versión extendida y solo en la primera fila */}
            {epics && activityToEpic && rIdx === 0 && (
              <div className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 flex items-center z-20">
                <span className="inline-block bg-emerald-400 text-white text-xs font-bold rounded px-2 py-1 shadow-card">
                  MVP
                </span>
              </div>
            )}
            {showReleasesLeft && (
              <div className="absolute -left-28 top-1/2 -translate-y-1/2 hidden md:block">
                <span className="inline-block bg-secondary text-white text-xs font-bold rounded px-2 py-1 shadow-card">
                  {release.name}
                </span>
              </div>
            )}
            {release.stories.map((stories, cIdx) => (
              <div key={cIdx} className="flex flex-col gap-2 min-h-[60px]">
                {stories.length > 0 ? (
                  stories.map((story, sIdx) => {
                    // Historias seleccionadas para el MVP (solo versión extendida)
                    const mvpStories = [
                      'Como usuario, quiero filtrar por categoría.',
                      'Como usuario, quiero buscar por palabra clave.',
                      'Como usuario, quiero ver la descripción detallada.',
                      'Como usuario, quiero ver imágenes del producto.',
                      'Como usuario, quiero añadir un producto al carrito.',
                      'Como usuario, quiero elegir el método de pago.',
                      'Como usuario, quiero recibir un correo de confirmación.',
                    ];
                    const isMVP = epics && activityToEpic && mvpStories.includes(story);
                    return (
                      <div
                        key={sIdx}
                        className={`card focusable${isMVP ? ' bg-emerald-100 border-emerald-400 border-2' : ''}`}
                        tabIndex={0}
                        role="listitem"
                        aria-label={story}
                      >
                        <span className="text-sm md:text-base text-gray-800">{story}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="min-h-[40px]" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        ))}
        {/* Releases en móvil/tablet */}
        {showReleasesLeft && (
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
        )}
      </div>
    </section>
  );
}
