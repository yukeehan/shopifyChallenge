import React from 'react';

const TableHead = ({nameWithOwner, repoURL, primaryLanguage, latestRelease})=>{
  return(
    <thead>
      <tr>
        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Language</th>
        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Latest tag</th>
      </tr>
    </thead>
  )
}

export default TableHead;
