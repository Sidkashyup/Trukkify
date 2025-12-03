export const fallbackLng = 'en'
export const languages = ['en', 'hi', 'bn', 'mr', 'ta', 'te', 'gu', 'pu', 'or', 'kn', 'as', 'ml',]
export const defaultNS = 'common'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}