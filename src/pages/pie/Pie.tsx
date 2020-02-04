import * as React from 'react'
import { SFC } from 'react'
import ReactEcharts from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export interface IProps {
  virusDesc?: {
    confirmedCount: number
    deadCount: number
    curedCount: number
  }
}
const getOption = (dataList: []) => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      data: ['在诊人数', '死亡人数', '治愈人数']
    },
    color: ['#e57471', '#919399', '#7ebe50'],
    series: [
      {
        name: '占比率',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: dataList,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option
}
const Pie: SFC<IProps> = ({ virusDesc }) => {
  // console.log(virusDesc);
  const dataList = [] as any
  const confirm = {
    name: '在诊人数',
    value: virusDesc.confirmedCount - virusDesc.deadCount - virusDesc.curedCount
  }
  const dead = {
    name: '死亡人数',
    value: virusDesc.deadCount
  }
  const cure = {
    name: '治愈人数',
    value: virusDesc.curedCount
  }
  dataList.push(confirm)
  dataList.push(dead)
  dataList.push(cure)
  return (
    <ReactEcharts
      // className={styles.mapbox}
      echarts={echarts}
      option={getOption(dataList)}
      notMerge={true}
      lazyUpdate={true}
    />
  )
}
export default Pie
