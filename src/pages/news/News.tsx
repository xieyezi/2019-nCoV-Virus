import { Timeline, Card } from 'antd'
import * as React from 'react'
import { SFC } from 'react'
import dayjs from 'dayjs'
import styles from './style.module.css'
//无状态组件
export interface IProps {
  newlist: []
}
const NewItem = (news) => {
  // console.log(news);
  return (
    <div className={styles.newsitem}>
      <p>
        {dayjs(news.news.pubDate).format('YYYY年MM月DD日 HH:mm')} ({news.news.pubDateStr})
      </p>
      <Card title={news.news.title}>
        <p className={styles.newscontent}>{news.news.summary}</p>
        <div className={styles.footer}>
          <p>
            地区:<span className={styles.area}>{news.news.provinceName}</span>
          </p>
          <p onClick={() => openUrl(news.news.sourceUrl)}>
            来源:<span className={styles.origin}>{news.news.infoSource}</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
const openUrl = (url) => {
  const w = window.open('about:blank')
  w.location.href = url
}
const NewList: SFC<IProps> = ({ newlist }) => {
  // console.log(newlist);
  return (
    <Timeline>
      {newlist.map((item, index) => {
        return (
          <Timeline.Item key={index}>
            <NewItem news={item} />
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}
export default NewList
