import { cn } from '@/lib/utils';
import React from 'react';

type CheckboxProps = {
    label?: string;
    checked?: boolean;
};

const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps>(({ className, label, checked, ...props }, ref) => {
    return (
        <label className="relative flex items-center space-x-2">
            <div className="relative size-[20px]">
                <input
                    ref={ref}
                    type="checkbox"
                    checked={checked}
                    className={cn('bg-Background peer size-[20px] appearance-none rounded-lg px-[9.14px]', className)}
                    {...props}
                    style={{ boxShadow: '0 1px 2px 0 rgba(164, 172, 185, 0.24), 0 0 0 1px rgba(18, 55, 105, 0.08)' }}
                />
                <i className="pi pi-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs leading-none text-[#8B5CF6] opacity-0 transition-all duration-100 peer-checked:opacity-100"></i>
            </div>
            {label && <span className="text-white/90">{label}</span>}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
