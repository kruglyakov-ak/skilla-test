import { FC, useState } from 'react'
import cn from 'classnames'
import s from './datePicker.module.scss'

interface DatePickerProps {
  selectPeriod: string
  setPeriodHandler: (period: string) => void
}

export const DatePicker: FC<DatePickerProps> = ({
  selectPeriod,
  setPeriodHandler,
}) => {
  const [isDropp, setisDropp] = useState(false)
  const periods = ['3 дня', 'Неделя', 'Месяц', 'Год']

  const dateClickHandler = () => {
    setisDropp(!isDropp)
  }

  const changePeriodHandler = (index: number) => {
    setPeriodHandler(periods[index])
    setisDropp(false)
  }

  const nextButtonClick = () => {
    if (periods.indexOf(selectPeriod) === periods.length - 1) {
      setPeriodHandler(periods[0])
    } else {
      setPeriodHandler(periods[periods.indexOf(selectPeriod) + 1])
    }
  }

  const prevButtonClick = () => {
    if (periods.indexOf(selectPeriod) === 0) {
      setPeriodHandler(periods[periods.length - 1])
    } else {
      setPeriodHandler(periods[periods.indexOf(selectPeriod) - 1])
    }
  }

  return (
    <div className={s.wrapper}>
      <button className={cn(s.btn, s.prevBtn)} onClick={prevButtonClick}>
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
      <div className={s.date} onClick={dateClickHandler}>
        <svg className={s.dateIcon}>
          <path
            fill='#ADBFDF'
            d='M14.4 1.64h-.8V0H12v1.64H4V0H2.4v1.64h-.8c-.88 0-1.6.73-1.6 1.63v13.1C0 17.26.72 18 1.6 18h12.8c.88 0 1.6-.74 1.6-1.64V3.27c0-.9-.72-1.63-1.6-1.63Zm0 14.72H1.6V5.73h12.8v10.63Z'
          />
        </svg>
        {selectPeriod}
      </div>
      <button className={cn(s.btn, s.nextBtn)} onClick={nextButtonClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 7 10'
          data-ember-extension='1'
        >
          <path fill='#ADBFDF' d='M.6 8.8 4.4 5 .6 1.2 1.8 0l5 5-5 5L.6 8.8Z' />
        </svg>
      </button>

      {isDropp && (
        <div className={s.droppedList}>
          {periods.map((period, index) => (
            <p
              className={cn(s.droppedItem, {
                [s.active]: selectPeriod === period,
              })}
              onClick={() => changePeriodHandler(index)}
            >
              {period}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
