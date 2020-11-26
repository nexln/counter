import React, {MouseEvent} from 'react';
import './App.css';

type PropsType = {
    title: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    dis: boolean
    clasDiv: string
}

export function ButtonsHandler(props: PropsType) {
    return (
        <div className={props.clasDiv}>
            <button className={'btn'} disabled={props.dis} onClick={props.onClick}>{props.title}</button>
        </div>
    );
}