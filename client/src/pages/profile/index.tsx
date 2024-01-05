import React from 'react'
import { Layout } from '../../components/layout'
import { Space, Typography } from 'antd'
import { CustomButton } from '../../components/custom-button'
import { LeftOutlined } from '@ant-design/icons'
import { ReactComponent as User } from '../../assets/header/big-user.svg'
import { EditProfile } from '../../components/personal-data'
// Не успел придумать, как мне реализовать переход на страницу и еще парочку моментов
// На эту страницу можено перейти так  http://localhost:3000/profile/0348c91b-7779-4799-b588-6220a9cede68
// Можно также вытянуть и любой айди через postman или используя npx prisma studio 

export const Profile = () => {
  return (
    <Layout>
      <Space style={{ display: 'flex' }}>
        <CustomButton type='ghost' onClick={() => null} icon={<LeftOutlined />} style={{ color: 'rgba(103, 106, 113, 1)', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Главная</CustomButton>
        <CustomButton type='ghost' onClick={() => null} icon={<LeftOutlined />} style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Профиль</CustomButton>
      </Space>
      <Typography.Title style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontSize: '36px', fontWeight: '700', marginTop: '40px' }}>Профиль</Typography.Title>
      <Space style={{ display: 'flex', alignItems: 'center,',marginTop: '40px' }}>
        <User />
        <Typography.Text style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '600', fontSize: '24px', margin: '0 20px' }}>Имя Фамилия</Typography.Text>
        <Typography.Text style={{ color: 'rgba(34, 176, 125, 1)', marginRight: '10px', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' }}>Активный</Typography.Text>
        <Typography.Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500', padding: '5px 10px', backgroundColor: 'rgba(19, 163, 185, 1)', borderRadius: '5px'}}>Пользователь</Typography.Text>
      </Space>
      <EditProfile />
    </Layout>
  )
}
