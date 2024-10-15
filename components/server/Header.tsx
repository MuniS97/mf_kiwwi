import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HeaderNav } from './HeaderNav';
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

export const Header: React.FC<Props> = ({ className, translation }) => {
    return (
        <header className={cn(className)}>
            <div className="container flex items-center justify-between gap-10 py-4">
                <Link href={"/"} className="text-2xl font-bold hover:text-cyellow transition-all">
                    mf_kiwwi
                </Link>
                <div className='flex justify-center items-center gap-5'>
                    <HeaderNav translation={translation} />
                </div>
            </div>
        </header>
    );
};