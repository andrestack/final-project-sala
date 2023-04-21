import Image from 'next/image'
import { Inter } from 'next/font/google'
import ButtonOpenJitsi from '../../Components/ButtonOpenJitsi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1 className="bg-green-300"> WELCOME TO YOUR SALA</h1>
    <ButtonOpenJitsi/>
    
    
    </>
  )
}
