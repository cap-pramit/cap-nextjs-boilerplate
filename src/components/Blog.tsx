import * as React from 'react'
import styles from '../../styles/Base.module.css'
import { type_blog } from '../helpers/types'

const Blog = ({data}: any) => {
  const blogData: type_blog = data
  return (
    <div className={styles.card}>
      <h2 className={styles.blogTitle}>{blogData.title}</h2>
      <div className={styles.blogSubTitle}>Written by <strong>{blogData.author}</strong> on <strong>{blogData.createdOn}</strong></div>
      <div className={styles.blogContent}>{blogData.content}</div>
    </div>
  )
}

export default Blog