import { useState, useEffect } from 'react'
import './App.css'
import CardList from './Components/Card-List/Card-List.Components'
import SearchBox from './Components/Search-Box/Serach-Box.Components'

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setMonsters(data);
            })
    }, []);

    useEffect(() => {
        setFilteredMonsters(
            monsters.filter((monster) => {
                return monster.name.toLowerCase().includes(searchField);
            })
        )
    }, [searchField, monsters])

    const onSearchChange = (e) => {
        const searchString = e.target.value.toLocaleLowerCase();
        setSearchField(searchString);
    }


    return (
        <div className='App'>
            <h1 className='app-title'>Rolodex Monsters</h1>
            <SearchBox
                placeholder='Search Here...'
                handleChange={onSearchChange}
                className={'searchBox'}
            />
            <CardList
                monsters={filteredMonsters}
            />
        </div>
    )
}

export default App
