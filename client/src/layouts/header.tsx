import Link from 'next/link'
import { ReactElement } from 'react'

const Header: React.FC = (): ReactElement => {
  return (
    <div className="container mx-auto py-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
