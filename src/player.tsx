import { Component } from 'react';

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
            <h5>{this.props.name} | Score: {this.props.score}  <br />
                <button id={this.props.id.toString()} onClick={this.changeScore}>-</button> 
                <button id={this.props.id.toString()} onClick={this.changeScore}>+</button> 
            </h5>
        )
    }
}

export default Player;