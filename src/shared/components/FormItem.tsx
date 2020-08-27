import React from "react";

export const FormItem = ({ label, type, placeholder, value }) => (
    <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} value={value} />
    </div>
);
