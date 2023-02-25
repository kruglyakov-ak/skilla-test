import { FC } from 'react'
import { BalanceButton, DatePicker } from '../../components'
import s from './callsSort.module.scss'

export const CallsSort: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.topContent}>
        <BalanceButton balance={272} className={s.balanceButton}/>
        <DatePicker />
      </div>
      <div className={s.bottomContent}></div>
    </div>
  )
}
