import React , {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor(){
    super();
    this.state = {
      robots: [],
      searchfiels: ''
    }
   }

   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots:users}));
   }

  onSearchChange =(event) => {
    this.setState({searchfiels : event.target.value}); 
  }

  render(){
    const {robots,searchfiels} = this.state;
    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfiels.toLowerCase())
    })
    return (
      <div className = 'tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll> 
      </div>
    );
  }
}

export default App;