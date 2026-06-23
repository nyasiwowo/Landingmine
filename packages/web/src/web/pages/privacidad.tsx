import { Logo } from "@/components/logo";
import { useTheme } from "@/hooks/use-theme";

export default function Privacidad() {
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
          <h1 className="text-4xl font-extrabold mb-8">Política de Privacidad</h1>

          <p className="text-sm text-muted mb-6">Última actualización: Junio de 2026</p>

          <p className="mb-8">
            En NCWEBS valoramos tu privacidad y la transparencia. Esta política explica de forma clara y directa cómo tratamos la información que ingresas en nuestro formulario de contacto, de acuerdo con la legislación chilena vigente (Ley N° 19.628).
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Datos que recolectamos</h2>
            <p className="mb-4">
              A través del formulario de contacto de este sitio web, únicamente solicitamos los siguientes datos de manera voluntaria por tu parte:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Nombre completo / Nombre de tu negocio.</li>
              <li>Correo electrónico.</li>
              <li>Número de teléfono / WhatsApp.</li>
              <li>Mensaje o detalles sobre tu requerimiento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Uso exclusivo de la información</h2>
            <p className="mb-4">Utilizamos tus datos única y estrictamente para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Responder a tu solicitud de información, dudas o cotizaciones.</li>
              <li>Coordinar y realizar el seguimiento técnico y comercial del proyecto web en caso de contratar nuestros servicios.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Lo que NO hacemos:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>No te enviaremos publicidad, promociones ni boletines masivos de correo (spam).</li>
              <li>No venderemos, alquilaremos ni compartiremos tus datos con terceras empresas bajo ninguna circunstancia.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Almacenamiento y Seguridad</h2>
            <p>
              Tus datos son tratados de forma confidencial y se almacenan en servidores seguros con protocolos de encriptación (SSL). El acceso a esta información está restringido únicamente a las personas encargadas de la gestión técnica y comercial de tu proyecto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Tus Derechos (ARCO)</h2>
            <p className="mb-4">
              La ley chilena te otorga el derecho a conocer qué información tenemos de ti, solicitar su actualización, rectificación o eliminación definitiva de nuestros registros en cualquier momento.
            </p>
            <p>
              Para ejercer estos derechos, solo debes enviarnos un correo electrónico a <a href="mailto:nicolas.ncwebs@gmail.com" className="text-[var(--primary-strong)] hover:underline">nicolas.ncwebs@gmail.com</a> con el asunto "Derechos de Privacidad" y procesaremos tu solicitud a la brevedad.
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
