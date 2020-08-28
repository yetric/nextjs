import React, { useEffect } from "react";
import styles from "./styles/Checkbox.module.scss";

interface CheckboxProps {
    label: string | React.ReactNode;
    value: any;
    checked?: boolean;
    onChange?: (checked: boolean) => void | null;
}

export const Checkbox = ({ label, value, checked = false, onChange = null }: CheckboxProps) => {
    const [isChecked, setIsChecked] = React.useState(checked);
    const onCheckboxChanged = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        onChange && onChange(isChecked);
    }, [isChecked]);

    return (
        <div className={styles.base}>
            <label className={styles.label}>
                <input
                    onChange={onCheckboxChanged}
                    className={styles.control}
                    type="checkbox"
                    value={value}
                    checked={isChecked}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
