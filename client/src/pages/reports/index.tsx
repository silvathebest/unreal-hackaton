import React from 'react'
import {ReactSVG} from 'react-svg'
import {PageHeader} from 'features'
import {Sidebar} from 'widgets'
import filtersIcon from './icon/filters.svg'
import ordersIcon from './icon/orders.svg'
import searchIcon from './icon/search.svg'
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

          <div>
            Карточки
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports