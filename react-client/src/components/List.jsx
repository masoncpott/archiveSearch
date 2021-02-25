import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    <div> There are { props.artworks.length } items. </div>
    <div style={{display: 'inline-grid'}}>
      { props.artworks.map(artWork => <ListItem key={artWork.objectNumber} artWork={artWork} handleDownload={props.handleDownload}/>)}
    </div>
  </div>
)

export default List;