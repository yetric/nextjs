import React, { ReactNode } from "react";

interface FormProps {
    children: ReactNode;
}

export const Form = ({ children }: FormProps) => <form>{children}</form>;
