"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Option {
    value: string;
    label: string;
}

interface TransparentSelectProps {
    name: string;
    value: string;
    options: Option[];
    onChange: (e: any) => void;
    placeholder?: string;
    className?: string; // Container class
    triggerClassName?: string; // Optional class overriding the trigger button styles
    isVinyl?: boolean;
    error?: boolean;
    hidePlaceholderOption?: boolean;
}

export default function TransparentSelect({
    name,
    value,
    options,
    onChange,
    placeholder = 'Select...',
    className = '',
    triggerClassName,
    isVinyl = false,
    error = false,
    hidePlaceholderOption = false,
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

    // Use default styles if triggerClassName is not fully overriding
    const defaultTriggerClass = isVinyl
        ? `bg-white/10 text-white backdrop-blur-sm border border-white/20 ${error ? '!border-red-500' : ''} focus:ring-white/30 rounded-xl`
        : `bg-white text-black border border-gray-200 ${error ? '!border-red-500' : ''} focus:ring-black/20 rounded-xl`;

    const buttonClass = triggerClassName !== undefined
        ? triggerClassName
        : `w-full flex items-center justify-between px-4 py-3 transition-all focus:outline-none focus:ring-2 ${defaultTriggerClass}`;

    const baseDropdownClass = isVinyl
        ? 'bg-[#151515]/70 backdrop-blur-2xl border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
        : 'bg-white border text-black border-gray-200 shadow-xl';

    const optionHoverClass = isVinyl
        ? 'hover:bg-white/20'
        : 'hover:bg-gray-100';

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${buttonClass} ${!selectedOption && isVinyl ? 'text-white/50' : ''}`}
            >
                <span className="truncate">{displayLabel}</span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} ${isVinyl ? 'text-white/70' : 'text-gray-500'}`} />
            </button>

            {isOpen && (
                <div className={`absolute z-[100] w-full min-w-max left-0 mt-2 rounded-xl overflow-hidden py-1 ${baseDropdownClass} max-h-60 overflow-y-auto`}>
                    {!hidePlaceholderOption && (
                        <div
                            onClick={() => handleSelect('')}
                            className={`px-4 py-3 cursor-pointer transition-colors text-sm ${optionHoverClass} ${value === '' ? (isVinyl ? 'bg-white/10' : 'bg-gray-50') : ''} ${isVinyl ? 'text-white/50' : 'text-gray-400'}`}
                        >
                            {placeholder}
                        </div>
                    )}
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className={`px-4 py-3 cursor-pointer transition-colors ${optionHoverClass} ${value === opt.value ? (isVinyl ? 'bg-white/20 font-medium' : 'bg-gray-50 font-medium') : ''}`}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
