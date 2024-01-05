import React from 'react'
import styles from './index.module.css'
import { Layout, Space } from 'antd'
import { ReactComponent as Logo } from '../../assets/header/logo.svg';
import { ReactComponent as Notification } from '../../assets/header/notification.svg';
import { ReactComponent as ArrowDown } from '../../assets/header/arrow-down.svg';
import { ReactComponent as User } from '../../assets/header/user.svg';
import { ReactComponent as Circle } from '../../assets/header/circle-user.svg';
import { CustomButton } from '../custom-button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../../paths';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';
import { useGetProfileQuery } from '../../app/serivices/profile';

export const Header: React.FC = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetProfileQuery(params.id || "");

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login')
    }

    // const { data: userProfile } = useGetProfileQuery(user?.id || '');

    const onProfileClick = () => {
        if (data) {
            console.log(`${Paths.profile}/${data.id}`);
            navigate(`${Paths.profile}/${data.id}`);
        }
    }

    return (
        <Layout.Header className={styles.header}>
            <Space className={styles.header__logo}>
                <Link to={Paths.home}>
                    <CustomButton type='ghost'>
                        <Logo />
                    </CustomButton>
                </Link>
            </Space>
            <Space className={styles.header__nav}>
                <Link to={Paths.home} className={styles.header__nav_text}>
                    Меню
                </Link>
                <Link to={Paths.home} className={styles.header__nav_text}>
                    Вопросы и ответы
                </Link>
                <Link to={Paths.home} className={styles.header__nav_text}>
                    Об АИС
                </Link>
            </Space>
            <Space className={styles.header__login}>
                <Notification />
                {
                    user ? (
                        <Space style={{ display: 'flex' }}>
                            <CustomButton type='ghost' onClick={onProfileClick} icon={<Circle />} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(110, 118, 134, 1)', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px', padding: '0' }}>
                                {data ? `${data.name} ${data.surname}` : 'Имя Фамилия'}
                            </CustomButton>
                            <CustomButton type='ghost' onClick={onLogoutClick} style={{ padding: '0' }}><ArrowDown /></CustomButton>
                        </Space>
                    ) : (
                        <Space className={styles.header__login_block}>
                            <User />
                            <Link to={Paths.login}>
                                <CustomButton type='ghost'>Войти в аккаунт</CustomButton>
                            </Link>
                            <ArrowDown />
                        </Space>
                    )
                }
            </Space>
        </Layout.Header >
    )
}
