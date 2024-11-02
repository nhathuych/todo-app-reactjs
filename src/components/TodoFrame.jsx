import React, { useRef, useState } from 'react'
import todoIcon from '../assets/todo_icon.png'
import TodoItem from './TodoItem'

const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const inputRef = useRef() // mapping between input and this variable

  const addNewTask = () => {
    const inputText = inputRef.current.value.trim()
    if (inputText === '') {
      resetInput()
      return null
    }

    const todoItem = {
      id: Date.now(),
      text: inputText,
      isCompleted: false
    }

    setTodoList((prev) => [...prev, todoItem])
    resetInput()
  }

  const removeTask = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id)
    })
  }

  const updateIsCompleted = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id !== id) { return todo }

        return { ...todo, isCompleted: !todo.isCompleted }
      })
    })
  }

  const resetInput = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div className='flex flex-col bg-white rounded-xl place-self-center max-w-md w-11/12 p-7 min-h-[550px]'>
      {/* title */}
      <div className='flex items-center gap-2 mt-2'>
        <img src={todoIcon} className='w-8'/>
        <h1 className='font-semibold text-3xl'>Todo List</h1>
      </div>

      {/* input box */}
      <div className='flex items-center bg-gray-200 rounded-full my-7'>
        <input
          ref={inputRef}
          onKeyDown={(e) => { if (e.key === 'Enter') { addNewTask() } }}
          type='text'
          placeholder='Add a new task...'
          className='bg-transparent outline-none border-0 flex-1 placeholder:text-slate-600 h-14 pl-6 pr-2'
        />
        <button
          onClick={addNewTask}
          className='bg-sky-800 text-white text-lg font-medium rounded-full border-none cursor-pointer w-32 h-14'
        >
          Add
        </button>
      </div>

      {/* todo list */}
      <div>
        {todoList.map((todo, index) => {
          return <TodoItem key={index} id={todo.id} text={todo.text} isCompleted={todo.isCompleted} removeTask={removeTask} updateIsCompleted={updateIsCompleted} />
        })}
      </div>
    </div>
  )
}

export default Todo
