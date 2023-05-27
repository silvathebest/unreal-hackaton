import {Pie} from '@ant-design/charts'
import React, {FC} from 'react'
import styles from './styles.module.scss'

type DonutPieProps = {
  data: {type: string, value: number}[]
}

export const DonutPie: FC<DonutPieProps> = ({data}) => {
  const count = data.reduce((prev, curr) => prev + curr.value, 0)

  const config = {
    padding: 0,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    rotate: '180deg',
    innerRadius: 0.8,
    legend: false,
    startAngle: Math.PI/2,
    endAngle: Math.PI * 5/2,
    label: undefined,
    color: ['#5956FF', '#FFC062', '#FF7C7C'],
    statistic: {
      title: {
        customHtml: `<div class='${styles.count}'>${count}</div>`,
        offsetY: 6,
      },
      content: {
        customHtml: `<div class='${styles.title}'>Записей</div>`,
      },
    },
  }

  // @ts-ignore
  return <Pie {...config} />
}