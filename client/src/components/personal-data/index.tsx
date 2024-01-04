import { UserProfile } from "@prisma/client";
import { Row } from "antd";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useEditProfileMutation, useGetProfileQuery } from "../../app/serivices/profile";
import { ProfileForm } from "../../components/profile-form";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const EditProfile = () => {
  const params = useParams<{ id: string }>();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetProfileQuery(params.id || "");
  const [editProfile] = useEditProfileMutation();

  if (isLoading) {
    return <span>Загрузка</span>
  }

  const handleEditUser = async (profile: UserProfile) => {
    try {
      const editedProfile = {
        ...data,
        ...profile
      };

      await editProfile(editedProfile).unwrap();

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
      <Row justify="start">
        <ProfileForm
          onFinish={handleEditUser}
          profile={data}
          btnText="Сохранить"
          error={ error }
        />
      </Row>
  );
};