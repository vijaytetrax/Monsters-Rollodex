import './Card-List.Style.css';
import Card from "../Card/Card.Components";

const CardList = ({ monsters }) => {
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

export default CardList;