import React from 'react';
import { cn } from '@/lib/utils';

type CheckboxProps = {
    label?: string;
    checked?: boolean;
};

const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps>(({ className, label, checked, ...props }, ref) => {
    return (
        <label className="flex items-center space-x-2 relative ">
            <div className="relative size-[20px]">
                <input
                    ref={ref}
                    type="checkbox"
                    checked={checked}
                    className={cn(
                        'peer appearance-none size-[20px] px-[9.14px] bg-Background rounded-lg shadow-[0px_0px_0px_1px_rgba(18,55,105,0.08)] shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24)]',
                        className
                    )}
                    {...props}
                />
                <i className="pi pi-check text-primary text-xs leading-none absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100"></i>
            </div>
            {label && <span className="text-white/90">{label}</span>}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
