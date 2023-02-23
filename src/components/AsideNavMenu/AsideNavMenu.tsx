import { FC } from 'react'
import cn from 'classnames'
import { mockNavItems } from '../../shared/mocks/navItems'
import s from './asideNavMenu.module.scss'
import { Button } from '../Button/Button'

export const AsideNavMenu: FC = () => {
  return (
    <aside className={s.wrapper}>
      <nav>
        <a href='/' className={s.logoLink}>
          <img
            src='./assets/images/logo.svg'
            alt='Skilla IS'
            width={109}
            height={28}
          />
        </a>
        <ul>
          {mockNavItems.map((item, index) => (
            <li
              key={index}
              className={cn(s.navItem, { [s.active]: item.title === 'Звонки' })}
            >
              <a href='/' className={s.navItemLink}>
                <img
                  className={s.navItemImg}
                  src={`./assets/images/icons/navigation/${item.image}`}
                  alt=''
                  width={24}
                  height={24}
                />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.menuButtons}>
        <Button fill={'fill'} className={s.button}>Добавить заказ</Button>
        <Button fill={'fill'} className={s.button}>Оплата</Button>
      </div>
    </aside>
  )
}
