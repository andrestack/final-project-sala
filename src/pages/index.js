import Image from 'next/image'
import { Inter } from 'next/font/google'
import ButtonOpenJitsi from '../../Components/ButtonOpenJitsi'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  
  return (
    <>
    <h1 className="bg-none p-10 text-center font-size font-mono text-energy-200 text-2xl"> WELCOME TO YOUR SALA</h1>
    <ButtonOpenJitsi/>

    
    </>
  )
}
