import { FC, ReactNode } from 'react'
import cn from 'classnames'
import s from './button.module.scss'

interface ButtonProps {
  children: ReactNode
  fill: 'fill' | 'border' | 'none'
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, fill, className }) => {
  return (
    <button type='button' className={cn(s.button, s[fill], className)}>
      {children}
    </button>
  )
}
