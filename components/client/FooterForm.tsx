'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { sendMessages } from '@/lib/https.request'

type FormData = {
    name: string
    email: string
    phone: string
    message: string
}

export default function FooterForm({ className, translation }: {
    className?: string, translation: {
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
}) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const onSubmit = async (info: FormData) => {
        setIsSubmitting(true)

        let msg = `🆕 Выйти на связь! \n`;
        msg += `📌 Имя: ${info?.name} \n`;
        msg += `📌 Номер телефона: ${info?.phone} \n`;
        msg += `📌 Почта: ${info?.email} \n`;
        msg += `📌 Сообщение: ${info?.message} \n`;


        const res = sendMessages(msg)
        res.then((res) => {
            if (res?.res.status === 200 || res?.res.status === 201) {
                setSubmitMessage(translation?.success)
                setIsSubmitting(false)
            } else {
                setIsSubmitting(false)
                setSubmitMessage(translation?.error)
            }
        })
    }

    return (
        <Card className={cn("w-full max-lg:mx-auto max-w-4xl lg:max-w-md rounded-xl", className)}>
            <CardHeader>
                <CardTitle>{translation?.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                        <Label htmlFor="name" className='cursor-pointer'>{translation?.name}</Label>
                        <Input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            placeholder={translation?.name}
                            className="border-gray-400 border rounded-xl placeholder:text-gray-400"
                        />
                        {errors.name && <p className="text-sm text-red-500">{translation?.nameError}</p>}
                    </div>

                    <div>
                        <Label htmlFor="email" className='cursor-pointer'>{translation?.email}</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder={translation?.email}
                            className="border-gray-400 border rounded-xl placeholder:text-gray-400"
                        />
                        {errors.email && <p className="text-sm text-red-500">{translation?.emailError}</p>}
                    </div>

                    <div>
                        <Label htmlFor="phone" className='cursor-pointer'>{translation?.phone}</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder={translation?.phonePlaceholder}
                            className="border-gray-400 border rounded-xl placeholder:text-gray-400"
                        />
                    </div>

                    <div>
                        <Label htmlFor="message" className='cursor-pointer'>{translation?.message}</Label>
                        <textarea
                            id="message"
                            {...register("message", { required: "Message is required" })}
                            placeholder={translation?.messagePlaceholder}
                            className="h-32 w-full border border-gray-400 p-2 rounded-xl placeholder:text-gray-400"
                        />
                        {errors.message && <p className="text-sm text-red-500">{translation?.messageError}</p>}
                    </div>

                    <Button type="submit" className="w-full border border-gray-400 rounded-xl cursor-pointer" disabled={isSubmitting}>
                        {isSubmitting ? translation?.buttonProcess : translation?.button}
                    </Button>
                </form>
            </CardContent>
            <CardFooter>
                {submitMessage && (
                    <p className="text-sm text-green-600 text-center w-full">{submitMessage}</p>
                )}
            </CardFooter>
        </Card>
    )
}