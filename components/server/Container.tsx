import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn("w-full max-w-[1480px] px-5 sm:px-7 md:px-10 mx-auto", className)}>
            {children}
        </div>
    );
};