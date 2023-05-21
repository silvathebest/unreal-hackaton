import React from 'react'
import Icon from '../components/Icon'
import {RouteType} from '../routeTypeConfig'

const appRoutes: RouteType[] = [
  {
    index: true,
    // element: <HomePage />,
    state: 'home'
  },
  {
    path: '/tasks',
    // element: <TasksPage />,
    state: 'tasks',
    sidebarProps: {
      displayText: 'Задачи',
      icon: <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V14C16 15.1046 15.1046 16 14 16H6C4.89543 16 4 15.1046 4 14V6ZM13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.85355 10.1464C6.65829 9.95118 6.34171 9.95118 6.14645 10.1464C5.95118 10.3417 5.95118 10.6583 6.14645 10.8536L8.14645 12.8536C8.34171 13.0488 8.65829 13.0488 8.85355 12.8536L13.8536 7.85355Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/notifications',
    // element: <NotificationsPage />,
    state: 'notifications',
    sidebarProps: {
      displayText: 'Уведомления',
      icon: <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.99766 2C13.1466 2 15.7416 4.33488 15.9821 7.3554L15.9955 7.57762L16 7.80214L15.999 11.398L16.9244 13.6202C16.947 13.6743 16.9647 13.7302 16.9774 13.7871L16.9926 13.8733L17.0013 14.0046C17.0013 14.4526 16.7048 14.8387 16.2521 14.9677L16.1358 14.9945L16.0013 15.0046L12.4996 15.004L12.4946 15.1653C12.4095 16.469 11.3252 17.5 10 17.5C8.67453 17.5 7.58998 16.4685 7.50533 15.1644L7.49962 15.004L3.99891 15.0046C3.91096 15.0046 3.82358 14.993 3.73902 14.9702L3.61456 14.9277C3.20378 14.7567 2.96181 14.3392 3.01221 13.8757L3.0333 13.7483L3.07572 13.6202L3.99902 11.401L4.0001 7.79281L4.0044 7.56824C4.12702 4.45115 6.77104 2 9.99766 2ZM11.4996 15.004H8.49962L8.50697 15.1454C8.57552 15.8581 9.14275 16.425 9.85556 16.4931L10 16.5C10.7797 16.5 11.4205 15.9051 11.4931 15.1445L11.4996 15.004ZM9.99766 3C7.37511 3 5.22717 4.92372 5.01715 7.38498L5.00393 7.59723L5.00002 7.80214V11.5L4.96161 11.6922L3.9989 14.0046L15.9566 14.0066L16.0019 14.0045L15.0384 11.6922L15 11.5L15.0001 7.81241L14.996 7.60831C14.8909 5.0349 12.6947 3 9.99766 3Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/notes',
    //element: <ChangelogPage />,
    state: 'notes',
    sidebarProps: {
      displayText: 'Заметки',
      icon: <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 3C15.5977 3 16.9037 4.24892 16.9949 5.82373L17 6V10.3787C17 10.8502 16.8335 11.3045 16.5331 11.6631L16.4142 11.7929L11.7929 16.4142C11.4595 16.7476 11.0205 16.9511 10.5545 16.9923L10.3787 17H6C4.40232 17 3.09634 15.7511 3.00509 14.1763L3 14V6C3 4.40232 4.24892 3.09634 5.82373 3.00509L6 3H14ZM14 4H6C4.94564 4 4.08183 4.81588 4.00549 5.85074L4 6V14C4 15.0544 4.81588 15.9182 5.85074 15.9945L6 16H10V13C10 11.4023 11.2489 10.0963 12.8237 10.0051L13 10H16V6C16 4.94564 15.1841 4.08183 14.1493 4.00549L14 4ZM15.7825 11.0013L13 11C11.9456 11 11.0818 11.8159 11.0055 12.8507L11 13V15.781L11.0858 15.7071L15.7071 11.0858C15.7339 11.059 15.7591 11.0307 15.7825 11.0013Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/mail',
    //element: <ChangelogPage />,
    state: 'mail',
    sidebarProps: {
      displayText: 'Почта',
      icon: <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.5 4C16.8807 4 18 5.11929 18 6.5V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.5C2 5.11929 3.11929 4 4.5 4H15.5ZM17 7.961L10.2535 11.931C10.1231 12.0077 9.96661 12.0205 9.82751 11.9693L9.74649 11.931L3 7.963V14.5C3 15.3284 3.67157 16 4.5 16H15.5C16.3284 16 17 15.3284 17 14.5V7.961ZM15.5 5H4.5C3.67157 5 3 5.67157 3 6.5V6.802L10 10.9199L17 6.801V6.5C17 5.67157 16.3284 5 15.5 5Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/analytics',
    //element: <ChangelogPage />,
    state: 'analytics',
    sidebarProps: {
      displayText: 'Аналитика',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'><path d='M3.77344 9.5C3.77344 12.9216 6.41721 15.7257 9.77344 15.9811V16.9836C5.86442 16.7263 2.77344 13.4741 2.77344 9.5C2.77344 5.35786 6.1313 2 10.2734 2C14.2476 2 17.4998 5.09102 17.757 9.00007C17.0236 9.00595 16.3842 9.40661 16.041 10H11.2734C10.445 10 9.77344 9.32843 9.77344 8.5V3.01894C6.41721 3.27426 3.77344 6.07838 3.77344 9.5ZM16.7545 9C16.5117 5.8088 13.9646 3.2617 10.7734 3.01894V8.5C10.7734 8.77614 10.9973 9 11.2734 9H16.7545ZM16.7734 11C16.7734 10.4477 17.2211 10 17.7734 10C18.3257 10 18.7734 10.4477 18.7734 11V18C18.7734 18.5523 18.3257 19 17.7734 19C17.2211 19 16.7734 18.5523 16.7734 18V11ZM10.7734 15C10.7734 14.4477 11.2212 14 11.7734 14C12.3257 14 12.7734 14.4477 12.7734 15V18C12.7734 18.5523 12.3257 19 11.7734 19C11.2212 19 10.7734 18.5523 10.7734 18V15ZM13.7734 13C13.7734 12.4477 14.2212 12 14.7734 12C15.3257 12 15.7734 12.4477 15.7734 13V18C15.7734 18.5523 15.3257 19 14.7734 19C14.2212 19 13.7734 18.5523 13.7734 18V13Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/staff',
    //element: <ChangelogPage />,
    state: 'staff',
    sidebarProps: {
      displayText: 'Сотрудники',
      icon: <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.5 6.75C4.5 5.50736 5.50736 4.5 6.75 4.5C7.99264 4.5 9 5.50736 9 6.75C9 7.99264 7.99264 9 6.75 9C5.50736 9 4.5 7.99264 4.5 6.75ZM6.75 3.5C4.95507 3.5 3.5 4.95507 3.5 6.75C3.5 8.54493 4.95507 10 6.75 10C8.54493 10 10 8.54493 10 6.75C10 4.95507 8.54493 3.5 6.75 3.5ZM12.4368 15.1453C12.9748 15.3644 13.6518 15.5 14.4995 15.5C16.381 15.5 17.4213 14.8322 17.9689 14.0656C18.2335 13.6953 18.3653 13.3257 18.4313 13.0486C18.4644 12.9096 18.4814 12.7919 18.4901 12.706C18.4945 12.663 18.4969 12.6277 18.4981 12.6013C18.4987 12.5881 18.4991 12.5771 18.4993 12.5685L18.4995 12.5574L18.4995 12.5533L18.4995 12.5515L18.4995 12.55V12.5C18.4995 11.6716 17.828 11 16.9995 11H12.3711C12.6102 11.2895 12.7912 11.6288 12.8962 12H16.9995C17.2757 12 17.4995 12.2239 17.4995 12.5V12.5462L17.4993 12.5537C17.4988 12.5633 17.4977 12.5806 17.4953 12.6045C17.4904 12.6526 17.48 12.7263 17.4585 12.817C17.4151 12.9993 17.3281 13.2422 17.1552 13.4844C16.8277 13.9428 16.1181 14.5 14.4995 14.5C13.7679 14.5 13.222 14.3862 12.8132 14.219C12.7312 14.4984 12.6116 14.8153 12.4368 15.1453ZM1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13V13.0625L12 13.064L12 13.0658L12 13.0705L11.9997 13.0835C11.9995 13.0938 11.9991 13.1074 11.9983 13.1241C11.9968 13.1574 11.9939 13.2031 11.9883 13.2593C11.9772 13.3716 11.9555 13.5272 11.913 13.7118C11.8282 14.08 11.6586 14.5719 11.3176 15.0655C10.6166 16.0801 9.26315 17 6.75 17C4.23685 17 2.8834 16.0801 2.18238 15.0655C1.8414 14.5719 1.67175 14.08 1.58697 13.7118C1.54446 13.5272 1.52278 13.3716 1.5117 13.2593C1.50614 13.2031 1.50322 13.1574 1.50169 13.1241C1.50092 13.1074 1.5005 13.0938 1.50027 13.0835L1.50005 13.0705L1.50001 13.0658L1.5 13.064L1.5 13.0625V13ZM2.5 13.0602L2.50002 13.0612L2.50063 13.0781C2.50141 13.0951 2.50313 13.1233 2.50686 13.1611C2.51433 13.2368 2.52976 13.3497 2.56146 13.4874C2.62512 13.7638 2.75235 14.1312 3.00512 14.497C3.4916 15.2012 4.51315 16 6.75 16C8.98685 16 10.0084 15.2012 10.4949 14.497C10.7477 14.1312 10.8749 13.7638 10.9385 13.4874C10.9702 13.3497 10.9857 13.2368 10.9931 13.1611C10.9969 13.1233 10.9986 13.0951 10.9994 13.0781L11 13.0612L11 13.0602V13C11 12.4477 10.5523 12 10 12H3.5C2.94772 12 2.5 12.4477 2.5 13V13.0602ZM13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9C13.6716 9 13 8.32843 13 7.5ZM14.5 5C13.1193 5 12 6.11929 12 7.5C12 8.88071 13.1193 10 14.5 10C15.8807 10 17 8.88071 17 7.5C17 6.11929 15.8807 5 14.5 5Z' fill='black' fillOpacity='0.76' /></svg>
    }
  },
  {
    path: '/reports',
    // element: < />,
    state: 'reports',
    sidebarProps: {
      displayText: 'Отчеты',
      // icon: <img src='../img/note.svg' />
    },
    child: [
      {
        index: true,
        // element: < />,
        state: 'reports'
      },
      {
        path: '#',
        // element: < />,
        state: '',
        sidebarProps: {
          displayText: 'Киреева А.Н.'
        },
      },
      {
        path: '#',
        // element: < />,
        state: '',
        sidebarProps: {
          displayText: 'Лаптев Н.Г.'
        }
      },
      {
        path: '#',
        // element: < />,
        state: '',
        sidebarProps: {
          displayText: 'Иванов С.Р.'
        }
      },
      {
        path: '#',
        // element: < />,
        state: '',
        sidebarProps: {
          displayText: 'Приемное отделение'
        }
      },
      {
        path: '#',
        // element: < />,
        state: '',
        sidebarProps: {
          displayText: 'Отчет за 2022'
        }
      }
    ]
  },
]

export default appRoutes