import './globals.css'

export const metadata = {
  title: 'MATEC',
  description: 'MATEC Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
