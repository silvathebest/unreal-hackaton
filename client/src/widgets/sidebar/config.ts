import employeesIcon from './img/employees.svg'
import mailIcon from './img/mail.svg'
import notesIcon from './img/notes.svg'
import notificationsIcon from './img/notifications.svg'
import reportsIcon from './img/reports.svg'
import tasksIcon from './img/tasks.svg'

export type SidebarItem = {
  key: number
  label: string
  to: string
  icon: string
  notice?: number
}

type sidebarKey = 'reports' | 'tasks' | 'notifications' | 'notes' | 'mail' | 'employees'

export const sidebarItems: Record<sidebarKey, SidebarItem> = {
  reports: {
    key: 1,
    label: 'Отчеты',
    to: '/reports',
    icon: reportsIcon,
  },
  tasks: {
    key: 2,
    label: 'Задачи',
    to: '/tasks',
    icon: tasksIcon,
  },
  notifications: {
    key: 3,
    label: 'Уведомления',
    to: '/notifications',
    icon: notificationsIcon,
    notice: 1
  },
  notes: {
    key: 4,
    label: 'Заметки',
    to: '/notes',
    icon: notesIcon,
  },
  mail: {
    key: 5,
    label: 'Почта',
    to: '/mail',
    icon: mailIcon,
  },
  employees: {
    key: 6,
    label: 'Сотрудники',
    to: '/employees',
    icon: employeesIcon,
  },
}

export const sidebarList = () => Object.values(sidebarItems)
  .sort((a, b) => a.key - b.key)


export type RecentlyAddedItem = {
  key: number,
  name: string,
  to: string
  icon?: string
}
export const recentlyAddedItems = [
  {
    key: 7,
    name: 'Киреева А.Н.',
    to: '/home',
  },
  {
    key: 8,
    name: 'Лаптев Н.Г.',
    to: '/home',
  },
  {
    key: 9,
    name: 'Иванов С.Р.',
    to: '/home',
  },
  {
    key: 10,
    name: 'Приемное отделение',
    to: '/home',
  },
  {
    key: 11,
    name: 'Отчет за 2022',
    to: '/home',
  }
]