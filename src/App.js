import React, { Component } from 'react';
import FilmCard from './FilmCard/FilmCard';
import FilmCardForm from './FilmCardForm/FilmCardForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addFilmCard = this.addFilmCard.bind(this);
    this.removeFilmCard = this.removeFilmCard.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');

    // We're going to setup the React state of our component
    this.state = {
      cards: [],
    }
  }

  componentWillMount(){
    const previousFilmCards = this.state.cards;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousFilmCards.push({
        id: snap.key,
        cardContent: snap.val().cardContent,
      })

      this.setState({
        cards: previousFilmCards
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousFilmCards.length; i++){
        if(previousFilmCards[i].id === snap.key){
          previousFilmCards.splice(i, 1);
        }
      }

      this.setState({
        cards: previousFilmCards
      })
    })
  }

  addFilmCard(card){
    this.database.push().set({ cardContent: card});
  }

  removeFilmCard(cardId){
    console.log("from the parent: " + cardId);
    this.database.child(cardId).remove();
  }

  render() {
    return (
      <div className="cardsWrapper">
        <div className="cardsHeader">
          <div className="heading">MovieQ</div>
        </div>
        <div className="cardsBody">
          {
            this.state.cards.map((card) => {
              return (
                <FilmCard cardContent={card.cardContent}
                  cardId={card.id}
                  key={card.id}
                  removeFilmCard ={this.removeFilmCard}/>
                )
              })
            }
          </div>
          <div className="cardsFooter">
            <FilmCardForm addFilmCard={this.addFilmCard} />
          </div>
        </div>
      );
    }
  }

  export default App;
