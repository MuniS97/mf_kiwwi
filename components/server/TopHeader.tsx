import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Instagram, MousePointer2, PhoneOutgoing } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { TranslationSwitch } from './TranslationSwitch';

interface Props {
    className?: string;
    translation?: {
        phone_number: string;
        instagram: string;
        telegram: string;
    };
}

export const TopHeader: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full py-2 bg-gray-100 max-md:hidden")}>
            <Container className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5'>
                {/* Contact Information */}
                <div className={cn("flex items-center justify-between w-full md:w-auto", className)}>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
                        <a href="tel:+998886687707" className="text-gray-400 hover:text-cyellow transition-all font-normal text-sm flex items-center">
                            <PhoneOutgoing width={20} height={20} className='mr-2 md:mr-3' />+998 (88) 668 77 07
                        </a>
                        {/* <a href="tel:+998973903666" className="text-gray-400 hover:text-cyellow transition-all font-normal text-sm flex items-center">
                            <PhoneOutgoing width={20} height={20} className='mr-2 md:mr-3' /> 998 (97) 390 36 66
                        </a> */}
                    </div>
                </div>

                {/* Social Media and Language Switcher */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto'>
                    <div className='flex justify-center items-center gap-3 md:gap-4'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"https://www.instagram.com/mf_kiwwi/"}>
                                        <Instagram width={20} height={20} className='text-gray-400 hover:text-cyellow transition-all cursor-pointer' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full bg-white border border-gray-200'>
                                    <Link href={"https://www.instagram.com/mf_kiwwi/"} >
                                        <p>Instagram</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"https://t.me/mf_kiwwi"}>
                                        <MousePointer2 width={20} height={20} className='text-gray-400 hover:text-cyellow transition-all cursor-pointer rotate-90' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full bg-white border border-gray-200'>
                                    <Link href={"https://t.me/mf_kiwwi"} >
                                        <p>Telegram</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                            {/* <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"/"}>
                                        <Facebook width={20} height={20} className='text-gray-400 hover:text-cyellow transition-all cursor-pointer' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full border border-gray-200'>
                                    <Link href={"/"} >
                                        <p>Facebook</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip> */}
                        </TooltipProvider>
                    </div>
                    {/* Translation Switch */}
                    <TranslationSwitch />
                </div>
            </Container>
        </div>
    );
};
