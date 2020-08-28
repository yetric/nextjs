import React, { useEffect, useState } from "react";
import styles from "./styles/FormItem.module.scss";

type InputType = "text" | "email" | "password";

interface FormItemProps {
    label: string;
    type?: InputType;
    placeholder?: string;
    value?: any;
    help?: string | null;
    onChange?: (val: string) => void | null;
    onTypingDone?: (val: string) => void | null;
    typingDelay?: number | null;
}

export const FormItem = ({
    label,
    type = "text",
    placeholder = "",
    value = "",
    help = null,
    onChange = null,
    onTypingDone = null,
    typingDelay = 550
}: FormItemProps) => {
    const [current, setCurrent] = useState(value);
    const [timer, setTimer] = useState<NodeJS.Timer | undefined>();
    useEffect(() => {
        if (!onTypingDone || !typingDelay) {
            return;
        }
        timer && clearTimeout(timer);
        setTimer(
            setTimeout(() => {
                onTypingDone(current);
            }, typingDelay)
        );
    }, [current]);
    const onValueChange = (event) => {
        const { value } = event.target;
        setCurrent(value);
        onChange && onChange(value);
    };

    return (
        <div className={styles.outer}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                onChange={onValueChange}
                type={type}
                placeholder={placeholder}
                value={current}
            />
            {help && <div className={styles.help}>{help}</div>}
        </div>
    );
};
