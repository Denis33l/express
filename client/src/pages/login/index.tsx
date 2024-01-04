import { Card, Form, Row, Space, Typography } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation, UserData } from "../../app/serivices/auth";
import { CustomButton } from "../../components/custom-button";
import { CustomInput } from "../../components/custom-input";
import { ErrorMessage } from "../../components/error-message";
import { Layout } from "../../components/layout";
import { PasswordInput } from "../../components/password-input";
import { selectUser } from "../../features/auth/authSlice";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const user = useSelector(selectUser);
  const [loginUser, loginUserResult] = useLoginMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

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
        <Card title={<span style={{ fontSize: '48px', color: 'rgba(39, 42, 51, 1)', fontFamily: 'Inter', fontWeight: '700' }}>Вход</span>} style={{ width: "480px" }}>
          <Form onFinish={login}>
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Логин</Typography.Text>
            <CustomInput type="text" name="login" placeholder="Введите логин" />
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)', marginBottom: '5px' }}>Пароль</Typography.Text>
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton
              type="primary"
              htmlType="submit"
              loading={loginUserResult.isLoading}
              style={{ backgroundColor: 'rgba(19, 163, 185, 1)', width: '428px', height: '56px', marginBottom: '20px', fontSize: '18px', fontFamily: 'Inter' }}
            >
              Войти
            </CustomButton>
            <CustomButton
              type="ghost"
              htmlType="submit"
              loading={loginUserResult.isLoading}
              style={{ width: '428px', height: '56px', marginBottom: '20px', color: 'rgba(103, 106, 113, 1)', border: '1px rgba(167, 180, 204, 1) solid', borderRadius: '5px' }}
            >
              Авторизация с использованием ЕС ИФЮЛ
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text style={{ fontFamily: 'Inter', fontWeight: '500', color: 'rgba(110, 118, 134, 1)' }}>
              Нет аккаунта? <Link to={Paths.register} style={{ color: 'rgba(19, 163, 185, 1)' }}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};