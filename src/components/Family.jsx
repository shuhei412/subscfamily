import { UserPlus, CreditCard, MoreVertical } from 'lucide-react'
import { FAMILY } from '../data'

export default function Family() {
  return (
    <div className="animate-in fade-in duration-500">
      <h3 className="text-xl font-bold text-slate-800 mb-6 tracking-tight">ファミリーメンバー</h3>
      
      {/* ファミリーメンバーリスト */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        {FAMILY.map((member, idx) => (
          <div
            key={member.id}
            className={`p-4 flex items-center justify-between ${
              idx !== FAMILY.length - 1 ? 'border-b border-slate-50' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-2xl shadow-inner">
                {member.avatar}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{member.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
            <button className="p-2 text-slate-300 hover:text-slate-400 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
        <button className="w-full p-4 text-indigo-600 font-bold text-sm bg-indigo-50/30 flex items-center justify-center gap-2 active:bg-indigo-50 transition-colors hover:bg-indigo-50">
          <UserPlus className="w-4 h-4" />
          家族を招待する
        </button>
      </div>

      {/* 支払い設定 */}
      <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
        <h4 className="font-bold text-orange-900 flex items-center gap-2 mb-2 text-sm">
          <CreditCard className="w-4 h-4" />
          支払い設定
        </h4>
        <p className="text-xs text-orange-800/70 mb-4 leading-relaxed font-medium">
          共有サブスクリプションはすべて管理者のメインカードで一括決済されます。
        </p>
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="bg-slate-800 px-2 py-1 rounded text-white text-[8px] font-black">
              VISA
            </div>
            <span className="text-sm font-bold text-slate-700 tracking-tight">•••• 8821</span>
          </div>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">変更</button>
        </div>
      </div>
    </div>
  )
}
