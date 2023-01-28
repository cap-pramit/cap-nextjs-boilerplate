import * as React from 'react'
import Image from 'next/image'
import styles from '../../styles/Base.module.css'
import { type_blog } from '../helpers/types'

const Blog = ({data}: any) => {
  const blogData: type_blog = data
  return (
    <div className={styles.card}>
      <div className={styles.mainContent}>
        <h2 className={styles.blogTitle}>{blogData.title}</h2>
        <div className={styles.blogSubTitle}>Written by <strong>{blogData.author}</strong> on <strong>{blogData.createdOn}</strong></div>
        <div className={styles.blogContent}>{blogData.content}</div>
      </div>
      <div className={styles.titleImgContent}>
        <Image src={blogData.titleImage} height={150} width={150} alt="Image not found"></Image>
      </div>
    </div>
  )
}

export default Blog