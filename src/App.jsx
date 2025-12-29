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

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full min-h-screen relative flex flex-col pb-32">
        <Header />
        
        <main id="app-content" className="flex-1 px-6 space-y-8 py-8">
          {currentTab === 'home' && <Dashboard onOpenModal={openModal} />}
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
