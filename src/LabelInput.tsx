import React, {ChangeEvent} from 'react';
import './App.css';

type PropsType = {
    clasDiv: string
    labelTitle: string
    value: number
    onChange: (value: number) => void
}

export function LabelInputHandler(props: PropsType) {

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.currentTarget.value));
    };
    return (
        <div className={props.clasDiv}>
            <label htmlFor="">{props.labelTitle}<input type="number" value={props.value} onChange={handleOnChange} step={'1'}/></label>
        </div>
    );
}