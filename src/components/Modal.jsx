import { X, Monitor, Music, Cloud, Gamepad2 } from 'lucide-react'
import { FAMILY } from '../data'

const iconMap = {
  monitor: Monitor,
  music: Music,
  cloud: Cloud,
  'gamepad-2': Gamepad2
}

export default function Modal({ subscription, onClose }) {
  if (!subscription) return null

  const IconComponent = iconMap[subscription.icon]

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-t-[32px] p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* ドラッグハンドル */}
        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>

        {/* クローズボタン */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ヘッダー */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`${subscription.color} p-4 rounded-2xl text-white shadow-lg`}>
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              {subscription.name}
            </h2>
            <p className="text-slate-400 font-bold text-sm">
              月額 ¥{subscription.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="space-y-6">
          {/* 利用者 */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              このプランの利用者
            </h4>
            <div className="flex flex-wrap gap-2">
              {FAMILY.map(member => (
                <button
                  key={member.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    subscription.users.includes(member.id)
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'bg-slate-50 border-slate-100 text-slate-300 opacity-60'
                  }`}
                >
                  <span className="text-lg">{member.avatar}</span>
                  <span className="text-[10px] font-bold">
                    {member.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 詳細情報 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400 uppercase tracking-widest">次回請求日</span>
              <span className="text-slate-800">{subscription.nextBilling}</span>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400 uppercase tracking-widest">支払い方法</span>
              <span className="text-slate-800 underline cursor-pointer hover:text-slate-600">
                VISA •••• 8821
              </span>
            </div>
          </div>

          {/* アクションボタン */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="py-4 rounded-2xl border border-red-100 text-red-500 font-bold text-xs active:bg-red-50 transition-colors hover:bg-red-50">
              共有を停止
            </button>
            <button className="py-4 rounded-2xl bg-slate-900 text-white font-bold text-xs active:scale-95 transition-all hover:bg-slate-800">
              プラン変更
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
