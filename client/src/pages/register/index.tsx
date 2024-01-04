import { User } from "@prisma/client";
import { Card, Form, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../app/serivices/auth";
import { CustomButton } from "../../components/custom-button";
import { CustomInput } from "../../components/custom-input";
import { ErrorMessage } from "../../components/error-message";
import { Layout } from "../../components/layout";
import { PasswordInput } from "../../components/password-input";
import { selectUser } from "../../features/auth/authSlice";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState("");
  const [registerUser] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();

      navigate("/");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title={<span style={{ fontSize: '36px', color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '700' }}>Регистрация</span>} style={{ width: "480px" }}>
          <Form onFinish={register}>
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Логин*</Typography.Text>
            <CustomInput type="text" name="login" placeholder="Введите логин" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Имя*</Typography.Text>
            <CustomInput type="text" name="name" placeholder="Введите Имя" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Фамилия*</Typography.Text>
            <CustomInput type="text" name="surname" placeholder="Введите Фамилию" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Отчество*</Typography.Text>
            <CustomInput type="text" name="patronymic" placeholder="Введите отчество" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Адресс электроной почты*</Typography.Text>
            <CustomInput type="email" name="email" placeholder="Адрес электроной почты" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Мобильный номер*</Typography.Text>
            <CustomInput type="tel" name="number" placeholder="+375 29 123 44 55" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Идентификационный номер*</Typography.Text>
            <CustomInput type="number" name="identificationNumber" placeholder="1234455PB88" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Пароль*</Typography.Text>
            <PasswordInput name="password" placeholder="Пароль" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Подтвердите Пароль*</Typography.Text>
            <PasswordInput name="confirmPassword" placeholder="Пароль" />
            <CustomButton type="primary" htmlType="submit" style={{ backgroundColor: 'rgba(19, 163, 185, 1)', width: '428px', height: '56px', marginBottom: '20px', fontSize: '18px', fontFamily: 'Inter' }}>
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)' }}>
              Уже зарегистрированы? <Link to={Paths.login} style={{ color: 'rgba(19, 163, 185, 1)' }}>Войдите</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};