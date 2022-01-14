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
    const stuff = useQuery(GET_TODOS)
console.log(stuff)

  return (
    <div >
      app
    </div>
  );
}

export default App;
