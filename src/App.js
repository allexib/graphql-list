import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_TODOS = gql`
query getTodos {
  todos {
    done
    id
    text
  }
}
`


function App() {
    const {data, loading, error} = useQuery(GET_TODOS)

    if (loading) return <div>loading todos...</div>
    if (error) return <div>Error fetching todos</div>


    return <div className='vh-100 code flex flex-column items-center bg-purple white pa4 fl-1'>
        <h1 className='f2-l'>graphql checklist {''}
            <span role='img' aria-label='Checkmark'>🎂✔</span>
        </h1>
        {/*Todo Form*/}
        <form className="mb3">
            <input className='pa2 f4 b--dashed'
                   type='text'
                   placeholder='write y todo'
            />
            <button className='pa2 f4 bg-green' type='submit'>create</button>
        </form>
        {/*Todo List*/}
        <div className='flex item-center justify-center flex-column'>
            {data.todos.map(todo => (
                <p key={todo.id}>
            <span className='pointer list pa1 f3'>
                {todo.text}
            </span>
                    <button className='bg-transparent bn f4'>
                        <span className='red'>&times;</span>

                    </button>
                </p>
            ))}
        </div>
    </div>;
}

export default App;
