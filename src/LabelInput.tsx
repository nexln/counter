import React, {ChangeEvent} from 'react';
import './App.css';
import {TextField} from "@material-ui/core";



type PropsType = {
    clasDiv: string
    labelTitle: string
    value: number
    onChange: (value: number) => void
    error: boolean
}

export function LabelInputHandler(props: PropsType) {

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.currentTarget.value));
    };
    return (
        <div className={props.clasDiv}>
            <TextField InputLabelProps={{shrink: true,}}
                       variant="filled"
                       type="number"
                       value={props.value}
                       onChange={handleOnChange}
                       label={props.labelTitle}
                       error={props.error}
                       />
        </div>
    );
}