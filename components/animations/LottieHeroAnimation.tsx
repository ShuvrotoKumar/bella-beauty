'use client'

import Lottie from 'lottie-react'
import beautyAnimation from '@/public/animations/beauty-animation.json'

export default function LottieHeroAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie
        animationData={beautyAnimation}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '500px',
          maxHeight: '500px',
        }}
      />
    </div>
  )
}