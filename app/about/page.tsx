export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <p className="section-label">About / Life</p>
      <h1 className="section-heading mt-3">Engineer, team builder, and service-driven problem solver.</h1>
      <p className="mt-6 text-lg text-zinc-300">
        I am Anya Krislav, an Electrical and Computer Engineering + Computer Science student at Duke University. I enjoy
        building systems that combine hardware reliability with software clarity, especially in robotics, telemetry, and
        human-centered assistive technology.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-zinc-100">How I lead</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>Captain and software/electrical lead in FIRST Robotics, managing technical and strategic execution.</li>
            <li>President of Bake-A-Wish Cakes Miami, leading logistics and fundraising to serve 625+ children each year.</li>
            <li>Builder mindset: convert ambiguity into systems, then systems into consistent outcomes.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="text-xl font-semibold text-zinc-100">Interests outside class</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>Duke SWE, Duke Club Basketball, and collaborative engineering communities.</li>
            <li>Soprano soloist at Temple Beth Am Choir.</li>
            <li>Learning-focused interests: ML, trading, health, robotics, and backpacking.</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 card">
        <h2 className="text-xl font-semibold text-zinc-100">Core profile</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Education</p>
            <p className="mt-1 text-zinc-200">Duke University · BSE ECE + BS CS · GPA 3.75</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Languages</p>
            <p className="mt-1 text-zinc-200">English, Spanish (native), Hebrew (working proficiency)</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Location</p>
            <p className="mt-1 text-zinc-200">Durham, NC · Miami, FL</p>
          </div>
        </div>
      </section>
    </div>
  );
}
