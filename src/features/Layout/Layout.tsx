import { FC, ReactNode } from 'react'
import { MainHeader } from '../../components'
import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={s.main}>{children}</main>
    </>
  )
}
