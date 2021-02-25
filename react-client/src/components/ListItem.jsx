import React from 'react';


const ListItem = (props) => {
  const {longTitle, principalOrFirstMaker, productionPlaces, title, webImage, objectNumber } = props.artWork;
  return (
  <div> <br></br>
    <div>
    <a href={webImage.url} download>
      <img src={webImage.url} style={{float: 'left', width: '250px'}}/>
    </a>
    </div>
    <br></br>
    <div>
      <p>Title: {title}</p>
      <p>Artist: {principalOrFirstMaker}</p>
      <p>Location: {productionPlaces[0]}</p>
      <p><button onClick={(e) => props.handleDownload(e)} value={webImage.url}>HiRes Download</button></p>
    </div>
  </div>
  )
}



export default ListItem;

//<p><button onClick={(e) => props.handleDownload(e)} value={webImage.url}>HiRes Download</button></p>