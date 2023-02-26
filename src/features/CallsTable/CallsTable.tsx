import { SerializedError } from '@reduxjs/toolkit'
import { FC } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { Call } from '../../types/call'
import { Button } from '../../components'
import s from './callsTable.module.scss'
dayjs.extend(duration)

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
              <tr key={call.id}>
                <td>
                  {call.in_out === 0 && (
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-ember-extension='1'
                    >
                      <path
                        d='M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z'
                        fill='#002CFB'
                      />
                    </svg>
                  )}
                  {call.in_out === 1 && (
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-ember-extension='1'
                    >
                      <path
                        d='M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z'
                        fill={call.status === "Не дозвонился" ?  "#EA1A4F" : '#28A879'}
                      />
                    </svg>
                  )}
                </td>
                <td>
                  {dayjs(call.date, 'DD-MM-YYYY HH:mm:ss').format('HH:mm')}
                </td>
                <td>
                  <img src={call.person_avatar} alt='' />
                </td>
                <td>
                  {call.from_number} {Boolean(call.from_site) && 'С сайта'}
                </td>
                <td className={s.sources}>{call.source}</td>
                <td>
                  <Button fill='border'>Распознать</Button>
                </td>
                <td>{dayjs.duration(call.time, 'seconds').format('mm:ss')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
