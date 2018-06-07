import React, { Component } from 'react';
import './FilmCard.css';
import PropTypes from 'prop-types';

class FilmCard extends Component{

    constructor(props){
        super(props);
        this.filmCardContent = props.filmCardContent;
        this.filmCardId = props.filmCardId;
        this.handleRemoveFilmCard = this.handleRemoveFilmCard.bind(this);
    }

    handleRemoveFilmCard(id){
        this.props.removeFilmCard(id);
    }

    render(){
        return(
            <div className="filmCard fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveFilmCard(this.filmCardId)}>
                      &times;
                </span>
                <p className="filmCardContent">{ this.filmCardContent }</p>
            </div>
        )
    }
}

FilmCard.propTypes = {
    filmCardContent: PropTypes.string
}

export default FilmCard;
