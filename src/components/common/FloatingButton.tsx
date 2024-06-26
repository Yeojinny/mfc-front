'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FloatingButton() {
  const [end, setEnd] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setEnd(true)
    } else {
      setEnd(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`z-[29] fixed w-12 h-12 right-0 bg-black rounded-full mr-5 ${
        end ? 'slide-in' : 'slide-out'
      }`}
    >
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/arrow-up-white.svg"
        alt="scroll-up"
        width={50}
        height={50}
      />
    </button>
  )
}
