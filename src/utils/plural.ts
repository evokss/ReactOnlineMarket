/**
 * Pluralizes a string based on the provided value and locale.
 * Returns the appropriate plural form from the variants object.
 * @param value The number determining the plural form.
 * @param variants An object containing plural forms (e.g., { one: 'item', few: 'items', many: 'items' }).
 * @param locale The locale code (e.g., 'ru-RU', 'en-US'). Defaults to 'ru-RU'.
 * @returns The pluralized string based on the selected form, or an empty string if no variant matches.
 * @example
 * plural(5, { one: 'товар', few: 'товара', many: 'товаров' }) // Returns 'товаров'
 */
export default function plural(
  value: number,
  variants: Partial<Record<Intl.LDMLPluralRule, string>> = {},
  locale: string = 'ru-RU'
): string {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] ?? '';
}
