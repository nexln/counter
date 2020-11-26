import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterHandler} from "./Table";
import {ButtonsHandler} from "./Buttons";
import {LabelInputHandler} from "./LabelInput";

export type CountType = {
    counter: string | number
    incButton: boolean
    resetButton: boolean
    clasNam: string
}

function App() {

    useEffect(() => {
        let min = localStorage.getItem('min');
        let max = localStorage.getItem('max');
        if (min && max) {
            setMin(+min);
            setMax(+max)
        }


    }, []);

    const [max, setMax] = useState(5);
    const [min, setMin] = useState(0);
    let [counter, setData] = useState<Array<CountType>>([{
        counter: "Enter values and press set",
        incButton: true,
        resetButton: true,
        clasNam: 'Counter'
    }]);

    const [error, setError] = useState(false);

    let i = Number(counter[0].counter) + 1;


    function increment() {
        const newCount: CountType = {counter: i, incButton: false, resetButton: false, clasNam: 'Counter'};
        setData([newCount]);
        if (counter[0].counter === max - 1) {
            const newCount: CountType = {counter: i, incButton: true, resetButton: false, clasNam: 'RedCounter'};
            setData([newCount])
        }
    }

    function setMinMaxCounter() {
        const newCount: CountType = {counter: min, incButton: false, resetButton: true, clasNam: 'Counter'};
        setData([newCount]);
        if (min < 0) {
            const newCount: CountType = {
                counter: 'Incorrect value',
                incButton: true,
                resetButton: false,
                clasNam: 'RedCounter'
            };
            setData([newCount])
        }

        localStorage.setItem('min', min.toString());
        localStorage.setItem('max', max.toString());

    }


    function reset() {
        const newCount: CountType = {
            counter: "Enter values and press set",
            incButton: false,
            resetButton: true,
            clasNam: 'Counter'
        };
        setData([newCount])
    }

    function changeMinValue(minValue: number) {
        if (minValue < 0 || minValue > max - 1) {
            setError(true)
        } else {
            setMin(minValue);
            setError(false)
        }
    }

    function changeMaxValue(maxValue: number) {
        if (maxValue < min + 1 || min < 0) {
            setError(true)
        } else {
            setMax(maxValue);
            setError(false)
        }
    }

    return (
        <div className="App">
            <div className='handler1'>
                <div className='labelHandler'>
                    <LabelInputHandler clasDiv={'Label1'} labelTitle={'MaxValue'} value={max}
                                       onChange={changeMaxValue}/>
                    <LabelInputHandler clasDiv={'Label2'} labelTitle={'StartValue'} value={min}
                                       onChange={changeMinValue}/>
                </div>
                <ButtonsHandler clasDiv={'ButtonSetHandler'} title={'set'} onClick={setMinMaxCounter} dis={false}/>
            </div>
            <div className='handler2'>
                <CounterHandler clasNam={counter[0].clasNam} title={counter[0].counter} error={error}/>
                <ButtonsHandler clasDiv={'Button1Handler'} title={'inc'} onClick={increment}
                                dis={counter[0].incButton}/>
                <ButtonsHandler clasDiv={'Button2Handler'} title={'reset'} onClick={reset}
                                dis={counter[0].resetButton}/>
            </div>
        </div>
    );
}

export default App;
