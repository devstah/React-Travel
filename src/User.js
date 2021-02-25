import React, {Component} from "react";
import axios from "axios";

class User extends Component{
  constructor(){
    super();
    this.state = {
      city: {}
    };
  }
 async componentDidUpdate(prevProps){//will trigger render twice
  //will be called AFTER the component updates (recives new props or state) - called when state CHANGES after initial render
  //parameters are prevProps and prevState
  //this hook is NOT USED FOR the initial render
  //  console.log("this is the prevprops passed into the user component", prevProps);

   if (prevProps.selectedUserId !== this.props.selectedUserId){
    const city = (await axios.get(`/api/cities/${this.props.selectedUserId}`)).data;
    this.setState({city});//wrap in if stmt otherwise will cause infinite loop
   }

  }

  async componentDidMount(){
    //called immediately after a component is mounted ...
    const city = (await axios.get(`/api/cities/${this.props.selectedUserId}`)).data; //the result will be a giant object of the data from the site
      //  console.log("inside compdidMount", city);
    this.setState({city});
  }


  render(){ //this is what will actually show to to the page
    const {city} = this.state; //DESTRUCTURE THIS TO MAKE IT ACCESSIBLE.
    return (
      <div>
        { city.about }
      </div>
    );
  }

}//end class

export default User;
