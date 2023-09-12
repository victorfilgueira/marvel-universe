import logo from '@/app/assets/marvel-logo.png'
import { Montserrat } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700', '900'] 
  });

export function Header() {
    return(
        <div className='flex items-center justify-between ml-2 mr-2 md:ml-14 md:mr-14 lg:ml-28 lg:mr-28 pt-12'>
            <Image src={logo.src} alt='Marvel Logo' width={152} height={60} quality={100} />
            <div className='flex'>
                <Link className='ml-11 mr-2 md:mr-11 lg:mr-11' href={"#"}>
                    <p className={`${montserrat.className} text-white font-black`}>HOME</p>
                </Link>
                <Link  href={"#"}>
                    <p className={`${montserrat.className} text-white font-black`}>CHARACTERS</p>
                </Link>
            </div>
        </div>
    )
}