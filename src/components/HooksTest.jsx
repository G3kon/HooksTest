import React, {useState, useEffect} from 'react';
import nextId from "react-id-generator";
// import useCustomHook from '../hooks/useCustomHook';

const HooksTest = () => {
   // const [hookValue,countToTen] = useCustomHook()
    const [value, setValue] = useState(0);
    const [todos, setTodos] = useState([]);
    const [inputState, setInputState] = useState('');

    useEffect(()=>{
        console.log('on mount')
        return () => {
            console.log('cleaned up');
        };
    },[])

    useEffect(()=>{
        console.log('on any action')
    })

    useEffect(()=>{
        console.log('on condition', value)
    },[value])


    const onButtonClickAdd = ()=> {
        setValue(value + 1);
    }

    const onButtonClickSubtract = ()=> {
        setValue(value - 1);
    }


    const onButtonClickAddToList = () => {
        setTodos([...todos,{
            text: inputState,
            id: nextId()
        }])
        setInputState('')
    }


    const onButtonClickRemoveItemFromList = (elementIndex) => {
    setTodos(todos.filter(element=> element.id !== elementIndex))

    }

    return (
        <> 
            COUNTER
            <div style={{display:'flex', justifyContent:'center', paddingTop:'50px',  paddingBottom: '50px', borderBottom: '1px solid gray'}}>
                <button onClick={onButtonClickAdd}>
                    +1
                </button>
                <div style={{padding:'20px' }}>
                {value}
                </div>
                <button onClick={onButtonClickSubtract}>
                    -1
                </button>
            </div>
            TO DO LIST
            <div style={{ padding: '50px', borderBottom: '1px solid gray' }}>
                <div>
                     <input value={inputState} onChange={e => setInputState(e.target.value)}></input>
                     <button onClick={onButtonClickAddToList}>
                        Add to list
                    </button>
                </div>
                <div style={{display:'flex',flexDirection:'column', justifyContent:'center', margin:'20px' }}>
                { todos.map((element,index) => {
                    return(
                        <div key={index} style={{display:'flex',flexDirection:'row', justifyContent:'center', padding:'5px' }}>
                        <div>{element?.text}</div> 
                        <button onClick={()=>onButtonClickRemoveItemFromList(element.id)} style={{ marginLeft:'15px' }} >-</button>
                        </div>
                    )}
                )}
                </div>
        
            </div>

            {/* <div>
                {hookValue}
                <button onClick={countToTen}>hoook function</button>
            </div> */}

        </>
    )
}
   export default HooksTest;
