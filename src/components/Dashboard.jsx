import { TrendingUp, ChevronRight, Plus, ShieldCheck, Monitor, Music, Cloud, Gamepad2 } from 'lucide-react'
import { SUBSCRIPTIONS, FAMILY } from '../data'

const iconMap = {
  monitor: Monitor,
  music: Music,
  cloud: Cloud,
  'gamepad-2': Gamepad2
}

export default function Dashboard({ onOpenModal }) {
  const total = SUBSCRIPTIONS.reduce((a, b) => a + b.price, 0)

  return (
    <div className="animate-in fade-in duration-500">
      {/* 合計支出カード */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-indigo-100 text-sm font-medium">今月の合計支出</p>
            <h2 className="text-4xl font-bold mt-1">¥{total.toLocaleString()}</h2>
          </div>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="flex gap-2 text-[10px] font-bold flex-wrap">
          <span className="bg-white/20 px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
            先月比 +¥480
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
            4 Services
          </span>
        </div>
      </div>

      {/* セクションヘッダー */}
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">共有中のサービス</h3>
        <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:text-indigo-700">
          すべて見る <ChevronRight className="w-4 h-4" />
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
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between active:scale-[0.97] transition-all cursor-pointer hover:shadow-md"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`${sub.color} p-3 rounded-xl text-white shadow-lg`}>
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm">{sub.name}</h4>
                  <p className="text-[10px] font-medium text-slate-400">次回: {sub.nextBilling}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-800 text-sm">¥{sub.price.toLocaleString()}</p>
                <div className="flex -space-x-1.5 mt-1 justify-end">
                  {sub.users.map(uid => (
                    <div
                      key={uid}
                      className="w-5 h-5 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[10px]"
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
        <button className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex flex-col items-center gap-2 active:bg-indigo-100 transition-colors hover:bg-indigo-100">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-indigo-900">新規追加</span>
        </button>
        <button className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2 active:bg-slate-100 transition-colors hover:bg-slate-100">
          <div className="bg-slate-800 text-white p-2 rounded-lg">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-slate-800">制限設定</span>
        </button>
      </div>
    </div>
  )
}
