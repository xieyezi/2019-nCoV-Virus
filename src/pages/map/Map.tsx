import * as React from 'react'
import { Component } from 'react'
import ReactEcharts from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
import provinceMap from '../../map/province-map'
import { getChinaJson, getProvinceJson } from '../../services/getData'
import styles from './style.module.css'
export interface MapProps {
  provinceName?: string
  mapList: []
  // onClick: (val) => void
}

export interface MapState {
  province: string
  mapList: []
}

class Map extends Component<MapProps, MapState> {
  echarts_react: any = undefined
  constructor(props: MapProps) {
    super(props)
    this.echarts_react = React.createRef()
    this.state = {
      province: '',
      mapList: []
    }
  }
  async componentDidMount() {
    const { provinceName, mapList } = this.props
    const province = provinceName ? provinceMap[provinceName] : ''
    const chinaMapJson = await getChinaJson()
    echarts.registerMap('china', chinaMapJson.data)
    this.setState({
      province: province,
      mapList: mapList
    })
  }
  async UNSAFE_componentWillReceiveProps(newProps) {
    const { provinceName, mapList } = newProps
    const province = provinceName ? provinceMap[provinceName] : ''
    // console.log(province)
    // console.log(mapList)
    if (province === '') {
      const chinaMapJson = await getChinaJson()
      echarts.registerMap('china', chinaMapJson.data)
    } else {
      // 修复陕西和山西 key 重名问题
      const provinceMapJson = await getProvinceJson(province)
      echarts.registerMap(province, provinceMapJson.data)
    }
    this.setState({
      province: province,
      mapList: mapList
    })
  }
  componentWillUnmount() {
    console.log('卸载....')
  }
  getOption = () => {
    const { province, mapList } = this.state
    const option = {
      tooltip: {
        show: true,
        formatter: function(params) {
          let tip = ''
          if (params.data) {
            tip =
              params.name +
              '：<br>确诊：' +
              params.data['value'] +
              '例<br>死亡：' +
              params.data['deadCount'] +
              '例<br>治愈：' +
              params.data['curedCount'] +
              '例'
          }
          return tip
        }
      },
      visualMap: {
        show: true,
        type: 'piecewise',
        min: 0,
        max: 2000,
        align: 'right',
        top: '2%',
        right: 0,
        left: 'center',
        inRange: {
          color: ['#ffc0b1', '#ff8c71', '#ef1717', '#9c0505']
        },
        pieces: [
          { min: 1000 },
          { min: 500, max: 999 },
          { min: 100, max: 499 },
          { min: 10, max: 99 },
          { min: 1, max: 9 }
        ],
        orient: 'horizontal',
        showLabel: true,
        padding: 5,
        text: ['高', '低'],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10
        }
      },
      series: [
        {
          left: 'center',
          type: 'map',
          name: '确诊人数',
          // silent: province ? true : false,
          label: {
            show: true,
            position: 'inside',
            // margin: 8,
            fontSize: 6
          },
          mapType: province ? province : 'china',
          data: mapList,
          zoom: province ? 1.1 : 1.2,
          roam: false,
          showLegendSymbol: false,
          rippleEffect: {
            show: true,
            brushType: 'stroke',
            scale: 2.5,
            period: 4
          }
        }
      ]
    }
    return option
  }
  render() {
    return (
      <ReactEcharts
        className={styles.mapbox}
        style={{ height: '400px' }}
        echarts={echarts}
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
      />
    )
  }
}

export default Map
