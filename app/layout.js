import './globals.css'

export const metadata = {
  title: 'MATEC',
  description: 'MATEC Solutions',
}

//Revisar implementacion https://locize.com/blog/next-13-app-dir-i18n/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
