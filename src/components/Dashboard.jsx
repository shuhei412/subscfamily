import { TrendingUp, ChevronRight, Plus, ShieldCheck, Monitor, Music, Cloud, Gamepad2 } from 'lucide-react'
import { SUBSCRIPTIONS, FAMILY } from '../data'

const iconMap = {
  monitor: Monitor,
  music: Music,
  cloud: Cloud,
  'gamepad-2': Gamepad2
}

export default function Dashboard({ onOpenModal, onAddNew }) {
  const total = SUBSCRIPTIONS.reduce((a, b) => a + b.price, 0)

  return (
    <div className="animate-in fade-in duration-500 pb-32">
      {/* 合計支出カード */}
      <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-violet-700 rounded-[28px] p-8 text-white shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-indigo-100 text-sm font-medium mb-2">今月の合計支出</p>
              <h2 className="text-5xl font-black tracking-tight">¥{total.toLocaleString()}</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-3 text-xs font-bold flex-wrap">
            <span className="bg-white/25 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              先月比 +¥480
            </span>
            <span className="bg-white/25 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              4 SERVICES
            </span>
          </div>
        </div>
      </div>

      {/* セクションヘッダー */}
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-black text-slate-900 tracking-tight">共有中のサービス</h3>
        <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:text-indigo-700 active:scale-95 transition-all">
          すべて見る <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* サブスクリプションリスト */}
      <div className="space-y-4 mb-8">
        {SUBSCRIPTIONS.map(sub => {
          const IconComponent = iconMap[sub.icon]
          return (
            <div
              key={sub.id}
              onClick={() => onOpenModal(sub)}
              className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-lg flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:border-slate-200"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`${sub.color} p-4 rounded-[18px] text-white shadow-xl`}>
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-slate-900 text-base tracking-tight">{sub.name}</h4>
                  <p className="text-xs font-medium text-slate-400 mt-1">次回: {sub.nextBilling}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-slate-900 text-base">¥{sub.price.toLocaleString()}</p>
                <div className="flex -space-x-2 mt-2 justify-end">
                  {sub.users.map(uid => (
                    <div
                      key={uid}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white flex items-center justify-center text-sm shadow-md"
                    >
                      {FAMILY.find(f => f.id === uid)?.avatar}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* アクションボタン */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onAddNew}
          className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-[24px] flex flex-col items-center gap-3 active:scale-95 transition-all shadow-xl hover:shadow-2xl text-white"
        >
          <div className="bg-white/20 text-white p-3 rounded-[16px] backdrop-blur-sm border border-white/30">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-sm font-black">新規追加</span>
        </button>
        <button className="bg-slate-800 p-5 rounded-[24px] flex flex-col items-center gap-3 active:scale-95 transition-all shadow-xl hover:shadow-2xl text-white">
          <div className="bg-white/20 text-white p-3 rounded-[16px] backdrop-blur-sm border border-white/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-sm font-black">制限設定</span>
        </button>
      </div>
    </div>
  )
}
