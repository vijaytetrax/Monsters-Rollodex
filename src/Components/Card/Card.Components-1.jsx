import { Component } from 'react';
import './Card.Style.css';

class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster;
        console.log(this.props, "card");
        return (
            <div className="card-container">
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;