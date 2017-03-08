export function alpha2ToAlpha3(alpha2: string): string;
export function alpha2ToNumeric(alpha2: string): number;
export function alpha3ToAlpha2(alpha3: string): string;
export function alpha3ToNumeric(alpha3: string): number;
export function numericToAlpha2(numeric: number): string;
export function numericToAlpha3(numeric: number): string;
export function getAlpha2Codes(): string[];
export function getAlpha3Codes(): string[];
export function getNumericCodes(): number[];
export function getName(isoCodeOrNumericCode: string | number, iso639Code: string): string;
export function getNames(iso639Code: string): any;
export function toAlpha3(code: number | string): string;
export function toAlpha2(code: number | string): string;
export function getAlpha2Code(name: string, lang: string): string;
export function getAlpha3Code(name: string, lang: string): string;
export function langs(): string[];
