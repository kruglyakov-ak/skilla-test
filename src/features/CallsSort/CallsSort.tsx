import { FC, useState } from 'react'
import { BalanceButton, DatePicker } from '../../components'
import s from './callsSort.module.scss'

export const CallsSort: FC = () => {
  const [selectPeriod, setSelectPeriod] = useState('3 дня')

  return (
    <div className={s.wrapper}>
      <div className={s.topContent}>
        <BalanceButton balance={272} className={s.balanceButton} />
        <DatePicker selectPeriod={selectPeriod} setPeriodHandler={setSelectPeriod} />
      </div>
      <div className={s.bottomContent}></div>
    </div>
  )
}
