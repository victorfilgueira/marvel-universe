
import { Montserrat } from 'next/font/google';
import bg from '@/app/assets/bg-home.png';
import { Header } from './Header';
import Link from 'next/link';
import Image from 'next/image';
import circle from '@/app/assets/circle-button.svg'
import arrow from '@/app/assets/arrow-button.png'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'] 
});

export function HomePage() {
    return(
        <div className='w-full h-screen bg-no-repeat bg-cover bg-center' 
            style={{backgroundImage: `url(${bg.src})`}}
        >
            <div className='bg-secondary-gray w-full h-full opacity-70'>
                <Header />
                <div className='flex flex-col ml-28 mt-24 w-[53rem]'>
                    <p className={`${montserrat.className} text-white font-black text-8xl`}>MARVEL UNIVERSE</p>
                    <p className={`${montserrat.className} text-white font-medium text-2xl w-[40rem] mt-7`}>Explore the exciting Marvel universe with its incredible heroes and villains in epic and captivating stories that everyone can enjoy. Join the thrilling journey!</p>
                    <Link className='flex items-center mt-7' href={"#"}>
                        <p className={`${montserrat.className} text-white text-xl font-black mr-4`}>SEE CHARACTERS</p>
                        <Image className='w-11' src={circle} alt='Characters Icon Button' />
                        <Image className='-ml-9' src={arrow.src} alt='Caracters Icon Button' width={28} height={28} quality={100}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}