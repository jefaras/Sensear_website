"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Option {
    value: string;
    label: string;
}

interface TransparentSelectProps {
    id?: string;
    name: string;
    value: string;
    options: Option[];
    onChange: (e: any) => void;
    placeholder?: string;
    className?: string; // Container class
    triggerClassName?: string; // Optional class overriding the trigger button styles
    isVinyl?: boolean;
    isDark?: boolean;
    error?: boolean;
    hidePlaceholderOption?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}

export default function TransparentSelect({
    id,
    name,
    value,
    options,
    onChange,
    placeholder = 'Select...',
    className = '',
    triggerClassName,
    isVinyl = false,
    isDark = false,
    error = false,
    hidePlaceholderOption = false,
    ariaLabel,
    ariaLabelledBy,
}: TransparentSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange({
            target: {
                name,
                value: optionValue,
            },
        });
        setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === value);
    const displayLabel = selectedOption ? selectedOption.label : placeholder;
    const listboxId = id ? `${id}-listbox` : undefined;

    // Use default styles if triggerClassName is not fully overriding
    const defaultTriggerClass = isDark
        ? `bg-[rgba(250,246,241,0.05)] text-[#faf6f1] border border-[#faf6f1]/16 ${error ? '!border-red-500' : ''} focus:border-[rgba(240,189,149,0.6)] rounded-[10px] py-3.5 text-[15px]`
        : isVinyl
            ? `bg-white/10 text-white backdrop-blur-sm border border-white/20 ${error ? '!border-red-500' : ''} focus:ring-white/30 rounded-lg`
            : `bg-white text-black border border-gray-200 ${error ? '!border-red-500' : ''} focus:ring-black/20 rounded-lg`;

    const buttonClass = triggerClassName !== undefined
        ? triggerClassName
        : `w-full flex items-center justify-between px-4 py-3 transition-all focus:outline-none ${isDark ? '' : 'focus:ring-2'} ${defaultTriggerClass}`;

    const baseDropdownClass = isDark
        ? 'bg-[#141210] border border-[#faf6f1]/14 text-[#faf6f1] shadow-[0_8px_32px_rgba(0,0,0,0.7)]'
        : isVinyl
            ? 'bg-[#151515]/70 backdrop-blur-2xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-white border text-black border-gray-200 shadow-xl';

    const optionHoverClass = isDark
        ? 'hover:bg-[rgba(240,189,149,0.1)]'
        : isVinyl
            ? 'hover:bg-white/20'
            : 'hover:bg-gray-100';

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                id={id}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={ariaLabel ? `${ariaLabel}: ${displayLabel}` : undefined}
                aria-labelledby={ariaLabelledBy}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={listboxId}
                className={`${buttonClass} ${!selectedOption ? (isDark ? 'text-[rgba(250,246,241,0.32)]' : isVinyl ? 'text-white/50' : '') : ''}`}
            >
                <span className="truncate">{displayLabel}</span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} ${isDark ? 'text-[#f0bd95]/80' : isVinyl ? 'text-white/70' : 'text-gray-500'}`} />
            </button>

            <div
                id={listboxId}
                role="listbox"
                aria-labelledby={ariaLabelledBy}
                aria-label={ariaLabel}
                className={`absolute z-[100] w-full min-w-max left-0 mt-2 rounded-lg overflow-hidden py-1 ${baseDropdownClass} max-h-60 overflow-y-auto ${isOpen ? '' : 'hidden'}`}
            >
                    {!hidePlaceholderOption && (
                        <div
                            role="option"
                            aria-selected={value === ''}
                            onClick={() => handleSelect('')}
                            className={`px-4 py-3 cursor-pointer transition-colors text-sm ${optionHoverClass} ${value === '' ? (isDark ? 'bg-[rgba(240,189,149,0.08)]' : isVinyl ? 'bg-white/10' : 'bg-gray-50') : ''} ${isDark ? 'text-[rgba(250,246,241,0.4)]' : isVinyl ? 'text-white/50' : 'text-gray-400'}`}
                        >
                            {placeholder}
                        </div>
                    )}
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            role="option"
                            aria-selected={value === opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className={`px-4 py-3 cursor-pointer transition-colors ${optionHoverClass} ${value === opt.value ? (isDark ? 'bg-[rgba(240,189,149,0.14)] font-medium' : isVinyl ? 'bg-white/20 font-medium' : 'bg-gray-50 font-medium') : ''}`}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
        </div>
    );
}
