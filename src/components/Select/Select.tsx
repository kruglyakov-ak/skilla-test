import { FC, useState, MouseEvent } from 'react'
import cn from 'classnames'
import s from './select.module.scss'

interface SelectProps {
  title: string
  options: string[]
  selectedOption: string
  selectOptionHandler: (option: string) => void
  className?: string
}

export const Select: FC<SelectProps> = ({
  title,
  options,
  selectedOption,
  selectOptionHandler,
  className,
}) => {
  const [isActive, setIsActive] = useState(false)

  const selectClickHandler = () => {
    setIsActive(!isActive)
  }

  const optionClickHandler = ({
    currentTarget,
  }: MouseEvent<HTMLDivElement>) => {
    selectOptionHandler(currentTarget.outerText)
    setIsActive(false)
  }

  return (
    <div className={cn(s.wrapper, className)}>
      <div
        className={cn(
          s.select,
          { [s.dropped]: isActive },
          { [s.changed]: selectedOption !== title }
        )}
        onClick={selectClickHandler}
      >
        <span>{selectedOption}</span>
        <svg className={s.icon} fill='none'>
          <path
            fill='#ADBFDF'
            d='M7.41 8.59009 12 13.1701l4.59-4.58001L18 10.0001l-6 6-6-6 1.41-1.41001Z'
            opacity='.8'
          />
        </svg>
      </div>

      {isActive && (
        <div className={s.dropedList}>
          <div className={cn(s.title, s.option)} onClick={optionClickHandler}>
            {title}
          </div>
          {options.map(option => (
            <div className={s.option} key={option} onClick={optionClickHandler}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
