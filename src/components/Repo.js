import React from 'react';

const Repo = ({nameWithOwner, repoURL, primaryLanguage, latestRelease})=>{
  return(
      <tr>
        <td className="pv3 pr3 bb b--black-20"><a href={repoURL}>{nameWithOwner}</a></td>
        <td className="pv3 pr3 bb b--black-20">{primaryLanguage} </td>
        <td className="pv3 pr3 bb b--black-20">{latestRelease} </td>
        <td className="pv3 pr3 bb b--black-20"><button>Add</button></td>
      </tr>
  )
}

export default Repo;
