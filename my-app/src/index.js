import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            xIsNext: true,
            stepNumber:0,
            coordinate:[{address: Array(2).fill(0)}]
            // playX:0,//每步棋的列号
            // playY:0//每步棋的行号
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length - 1];
        const squares=current.squares.slice();
        const coordinateHistory=this.state.coordinate.slice(0,this.state.stepNumber+1);
        const coordinateCurrent=coordinateHistory[coordinateHistory.length-1];
        const address=coordinateCurrent.address.slice();
        address[0]=Math.ceil(i/3);
        address[1]=i%3+1;  
        //alert(address);
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{squares:squares}]),
            stepNumber:history.length,
            xIsNext: !this.state.xIsNext,
            coordinate: coordinateHistory.concat([{address:address}])
            // playX:i%3+1,
            // playY:Math.ceil(i/3)
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const coordinateHistory=this.state.coordinate;
        const coordinateCurrent=coordinateHistory[this.state.stepNumber];

        const moves=history.map((step,move)=>{
            const desc=move?
                'Go to move#'+move:
                'Go to start';
            return(
                <li key={move}>
                    <button 
                    id='history' 
                    className={move} 
                    onClick={()=>{
                        this.jumpTo(move);
                        const bold=document.getElementsByClassName(`${move}`);
                        console.log(bold);
                        bold.id='bold';
                        }}>{desc}</button>
                </li>
            )
        });

        let status;
        if (winner) {
            status = 'winner: ' + winner;
        } else {
            status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
        }

        let PalyingAddress;
        PalyingAddress='PalyingAddress: 行号: '+coordinateCurrent.address[0]+'  列号: '+coordinateCurrent.address[1];
       //PalyingAddress='PalyingAddress: 行号: '+coordinate.playY+'  列号: '+coordinate.playX;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>{PalyingAddress}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

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
