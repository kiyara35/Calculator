import React, {useState} from 'react';
import './Calculator.css'

const Calculator = () => {

    const [input, setInput] = useState('')
    const calcBtns = [];
    const operators = [];

    [7,8,9,4,5,6,1,2,3,0, '.', '%'].forEach((item) => {
        calcBtns.push(
            <button
                onClick={(e) => setInput(input + e.target.value)}
                key={item}
                value={item}
                className='number__btn'
            >
                {item}
            </button>
        )
    });

    ['+', '-', '*', '/'].forEach((el) => {
        operators.push(
            <button
                onClick={(e) => setInput(input + e.target.value)}
                key={el}
                value={el}
                className='operator__btn'
            >
                {el}
            </button>
        )
    })

    return (
        <div>
            <div className="output">
                {input}
            </div>
            <div className="operators">
                {operators}
                {/*<button*/}
                {/*    className='operator__btn'*/}
                {/*    onClick={() => setInput(input.substring(0, input.length - 1))}*/}
                {/*>*/}
                {/*    C*/}
                {/*</button>*/}


                <button
                    className='operator__btn'
                    onClick={(e) => {
                        try {
                            setInput(
                                String(eval(input)).length > 3 &&
                                String(eval(input)).includes(".")
                                    ? String(eval(input).toFixed(4))
                                    : String(eval(input))
                            );
                        } catch (e) {
                            console.warn(e);
                        }
                    }}
                    value="="
                >
                    =
                </button>
                <button
                    className='operator__btn'
                    onClick={() => setInput('')}
                >
                    AC
                </button>


            </div>
            <div className='calcBtns'>
                {calcBtns}
            </div>





        </div>

    );
};

export default Calculator;