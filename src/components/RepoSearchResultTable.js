import React from 'react';
import Repo from './Repo';
import TableHead from './TableHead';

const RepoSearchResultTable = ({ edges, onAddButtonClick })=>{
  return(
    <div className="overflow-auto">
      <table className="f6 w-50" cellspacing="0">
        <TableHead />
        <tbody className="lh-copy">
          {
            edges.map((edge, i)=>{
                return(
                  <Repo
                    key={ i }
                    nameWithOwner={ edge.node.nameWithOwner }
                    repoURL={ edge.node.url}
                    primaryLanguage={
                      (edge.node.primaryLanguage!==null) ?
                      (edge.node.primaryLanguage.name) : null
                    }
                    latestRelease={
                      (edge.node.releases.nodes.length>0) ?
                      (edge.node.releases.nodes[0].tag.name) :null
                    }
                    onAddButtonClick={ onAddButtonClick }
                  />
                )
            })
          }
        </tbody>
      </table>
    </div>
)}

export default RepoSearchResultTable;
