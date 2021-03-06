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
                        {headers.map((header, index) => (
                            <th key={`row-header-${index}`}>{header}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                        {row.map((col, colIndex) => (
                            <td key={`col-${colIndex}-row-${rowIndex}`}>{col}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
