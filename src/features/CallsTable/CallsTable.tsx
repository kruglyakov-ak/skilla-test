import { SerializedError } from '@reduxjs/toolkit'
import { FC } from 'react'
import cn from 'classnames'
import { Call } from '../../types/call'
import s from './callsTable.module.scss'

interface CallsTableProps {
  calls: Call[] | undefined
  isLoading: boolean
  error?: SerializedError
}

export const CallsTable: FC<CallsTableProps> = ({
  calls,
  error,
  isLoading,
}) => {
  console.log(calls)
  return (
    <div className={s.wrapper}>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error.message}</h1>}
      {!isLoading && (
        <table className={s.callsTable}>
          <colgroup>
            <col className={s.colType} />
            <col className={s.colTime} />
            <col className={s.colEmployee} />
            <col className={s.colCall} />
            <col className={s.colSource} />
            <col className={s.colGrade} />
            <col className={s.colDuration} />
          </colgroup>
          <thead>
            <tr>
              <th>Тип</th>
              <th>Время</th>
              <th>Сотрудник</th>
              <th>Звонок</th>
              <th>Источник</th>
              <th>Оценка</th>
              <th>Длительность</th>
            </tr>
          </thead>
          <tbody>
            {calls?.map(call => (
              <tr>
                <td>{call.in_out}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
