import { FC, useEffect, useState, ChangeEvent } from 'react'
import cn from 'classnames'
import { BalanceButton, DatePicker, Select } from '../../components'
import s from './callsSort.module.scss'
import { useAppDispatch } from '../../hooks/redux'
import { sortSlice } from '../../store/reducers/SortSlice'

export const CallsSort: FC = () => {
  const dispatch = useAppDispatch()
  const { setCallType } = sortSlice.actions

  const [isFiltersDefault, setIsFiltersDefault] = useState(true)
  const [isCallSearchEmpty, setIsCallSearchEmpty] = useState(true)

  const [typeCall, setTypeCall] = useState('Все типы')
  const [employee, setEmployee] = useState('Все сотрудники')
  const [callFrom, setCallFrom] = useState('Все звонки')
  const [source, setSource] = useState('Все источники')
  const [grade, setGrade] = useState('Все оценки')
  const [error, setError] = useState('Все ошибки')
  const [callSearch, setCallSearch] = useState('')

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

  useEffect(() => {
    if (callSearch === '') {
      setIsCallSearchEmpty(true)
    } else {
      setIsCallSearchEmpty(false)
    }
  }, [callSearch])

  const resetFilters = () => {
    setTypeCall('Все типы')
    setEmployee('Все сотрудники')
    setCallFrom('Все звонки')
    setSource('Все источники')
    setGrade('Все оценки')
    setError('Все ошибки')
  }

  const changeSearchHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCallSearch(target.value)
  }

  const resetSearch = () => {
    setCallSearch('')
  }

  useEffect(() => {
    dispatch(setCallType(typeCall))
  }, [dispatch, setCallType, typeCall])

  return (
    <div className={s.wrapper}>
      <div className={s.topContent}>
        <BalanceButton balance={272} className={s.balanceButton} />
        <DatePicker />
      </div>
      <div className={s.bottomContent}>
        <div className={s.searchWrapp}>
          <input
            className={cn(s.search, { [s.empty]: isCallSearchEmpty })}
            type='search'
            placeholder='Поиск по звонкам'
            value={callSearch}
            onChange={changeSearchHandler}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width='16px'
            height='16px'
            viewBox='0 0 16 16'
            className={s.searchIcon}
          >
            <path
              fill='#ADBFDF'
              d='M11.44 10.06h-.73l-.25-.24a5.95 5.95 0 1 0-.64.64l.24.25v.73L14.64 16 16 14.64l-4.56-4.58Zm-5.5 0a4.11 4.11 0 1 1 0-8.22 4.11 4.11 0 0 1 0 8.22Z'
            />
          </svg>
          {!isCallSearchEmpty && (
            <button className={s.resetButton} onClick={resetSearch}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 15 15'
                data-ember-extension='1'
                width='15px'
                height='15px'
                className={s.resetIcon}
              >
                <path
                  fill='#ADBFDF'
                  d='m11.88 4-.89-.88-3.49 3.5L4 3.12l-.88.89 3.5 3.49-3.5 3.5.89.88 3.49-3.5 3.5 3.5.88-.89-3.5-3.49 3.5-3.5Z'
                />
              </svg>
            </button>
          )}
        </div>
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
