import { FC, ReactNode } from 'react'
import { AsideNavMenu, MainHeader } from '..'
import s from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <AsideNavMenu />
      <MainHeader />
      <main className={s.main}>{children}</main>
    </div>
  )
}
