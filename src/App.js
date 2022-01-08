import './App.css';
import { useState } from 'react';

const createMatrix = (n, m) => {
  const matrix = [];

  const color = "#000000";
 

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(color);
    }
  }

  return matrix;
}


function App() {
  const [color, setColor] = useState('#000000');
  const [matrix, setMatrix] = useState(createMatrix(10, 10));


  const handleClick = (row, column) => {
    let matrixCopy = [...matrix];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === row && column === j) {
          matrixCopy[i][j] = color;
        }
      }
    }
    console.log(matrixCopy)
    setMatrix(matrixCopy)

  
  }

  return (
    <div>
      <table className='grid'>
        {
          matrix.map((row, i) => {
            return <tr key={i}>
              {row.map((column, j) => {
                return <td key={j} style={{ backgroundColor: column }} onClick={() => { handleClick(i, j) }}>
                </td>
              })}
            </tr>
          })
        }
      </table>
      <div><h2> Select a color and click on any cell of the grid:</h2></div>
      <table>
      
        <tr><td style={{backgroundColor: '#000000'}} onClick={() => {setColor('#000000')}}></td> 
        <td style={{backgroundColor: 'blue'}} onClick={() => {setColor('blue')}}></td> 
        <td style={{backgroundColor: '#087E17'}} onClick={() => {setColor('#087E17')}}> </td> 
        </tr>
      
      </table>
    </div>
  );
}

export default App;
