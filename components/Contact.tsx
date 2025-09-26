'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
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
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        institution: '',
        products: [],
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const products = ['AortaSense Pro', 'AcutePanaMaster', 'AppendiXpert', 'CholeciAssist', 'DivertiSense', 'UreteralStoneSense'];

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

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Institution validation
        if (!formData.institution.trim()) {
            newErrors.institution = 'Institution is required';
        }

        // Products validation
        if (formData.products.length === 0) {
            newErrors.products = 'Please select at least one product';
        }

        // Message validation
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
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleProductToggle = (product: string) => {
        setFormData((prev) => ({
            ...prev,
            products: prev.products.includes(product) ? prev.products.filter((p) => p !== product) : [...prev.products, product]
        }));
        // Clear products error when user selects a product
        if (errors.products) {
            setErrors((prev) => ({ ...prev, products: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);
            setSubmitSuccess(true);

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    institution: '',
                    products: [],
                    message: ''
                });
                setSubmitSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container pb-[30rem] pt-16">
            <div className="relative mx-auto mb-96 rounded-3xl bg-main-gradient px-10 pb-40 pt-10 lg:mb-40 lg:max-w-none lg:rounded-4xl lg:p-20">
                <div className="lg:w-1/2">
                    <h1 className="title text-3xl !leading-tight lg:text-5xl">Ready to Integrate Our AI Solutions Into Your Workflow</h1>
                    <p className="mt-4 text-lg text-white/64 lg:text-xl">Start using the power of artificial intelligence to enrich your radiologic workflow.</p>
                </div>
                <AnimatedContainer className="mt-10 h-0 lg:absolute lg:right-14 lg:top-14 lg:mt-0">
                    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4 rounded-3xl bg-surface-0 p-6 shadow-blue-card lg:w-[32rem] lg:rounded-4xl lg:p-8">
                        {submitSuccess && <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">Thank you! Your message has been sent successfully.</div>}

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Name *</label>
                            <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className={errors.name ? 'border-red-500' : ''} />
                            {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Email Address *</label>
                            <Input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className={errors.email ? 'border-red-500' : ''} />
                            {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Phone Number *</label>
                            <Input type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className={errors.phone ? 'border-red-500' : ''} />
                            {errors.phone && <span className="text-sm text-red-500">{errors.phone}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Institution / Hospital / Company *</label>
                            <Input value={formData.institution} onChange={(e) => handleInputChange('institution', e.target.value)} className={errors.institution ? 'border-red-500' : ''} />
                            {errors.institution && <span className="text-sm text-red-500">{errors.institution}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-700">Products *</label>
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[0])} onChange={() => handleProductToggle(products[0])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[0]}</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[1])} onChange={() => handleProductToggle(products[1])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[1]}</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[2])} onChange={() => handleProductToggle(products[2])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[2]}</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[3])} onChange={() => handleProductToggle(products[3])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[3]}</div>
                                    </div>
                                </div>
                                <div className="inline-flex items-center justify-start gap-2">
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[4])} onChange={() => handleProductToggle(products[4])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[4]}</div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-start gap-[9.14px]">
                                        <Checkbox checked={formData.products.includes(products[5])} onChange={() => handleProductToggle(products[5])} />
                                        <div className="flex-1 justify-start text-base font-normal leading-normal text-surface-700">{products[5]}</div>
                                    </div>
                                </div>
                            </div>
                            {errors.products && <span className="text-sm text-red-500">{errors.products}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Message *</label>
                            <Textarea value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className={errors.message ? 'border-red-500' : ''} />
                            {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                        </div>

                        <button className={`button-gradient h-14 w-full transition-opacity ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Book A Demo'}
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
    return <input className={cn('min-h-10 w-full rounded-full border border-transparent bg-transparent px-4 py-1 shadow-stroke outline-none transition-colors focus:border-blue-500', className)} {...props} />;
};

const Textarea: React.FC<TextareaProps> = ({ className, rows = 4, ...props }) => {
    return <textarea rows={rows} className={cn('min-h-10 w-full resize-none rounded-2xl border border-transparent bg-transparent p-3 shadow-stroke outline-none transition-colors focus:border-blue-500', className)} {...props} />;
};
