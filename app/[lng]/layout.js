import '@/app/globals.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export const metadata = {
  title: 'MATEC',
  description: 'MATEC Solutions',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

//Revisar implementacion https://locize.com/blog/next-13-app-dir-i18n/
export default function RootLayout({ children, params:{lng} }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head/>
      <body>{children}</body>
    </html>
  )
}
