import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const typedKeys = <T extends object>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>

export const typedEntries = <T extends object>(
  obj: T
): Array<[keyof T, T[keyof T]]> =>
  Object.entries(obj) as Array<[keyof T, T[keyof T]]>
