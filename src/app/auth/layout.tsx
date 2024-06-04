

import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import Dark from "../../../public/dark.svg"

import Light from "../../../public/light.svg"
import Link from 'next/link'
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden bg-gradient-to-br from-[#060301] to-[#110903] lg:block">
      <Link className="flex items-center justify-start p-4 gap-2" href="#">
            <Dark className="h-12 w-12 hidden dark:block text-primary" />
            <Light className="h-8 w-8 dark:hidden text-primary" />
            <span className="text-xl font-bold">
              Buyer`s <span className="text-primary">Edge</span>
            </span>
          </Link>
        <div className="flex h-full max-h-screen flex-col items-center justify-center gap-6 px-8">
        <div className="flex flex-col gap-4">
     
          <p className="text-gray-500 dark:text-gray-400">
            Discover the best deals and products at Buyer`s Edge, your one-stop
            shop for all your shopping needs.
          </p>
        </div>
          <p className="text-center text-lg  text-gray-500 dark:text-gray-400">
            Unlock the power of data-driven procurement with our innovative platform. Streamline your buying process and
            make informed decisions that drive business growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default layout

