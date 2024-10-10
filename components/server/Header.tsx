import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import { HeaderNav } from './HeaderNav';
interface Props {
    className?: string;
    translation?: any
}

export const Header: React.FC<Props> = ({ className, translation }) => {
    return (
        <header className={cn(className)}>
            <div className="container flex items-center justify-between gap-10 py-4">
                <Link href={"/"} className="text-2xl font-bold hover:text-black/75 transition-all">
                    mf_kiwwi
                </Link>
                <HeaderNav translation={translation?.nav} />
            </div>
        </header>
    );
};