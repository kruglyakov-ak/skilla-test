import { FC } from 'react'
import cn from 'classnames'
import s from './datePicker.module.scss'

export const DatePicker: FC = () => {
  return (
    <div className={s.wrapper}>
      <button className={cn(s.btn, s.prevBtn)}></button>
      <div className={s.date}>
        <svg className={s.dateIcon}>
          <path
            fill='#ADBFDF'
            d='M14.4 1.64h-.8V0H12v1.64H4V0H2.4v1.64h-.8c-.88 0-1.6.73-1.6 1.63v13.1C0 17.26.72 18 1.6 18h12.8c.88 0 1.6-.74 1.6-1.64V3.27c0-.9-.72-1.63-1.6-1.63Zm0 14.72H1.6V5.73h12.8v10.63Z'
          />
        </svg>
        3 дня
      </div>
      <button className={cn(s.btn, s.nextBtn)}></button>
    </div>
  )
}
