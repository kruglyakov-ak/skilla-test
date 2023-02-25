import { FC } from 'react'
import cn from 'classnames'
import s from './datePicker.module.scss'

export const DatePicker: FC = () => {
  return (
    <div className={s.wrapper}>
      <button className={cn(s.btn, s.prevBtn)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 7 10'
          data-ember-extension='1'
        >
          <path
            fill='#ADBFDF'
            d='M6.2 8.8 2.4 5l3.8-3.8L5 0 0 5l5 5 1.2-1.2Z'
          />
        </svg>
      </button>
      <div className={s.date}>
        <svg className={s.dateIcon}>
          <path
            fill='#ADBFDF'
            d='M14.4 1.64h-.8V0H12v1.64H4V0H2.4v1.64h-.8c-.88 0-1.6.73-1.6 1.63v13.1C0 17.26.72 18 1.6 18h12.8c.88 0 1.6-.74 1.6-1.64V3.27c0-.9-.72-1.63-1.6-1.63Zm0 14.72H1.6V5.73h12.8v10.63Z'
          />
        </svg>
        3 дня
      </div>
      <button className={cn(s.btn, s.nextBtn)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 7 10'
          data-ember-extension='1'
        >
          <path fill='#ADBFDF' d='M.6 8.8 4.4 5 .6 1.2 1.8 0l5 5-5 5L.6 8.8Z' />
        </svg>
      </button>
    </div>
  )
}
