import { FC, useState } from 'react'
import { BalanceButton, DatePicker, Select } from '../../components'
import s from './callsSort.module.scss'

export const CallsSort: FC = () => {
  const [selectPeriod, setSelectPeriod] = useState('3 дня')

  const [typeCall, setTypeCall] = useState('Все типы')

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
          <Select
            title='Все типы'
            options={['Входящие', 'Исходящие']}
            selectOptionHandler={setTypeCall}
            selectedOption={typeCall}
          />
        </div>
      </div>
    </div>
  )
}
