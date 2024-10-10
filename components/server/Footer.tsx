import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    translation?: any;
}

export const Footer: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className={cn(className)}>
            Footer
        </div>
    );
};