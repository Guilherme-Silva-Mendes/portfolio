import { translations } from './translations';

export type Language = 'en' | 'pt';

export function getLangFromUrl(url: URL): Language {
  const segments = url.pathname.split('/').filter(Boolean);
  // With base '/portfolio', segments are like ['portfolio', 'en'] or ['portfolio', 'pt']
  const langSegment = segments[1];
  if (langSegment === 'pt') return 'pt';
  return 'en';
}

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function getLocalePath(lang: Language, base: string): string {
  return `${base}/${lang}/`;
}
