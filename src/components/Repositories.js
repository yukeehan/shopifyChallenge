import React, {Component} from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const getRepoQuery = graphql(gql`
  {
    search(query: "shopify", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
            primaryLanguage {
              id
            }
            url
          	releases(last:1){
              nodes{
                tag{
                	name
  }}}}}}}}`,{
    options:{
      context:{
        headers:{
          "Bearer 8f3e8c9b3860357d75181fab8d2a9333e41e0e31"
        }
      },
    }
  })

class Repositories extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h1>repo</h1>
      </div>
    )
  }
}

export default graphql(getRepoQuery)(Repositories);
