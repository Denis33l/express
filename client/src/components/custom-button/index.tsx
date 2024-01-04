import { Button } from 'antd'
import React from 'react'

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | "ghost" | undefined
    danger?: boolean | undefined;
    loading?: boolean;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

export const CustomButton = ({ children, htmlType = 'button', type, danger, loading, onClick, style, icon }: Props) => {
    return (
        <Button
            htmlType={htmlType}
            type={type}
            danger={danger}
            loading={loading}
            onClick={onClick}
            style={style}
            icon={icon}
        >
            {children}
        </Button>
    )
}
