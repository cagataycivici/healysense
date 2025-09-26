'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import useOutsideClick from '@/lib/hooks/use-outside-click';
export type DropdownMenuProps = {
    isOpen?: boolean;
    onOpenChange?: (val: boolean) => void;
    unstyled?: boolean;
};

export type DropdownMenuContextType = {
    dropdownMenuRef: React.RefObject<HTMLDivElement>;
    toggleOpen: () => void;
} & DropdownMenuProps;
const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null);

export const useDropdownMenu = () => {
    const context = React.useContext(DropdownMenuContext);
    if (!context) {
        throw new Error('useDropdownMenu must be used within a DropdownMenu');
    }
    return context;
};
const DropdownMenu: React.FC<React.HTMLAttributes<HTMLDivElement> & DropdownMenuProps> = ({ className, unstyled = false, isOpen = false, onOpenChange, ...props }) => {
    const [open, setOpen] = React.useState(isOpen);
    const dropdownMenuRef = React.useRef<HTMLDivElement>(null);
    useOutsideClick({
        ref: dropdownMenuRef,
        handler: () => setOpen(false)
    });
    React.useEffect(() => {
        if (!onOpenChange) return;
        onOpenChange(open);
    }, [open, onOpenChange]);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };
    return (
        <DropdownMenuContext.Provider
            value={{
                unstyled,
                dropdownMenuRef,
                isOpen: open,
                onOpenChange,
                toggleOpen
            }}
        >
            <div ref={dropdownMenuRef} className={cn('group relative z-50', className)} data-open={open} {...props} />
        </DropdownMenuContext.Provider>
    );
};

const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => {
    const { toggleOpen, unstyled } = useDropdownMenu();

    return (
        <button
            ref={ref}
            onClick={toggleOpen}
            className={cn(
                unstyled
                    ? ''
                    : 'flex w-full items-center gap-2 rounded-full border-0 border-white/12 bg-surface-0 px-4 py-3 text-surface-950 shadow-stroke transition-all hover:bg-surface-100 group-data-[open=true]:bg-surface-100/75 dark:border dark:bg-surface-950 dark:text-surface-0 dark:shadow-none dark:hover:bg-surface-800 dark:group-data-[open=true]:bg-surface-800/75 [&>span]:truncate',
                className
            )}
            {...props}
        />
    );
});

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    const { isOpen, unstyled } = useDropdownMenu();
    return (
        <div
            ref={ref}
            className={cn(
                'absolute left-0 top-[calc(100%+1rem)] z-[999999] flex w-full min-w-full flex-col transition-all duration-100 ease-in-out',
                unstyled ? '' : 'rounded-lg border-0 border-white/12 bg-surface-0 p-1 shadow-stroke dark:border dark:bg-surface-950 dark:shadow-none',
                isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0',
                className
            )}
            {...props}
        />
    );
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, onClick, ...props }, ref) => {
    const { toggleOpen, unstyled } = useDropdownMenu() || {};

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (toggleOpen) {
            toggleOpen();
        }
        if (onClick) {
            onClick(e);
        }
    };

    return <button ref={ref} onClick={handleClick} className={cn(unstyled ? '' : 'flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-surface-100 dark:hover:bg-surface-800 [&>span]:truncate', className)} {...props} />;
});

DropdownMenuItem.displayName = 'DropdownMenuItem';
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
