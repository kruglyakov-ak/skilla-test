import { FC, useState } from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { Select } from '../../components/Select/Select'
import s from './mainHeader.module.scss'
import { UserMenu } from '../../components/UserMenu/UserMenu'
dayjs.extend(weekday)
require('dayjs/locale/ru')
export const MainHeader: FC = () => {
  const [organization, setOrganization] = useState(
    'ИП Сидорова Александра Михайловна'
  )

  const organisationSelectHandler = (option: string) => {
    setOrganization(option)
  }
  
  const dateNow = dayjs(Date.now()).locale('ru').format("dddd, D MMM")

  return (
    <header className={s.header}>
      <div className={s.date}>{dateNow}</div>

      <div className={s.analytics}>
        <div className={cn(s.analitisItem, s.green)}>
          <p>
            Новые звонки <span>20 из 30 шт</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '69px' }}></div>
          </div>
        </div>
        <div className={cn(s.analitisItem, s.yellow)}>
          <p>
            Качество разговоров <span>40%</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '67px' }}></div>
          </div>
        </div>
        <div className={cn(s.analitisItem, s.red)}>
          <p>
            Конверсия в заказ <span>67%</span>
          </p>
          <div className={s.progressBarWrapp}>
            <div style={{ width: '78px' }}></div>
          </div>
        </div>
      </div>

      <input className={s.headerSearch} type={'search'} />

      <Select
        selectOptionHandler={organisationSelectHandler}
        title={'Все организации'}
        options={[
          'ООО Грузчиков Сервис Запад',
          'ИП Сидорова Александра Михайловна',
          'ИП Иванов М.М.',
        ]}
        selectedOption={organization}
        className={s.organizationSelect}
      />

      <UserMenu className={s.userMenu} />
    </header>
  )
}
