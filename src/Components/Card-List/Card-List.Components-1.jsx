import { Component } from "react";
import './Card-List.Style.css';
import Card from "../Card/Card.Components";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {
                    monsters.map((monster) => {
                        return <Card monster = {monster} key={monster.id}/>
                    })    
                }
            </div>
        )
    }
}

export default CardList;