/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//c'est une fonction composant. plus simple qu'une classe. classe qui n'a qu'un render

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  
  //cette méthode est appellée par square
  handleClick(i){
    //slice() : permet de créer une copie du tableau
    /*C'est une meilleure pratique. ça permet de sécuriser l'ecrasement de données
    var player = {score: 1, name: 'Jérémie'};
var newPlayer = Object.assign({}, player, {score: 2});*/
    
    const squares = this.state.squares.slice();
     if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; 
    this.setState({squares :squares, 
                   xIsNext: !this.state.xIsNext,});
  }

  renderSquare(i) {
    return( <Square value={this.state.squares[i]} 
             onClick={()=> this.handleClick(i)}/>
    );
  }
  
  render() {
    const winner = calculateWinner(this.state.squares); 
    let status; 
    if(winner){
     status = winner + ' a gagné'; 
    }else{
     status = 'Le prochain joueur est : ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


