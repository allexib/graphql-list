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
    const {data, loading,error} = useQuery(GET_TODOS)

    if (loading) return <div>loading todos...</div>
    if (error) return <div>Error fetching todos</div>


    return <div> {data.todos.map(todo=>(
        <p key={todo.id}>
            <span>
                {todo.text}
            </span>
            <button>&times;</button>
        </p>
    ))} </div>;
}

export default App;
