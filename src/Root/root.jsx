import { useState } from "react";
import { useReducer } from "react";

const Hooks = (props) => {

const [state, SetState] = useState(1)
    const reducer = (state, { type, payload}) => {
        switch (type) {
            case "plus":
                return { ...state, count: state.count + payload};
            case "minus":
                return { ...state, count: state.count - payload};
            default:
                return state;
        }
    };
     const jhdksabdjis = (e) =>{
        SetState(Number(e.target.value))
    }

    const [counter, dispatch] = useReducer(reducer, { count: 1, title: 'Namber' });
    console.log(counter);
    return (
        <div>
            <h1>CounTer: {<>{counter.count} - {counter.title}</>}</h1>
            <button onClick={() => dispatch({ type: 'plus', payload: state })}>{state}</button>
            <button onClick={() => dispatch({ type: 'minus', payload: state })}>{state}</button>
            <select defaultValue={1} onChange={jhdksabdjis}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
    )
}


export default Hooks;
