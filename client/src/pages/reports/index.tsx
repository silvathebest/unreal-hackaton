import React, {FC} from 'react'
import {ReactSVG} from 'react-svg'
import {PageHeader} from 'features'
import {getValueFromObject} from 'shared/lib'
import {Sidebar} from 'widgets'
import countIcon from './icon/count.svg'
import filtersIcon from './icon/filters.svg'
import ordersIcon from './icon/orders.svg'
import searchIcon from './icon/search.svg'
import statusIcon from './icon/status.svg'
import styles from './styles.module.scss'

const Reports = () => {
  return (
    <div className={styles.root}>
      <Sidebar />

      <div className={styles.workAreaWrapper}>
        <PageHeader>Отчёты</PageHeader>

        <div className={styles.workArea}>
          <div className={styles.filters}>
            <div className={styles.search}>
              <ReactSVG src={searchIcon} className={styles.icon} />
              <input type='text' className={styles.searchInput} placeholder='Поиск' />
            </div>

            <div className={styles.button}>
              <ReactSVG src={filtersIcon} className={styles.icon} /> Фильтры
            </div>

            <div className={styles.button}>
              <ReactSVG src={ordersIcon} className={styles.icon} />Сортировка
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <Card title='Test1' count={123} status={1} date='12.04.2022' />
            <Card title='Test2' count={123} status={2} date='11.04.2022' />
            <Card title='Test3' count={123} status={3} date='13.04.2022' />
            <Card title='Test4' count={123} status={1} date='14.04.2022' />
            <Card title='Test65' count={123} status={2} date='15.04.2022' />
            <Card title='Test7' count={123} status={3} date='12.04.2022' />
            <Card title='Test1' count={123} status={1} date='12.04.2022' />
            <Card title='Testqqwe' count={123} status={2} date='12.04.2022' />
            <Card title='Testasd' count={123} status={3} date='12.04.2022' />
            <Card title='Testqqq' count={123} status={1} date='12.04.2022' />
            <Card title='Test123' count={123} status={2} date='12.04.2022' />
            <Card title='Testee' count={123} status={3} date='12.04.2022' />
          </div>
        </div>
      </div>
    </div>
  )
}

type CardProps = {
  title: string
  count: number
  status: number
  date: string
}

type ReportStatusKey = 'ready' | 'print' | 'check'

export type ReportStatusType = {
  id: number
  title: string
}

const ReportStatus: Record<ReportStatusKey, ReportStatusType> = {
  check: {
    id: 1,
    title: 'Готов'
  },
  ready: {
    id: 2,
    title: 'Проверить'
  },
  print: {
    id: 3,
    title: 'Печать'
  }
}

const Card: FC<CardProps> = ({title, count, status, date}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrapper}>
        <div className={styles.count}>
          <ReactSVG src={countIcon} className={styles.icon} />
          {count} записей
        </div>
        <div className={styles.status}>
          <ReactSVG src={statusIcon} className={styles.icon} />
          <div className={styles[`status${status}`]}>{getValueFromObject(ReportStatus, status).title}</div>
        </div>
      </div>
      <div className={styles.date}>
        {date}
      </div>
    </div>
  )
}

export default Reports