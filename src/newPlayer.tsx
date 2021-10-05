import { Component } from 'react';
import './newPlayer.css';

interface Players {
    id: number, 
    name: string,
    score: number
}

interface Props {
    players: Players[],
    saveNewPlayer(newPlayer: Players): void
}

interface State {
    newPlayerName: String
}

class NewPlayer extends Component <Props, State, Players> {

    state = {newPlayerName: ""}

    handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({newPlayerName: (evt.target as HTMLInputElement).value})
    }

    onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
     
        const newPlayer = {id: Object.keys(this.props.players).length + 1, name: this.state.newPlayerName, score: 0}
        this.props.saveNewPlayer(newPlayer);

        this.setState({newPlayerName: ""});
    }

    render() {
        return(
            <section className="newPlayer">
                <form onSubmit={this.onSubmit}>
                    <h3>Add new player</h3>
                    <input type="text" placeholder="Name of player..." value={this.state.newPlayerName} onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </section>
        )
    }
}

export default NewPlayer;