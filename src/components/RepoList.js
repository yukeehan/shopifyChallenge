import React, {Component} from 'react';
import RepoSearchResultTable from './RepoSearchResultTable';
import FavRepo from './FavRepo';

class RepoList extends Component{
  constructor(props){
    super(props);
    this.state={
      favRepo: [],
    }
  }
  onAddButtonClick = (event)=>{
    console.log('add button click');
  }
  render(){
    const { edges } = this.props;
    return(
      <div>
        <div>
          <RepoSearchResultTable
            edges={edges} onAddButtonClick={this.onAddButtonClick}
          />
        </div>
        <div>
          <FavRepo />
        </div>
      </div>
    )
  }
}

export default RepoList;
