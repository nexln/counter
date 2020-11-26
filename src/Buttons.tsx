import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "@material-ui/core";

type PropsType = {
    title: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    dis: boolean
    clasDiv: string
}

export function ButtonsHandler(props: PropsType) {
    return (
        <div className={props.clasDiv}>
            <Button className={'btn'} size={'large'} variant={'outlined'} color={'primary'} disabled={props.dis} onClick={props.onClick}>{props.title}</Button>
        </div>
    );
}