import { Component } from 'react';
import './player.css';

interface Props {
    key: number,
    id: number,
    name: string,
    score: number,
    updateScore(sendScore:Object): void
}

class Player extends Component <Props> {

    changeScore = (evt: React.MouseEvent<HTMLButtonElement>) => {
  
        let sendScore: number[] = [];
        let score:number = Number(this.props.score +1)

        if ((evt.target as Element).innerHTML === "-") {
            score = Number(this.props.score -1)
        } 
        
        sendScore = [score, Number((evt.target as Element).id)]
        this.props.updateScore(sendScore)
    }

    
    render() {

        return (
            <div className="player">
                <h5 >{this.props.name.toUpperCase()} | Score: {this.props.score}</h5>
                <button className="points" id={this.props.id.toString()} onClick={this.changeScore}>-</button> 
                <button className="points" id={this.props.id.toString()} onClick={this.changeScore}>+</button> 
            </div>
        )
    }
}

export default Player;