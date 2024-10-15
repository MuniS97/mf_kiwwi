import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Instagram, Menu, MousePointer2, PhoneOutgoing } from 'lucide-react';

interface Props {
    className?: string;
    translation?: {
        nav: string[];
        phoneNumbers: string[];
        socials: {
            instagram: string;
            telegram: string;
        }
    }
}

export const HeaderNav: React.FC<Props> = ({ className, translation }) => {
    return (
        <nav className={cn(className)}>
            <ul className="w-full flex space-x-6 max-md:hidden">
                {translation?.nav.map((item) => (
                    <li key={item}>
                        <Button variant="ghost" className='hover:text-cyellow transition-all text-base' asChild>
                            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                        </Button>
                    </li>
                ))}
            </ul>
            <div className='max-md:block hidden'>
                <Sheet>
                    <SheetTrigger>
                        <Menu width={30} height={30} className='text-gray-400 hover:text-cyellow transition-all' />
                    </SheetTrigger>
                    <SheetContent className='bg-white'>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <ul className="w-full flex flex-col justify-start items-left">
                                {translation?.nav.map((item) => (
                                    <li key={item} className='text-left'>
                                        <Button variant="ghost" className='hover:text-cyellow transition-all text-base' asChild>
                                            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col justify-center items-start gap-5 pl-4'>
                                {translation?.phoneNumbers.map((item) => (
                                    <a href="tel:+998886687707" key={item} className=" hover:text-cyellow transition-all font-normal text-sm flex items-center">
                                        <PhoneOutgoing width={20} height={20} className='mr-2 md:mr-3' />{item}
                                    </a>
                                ))}


                                <div className='flex justify-center items-center gap-5'>
                                    <Link href={"https://www.instagram.com/mf_kiwwi/"} className='flex justify-center items-center gap-2 '>
                                        <Instagram width={20} height={20} className=' hover:text-cyellow transition-all cursor-pointer' />
                                        {translation?.socials.instagram}
                                    </Link>
                                    <Link href={"https://t.me/mf_kiwwi"} className='flex justify-center items-center gap-2 '>
                                        <MousePointer2 width={20} height={20} className=' hover:text-cyellow transition-all cursor-pointer rotate-90' />
                                        {translation?.socials.telegram}
                                    </Link>
                                </div>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};