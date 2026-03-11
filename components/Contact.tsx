'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useForm } from '@formspree/react';
import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    institution: string;
    products: string[];
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    institution?: string;
    products?: string;
    message?: string;
}

const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        institution: '',
        products: [],
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const products = ['AortaSense Pro', 'AbdoXpert Suite'];

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^[+]?[1-9]?[0-9]{7,15}$/;
        return phoneRegex.test(phone.replace(/[\s()-]/g, ''));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.institution.trim()) {
            newErrors.institution = 'Institution is required';
        }

        if (formData.products.length === 0) {
            newErrors.products = 'Please select at least one product';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleProductToggle = (product: string) => {
        setFormData((prev) => ({
            ...prev,
            products: prev.products.includes(product) ? prev.products.filter((p) => p !== product) : [...prev.products, product]
        }));
        if (errors.products) {
            setErrors((prev) => ({ ...prev, products: undefined }));
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        await handleSubmit(e);

        if (state.succeeded) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                institution: '',
                products: [],
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="container pb-[15rem] pt-[15rem]">
            <div className="relative mx-auto mb-64 rounded-3xl bg-main-gradient px-10 pb-[30rem] pt-10 lg:mb-64 lg:max-w-none lg:rounded-4xl lg:p-20">
                <div className="lg:w-1/2">
                    <h1 className="title text-3xl !leading-tight lg:text-5xl">Ready to Integrate Our AI Solutions Into Your Workflow</h1>
                    <p className="mt-4 text-lg text-white/64 lg:text-xl">Start using the power of artificial intelligence to enrich your radiologic workflow.</p>
                </div>
                <AnimatedContainer className="mt-10 lg:absolute lg:right-14 lg:top-14 lg:mt-0">
                    <form onSubmit={onSubmit} className="mx-auto max-w-lg space-y-4 rounded-3xl bg-surface-0 p-6 shadow-blue-card lg:w-[32rem] lg:rounded-4xl lg:p-8">
                        {state.succeeded && <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">Thank you! Your message has been sent successfully.</div>}
                        {state.errors && Object.keys(state.errors).length > 0 && <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">There was an error submitting your form. Please try again.</div>}

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Name *</label>
                            <Input name="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className={errors.name ? 'border-red-500' : ''} />
                            {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Email Address *</label>
                            <Input name="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className={errors.email ? 'border-red-500' : ''} />
                            {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Phone Number *</label>
                            <Input name="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className={errors.phone ? 'border-red-500' : ''} />
                            {errors.phone && <span className="text-sm text-red-500">{errors.phone}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Institution / Hospital / Company *</label>
                            <Input name="institution" value={formData.institution} onChange={(e) => handleInputChange('institution', e.target.value)} className={errors.institution ? 'border-red-500' : ''} />
                            {errors.institution && <span className="text-sm text-red-500">{errors.institution}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-700">Products *</label>
                            <input type="hidden" name="products" value={formData.products.join(', ')} />
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                                {products.map((product) => (
                                    <div key={product} className="flex items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(product)} onChange={() => handleProductToggle(product)} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{product}</div>
                                    </div>
                                ))}
                            </div>
                            {errors.products && <span className="text-sm text-red-500">{errors.products}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Message *</label>
                            <Textarea name="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className={errors.message ? 'border-red-500' : ''} />
                            {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                        </div>

                        <button className={`button-gradient h-14 w-full transition-opacity ${state.submitting ? 'cursor-not-allowed opacity-70' : ''}`} type="submit" disabled={state.submitting}>
                            {state.submitting ? 'Sending...' : 'Book A Demo'}
                        </button>
                    </form>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default Contact;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    rows?: number;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <input className={cn('min-h-10 w-full rounded-full border border-transparent bg-transparent px-4 py-1 shadow-stroke outline-none transition-colors focus:border-secondary-500', className)} {...props} />;
};

const Textarea: React.FC<TextareaProps> = ({ className, rows = 4, ...props }) => {
    return <textarea rows={rows} className={cn('min-h-10 w-full resize-none rounded-2xl border border-transparent bg-transparent p-3 shadow-stroke outline-none transition-colors focus:border-secondary-500', className)} {...props} />;
};
