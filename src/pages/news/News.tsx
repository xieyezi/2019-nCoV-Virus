import { Timeline, Card } from "antd";
import * as React from "react";
import { SFC } from "react";
import dayjs from "dayjs";
import styles from "./style.module.css";
//无状态组件
export interface IProps {
  newlist: [];
}
const NewItem = news => {
  // console.log(news)
  return (
    <div className={styles.newsitem}>
       <p>{dayjs(news.news.pubDate).format("YYYY年MM月DD日 HH:mm")} ({news.news.pubDateStr})</p>
       <Card title={news.news.title}>
        <p className={styles.newscontent}>{news.news.summary}</p>
      </Card>
    </div>
     
  );
};
const NewList: SFC<IProps> = ({ newlist }) => {
  // console.log(newlist);
  return (
    <Timeline>
      {newlist.map((item, index) => {
        return (
          <Timeline.Item key={index}>
            <NewItem news={item} />
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
export default NewList;
