import { FC } from 'react'
import s from './balanceButton.module.scss'

interface BalanceButtonProps {
  balance: number
}

export const BalanceButton: FC<BalanceButtonProps> = ({ balance }) => {
  return (
    <div className={s.balanceWrapper}>
      <p className={s.balance}>
        Баланс: <span>{balance} &#8381;</span>
      </p>
      <button className={s.addButton}>
        <svg>
          <path
            d='M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z'
            fill='#002CFB'
          />
        </svg>
      </button>
    </div>
  )
}
