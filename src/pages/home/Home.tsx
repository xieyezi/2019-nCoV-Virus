import * as React from 'react'
import { Component } from 'react'
import { getVirusDataOnTime, getVirusDataStatic, getRumor, getTrend } from '../../services/getData'
import { getMapData, getMapProvinceData } from '../../utils/getMapData'
import Card from 'antd-mobile/lib/card'
import Tabs from 'antd-mobile/lib/tabs'
import 'antd-mobile/lib/card/style/css'
import 'antd-mobile/lib/tabs/style/css'
import { Table, Divider, Skeleton } from 'antd'
import dayjs from 'dayjs'
import Map from '../map/Map'
import NewsList from '../news/News'
import Category from '../category/Category'
import Pie from '../pie/Pie'
import Rumor from '../rumor/Rumor'
import Line from '../line/Line'
import styles from './style.module.css'
// const Map =React.lazy(() => import('../map/Map'))

export interface HomeProps {}
export interface HomeState {
  timer: any
  newsList?: []
  caseList?: []
  staticList: []
  mapList: []
  rumorList: []
  dateList: []
  confirmedTrendList: []
  suspectedTrendList: []
  deadTrendList: []
  curedTrendList: []
  virusDesc?: {
    confirmedCount: number
    suspectedCount: number
    deadCount: number
    curedCount: number
    seriousCount: number
    seriousIncr: number
    modifyTime: number
    note1: string
    note2: string
    note3: string
    remark1: string
    remark2: string
    confirmedIncr: number
    suspectedIncr: number
    deadIncr: number
    curedIncr: number
  }
  provinceName?: string
  tabIndex: number
  loading: boolean
  trendLoading: boolean
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      timer: null,
      newsList: [],
      caseList: [],
      virusDesc: {
        confirmedCount: 0,
        suspectedCount: 0,
        deadCount: 0,
        curedCount: 0,
        seriousCount: 0,
        modifyTime: 0,
        note1: '',
        note2: '',
        note3: '',
        remark1: '',
        remark2: '',
        confirmedIncr: 0,
        suspectedIncr: 0,
        deadIncr: 0,
        curedIncr: 0,
        seriousIncr: 0
      },
      staticList: [],
      mapList: [],
      rumorList: [],
      provinceName: '', //是否点击了某个省份
      tabIndex: 0,
      dateList: [],
      confirmedTrendList: [],
      suspectedTrendList: [],
      deadTrendList: [],
      curedTrendList: [],
      loading: true,
      trendLoading: true
    }
  }
  componentDidMount() {
    this.initData()
    // 10分钟更新一次数据
    this.setState({
      timer: setInterval(() => {
        this.initData()
      }, 1000 * 60 * 10)
    })
  }
  // 清除轮循
  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
    this.setState({ timer: null })
  }
  // 获取疫情数据
  initData = async () => {
    const res = await getVirusDataOnTime()
    if (res.status === 200) {
      // console.log(res.data.newslist)
      const { news, desc } = res.data.newslist[0]
      this.setState({
        newsList: news,
        virusDesc: desc,
        caseList: res.data.newslist[0].case
      })
    }
    const resuslt = await getVirusDataStatic()
    const { newslist } = resuslt.data
    // console.log(newslist)
    const maplist = getMapData(newslist)
    this.setState({
      staticList: newslist,
      mapList: maplist,
      loading: false
    })
    this.getRumorList()

    // console.log(trend)
  }
  getRumorList = async () => {
    const res = await getRumor()
    const { newslist } = res.data
    // console.log(newslist)
    this.setState({
      rumorList: newslist
    })
  }
  getTrendList = async () => {
    const trend = await getTrend()
    //console.log(trend);
    const trendList = trend.data.results
    let dateArr = [] as any
    let confirmedArr = [] as any
    let suspectedArr = [] as any
    let deadArr = [] as any
    let curedArr = [] as any
    let datelist = [] as any
    let confirmedList = [] as any
    let suspectedList = [] as any
    let deadList = [] as any
    let curedList = [] as any
    trendList.forEach((item: any) => {
      dateArr.push(dayjs(item.updateTime).format('MM-DD'))
      confirmedArr.push(item.confirmedCount)
      suspectedArr.push(item.suspectedCount)
      deadArr.push(item.deadCount)
      curedArr.push(item.curedCount)
    })
    dateArr.reverse().forEach((item, index) => {
      if (item !== dateArr[index + 1]) {
        datelist.push(item)
        confirmedList.push(confirmedArr[index])
        suspectedList.push(suspectedArr[index])
        deadList.push(deadArr[index])
        curedList.push(curedArr[index])
      }
    })
    this.setState({
      dateList: datelist,
      confirmedTrendList: confirmedList.reverse(),
      suspectedTrendList: suspectedList.reverse(),
      deadTrendList: deadList.reverse(),
      curedTrendList: curedList.reverse(),
      trendLoading: false
    })
  }
  toProvince = (province) => {
    //TODO: 地图下钻有问题，待修复
    const { staticList } = this.state
    let cites: [] = []
    let provinceName
    for (let item of staticList as any) {
      if (province === item.provinceShortName) {
        cites = item.cities
        provinceName = item.provinceName
        break
      }
    }
    if (cites.length !== 0) {
      const maplist = getMapProvinceData(cites, provinceName)
      this.setState({
        provinceName: province,
        mapList: maplist
      })
    }
  }
  toCountry = () => {
    const { staticList } = this.state
    const maplist = getMapData(staticList)
    this.setState({
      provinceName: '',
      mapList: maplist
    })
  }
  render() {
    const {
      virusDesc,
      mapList,
      provinceName,
      tabIndex,
      newsList,
      rumorList,
      dateList,
      confirmedTrendList,
      suspectedTrendList,
      deadTrendList,
      curedTrendList,
      loading,
      trendLoading
    } = this.state
    //console.log(newsList);
    const tabs = [{ title: '疫情地图' }, { title: '最新消息' }, { title: '辟谣信息' }, { title: '疫情趋势' }]
    const columns = [
      { title: '地区', dataIndex: 'name', key: 'name' },
      { title: '确诊', dataIndex: 'confirmedCount', key: 'confirmedCount' },
      { title: '死亡', dataIndex: 'deadCount', key: 'deadCount' },
      { title: '治愈', dataIndex: 'curedCount', key: 'curedCount' }
    ]
    const expandedRowRender = (item) => {
      let mapList: [] = []
      if (item.provinceName) {
        mapList = getMapProvinceData(item.cities, item.provinceName)
      }
      return mapList.length > 0 ? (
        <Table
          columns={columns}
          showHeader={false}
          rowKey={(record: any) => record.name}
          dataSource={mapList}
          pagination={false}
        />
      ) : null
    }

    return (
      <Skeleton loading={loading} active paragraph={{ rows: 50 }}>
        <div>
          <div className={styles.top}>
            <p className={styles.title}>新型冠状病毒肺炎疫情</p>
            <p className={styles.tip}>实时动态</p>
          </div>
          <Tabs
            tabs={tabs}
            initialPage={0}
            swipeable={false}
            tabBarInactiveTextColor="#616161"
            tabBarActiveTextColor="#6C63FF"
            tabBarUnderlineStyle={{ border: '1px #6C63FF solid' }}
            onChange={(tab, index) => {
              this.setState({
                tabIndex: index
              })
              if (index === 3) {
                this.getTrendList()
              }
            }}
          >
            <div className={styles.map}>
              <span className={styles.allCountry}>全国</span>
              <span>
                截至{dayjs(virusDesc.modifyTime).format('YYYY年MM月DD日 HH:mm')}
                (北京时间)
              </span>
              <span>统计</span>
              <div className={styles.category}>
                <Category
                  title={'确诊'}
                  count={virusDesc.confirmedCount}
                  addcount={virusDesc.confirmedIncr}
                  color={'#e57471'}
                />
                <Category
                  title={'疑似'}
                  count={virusDesc.suspectedCount}
                  addcount={virusDesc.suspectedIncr}
                  color={'#dda451'}
                />
                <Category
                  title={'重症'}
                  count={virusDesc.seriousCount}
                  addcount={virusDesc.seriousIncr}
                  color={'#5d4037'}
                />
                <Category title={'死亡'} count={virusDesc.deadCount} addcount={virusDesc.deadIncr} color={'#919399'} />
                <Category
                  title={'治愈'}
                  count={virusDesc.curedCount}
                  addcount={virusDesc.curedIncr}
                  color={'#7ebe50'}
                />
              </div>
              <Card>
                <Card.Body className={styles.card}>
                  <div>{virusDesc.note1}</div>
                  <div>{virusDesc.note2}</div>
                  <div>{virusDesc.remark1}</div>
                  <div>{virusDesc.remark2}</div>
                  <div>{virusDesc.note3}</div>
                </Card.Body>
              </Card>
              <Map provinceName={provinceName} mapList={mapList} onClick={this.toProvince} />
              {provinceName ? (
                <div className={styles.maptip} onClick={this.toCountry}>
                  返回全国
                </div>
              ) : null}
            </div>
            <div className={styles.newsBox}>
              <NewsList newlist={newsList} />
            </div>
            <div className={styles.rumorBox}>
              <Rumor rumorList={rumorList} />
            </div>
            <div className={styles.trendBox}>
              <Skeleton loading={trendLoading} active paragraph={{ rows: 15 }}>
                <Line
                  dateList={dateList}
                  firstList={confirmedTrendList}
                  secondList={suspectedTrendList}
                  firstColor={'#e57471'}
                  secondColor={'#dda451'}
                  legendData={['确诊人数', '疑似人数']}
                />
                <Divider />
                <Line
                  dateList={dateList}
                  firstList={deadTrendList}
                  secondList={curedTrendList}
                  firstColor={'#919399'}
                  secondColor={'#7ebe50'}
                  legendData={['死亡人数', '治愈人数']}
                />
                <Divider />
                <Pie virusDesc={virusDesc} />
              </Skeleton>
            </div>
          </Tabs>
          {tabIndex === 0 ? (
            <Table
              className={styles.table}
              columns={columns}
              pagination={false}
              expandedRowRender={(item) => expandedRowRender(item)}
              dataSource={mapList}
              rowKey={(record: any) => record.name}
            />
          ) : null}
        </div>
        {tabIndex === 0 ? (
          <div className={styles.footer}>
            <p>武汉加油呀~</p>
            <a href="http://www.beian.miit.gov.cn/" target="view_window">
              渝ICP备17013916号
            </a>
            <a href="https://github.com/xieyezi" target="view_window">
              Github
            </a>
          </div>
        ) : null}
      </Skeleton>
    )
  }
}

export default Home
