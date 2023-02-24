import { FC, useState } from 'react'
import cn from 'classnames'
import s from './userMenu.module.scss'

export const UserMenu: FC = () => {
  const [isUserMenuDropped, setIsUserMenuDropped] = useState(false)

  const userMenuClickHandler = () => {
    setIsUserMenuDropped(!isUserMenuDropped)
  }

  return (
    <div className={s.wrapper}>
      <div
        className={cn(s.userMenu, { [s.dropped]: isUserMenuDropped })}
        onClick={userMenuClickHandler}
      >
        <img src='./assets/images/header-avatar.png' alt='Аватар' />
        <svg className={s.icon} fill='none'>
          <path
            fill='#ADBFDF'
            d='M7.41 8.59009 12 13.1701l4.59-4.58001L18 10.0001l-6 6-6-6 1.41-1.41001Z'
            opacity='.8'
          />
        </svg>
      </div>

      {isUserMenuDropped && (
        <div className={s.droppedMenu}>
          <div className={s.userTitle}>
            <p className={s.userName}>Упоров Кирилл</p>
            <p className={s.userDesc}>
              <span>Директор</span> <span>Санкт-Петербург</span>
            </p>
          </div>

          <div className={s.userContacts}>
            <p className={s.phone}>8 (800) 333-17-21</p>
            <p className={s.email}>hi@skilla.ru</p>
          </div>

          <div className={s.employeeListWrapp}>
            <div className={s.employeeList}>
              <p className={s.employeeListTitle}>Операторы</p>

              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Мирон Батонов
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Алексей Ильин
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Милана Константинопольская
                <span className={s.loginButton}></span>
              </div>
            </div>

            <div className={s.employeeList}>
              <p className={s.employeeListTitle}>Логисты</p>

              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Александра Сизых
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Илья Алексеев
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Владимир Петров
                <span className={s.loginButton}></span>
              </div>
            </div>

            <div className={s.employeeList}>
              <p className={s.employeeListTitle}>Бухгалтеры</p>

              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Полина Калинина
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Наталья Натальева
                <span className={s.loginButton}></span>
              </div>
              <div className={s.employee}>
                <img
                  className={s.employeeAvatar}
                  src='./assets/images/user-menu-avatar.png'
                  alt='Аватар'
                />
                Константин Константинопольский
                <span className={s.loginButton}></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
