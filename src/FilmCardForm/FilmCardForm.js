import React, { Component } from 'react';
import './FilmCardForm.css';

class FilmCardForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newFilmContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeFilmCard = this.writeFilmCard.bind(this);
    }

    /// When the user input changes, set the newFilmContent to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newFilmContent: e.target.value,
        })
    }

    writeFilmCard(){
        this.props.addFilmCard(this.state.newFilmContent);

        // Set newFilmContent back to an empty string.
        this.setState({
            newFilmContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="cardInput"
                placeholder="What movie do you want to watch?"
                value={this.state.newFilmContent}
                onChange={this.handleUserInput} />
                <button className="cardButton"
                onClick={this.writeFilmCard}>Add Movie</button>
            </div>
        )
    }
}

export default FilmCardForm;
