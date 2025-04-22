import { FooterBorder } from "../ui/elements";

export default function Footer() {
  return (
    <div className='flex flex-col w-full h-16 bg-black'>
        <FooterBorder />
        <h1 className="flex w-full h-full text-[0.5rem] md:text-sm text-yellow-400 font-bold justify-center items-center">&copy; 2024-2028 Fierce Five, All rights reserved. Website by<a className="px-1  text-orange-600 hover:text-blue-700 transition-all" href="https://elox.vercel.app">Elox</a></h1>
    </div>
  )
}
