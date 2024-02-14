import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center 
    justify-center max-w-[1000px] w-full mx-auto p-6">
        <div className="flex flex-col gap-4 items-center">
            <p className="text-xl">IT'S TIME TO GET TO</p>
            <h1 className="uppercase font-semibold text-4xl 
            sm:text-5xl md:text-6xl lg:text-7xl">Amino 
            <span className="text-yellow-400">GYM</span>
            </h1>
        </div>
        <p className="text-lg md:text-2xl font-light text-center ">
            I hearby acknowledge that i may become <spn className="text-yellow-400 font-medium">unbelievably strong </spn>
            and accept all risks of becoming the local <spn className="text-yellow-400 font-medium">mass montrosity</spn>, 
            afflicted with severe body dismorphia, unable to fit though doors..
        </p>

        <Button func={() => 
            window.location.href = '#generate'
        } text={"Accept & Begin"}/>
    </div>
  )
}
