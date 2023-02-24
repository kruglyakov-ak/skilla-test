import { FC } from 'react'
import cn from 'classnames'
import s from './mainHeader.module.scss'

export const MainHeader: FC = () => {
  return (
    <header className={s.header}>
      <div>Среда, 13 окт</div>

      <div className={s.analytics}>
        <div className={cn(s.analitisItem, s.green)}>
          <p>
            Новые звонки <span>20 из 30 шт</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '69px' }}></div>
          </div>
        </div>
        <div className={cn(s.analitisItem, s.yellow)}>
          <p>
            Качество разговоров <span>40%</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '67px' }}></div>
          </div>
        </div>
        <div className={cn(s.analitisItem, s.red)}>
          <p>
            Конверсия в заказ <span>67%</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '78px' }}></div>
          </div>
        </div>
      </div>

      <input className={s.headerSearch} type={'search'} />

      <select>
        <option>ООО Грузчиков Сервис Запад</option>
        <option selected>ИП Сидорова Александра Михайловна</option>
        <option>ИП Иванов М.М.</option>
      </select>

      <div className={s.user}>
        <img src='./assets/images/header-avatar.png' alt='Аватар' />
      </div>
    </header>
  )
}
