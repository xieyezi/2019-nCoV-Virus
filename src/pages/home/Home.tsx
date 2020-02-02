import * as React from "react";
import { Component, createRef } from "react";
import {
  getVirusDataOnTime,
  getVirusDataStatic
} from "../../services/getData";
import { getMapData, getMapProvinceData } from "../../utils/getMapData";
import { Tabs, Card } from "antd-mobile";
import dayjs from "dayjs";
import Map from "../map/Map"
// import "../../../node_modules/echarts/map/js/china";
// import cityMap from "../../map/city-map";
// import provinceMap from "../../map/province-map";
import "antd-mobile/dist/antd-mobile.css";
import styles from "./style.module.css";

export interface HomeProps {}
export interface CategoryProps {
  title: string;
  count: number;
  color: string;
}
export interface HomeState {
  timer: any;
  newsList?: [];
  caseList?: [];
  virusDesc?: {
    confirmedCount: number;
    suspectedCount: number;
    deadCount: number;
    curedCount: number;
    modifyTime: number;
    virus: string;
    infectSource: string;
    passWay: string;
    remark1: string;
    remark2: string;
  };
  staticList: [];
  mapList:[];
  provinceName?:string
}

class Home extends Component<HomeProps, HomeState> {
  myRef: React.RefObject<HTMLDivElement> = createRef();
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      timer: null,
      newsList: [],
      caseList: [],
      virusDesc: {
        confirmedCount: 0,
        suspectedCount: 0,
        deadCount: 0,
        curedCount: 0,
        modifyTime: 0,
        virus: "",
        infectSource: "",
        passWay: "",
        remark1: "",
        remark2: ""
      },
      staticList: [],
      mapList: [],
      provinceName:'' //是否点击了某个省份
    };
  }
  componentDidMount() {
    this.initData();
    // 半小时更新一次数据
    this.setState({
      timer: setInterval(() => {
        this.initData();
      }, 1000 * 60 * 30)
    });
  }
  // 清除轮循
  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({ timer: null });
  }
  // 获取疫情数据
  initData = async () => {
    const res = await getVirusDataOnTime();
    if (res.status === 200) {
      // console.log(res);
      const { news, desc } = res.data.newslist[0];
      this.setState({
        newsList: news,
        virusDesc: desc,
        caseList: res.data.newslist[0].case
      });
    }
    const resuslt = await getVirusDataStatic();
    const { newslist } = resuslt.data;
    // console.log(result)
    const maplist = getMapData(newslist);
    this.setState({
      staticList: newslist,
      mapList:maplist
    });
  };
  toProvince = (province) => {
    console.log(province)
    const { staticList } = this.state
    let cites = []
    for(let item of staticList){
      if(province === item.provinceShortName) {
        cites = item
      }
    }
    this.setState({
      provinceName:province
    })
  }
  render() {
    const { virusDesc,mapList, provinceName } = this.state;
    console.log(virusDesc);
    const tabs = [
      { title: "疫情地图" },
      { title: "疫情动态" },
      { title: "辟谣信息" }
    ];
    const Category = (props: CategoryProps) => {
      return (
        <div style={{ color: props.color }}>
          <p>{props.title}</p>
          <p>{props.count}例</p>
        </div>
      );
    };
    return (
      <div>
        <div className={styles.top}>
          <p className={styles.title}>新型冠状病毒肺炎疫情</p>
          <p className={styles.tip}>实时动态</p>
        </div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarInactiveTextColor="#616161"
          tabBarActiveTextColor="#6C63FF"
          tabBarUnderlineStyle={{ border: "1px #6C63FF solid" }}
          // onChange={(tab, index) => {
          //   console.log("onChange", index, tab);
          // }}
          // onTabClick={(tab, index) => {
          //   console.log("onTabClick", index, tab);
          // }}
        >
          <div className={styles.map}>
            <span className={styles.allCountry}>全国</span>{" "}
            <span>
              截至{dayjs(virusDesc.modifyTime).format("YYYY年MM月DD日 HH:mm")}
              (北京时间)
            </span>
            <span>统计</span>
            <div className={styles.category}>
              <Category
                title={"确诊"}
                count={virusDesc.confirmedCount}
                color={"#f44336"}
              />
              <Category
                title={"疑似"}
                count={virusDesc.suspectedCount}
                color={"#ef6c00"}
              />
              <Category
                title={"死亡"}
                count={virusDesc.deadCount}
                color={"#263238"}
              />
              <Category
                title={"治愈"}
                count={virusDesc.curedCount}
                color={"#64dd17"}
              />
            </div>
            <Card>
              <Card.Body className={styles.card}>
                <div>
                  <span>病毒：</span>
                  {virusDesc.virus}
                </div>
                <div>
                  <span>传染源：</span>
                  {virusDesc.infectSource}
                </div>
                <div>{virusDesc.remark1}</div>
                <div>{virusDesc.remark2}</div>
                <div>
                  <span>传播途径：</span>
                  {virusDesc.passWay}
                </div>
              </Card.Body>
            </Card>
            {
              provinceName? (
                <Map provinceName={provinceName} mapList={mapList} onClick={this.toProvince}/>
              ):(
                <Map mapList={mapList} onClick={this.toProvince}/>
              )
            }
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}
          >
            Content of second tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}
          >
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Home;
