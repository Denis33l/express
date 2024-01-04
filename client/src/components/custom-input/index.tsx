import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  style?: React.CSSProperties;
};

export const CustomInput = ({
  type = 'text',
  name,
  placeholder,
  style
}: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={ true }
    >
      <Input
        placeholder={placeholder}
        type={ type }
        size="large"
        style={style}
      />
    </Form.Item>
  );
};