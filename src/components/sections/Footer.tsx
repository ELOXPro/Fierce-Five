import { FooterBorder } from "../ui/elements";

export default function Footer() {
  return (
    <div className='flex flex-col w-full h-16 bg-black'>
        <FooterBorder />
        <h1 className="flex w-full h-full text-sm text-yellow-400 font-bold justify-center items-center">&copy; 2024-2028 Fierce Five, All rights reserved. created by<a className="px-1 text-yellow-800" href="https://eloxpro.netlify.app">Elox</a></h1>
    </div>
  )
}
