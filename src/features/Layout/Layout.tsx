import { FC, ReactNode } from 'react'
import { AsideNavMenu, MainHeader } from '../../components'
import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <AsideNavMenu />
      <main className={s.main}>{children}</main>
    </>
  )
}
