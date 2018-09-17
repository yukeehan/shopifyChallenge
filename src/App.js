import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import RepoList from './components/RepoList';
import 'tachyons';
import 'dotenv';
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { ApolloProvider, Query } from "react-apollo";
import axios from 'axios';


//components
// import Repositories from './components/Repositories';

// Axios Config
const axiosGitHubGraphQL = axios.create({
  // define a base URL for axios when creating a config instance from it
  baseURL: 'https://api.github.com/graphql',
  // pass personal access token as header to the config
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const GET_REPO = `{
  search(query: "shopify", type: REPOSITORY, first: 10) {
    repositoryCount
    pageInfo {
      endCursor
      startCursor
    }
    edges {
      node {
        ... on Repository {
          nameWithOwner
          url
          primaryLanguage {
            name
          }
          releases(last:1){
            nodes{
              tag{
                name
              }
            }
          }
        }
      }
    }
  }
}`

class App extends Component {
  state={
    path: 'shopify',
    edges: null,
    errors: null,
  }

  componentDidMount(){
    this.onFetchFromGitHub();
  }
  onChange = (event)=>{
    this.setState({ path: event.target.value });
  }

  onSubmit = (event)=>{
    event.preventDefault();
  }

  onFetchFromGitHub=()=>{
    axiosGitHubGraphQL
      .post('',{ query: GET_REPO })
      .then(result => {
        console.log(result);
        this.setState({
          edges: result.data.data.search.edges,
          errors: result.data.errors,
        })
      });
  };

  render(){
    const { path, edges, errors } = this.state;
    console.log(edges);
    return (
      <div>
       <Title />
       <SearchForm
         onChange={this.onChange}
         onSubmit={this.onSubmit}
         path={ path }
       />
       {
         edges ? (
           <RepoList edges={ edges }/>
         ) : (
           <p>Loading</p>
         )
       }
     </div>
    );
  }
}

export default App;
