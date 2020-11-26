import React from 'react';
import './App.css';

type PropsType = {
    title: string | number
    clasNam: string
    error: boolean
}

export function CounterHandler(props: PropsType) {
    return (
        <div className={props.clasNam}>{props.error ? 'Incorrect value' : props.title}</div>
    );
}