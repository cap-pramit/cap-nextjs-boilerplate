import * as React from 'react'
import Router, { useRouter } from 'next/router'
import styles from '../../styles/Base.module.css'

const Navigation = () => {
  const router = useRouter();
  const states = [{
    label: 'Blog',
    url: '/blog',
  }, {
    label: 'Create',
    url: '/'
  }]
  const isStateSelected = (url: string) => router.pathname === url
  const navigateToState = (url: string) => router.push(url)
  return (
    <div className={styles.navigation}>
      <h1 className={styles.appName}>NextJS Blogs</h1>
      <div className={styles.states}>
        {states.map((state) => (
          <div key={state.label} className={`${styles.state} ${isStateSelected(state.url) && styles.selected}`} onClick={() => navigateToState(state.url)}>{state.label}</div>
        ))}
      </div>
    </div>
  )
}

export default Navigation