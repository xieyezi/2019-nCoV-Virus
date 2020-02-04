import * as React from 'react'
import { SFC } from 'react'
import styles from './style.module.css'
//无状态组件
export interface CategoryProps {
  title: string
  count: number
  addcount: number
  color: string
}
const Category: SFC<CategoryProps> = ({ title, count, addcount, color }) => {
  // console.log(newlist);
  return (
    <div style={{ color: color }} className={styles.category}>
      <p>{title}</p>
      <p>{count}例</p>
      <p>
        <span className={styles.tip}>较昨日</span>
        <span className={styles.add}>+{addcount}</span>
      </p>
    </div>
  )
}
export default Category
