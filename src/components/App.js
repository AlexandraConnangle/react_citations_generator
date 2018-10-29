import React from 'react';
import citations from '../citations.js';
import Citation from './Citation.js';

class App extends React.Component {
    //variable state indéfinie 
    state = {};
    //Méthode REACT pour charger une première citation au chargement de la classe App
    componentWillMount() {
        this.genererCitation();
    }

    // Création de l'évènement qui change les citations
    genererCitation = event => {
        //On transforme les citations en array
        const keyArray = Object.keys(citations);
        //Sélectionne une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        //Si la citation est la même que la précédente, génère une nouvelle citation
        if (this.setState.citation === citations[randomKey].citation) {
            this.genererCitation();
            return;
        }
        // Assigne la nouvelle citation aléatoire à la variable state
        this.setState(citations[randomKey]);
    };

    //Rendu dans le DOM. La citation prend en "props" sa propre variable state
    render() {
        return ( <
            div >
            <
            Citation details = {
                this.state
            }
            /> <
            button onClick = {
                e => this.genererCitation(e)
            } > Citation suivante < /button> < /
            div >
        )
    }
}

export default App;
