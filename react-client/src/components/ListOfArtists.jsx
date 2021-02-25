import React from 'react';

const ListOfArtists = () => (
  <div>
    <h4>Please try an artist from the list below: </h4>
    <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
      <tbody>
        <tr>
          <td style={{border: '1px solid black'}}>Rembrandt van Rijn</td>
          <td style={{border: '1px solid black'}}>Johannes Vermeer</td>
          <td style={{border: '1px solid black'}}>Frans Hals</td>
          <td style={{border: '1px solid black'}}>Gerard van Honthorst</td>
          <td style={{border: '1px solid black'}}>Jan Weenix</td>
        </tr>
        <tr>
          <td style={{border: '1px solid black'}}>Vincent van Gogh</td>
          <td style={{border: '1px solid black'}}>Dirck van Baburen</td>
          <td style={{border: '1px solid black'}}>Peter Paul Rubens</td>
          <td style={{border: '1px solid black'}}>Judith Leyster</td>
          <td style={{border: '1px solid black'}}>Jan Davidsz. de Heem</td>
        </tr>
        <tr>
          <td style={{border: '1px solid black'}}>Anthony van Dyck</td>
          <td style={{border: '1px solid black'}}>El Greco</td>
          <td style={{border: '1px solid black'}}>Albrecht Dürer</td>
          <td style={{border: '1px solid black'}}>Willem van Aelst</td>
          <td style={{border: '1px solid black'}}>Willem Claesz. Heda</td>
        </tr>
      </tbody>
    </table>
    <p></p>
  </div>
)



export default ListOfArtists;