import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Family from './components/Family'
import Settings from './components/Settings'
import BottomNav from './components/BottomNav'
import Modal from './components/Modal'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [selectedSubscription, setSelectedSubscription] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (subscription) => {
    setSelectedSubscription(subscription)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSubscription(null)
  }

  const handleAddNew = () => {
    alert('新規サブスクリプション追加機能は準備中です。\n\nこの機能では以下が可能になります：\n• サービス名の入力\n• 月額料金の設定\n• 利用者の選択\n• 請求日の設定')
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full min-h-screen relative flex flex-col">
        <Header />
        
        <main id="app-content" className="flex-1 px-6 space-y-8 py-8">
          {currentTab === 'home' && <Dashboard onOpenModal={openModal} onAddNew={handleAddNew} />}
          {currentTab === 'family' && <Family />}
          {currentTab === 'settings' && <Settings />}
        </main>

        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>

      {isModalOpen && (
        <Modal 
          subscription={selectedSubscription} 
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default App
