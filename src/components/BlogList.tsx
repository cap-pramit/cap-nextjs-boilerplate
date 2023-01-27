import * as React from 'react'
import Blog from './Blog'
import styles from '../../styles/Base.module.css'
import { type_blog } from '../helpers/types'

const BlogList = ({blogList}: any) => {
  return (
    <div>
      <h4 className={styles.subtitle}>
        List of blogs fetched via /api/blogs GET call
      </h4>
      <div className={styles.blogList}>
        {
          blogList.map((blogData: type_blog) => <Blog key={blogData.id} data={blogData}/>)
        }
      </div>
    </div>
  )
}

export default BlogList