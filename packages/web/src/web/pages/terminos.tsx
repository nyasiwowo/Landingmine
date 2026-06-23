import { Logo } from "@/components/logo";
import { useTheme } from "@/hooks/use-theme";

export default function Terminos() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* Header */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[var(--line)] bg-surface/80 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <a href="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Logo theme={theme} />
            <span>NC<span className="text-[var(--primary-strong)]"> WEBS</span></span>
          </a>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-5 prose prose-invert">
          <h1 className="text-4xl font-extrabold mb-8">Términos y Condiciones de Servicio</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Identificación del Proveedor</h2>
            <p>
              El presente documento establece las condiciones del servicio ofrecido por Nicolás Gustavo Cheuquepal Chávez, RUT 20.192.56-3, con correo electrónico de contacto <a href="mailto:nicolas.ncwebs@gmail.com" className="text-[var(--primary-strong)] hover:underline">nicolas.ncwebs@gmail.com</a> y número de teléfono +56920734676, en adelante "el Proveedor".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Descripción del Servicio</h2>
            <p>
              El Proveedor ofrece servicios de diseño y desarrollo web, incluyendo, pero no limitándose a, la creación de Landing Pages, configuración de ecosistemas digitales y mantención técnica. El alcance exacto del servicio, las funcionalidades incluidas y excluidas estarán detalladas en la cotización o plan ("Pack Emprendedor", "Vitrina Digital", etc.) aceptado por el Cliente previo al inicio del proyecto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Plazos de Entrega y Metodología</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>El desarrollo comenzará una vez recibido el anticipo acordado y la información base requerida por parte del Cliente (textos, imágenes, logos).</li>
              <li>El Cliente tendrá derecho a revisar un boceto visual previo a la programación final para su aprobación.</li>
              <li>Los plazos de entrega estimados correrán a partir de la aprobación final del boceto visual por parte del Cliente. Retrasos en la entrega de información por parte del Cliente pausarán los plazos de entrega.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Condiciones de Pago, Precios y Reembolsos</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Los pagos por servicios de habilitación inicial se dividirán en un anticipo del 50% al iniciar y el 50% restante contra entrega y conformidad del proyecto.</li>
              <li>Los servicios de mantención técnica mensual o anual se cobrarán por adelantado.</li>
            </ul>
            <p className="mb-4">
              <strong>Reembolsos:</strong> Dado que el servicio incluye una fase de aprobación visual antes de la programación, no se realizarán reembolsos del anticipo una vez que el Cliente haya aprobado el diseño y se haya iniciado la fase de desarrollo técnico, a menos que el Proveedor incumpla directamente con la entrega del servicio acordado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Obligaciones y Responsabilidades</h2>
            <h3 className="text-xl font-semibold mb-3">Del Proveedor:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Entregar un sitio web o aplicación web funcional y acorde a las especificaciones aprobadas.</li>
              <li>Proveer el soporte y mantención técnica en caso de que el Cliente haya contratado dicho plan.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Del Cliente:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Entregar la información necesaria a tiempo y garantizar que poseen los derechos de autor de las imágenes, textos y marcas proporcionadas al Proveedor para el diseño.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Garantía Técnica y Soporte</h2>
            <p>
              El Proveedor garantiza el correcto funcionamiento del código entregado. Si el Cliente cuenta con un plan de mantención técnica activo, el Proveedor se hará cargo de solucionar errores de servidor o caídas. Si el Cliente opta por administrar su propio servidor y realizar modificaciones directas al código tras la entrega, el Proveedor no se hará responsable por las fallas generadas por terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Propiedad Intelectual</h2>
            <p>
              El código fuente personalizado, el diseño estructural y los archivos generados son propiedad de Nicolás Cheuquepal hasta que el proyecto sea pagado en su totalidad. Una vez liquidado el pago, el Cliente tendrá la licencia de uso completo sobre su sitio web. Las plantillas base y librerías de terceros mantienen sus propias licencias de uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Enlaces a Políticas Adicionales</h2>
            <p>
              El tratamiento de los datos personales ingresados en nuestro sitio se rige por nuestra <a href="/privacidad" className="text-[var(--primary-strong)] hover:underline">Política de Privacidad</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Ley Aplicable y Solución de Controversias</h2>
            <p>
              Los presentes Términos y Condiciones se rigen por las leyes de la República de Chile, en particular por la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de la ciudad de Puerto Montt.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[var(--line)] text-sm text-muted">
            <p><strong>Nicolás Cheuquepal</strong></p>
            <p>Puerto Montt, Chile</p>
          </div>
        </div>
      </main>
    </div>
  );
}
