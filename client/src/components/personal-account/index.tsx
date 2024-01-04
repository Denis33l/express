import { Menu, Row, Space, Typography } from 'antd'
import styles from './index.module.css';
import { useState } from 'react';

export const PersonalAccount = () => {
    const [selectedKey, setSelectedKey] = useState<string>('registries');

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
    };
    return (
        <Space>
            <Row align="middle" justify="center" style={{ marginTop: '40px'}}>
                <Space direction="vertical">
                    <Typography.Title style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontSize: '36px', fontWeight: '700' }}>Личный кабинет</Typography.Title>
                        <Menu mode="horizontal" selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{ color: 'rgba(110, 118, 134, 1)', fontSize: '18px', fontWeight: '500' }}>
                            <Menu.Item key="registries">Реестры</Menu.Item>
                            <Menu.Item key="electronic-services">Электронные сервисы</Menu.Item>
                            <Menu.Item key="data-consumption">Потребление данных</Menu.Item>
                            <Menu.Item key="directories">Справочники</Menu.Item>
                            <Menu.Item key="reports">Отчёты</Menu.Item>
                        </Menu>
                </Space>
            </Row>
        </Space>
    )
}
