import React from 'react'

export default function AmpAd() {
  return (
    <section
      ref={(el) => {
        if (!el) return

        const ampAd = document.createElement('amp-ad')
        ampAd.setAttribute('width', '100vw')
        ampAd.setAttribute('height', '320')
        ampAd.setAttribute('type', 'adsense')
        ampAd.setAttribute('data-ad-client', 'ca-pub-4998422659731294')
        ampAd.setAttribute('data-ad-slot', '6878857551')
        ampAd.setAttribute('data-auto-format', 'rspv')
        ampAd.setAttribute('data-full-width', '')

        const div = document.createElement('div')
        div.setAttribute('overflow', '')

        ampAd.appendChild(div)
        el.appendChild(ampAd)
      }}
    />
  )
}
