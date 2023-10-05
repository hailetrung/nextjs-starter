import { createI18nClient } from 'next-international/client'

export const { useI18n, useChangeLocale, useCurrentLocale, useScopedI18n, I18nProviderClient } = createI18nClient({
    en: () => import('./dictionaries/en'),
    fr: () => import('./dictionaries/vi')
})