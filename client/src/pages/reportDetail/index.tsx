import {Column, ColumnConfig, Progress} from '@ant-design/charts'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import {
  ConformityChart,
  GetConformityChartDetail, useGetCardiologyChartDetail,
  useGetConformityChartDetail,
  useGetNeurologyChartDetail, useGetOtolaringologyChartDetail
} from 'entities/сhartData'
import {DonutPie} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'
import {ReportDetailTable} from './ui/reportDetailTable'

const ReportDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const {refetch} = GetConformityChartDetail(Number(id), dispatch)

  const conformityChartData = useGetConformityChartDetail()
  const neurologyChartData = useGetNeurologyChartDetail()
  const cardiologyChartData = useGetCardiologyChartDetail()
  const otolaringologyChartData = useGetOtolaringologyChartDetail()

  useEffect(() => {
    refetch()
  }, [id])

  const renderTopCard = (conformityChartData:ConformityChart, heading:string) => {
    const pieData = [
      {
        type: 'Соответствует',
        value: conformityChartData.correspondingCount,
      },
      {
        type: 'Доп. назначения',
        value: conformityChartData.additionalAppointmentsCount,
      },
      {
        type: 'Частично',
        value: conformityChartData.partiallyCount,
      },
    ]
    return (
      <div className={styles.topInfoBlock}>
        <div className={styles.cardTitle}>{heading}</div>

        <div className={styles.pie}>
          <DonutPie data={pieData} />
          <ul className={styles.sideInfo}>
            <li className={styles.infoItem}>
              <span className={styles.value}>{conformityChartData.contactingPercentage}%</span>
              <span className={styles.signature}>От обращений</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.value}>{conformityChartData.patientCount}</span>
              <span className={styles.signature}>Пациентов</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.value}>{conformityChartData.specialistCount}</span>
              <span className={styles.signature}>Специалистов</span>
            </li>
          </ul>
        </div>

        <div className={styles.bottomData}>

          <div className={styles.row}>
            <div className={styles.title}>Соответствует</div>
            <DemoProgress color='#5B8FF9' percent={conformityChartData.correspondingPercent / 100} />
            <div className={styles.value}>{conformityChartData.correspondingCount}</div>
            <div className={styles.percentageBlue}>{conformityChartData.correspondingPercent}%</div>
          </div>


          <div className={styles.row}>
            <div className={styles.title}>Доп. назначения</div>
            <DemoProgress color='#FFC062' percent={conformityChartData.additionalAppointmentsPercent / 100} />
            <div className={styles.value}>{conformityChartData.additionalAppointmentsCount}</div>
            <div className={styles.percentageYellow}>{conformityChartData.additionalAppointmentsPercent}%</div>
          </div>

          <div className={styles.row}>
            <div className={styles.title}>Частично</div>
            <DemoProgress color='#FF9191' percent={conformityChartData.partiallyPercent / 100} />
            <div className={styles.value}>{conformityChartData.partiallyCount}</div>
            <div className={styles.percentageRed}>{conformityChartData.partiallyPercent}%</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <Sidebar />

      <div className={styles.workArea}>
        <div className={styles.pieBlock}>
          {renderTopCard(conformityChartData, 'Соответствие стандарту')}
          {renderTopCard(neurologyChartData, 'Неврология')}
          {renderTopCard(cardiologyChartData, 'Кардиология')}
          {renderTopCard(otolaringologyChartData, 'Оториноларингология')}

          <div className={styles.bottomInfoBlock}>
            <div className={styles.cardTitle}>Пациенты</div>
            <div className={styles.test}>
              <DemoColumn />
            </div>
          </div>
        </div>
        <ReportDetailTable />
      </div>
    </div>
  )
}

interface DemoProgressProps {
  color: string;
  percent: number;
}

const DemoProgress:React.FC<DemoProgressProps> = ({color, percent}) => {
  const config = {
    autoFit: false,
    height: 16,
    width: 120,
    percent: percent,
    appendPadding: 0,
    color: [color, '#E8EDF3'],
  }

  return <Progress {...config} />
}

const DemoColumn = () => {

  const data = [
    {
      department: 'Неврология',
      patientsCount: 10,
      age: 'до 18',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: 'до 18',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: 'до 18',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: 'до 18',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: 'до 18',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: 'до 18',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '20-25',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '20-25',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '20-25',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '20-25',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '20-25',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '20-25',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '25-30',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '25-30',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '25-30',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '25-30',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '25-30',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '25-30',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '30-35',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '30-35',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '30-35',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '30-35',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '30-35',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '30-35',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '35-40',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '35-40',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '35-40',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '35-40',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '35-40',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '35-40',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '40-45',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '40-45',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '40-45',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '40-45',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '40-45',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '40-45',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '45-50',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '45-50',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '45-50',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '45-50',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '45-50',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '45-50',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '50-55',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '50-55',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '50-55',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '50-55',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '50-55',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '50-55',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '55-60',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '55-60',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '55-60',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '55-60',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '55-60',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '55-60',
      gender: 'Мужчины',
    },

    {
      department: 'Неврология',
      patientsCount: 10,
      age: '60+',
      gender: 'Женщины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '60+',
      gender: 'Женщины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 20,
      age: '60+',
      gender: 'Женщины',
    },
    {
      department: 'Неврология',
      patientsCount: 30,
      age: '60+',
      gender: 'Мужчины',
    },
    {
      department: 'Кардиология',
      patientsCount: 15,
      age: '60+',
      gender: 'Мужчины',
    },
    {
      department: 'Оториноларингология',
      patientsCount: 10,
      age: '60+',
      gender: 'Мужчины',
    },


  ]

  const config = {
    data,
    width: 737,
    xField: 'age',
    yField: 'patientsCount',
    isGroup: true,
    isStack: true,
    seriesField: 'department',
    groupField: 'gender',
    legend: false,
  } as ColumnConfig

  return <Column {...config} />
}

export default ReportDetail