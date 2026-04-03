import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-purple-500/30">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/40 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/40 blur-[120px] mix-blend-screen" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
        {/* Glassmorphism card */}
        <div className="relative group rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 blur transition duration-500 group-hover:opacity-20" />

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-white/10 p-4 shadow-inner ring-1 ring-white/20">
              <Image
                className="dark:invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={24}
                priority
              />
            </div>

            <h1 className="mb-6 bg-gradient-to-br from-white to-white/50 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl text-balance">
              Simple Next.js Setup
            </h1>

            <p className="mb-10 max-w-lg text-lg text-zinc-400">
              This app is ready to go. We're ready to rumble. We've set up Next.js 15 with Tailwind CSS and a beautiful glassmorphism starting design.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Read Docs</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>

              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Deploy Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
