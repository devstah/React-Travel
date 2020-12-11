import React, {Component} from "react";
import axios from "axios";

class User extends Component{
  constructor(){
    super();
    this.state = {
      city: {}
    };
  }
 async componentDidUpdate(prevProps){
   if (prevProps.selectedUserId !== this.props.selectedUserId){
    const city = (await axios.get(`/api/cities/${this.props.selectedUserId}`)).data;
    this.setState({city});
   }

    console.log(this.props);
  }
  async componentDidMount(){
   const city = (await axios.get(`/api/cities/${this.props.selectedUserId}`)).data;
    console.log(city)
    this.setState({city})
  }

  render(){
    const {city} = this.state;
    return (
      <div>
        { city.about }
      </div>
    );
  }
}

export default User;
