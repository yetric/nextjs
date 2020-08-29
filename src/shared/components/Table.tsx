import React from "react";
import styles from "./styles/Table.module.scss";
import clsx from "clsx";

interface TableProps {
    headers?: string[];
    data: any[];
    tight?: boolean;
}

export const Table = ({ tight = false, headers = [], data }: TableProps) => {
    const tableClasses = clsx(styles.table, {
        [styles.tight]: tight
    });
    return (
        <table className={tableClasses}>
            {headers.length > 0 && (
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th>{header}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {data.map((row) => (
                    <tr>
                        {row.map((col) => (
                            <td>{col}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
