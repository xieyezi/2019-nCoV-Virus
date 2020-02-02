import * as React from "react";
import { Component } from "react";
import ReactEcharts from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/lib/component/visualMap";
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
  async componentDidMount() {
    const { provinceName } = this.props
    const province = provinceName? provinceName : ''
    if(province === ''){
        const chinaMapJson = await getChinaJson();
        console.log(chinaMapJson.data)
        echarts.registerMap("china", chinaMapJson.data);
    }else{
        let pinyinName = provinceMap[provinceName];
        const provinceMapJson = await getProvinceJson(pinyinName);
        // console.log(provinceMapJson.data)
        echarts.registerMap(pinyinName, provinceMapJson.data);
    }
  }
  getOption = (province: string, mapList: []) => {
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
        top: "40%",
        right: 10,
        left: "auto",
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
        padding: 5,
        orient: "vertical",
        showLabel: true,
        text: ["高", "低"],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10
        }
      },
      series: [
        {
          name: "确诊人数",
          type: "map",
          roam: false,
          selectedMode: "single",
          mapType: province ? province : "china",
          data: mapList
        }
      ]
    };
    return option;
  }
  render() {
    const { provinceName, mapList,onClick } = this.props
    const province = provinceName? provinceName : ''
    return (
      <ReactEcharts
        className={styles.mapbox}
        echarts={echarts}
        option={this.getOption(province, mapList)}
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
