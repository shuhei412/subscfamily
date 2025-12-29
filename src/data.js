export const SUBSCRIPTIONS = [
  { 
    id: 1, 
    name: 'StreamPlus TV', 
    price: 1980, 
    color: 'bg-red-500', 
    icon: 'monitor', 
    users: [1, 2, 3], 
    nextBilling: '2026/01/15' 
  },
  { 
    id: 2, 
    name: 'Melody Hi-Fi', 
    price: 1480, 
    color: 'bg-green-500', 
    icon: 'music', 
    users: [1, 2], 
    nextBilling: '2026/01/12' 
  },
  { 
    id: 3, 
    name: 'CloudSafe 2TB', 
    price: 1300, 
    color: 'bg-blue-500', 
    icon: 'cloud', 
    users: [1, 2, 3, 4], 
    nextBilling: '2026/01/20' 
  },
  { 
    id: 4, 
    name: 'GameZone Pro', 
    price: 1100, 
    color: 'bg-purple-500', 
    icon: 'gamepad-2', 
    users: [1, 3], 
    nextBilling: '2026/01/05' 
  }
]

export const FAMILY = [
  { id: 1, name: '自分 (管理者)', role: 'Admin', avatar: '👨‍💻' },
  { id: 2, name: 'パートナー', role: 'Adult', avatar: '👩‍💼' },
  { id: 3, name: '長男', role: 'Teen', avatar: '👦' },
  { id: 4, name: '長女', role: 'Child', avatar: '👧' }
]
