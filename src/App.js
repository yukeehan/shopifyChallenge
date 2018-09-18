import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import RepoList from './components/RepoList';
import 'tachyons';
import 'dotenv';
import axios from 'axios';


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

// pass the repository variable to the query
const GET_REPO_QUERY = ( repository ) => `{
  search(query: "${ repository }", type: REPOSITORY, first: 10) {
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
    path: '',
    edges: null,
    errors: null,
  }

  onChange = (event)=>{
    this.setState({ path: event.target.value });
  }

  onClick = (event)=>{
    // pass path state to fetch repository varialbe
    this.onFetchFromGitHub(this.state.path);
  }

  onFetchFromGitHub=( repository )=>{
    axiosGitHubGraphQL
      .post('',{ query: GET_REPO_QUERY( repository ) })
      .then(result => {
        this.setState({
          edges: result.data.data.search.edges,
          errors: result.data.errors,
        })
      });
  };

  render(){
    const { path, edges, errors } = this.state;
    console.log(this.state);
    return (
      <div>
        <Title />
       <SearchForm
         onChange={this.onChange}
         onClick={this.onClick}
         path={ path }
       />
       {
         edges ? (
           <RepoList edges={ edges }/>
         ) : (
           <p> </p>
         )
       }
     </div>
    );
  }
}

export default App;
