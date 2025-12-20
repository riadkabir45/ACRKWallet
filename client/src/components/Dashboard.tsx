import React from 'react'

type Tx = {
  id: string
  title: string
  note?: string
  amount: number // negative = expense, positive = income
  category: string
  date: string // ISO or friendly
}

const sampleTx: Tx[] = [
  { id: '1', title: 'Groceries', amount: -42.75, category: 'Food', date: 'Today' },
  { id: '2', title: 'Coffee', amount: -3.5, category: 'Food', date: 'Today' },
  { id: '3', title: 'Salary', amount: 1200, category: 'Income', date: 'Yesterday' },
  { id: '4', title: 'Gas', amount: -28.2, category: 'Transport', date: 'Dec 15' },
]

export default function Dashboard() {
  const balance = 327.45
  const monthSpent = 412.12

  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Balance Card */}
      <section className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-md">
        <div className="absolute -inset-20 opacity-30 blur-3xl bg-[radial-gradient(40%_40%_at_30%_30%,white,transparent)]" aria-hidden />
        <div className="relative">
          <p className="text-sm/5 opacity-90">Current balance</p>
          <h2 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">${balance.toFixed(2)}</h2>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <QuickAction icon="➕" label="Add Income" />
            <QuickAction icon="➖" label="Add Expense" primary />
            <QuickAction icon="📷" label="Scan Receipt" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-6 grid grid-cols-2 gap-4">
        <StatCard label="Spent this month" value={`$${monthSpent.toFixed(2)}`} tint="emerald" />
        <StatCard label="Transactions" value={`${sampleTx.length}`} tint="teal" />
      </section>

      {/* Transactions */}
      <section className="mt-6">
        <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2">Recent activity</h3>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 divide-y divide-zinc-800">
          {sampleTx.map((tx) => (
            <TxRow key={tx.id} tx={tx} />
          ))}
        </div>
      </section>

      {/* Bottom nav (mobile) */}
      <nav className="md:hidden fixed bottom-4 left-0 right-0 z-20">
        <div className="mx-auto max-w-sm px-4">
          <div className="rounded-2xl bg-zinc-900/90 backdrop-blur border border-zinc-800 shadow-sm px-4 py-2 flex items-center justify-between">
            <NavItem label="Home" icon="🏠" active />
            <NavItem label="Stats" icon="📈" />
            <NavItem label="Add" icon="➕" primary />
            <NavItem label="Wallet" icon="👛" />
            <NavItem label="More" icon="⋯" />
          </div>
        </div>
      </nav>
    </div>
  )
}

function QuickAction({ icon, label, primary }: { icon: string; label: string; primary?: boolean }) {
  return (
    <button
      className={[
        'inline-flex items-center gap-2 rounded-xl text-sm font-medium px-3.5 py-2.5 transition-colors',
        primary
          ? 'bg-white/95 text-emerald-700 hover:bg-white shadow'
          : 'bg-white/15 hover:bg-white/25',
      ].join(' ')}
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function StatCard({ label, value, tint }: { label: string; value: string; tint: 'emerald' | 'teal' }) {
  const ring = tint === 'emerald' ? 'ring-emerald-900/60' : 'ring-teal-900/60'
  const dot = tint === 'emerald' ? 'bg-emerald-500' : 'bg-teal-400'
  return (
    <div className={`rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 ring-1 ${ring}`}>
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <span className={`size-1.5 rounded-full ${dot}`} aria-hidden />
        <span>{label}</span>
      </div>
      <p className="mt-1 text-xl font-semibold">{value}</p>
    </div>
  )
}

function TxRow({ tx }: { tx: Tx }) {
  const negative = tx.amount < 0
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-zinc-900 grid place-items-center border border-zinc-800">
          <span aria-hidden>{iconFor(tx.category)}</span>
        </div>
        <div>
          <p className="text-sm font-medium">{tx.title}</p>
          <p className="text-xs text-zinc-500">{tx.date} • {tx.category}</p>
        </div>
      </div>
      <div className={`text-sm font-semibold ${negative ? 'text-red-500' : 'text-emerald-600'}`}>
        {negative ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
      </div>
    </div>
  )
}

function NavItem({ label, icon, primary, active }: { label: string; icon: string; primary?: boolean; active?: boolean }) {
  return (
    <button
      className={[
        'px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5',
        primary
          ? 'bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow'
          : active
            ? 'text-emerald-300'
            : 'text-zinc-400',
      ].join(' ')}
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function iconFor(category: string) {
  switch (category) {
    case 'Food':
      return '🍽️'
    case 'Transport':
      return '🚗'
    case 'Income':
      return '💸'
    default:
      return '🧾'
  }
}
