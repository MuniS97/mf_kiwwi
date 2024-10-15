import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Instagram, MousePointer2 } from 'lucide-react';
import { Button } from '../ui/button';
import FooterForm from '../client/FooterForm';
import { Separator } from '@radix-ui/react-select';

interface Props {
    className?: string;
    translation: {
        description: string;
        quickLinks: string[];
        quickLinksTitle: string;
        socials: {
            instagram: string;
            telegram: string;
        }
        company: string;
        forma: {
            title: string;
            name: string;
            email: string;
            phone: string;
            phonePlaceholder: string;
            message: string;
            messagePlaceholder: string;
            buttonProcess: string;
            button: string;
            success: string;
            error: string;
            nameError: string
            emailError: string
            messageError: string
        }
    }
};


export const Footer: React.FC<Props> = ({ className, translation }) => {
    return (
        <>
            <div className={cn("flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 flex-wrap", className)}>

                {/* FooterForm: will appear at the top for screens smaller than lg */}
                <FooterForm className="order-1 lg:order-3" translation={translation.forma} />

                {/* Logo and description */}
                <div className='flex flex-col justify-start items-start gap-3 text-center lg:text-left order-2 lg:order-1'>
                    <Link href={"/"} className="text-2xl font-bold hover:text-black/75 transition-all">
                        mf_kiwwi
                    </Link>
                    <p className='text-base font-normal'>{translation?.description}</p>
                    <div className='flex justify-center items-center gap-3 md:gap-4'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"https://www.instagram.com/mf_kiwwi/"}>
                                        <Instagram width={20} height={20} className='hover:text-cyellow transition-all cursor-pointer' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full bg-white border border-gray-200'>
                                    <Link href={"https://www.instagram.com/mf_kiwwi/"} >
                                        <p>{translation?.socials.instagram}</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={"https://t.me/mf_kiwwi"}>
                                        <MousePointer2 width={20} height={20} className='hover:text-cyellow transition-all cursor-pointer rotate-90' />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent className='py-1 px-5 rounded-full bg-white border border-gray-200'>
                                    <Link href={"https://t.me/mf_kiwwi"} >
                                        <p>{translation?.socials.telegram}</p>
                                    </Link>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col justify-center items-center lg:items-start gap-5 order-3 lg:order-2'>
                    <h4 className="text-lg font-semibold">{translation?.quickLinksTitle}</h4>
                    <ul className="w-full flex flex-col justify-center items-start gap-2">
                        {translation?.quickLinks.map((item) => (
                            <li key={item}>
                                <Button variant="ghost" className='hover:text-black/75 transition-all text-base px-0' asChild>
                                    <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <Separator className='w-full h-px bg-gray-200 my-8' />
            <p className='text-base font-normal text-center lg:text-left mb-8'>
                {translation?.company}
            </p>
        </>
    );
};
