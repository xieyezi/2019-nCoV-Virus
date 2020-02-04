import * as React from 'react'
import { Card, Carousel } from 'antd'
import styles from './style.module.css'
//无状态组件
const Rumor = ({ rumorList }) => {
  // console.log(rumorList);
  return (
    <Carousel style={{ background: '#fff', height: '450px' }}>
      {rumorList.map((item) => {
        let imgUrl: string = ''
        if (item.explain === '谣言' || item.explain === '伪科学' || item.explain === '有失实') {
          imgUrl = 'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png'
        }
        if (item.explain === '尚无定论') {
          imgUrl = 'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-y-big@2x.c0fd84da.png'
        }
        return (
          <div className={styles.cardbox} key={item.id}>
            <Card
              className={styles.card}
              cover={
                <img
                  alt="图片"
                  style={{ borderRadius: '20px 20px 0px 0px', opacity: 0.8, height: 200 }}
                  src={item.imgsrc}
                />
              }
            >
              <img src={imgUrl} alt="" className={styles.tip} />
              <div>
                <p className={styles.title}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </Card>
          </div>
        )
      })}
    </Carousel>
  )
}
export default Rumor
