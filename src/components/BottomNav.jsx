import { CreditCard, Users, Settings } from 'lucide-react'

export default function BottomNav({ currentTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'ダッシュ', icon: CreditCard },
    { id: 'family', label: 'ファミリー', icon: Users },
    { id: 'settings', label: '設定', icon: Settings }
  ]

  return (
    <nav className="fixed bottom-6 left-6 right-6 max-w-md mx-auto z-40">
      <div className="bg-slate-900/90 backdrop-blur-xl rounded-[32px] p-2 flex justify-between items-center border border-white/10 shadow-2xl">
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = currentTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-btn flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className={`text-sm font-bold ${!isActive ? 'hidden' : ''}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
