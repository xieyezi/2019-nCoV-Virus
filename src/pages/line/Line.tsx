import * as React from 'react'
import { SFC } from 'react'
import ReactEcharts from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'

export interface IProps {
  dateList: []
  firstList: []
  secondList: []
  legendData: string[]
  firstColor: string
  secondColor: string
}
const getOption = (
  dateList: [],
  firstList: [],
  secondList: [],
  legendData: string[],
  firstColor: string,
  secondColor: string
) => {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      data: legendData
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: dateList
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: legendData[0],
        type: 'line',
        stack: '总量',
        itemStyle: {
          normal: {
            color: firstColor,
            lineStyle: {
              color: firstColor
            }
          }
        },
        data: firstList
      },
      {
        name: legendData[1],
        type: 'line',
        stack: '总量',
        itemStyle: {
          normal: {
            color: secondColor,
            lineStyle: {
              color: secondColor
            }
          }
        },
        data: secondList
      }
    ]
  }
  return option
}
const Line: SFC<IProps> = ({ dateList, firstList, secondList, legendData, firstColor, secondColor }) => {
  // console.log(trendList);
  return (
    <ReactEcharts
      // className={styles.mapbox}
      echarts={echarts}
      option={getOption(dateList, firstList, secondList, legendData, firstColor, secondColor)}
      notMerge={true}
      lazyUpdate={true}
    />
  )
}
export default Line
