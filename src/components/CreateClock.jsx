import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Input/MyInput';

function CreateClock({ create }) {
    const [state, setState] = useState({
        name: '',
        timeZone: '',
    })

    const addNewClock = (e) => {
        e.preventDefault();
        const newClock = {
            id: state.timeZone,
            ...state
        }
        create(newClock);
        setState({
            name: '',
            timeZone: '',
        });
    }

    return (
        <form className='wrapper-form'>
            <MyInput
                value={state.name}
                onChange={e => setState({ ...state, name: e.target.value })}
                type="text"
            />
            <MyInput
                value={state.timeZone}
                onChange={e => setState({ ...state, timeZone: e.target.value })}
                type="number"
            />
            <MyButton onClick={addNewClock}>Добавить</MyButton>
        </form>

    );
}

export default CreateClock;