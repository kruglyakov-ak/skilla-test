import { FC, useEffect, useState } from 'react'
import { BalanceButton, DatePicker, Select } from '../../components'
import s from './callsSort.module.scss'

export const CallsSort: FC = () => {
  const [selectPeriod, setSelectPeriod] = useState('3 дня')

  const [isFiltersDefault, setIsFiltersDefault] = useState(true)
  const [typeCall, setTypeCall] = useState('Все типы')
  const [employee, setEmployee] = useState('Все сотрудники')
  const [callFrom, setCallFrom] = useState('Все звонки')
  const [source, setSource] = useState('Все источники')
  const [grade, setGrade] = useState('Все оценки')
  const [error, setError] = useState('Все ошибки')

  useEffect(() => {
    if (
      typeCall === 'Все типы' &&
      employee === 'Все сотрудники' &&
      callFrom === 'Все звонки' &&
      source === 'Все источники' &&
      grade === 'Все оценки' &&
      error === 'Все ошибки'
    ) {
      setIsFiltersDefault(true)
    } else {
      setIsFiltersDefault(false)
    }
  }, [callFrom, employee, error, grade, source, typeCall])

  const resetFilters = () => {
    setTypeCall('Все типы')
    setEmployee('Все сотрудники')
    setCallFrom('Все звонки')
    setSource('Все источники')
    setGrade('Все оценки')
    setError('Все ошибки')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.topContent}>
        <BalanceButton balance={272} className={s.balanceButton} />
        <DatePicker
          selectPeriod={selectPeriod}
          setPeriodHandler={setSelectPeriod}
        />
      </div>
      <div className={s.bottomContent}>
        <div className={s.search}></div>
        <div className={s.sortSelects}>
          {!isFiltersDefault && (
            <button className={s.resetFilters} onClick={resetFilters}>
              Сбросить фильтры
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 15 15'
                data-ember-extension='1'
                width='15px'
                height='15px'
                className={s.icon}
              >
                <path
                  fill='#ADBFDF'
                  d='m11.88 4-.89-.88-3.49 3.5L4 3.12l-.88.89 3.5 3.49-3.5 3.5.89.88 3.49-3.5 3.5 3.5.88-.89-3.5-3.49 3.5-3.5Z'
                />
              </svg>
            </button>
          )}

          <Select
            title='Все типы'
            options={['Входящие', 'Исходящие']}
            selectOptionHandler={setTypeCall}
            selectedOption={typeCall}
          />
          <Select
            title='Все сотрудники'
            options={['Константин К.', 'Полина З.']}
            selectOptionHandler={setEmployee}
            selectedOption={employee}
          />
          <Select
            title='Все звонки'
            options={[
              'Все клиенты',
              'Новые клиенты',
              'Все исполнители',
              'Через приложение',
              'Прочие звонки',
            ]}
            selectOptionHandler={setCallFrom}
            selectedOption={callFrom}
          />
          <Select
            title='Все источники'
            options={[]}
            selectOptionHandler={setSource}
            selectedOption={source}
          />
          <Select
            title='Все оценки'
            options={['Распознать', 'Скрипт не использован']}
            selectOptionHandler={setGrade}
            selectedOption={grade}
          />
          <Select
            title='Все ошибки'
            options={[
              'Приветствие',
              'Имя',
              'Цена',
              'Скидка',
              'Предзаказ',
              'Благодарность',
              'Стоп слова',
            ]}
            selectOptionHandler={setError}
            selectedOption={error}
          />
        </div>
      </div>
    </div>
  )
}
