import React, {Component} from "react";
import axios from "axios";
import User from "./User";

class App extends Component{
  constructor(){
    super();
    this.state = {
      cities: [],
      selectedUserId: ""
    }
  }

  async componentDidMount(){
   const cities = (await axios.get('/api/cities')).data
  //   console.log(cities) - an array of objects of the data!
   this.setState({cities}); //setting the array here
    window.addEventListener("hashchange", () => {
      this.setState({ selectedUserId: window.location.hash.slice("1")});
    });
    this.setState({ selectedUserId: window.location.hash.slice(1) });
  }
  render(){
    const {cities, selectedUserId} = this.state
    return (
      <div>
      <ul>
        {
          cities.map (city => {
            return (
              <li className={selectedUserId*1 === city.id ? "selected" : ""} key={city.id}>
                <a href = {`#${city.id}`}>
                {city.name}
                </a>
              </li>
            )
          })
        }
      </ul>
        <div id="about">
        <br></br>
        {
          !!selectedUserId && <User selectedUserId={selectedUserId} />
        }
          <br></br>
        </div>
    </div>
    )
  }
}

export default App;
