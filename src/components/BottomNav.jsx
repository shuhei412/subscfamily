import { CreditCard, Users, Settings } from 'lucide-react'

export default function BottomNav({ currentTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'ダッシュ', icon: CreditCard },
    { id: 'family', label: 'ファミリー', icon: Users },
    { id: 'settings', label: '設定', icon: Settings }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-area-pb">
      <div className="max-w-md mx-auto px-6 pb-6">
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[32px] p-2.5 flex justify-between items-center border border-white/10 shadow-2xl">
          {tabs.map(tab => {
            const Icon = tab.icon
            const isActive = currentTab === tab.id
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-[24px] transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-300 active:scale-95'
                }`}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <span className="text-sm font-black">
                    {tab.label}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
