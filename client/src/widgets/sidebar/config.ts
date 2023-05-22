import reportsIcon from './img/reports.svg'
import tasksIcon from './img/tasks.svg'

export type SidebarItem = {
  key: number
  label: string
  to: string
  icon: string
  notice?: number
}

type sidebarKey = 'reports' | 'tasks' | 'bonuses' | 'icebreakers' | 'translators' | 'employees'

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
  bonuses: {
    key: 3,
    label: 'Уведомления',
    to: '/bonuses',
    icon: reportsIcon,
    notice: 1
  },
  icebreakers: {
    key: 4,
    label: 'Заметки',
    to: '/icebreakers',
    icon: tasksIcon,
  },
  translators: {
    key: 5,
    label: 'Почта',
    to: '/translators',
    icon: reportsIcon,
  },
  employees: {
    key: 6,
    label: 'Сотрудники',
    to: '/translators',
    icon: tasksIcon,
  },
}

export const sidebarList = () => Object.values(sidebarItems)
  .sort((a, b) => a.key - b.key)