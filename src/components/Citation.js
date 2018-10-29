import React from 'react';

//Reprend en props la variable state du composant dans lequel elle sera utilisée
class Citation extends React.Component{
	render(){
		return (
			<p> 
				{this.props.details.citation}
				<span>{this.props.details.auteur}</span>
			</p>
		)
	}
}

export default Citation;