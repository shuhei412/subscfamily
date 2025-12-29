import { Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-md px-6 py-6 flex justify-between items-center border-b border-slate-100">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none">
          SubscFamily
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
          Management Hub
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <Bell className="w-6 h-6 text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full border-2 border-slate-50">
            2
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-sm">
          👨‍💻
        </div>
      </div>
    </header>
  )
}
