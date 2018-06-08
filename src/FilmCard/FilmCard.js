import React, { Component } from 'react';
import './FilmCard.css';
import PropTypes from 'prop-types';

class FilmCard extends Component{

    constructor(props){
        super(props);
        this.cardContent = props.cardContent;
        this.cardId = props.cardId;
        this.handleRemoveFilmCard = this.handleRemoveFilmCard.bind(this);
    }

    handleRemoveFilmCard(id){
        this.props.removeFilmCard(id);
    }

    render(){
        return(
            <div className="filmCard fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveFilmCard(this.cardId)}>
                      &times;
                </span>
                <p className="cardContent">{ this.cardContent }</p>
            </div>
        )
    }
}

FilmCard.propTypes = {
    cardContent: PropTypes.string
}

export default FilmCard;
