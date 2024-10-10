import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

interface Props {
    className?: string;
    translation?: any;
}

export const HeaderNav: React.FC<Props> = ({ className, translation }) => {
    return (
        <nav className={cn(className)}>
            <ul className="w-full flex space-x-6 max-md:hidden">
                {["Assortment", "News", "Community", "Contact"].map((item) => (
                    <li key={item}>
                        <Button variant="ghost" className='hover:text-black/75 transition-all text-base' asChild>
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
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};