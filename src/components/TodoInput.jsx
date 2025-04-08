import React , {useState} from 'react'

const TodoInput = ({onAdd}) => {
    const [input, setInput] = useState('');
    // handling the inpute change
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleAdd = () =>{
        if(input.trim()){
            onAdd(input.trim());
            setInput('');
        }
    }
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            handleAdd();
        }
    }

  return (
    <div className='flex gap-4 mt-10 px-2 md:w-3/4 lg:w-1/2 mx-auto'>
        <input 
        type="text" 
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        
        className='border-2 border-gray-300 rounded-4xl p-4 w-full shadow-md' placeholder='What needs to be done?' />
        <button 
        className='bg-blue-500 text-white rounded-md px-6 py-1 shadow-md lg:px-8'
        onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default TodoInput
