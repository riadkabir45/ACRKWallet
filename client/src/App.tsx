import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100 flex flex-col justify-between">
      {/* Top navigation */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800/60">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_12px_2px_rgba(16,185,129,0.6)]" aria-hidden />
            <a href="#" className="font-semibold tracking-tight">ACRK Expense</a>
          </div>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-3.5 py-2 text-sm font-medium shadow-sm transition-colors">
                  <span>Sign in</span>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{ elements: { userButtonAvatarBox: 'ring-2 ring-emerald-500/60' } }} />
            </SignedIn>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {/* Signed out hero */}
        <SignedOut>
          <section className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Track expenses with clarity.
              </h1>
              <p className="mt-4 text-zinc-400 max-w-prose">
                A clean, mobile-first expense tracker inspired by modern wallet UIs. Lightweight, fast, and private.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-4 py-2.5 text-sm font-medium shadow-sm transition-colors">
                    Get started
                  </button>
                </SignInButton>
                <a
                  href="#learn-more"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200"
                >
                  Learn more →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-400/20 via-emerald-500/10 to-transparent blur-2xl" aria-hidden />
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-sm p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureCard label="Quick add" icon="⚡" />
                  <FeatureCard label="Simple UI" icon="🎯" />
                  <FeatureCard label="Private" icon="🕵️" />
                  <FeatureCard label="No bloat" icon="🪶" />
                  <FeatureCard label="Dark mode" icon="🌙" />
                  <FeatureCard label="Mobile-first" icon="📱" />
                </div>
                <p className="mt-5 text-xs text-zinc-500">
                  Lightweight by design: no images, no external fonts.
                </p>
              </div>
            </div>
          </section>
        </SignedOut>

        {/* Signed in dashboard */}
        <SignedIn>
          <Dashboard />
        </SignedIn>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} ACRK Wallet</span>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Privacy</a>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/60 p-4 flex items-center gap-3">
      <span className="text-lg" aria-hidden>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export default App