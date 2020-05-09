import React, { Component } from 'react';

import Lists from '/home/durga/NodeJS/FormExample/src/components/Lists';


class Forms extends Component {
  
  state = {
      ...this.returnStateObject()
   }
  
    returnStateObject(){
      if(this.props.currentIndex==-1)
      return {
        fName : '',
         lName : '',
         email : '',
         gitId : '',
         address : '',
         city : 'One'
         }

      else
      return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps){
      if(prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list)
      this.setState({...this.returnStateObject()})
     // console.log(prevProps, this.props)
    }
       
    handleChange = (e) => {
 
      this.setState({
      [e.target.name]: e.target.value
    })
    //console.log (this.state);

  }

  handleSubmit = (e) => {
   // console.log ("test in submit call");
    e.preventDefault();

    this.props.onAddOrEdit(this.state)
  
   // console.log (this.state);
  }

  render() {
    
    return (
  
        <form autoComplete="off" >
         
          <input name="fName" placeholder="Firstname" onChange={this.handleChange} value={this.state.fName}/>
           <br />
           <input name="lName" placeholder="Lastname" onChange={this.handleChange} value={this.state.lName} /> 
          <br />
         
          <input name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} /> 
           <br />
         
          <input name="gitId" placeholder="Git ID" onChange={this.handleChange} value={this.state.gitId} />  
          <br />
          
          <textarea name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address} /> 
           <br />
          
          <select name = "city" placeholder="City" onChange={this.handleChange} value={this.state.city}>
            <option value = "One">Select City</option>
            <option value = "Hyderabad">Hyderabad</option>
            <option value = "Warangal">Warangal</option>
            <option value = "Vijayawada">Vijayawada</option>
            <option value = "Vizag">Vizag</option>
            <option value = "Tirupathi">Tirupathi</option>
            </select> 
           <br />
           
           <button type="button" onClick={this.handleSubmit}>Submit</button>
          </form>

    );
  }
}

export default Forms;