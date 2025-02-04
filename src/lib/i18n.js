import { writable } from 'svelte/store';

export const locale = writable('en');
export const locales = ['en', 'pl'];


/**
 * @param {string} newLocale
 */
export function setLocale(newLocale) {
  if (locales.includes(newLocale)) {
    locale.set(newLocale);
  }
}
