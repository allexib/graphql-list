import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: 'https://evolving-fowl-34.hasura.app/v1/graphql',
    headers:{
        'x-hasura-admin-secret':'MGUOinunS8hI5hWFwQ3fOMbQ5NNiDCAaarjlO6VC8ivH5UYCAuWUcmu20Qe9nME4'
    }
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    , document.getElementById('root'));
//MGUOinunS8hI5hWFwQ3fOMbQ5NNiDCAaarjlO6VC8ivH5UYCAuWUcmu20Qe9nME4