import { Component } from 'react'
import './App.css'
import CardList from './Components/Card-List/Card-List.Components'
import SearchBox from './Components/Search-Box/Serach-Box.Components'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((data)=>{
        this.setState(() => {
          return { monsters: data}
        }, () => {
          console.log(this.state.monsters);
        })
      })
  }

  handleChange = (e) => {
    this.setState(() => { return { searchField: e.target.value } });
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <>

        <h1 className='app-title'>Rolodex Monsters</h1>
        
        <SearchBox 
          placeholder='Search Here...'
          handleChange={(e)=> this.handleChange(e)}
          className={'searchBox'}
        />
        
        <CardList 
          monsters = {filteredMonsters}
        />
      </>
    )
  }
}

export default App
