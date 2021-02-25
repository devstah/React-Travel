import React, {Component} from "react";
import axios from "axios";
import User from "./User";
import RandomMeal from "./RandomMeal";
import {Link} from "react-router-dom";

class App extends Component{
  constructor(){
    super();
    this.state = {
      meals: {},
    }
  }

  async componentDidMount(){

    const meals = (await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')).data;

    this.setState({meals: meals}); //setting the array here
  }

  async submit(ev){
    //takes in ev as an argument
    //when you submit a form, the first line should be... default reaction will be for form to refresh the page.. dont want that to happen
    ev.preventDefault();
  }

  render(){
    const {meals} = this.state//destructuring line
    const testProp = "testing";
    console.log("the state destructured is", meals);
    return (
      <div>
        <form onSubmit={(ev) => this.submit(ev)}>
          <br></br>
          {/* <Link to="/randomMeal">Tell me what's for dinner!</Link> */}

          <button type="submit" className="submit-btn">Tell me what's for dinner!</button>
          <div>
          </div>
        </form>
        {
        Object.entries(this.state.meals).length ?
        <RandomMeal testProp={testProp} mealProp={this.state.meals}/>
        : {loading}
        }
    </div>
    )
  }
}

export default App;
