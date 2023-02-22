import { FC, ReactNode } from 'react'
import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className={s.main}>{children}</main>
}
