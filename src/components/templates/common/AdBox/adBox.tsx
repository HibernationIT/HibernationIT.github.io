'use client'

import React, { useEffect } from 'react'
import styles from './adBox.module.scss'

export default function AdBox() {
  useEffect(() => {
    const pushAd = () => {
      try {
        // @ts-ignore
        const { adsbygoogle } = window
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    const interval = setInterval(() => {
      // @ts-ignore
      if (window.adsbygoogle) {
        pushAd()
        clearInterval(interval)
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className={styles.adbox}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4998422659731294"
        data-ad-slot="6878857551"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  )
}
