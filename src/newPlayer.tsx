import { Component } from 'react';



interface Props {
    players: Object,
    saveNewPlayer(newPlayer: Object): void
}

interface State {
    newPlayerName: String
}
class NewPlayer extends Component <Props, State> {

    state={
        newPlayerName: "",
    }

    handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log("name change");
        this.setState({newPlayerName: (evt.target as HTMLInputElement).value})
    }

    onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
     
        const newPlayer: Object = {id: Object.keys(this.props.players).length + 1, pName: this.state.newPlayerName, score: 0}
        this.props.saveNewPlayer(newPlayer);
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add new player</h3>
                <input type="text" placeholder="Name of player..." value={this.state.newPlayerName} onChange={this.handleChange} />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default NewPlayer;