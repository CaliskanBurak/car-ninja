import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Car ninja',
  description: 'car ninja website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
