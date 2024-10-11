import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface Props {
    className?: string;
}

export const TranslationSwitch: React.FC<Props> = () => {
    const router = useRouter();
    const { locale } = router;
    const [localeValue, setLocaleValue] = useState<string | undefined>(locale);

    const changeLang = (e: string) => {
        const newLocale = e;
        router.push(
            { pathname: router.pathname, query: router.query },
            router.asPath,
            { locale: newLocale }
        );
        setLocaleValue(newLocale);
    };

    return (
        <Select onValueChange={changeLang}>
            <SelectTrigger className="w-[70px] border border-gray-400 rounded-xl text-gray-400 font-medium">
                <SelectValue placeholder={localeValue?.toUpperCase()} />
            </SelectTrigger>
            <SelectContent className='w-[75px] bg-white rounded-lg'>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="uz">UZ</SelectItem>
            </SelectContent>
        </Select>
    );
};
