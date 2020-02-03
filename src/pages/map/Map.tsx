import * as React from "react";
import { Component } from "react";
import ReactEcharts from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/tooltip";
import provinceMap from "../../map/province-map";
import {  getChinaJson, getProvinceJson } from "../../services/getData";
import styles from "./style.module.css";
export interface MapProps {
  provinceName?: string;
  mapList: [];
  onClick: (val) => void
}

export interface MapState {
}

class Map extends Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
    };
  }
  static async getDerivedStateFromProps(newProps) { 
    //console.log(newProps)
    const { provinceName } =newProps
    const province = provinceName? provinceName : ''
    if(province === ''){
        const chinaMapJson = await getChinaJson();
        // console.log(chinaMapJson.data)
        echarts.registerMap("china", chinaMapJson.data);
    }else{
        let pinyinName = provinceMap[provinceName];
        const provinceMapJson = await getProvinceJson(pinyinName);
        // console.log(provinceMapJson.data)
        echarts.registerMap(pinyinName, provinceMapJson.data);
    }
}
  // async componentDidMount() {
   
  // }
  // async UNSAFE_componentWillReceiveProps(newProps) {
   
  // }
  getOption = () => {
    const { provinceName,mapList } = this.props
    const province = provinceName? provinceMap[provinceName] : ''
    const option = {
      tooltip: {
        show: true,
        formatter: function(params) {
          let tip =
            params.name +
            "：<br>确诊：" +
            params.data["value"] +
            "例<br>死亡：" +
            params.data["deadCount"] +
            "例<br>治愈：" +
            params.data["curedCount"] +
            "例";
          return tip;
        }
      },
      visualMap: {
        show: true,
        type: "piecewise",
        min: 0,
        max: 2000,
        align: "right",
        top: "2%",
        right: 0,
        left: 'center',
        inRange: {
          color: ["#ffc0b1", "#ff8c71", "#ef1717", "#9c0505"]
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
        text: ["高", "低"],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10
        }
      },
      series: [{
        left: 'center',
        type: 'map',
        name: '确诊人数',
        silent: province ? true : false,
        label: {
          show: true,
          position: 'inside',
          // margin: 8,
          fontSize: 6
        },
        mapType: province ? province : 'china',
        data: mapList,
        zoom: 1.2,
        roam: false,
        showLegendSymbol: false,
        emphasis: {},
        rippleEffect: {
          show: true,
          brushType: 'stroke',
          scale: 2.5,
          period: 4
        }
      }]
    };
    return option;
  }
  render() {
    const { onClick } = this.props
    return (
      <ReactEcharts
        className={styles.mapbox}
        style={{height:'400px'}}
        echarts={echarts}
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        onEvents={{
          click(e) {
            onClick(e.name);
          }
        }}
      />
    );
  }
}

export default Map;
