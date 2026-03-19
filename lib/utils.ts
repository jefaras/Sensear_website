import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts markdown-style bold (**text**) to HTML (<strong>text</strong>)
 * Used for privacy policy and terms of service content
 */
export function parseMarkdownBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}
