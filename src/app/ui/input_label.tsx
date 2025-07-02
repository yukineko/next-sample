import { FC, useState } from "react";

interface Prop {
    label_name: string;
    value: string;
    field: string;
    handleChange?: (value: string, field:string) => void;
}
export const InputLabel : FC<Prop> = ({ label_name, value, handleChange, field}) => {
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        handleChange?.(value, field);
    }
    return(
        <div>
            <label>{label_name}</label>
            <input type="text" onChange={changeValue} value={value} />
        </div>
    )
}