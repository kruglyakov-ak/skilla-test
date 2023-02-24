import { FC, useState } from 'react'
import cn from 'classnames'
import s from './userMenu.module.scss'

interface UserMenuProps {
  className?: string
}

export const UserMenu: FC<UserMenuProps> = ({ className }) => {
  const [isUserMenuDropped, setIsUserMenuDropped] = useState(false)

  const userMenuClickHandler = () => {
    setIsUserMenuDropped(!isUserMenuDropped)
  }

  return (
    <div className={cn(s.wrapper, className)}>
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
          <button className={s.exitButton}>
            <svg className={s.exitButtonImage}>
              <path
                d='M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z'
                fill='#ADBFDF'
              />
            </svg>
          </button>
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
