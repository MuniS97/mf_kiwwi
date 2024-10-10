import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Facebook, Instagram, MousePointer2, PhoneOutgoing } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { TranslationSwitch } from './TranslationSwitch';

interface Props {
    className?: string;
    translation?: any;
}

export const TopHeader: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className="w-full py-3 md:py-5 bg-gray-100 max-md:hidden">
            <Container className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5'>
                {/* Contact Information */}
                <div className={cn("flex items-center justify-between w-full md:w-auto", className)}>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
                        <a href="tel:+998979303666" className="text-gray-400 hover:text-cyellow transition-all font-normal text-sm flex items-center">
                            <PhoneOutgoing width={20} height={20} className='mr-2 md:mr-3' /> 998 (97) 930 36 66
                        </a>
                        <a href="tel:+998973903666" className="text-gray-400 hover:text-cyellow transition-all font-normal text-sm flex items-center">
                            <PhoneOutgoing width={20} height={20} className='mr-2 md:mr-3' /> 998 (97) 390 36 66
                        </a>
                    </div>
                </div>

                {/* Social Media and Language Switcher */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto'>
                    <div className='flex justify-center items-center gap-3 md:gap-4'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"/"}>
                                        <Instagram width={20} height={20} className='text-gray-400 hover:text-cyellow transition-all cursor-pointer' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full border border-gray-200'>
                                    <Link href={"/"} >
                                        <p>Instagram</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"/"}>
                                        <MousePointer2 width={20} height={20} className='text-gray-400 hover:text-cyellow transition-all cursor-pointer rotate-90' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full border border-gray-200'>
                                    <Link href={"/"} >
                                        <p>Telegram</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
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
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    {/* Translation Switch */}
                    <TranslationSwitch />
                </div>
            </Container>
        </div>
    );
};
