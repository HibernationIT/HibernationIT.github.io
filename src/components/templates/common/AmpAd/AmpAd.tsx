'use client'

import React, { useEffect } from 'react'

export default function AmpAd() {
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
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4998422659731294"
      data-ad-slot="6878857551"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
