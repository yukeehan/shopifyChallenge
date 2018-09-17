import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { edges } = this.props;
    return(
      <div>
        {
          edges.map((edge, i)=>{
            if(edge.node.releases.nodes.length>0){
              return(
                <Repo
                  key={ i }
                  nameWithOwner={ edge.node.nameWithOwner }
                  repoURL={ edge.node.url}
                  primaryLanguage={ edge.node.primaryLanguage.name }
                  latestRelease={edge.node.releases.nodes[0].tag.name}
                />
              )
            } else {
              return(
                <Repo
                  key={ i }
                  nameWithOwner={ edge.node.nameWithOwner }
                  repoURL={ edge.node.url}
                  primaryLanguage={ edge.node.primaryLanguage.name }
                  latestRelease={ null }
                />
              )
            }
          })
        }
      </div>
    )
  }
}

export default RepoList;
