import { UserProfile } from "@prisma/client";
import { Form, Space, Typography } from "antd";
import { CustomButton } from "../custom-button";
import { CustomInput } from "../custom-input";
import { ErrorMessage } from "../error-message";
import { PasswordInput } from "../password-input";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    error?: string;
    profile?: T;
};

export const ProfileForm = ({
    onFinish,
    profile,
    btnText,
    error,
}: Props<UserProfile>) => {
    return (
        <Form name="edit-profile" onFinish={onFinish} initialValues={profile}>
            <Typography.Title style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '600', fontSize: '18px', margin: '81px 0 20px 0' }}>Личные данные</Typography.Title>
            <Space style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Имя*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="text" name="name" placeholder="Введите Имя" />
                </Space>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Фамилия*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="text" name="surname" placeholder="Введите Фамилию" />
                </Space>
            </Space>
            <Space style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Отчество*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="text" name="patronymic" placeholder="Введите отчество" />
                </Space>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Идентификационный номер*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="number" name="identificationNumber" placeholder="1234455PB88" />
                </Space>
            </Space>
            <Space style={{ display: 'block', width: '50%' }}>
                <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Логин*</Typography.Text>
                <CustomInput style={{ width: '470px' }} type="text" name="login" placeholder="Введите логин" />
            </Space>
            <Space style={{ display: 'flex', margin: '81px 0 20px 0', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography.Title style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '600', fontSize: '18px', marginBottom: '0' }}>Контакты</Typography.Title>
                <CustomButton style={{ color: 'rgba(19, 163, 185, 1)', border: 'none' }}>Редактировать</CustomButton>
            </Space>
            <Space style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Адресс электроной почты*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="email" name="email" placeholder="Адрес электроной почты" />
                </Space>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Мобильный номер*</Typography.Text>
                    <CustomInput style={{ width: '470px' }} type="number" name="number" placeholder="+375 29 123 44 55" />
                </Space>
            </Space>
            <Space style={{ display: 'flex', margin: '81px 0 20px 0', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography.Title style={{ color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '600', fontSize: '18px', marginBottom: '0' }}>Пароль</Typography.Title>
                <CustomButton style={{ color: 'rgba(19, 163, 185, 1)', border: 'none' }}>Редактировать</CustomButton>
            </Space>
            <Space style={{ display: 'block', width: '50%' }}>
                <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Текущий пароль*</Typography.Text>
                <PasswordInput style={{ width: '470px' }} name="password" placeholder="Пароль" />
            </Space>
            <Space style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Пароль*</Typography.Text>
                    <PasswordInput style={{ width: '470px' }} name="password" placeholder="Пароль" />
                </Space>
                <Space style={{ display: 'block' }}>
                    <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Подтвердите Пароль*</Typography.Text>
                    <PasswordInput style={{ width: '470px' }} name="confirmPassword" placeholder="Пароль" />
                </Space>
            </Space>
            <Space direction="vertical" size="large">
                <ErrorMessage message={error} />
                <CustomButton htmlType="submit" style={{ padding: '17px 86.5px', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600', backgroundColor: 'rgba(19, 163, 185, 1)', margin: '81px 0', height: '61px', color: 'rgba(255, 255, 255, 1)' }}>{btnText}</CustomButton>
            </Space>
        </Form>
    );
};