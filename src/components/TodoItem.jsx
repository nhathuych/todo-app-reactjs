import React from 'react'
import tickIcon from '../assets/tick.png'
import notTickIcon from '../assets/not_tick.png'
import deleteIcon from '../assets/delete.png'

const TodoItem = ({id, text, isCompleted, removeTask, updateIsCompleted}) => {
  return (
    <div className='flex items-center gap-2 my-3'>
      <div className='flex flex-1 items-center'>
        <img
          onClick={() => updateIsCompleted(id)}
          src={isCompleted ? tickIcon : notTickIcon}
          className='cursor-pointer w-6'
        />
        <p className={`text-slate-700 text-[17px] ml-4 ${isCompleted ? 'line-through' : ''}`}>{text}</p>
      </div>

      <img
        onClick={() => removeTask(id)}
        src={deleteIcon}
        className='cursor-pointer w-4'
      />
    </div>
  )
}

export default TodoItem
