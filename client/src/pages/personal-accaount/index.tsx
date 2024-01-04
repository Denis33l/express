import React, { useEffect } from 'react'
import { Layout } from '../../components/layout'
import { CustomButton } from '../../components/custom-button'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import { Button, Input, Space, Typography } from 'antd'
import { PersonalAccount } from '../../components/personal-account'
import { selectUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useGetProfileQuery } from '../../app/serivices/profile'

export const Personal = () => {

  const navigate = useNavigate();

  // const goToUserProfile = (userId) => {
  //   navigate(`${Paths.userProfile}/${userId}`);
  // };
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <Layout>
      <Space style={{ display: 'flex' }}>
        <CustomButton type='ghost' onClick={() => null} icon={<LeftOutlined />} style={{ color: 'rgba(103, 106, 113, 1)', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Главная</CustomButton>
        <CustomButton type='ghost' onClick={() => null} icon={<LeftOutlined />} style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Личный кабинет</CustomButton>
      </Space>
      <PersonalAccount />
      <Space style={{ display: 'block', marginTop: '160px' }}>
        <Typography.Text style={{ color: 'rgba(110, 118, 134, 1)', fontFamily: 'Inter', fontWeight: '600', fontSize: '18px' }}>Выбор ИССР для внесения метаданных</Typography.Text>
        <Space.Compact style={{ width: "60%" }}>
          <Input placeholder='Выберите ИС/СР для внесения метаданных...' style={{ padding: '18.5px 0px 18.5px 16px' }} />
          <Button type="primary" style={{ backgroundColor: 'rgba(19, 163, 185, 1)', padding: '19.5px 42.5px', fontFamily: 'Inter', fontWeight: '600', fontSize: '18px', height: '61px' }}>Показать</Button>
        </Space.Compact>
      </Space>
    </Layout>
  )
}
