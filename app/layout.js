import {Texturina } from 'next/font/google'

import './style/style.css'

const texturina = Texturina({ subsets: ['latin'] })

export const metadata = {
  title: 'Cheesecake',
  description: 'bite the world of cheesecake wonder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={texturina.className}>
       
        {children}</body>
    </html>
  )
}
