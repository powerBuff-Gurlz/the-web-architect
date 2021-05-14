import Head from 'next/head'
import Header from './header'

interface Layout {
  children: React.ReactNode
  title: string
  src?: string
}

const Layout: React.FC<Layout> = ({ children, title, src }) => {
  return (
    <>
      <Head>
        <title>{title || 'The Web Architect'}</title>
        <meta property="image" content={src} />
      </Head>
      <Header />
      <div className="min-h-screen container mx-auto">{children}</div>
    </>
  )
}

export default Layout
