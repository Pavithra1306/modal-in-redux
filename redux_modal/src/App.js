import React,{Component} from 'react';
import './App.css';
import {userAction,getCurrentUserData} from './action/action.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class App extends Component {
  constructor(props){
    super(props);
 }

  componentDidMount(){
    this.props.getUserData();
    
  }

  
  dispData=()=>{
    console.log("I am fourth",this.props.data)
   //return this.state.data.map((val)=>(<option key={val.id}>{val.id}</option>))
   return this.props.data.map((val)=>(<option key={val.id}>{val.id}</option>))
  }
  

  getData=(e)=>{
   
    e.preventDefault();
    var selected=document.getElementById("selectedID").value
    console.log("I am fifth",selected)
    this.props.getCurrentUserData(selected)
    this.props.data.forEach((val)=>{
      if(selected==val.id){
        document.getElementById("imgSpace").setAttribute("src",val.avatar);
        document.getElementById("userDetails").innerHTML=val.first_name+" "+val.last_name;
      }
    })
 }

  clearData=(e)=>{
   e.preventDefault();
   document.getElementById("formData").reset();
   document.getElementById("imgSpace").setAttribute("src","");
   document.getElementById("userDetails").innerHTML="";
  }

  render(){
    console.log("render",this.props.data)
    return (
      <div className="App">
        <div>
          <form id="formData">
            <select className="formElm">
              <option selected >Department</option>
              <option>HR</option>
              <option>Engineering</option>
            </select>
            <select id="selectedID" className="formElm">
              <option selected >ID</option>
              { this.props.data !== undefined ? this.dispData() : null}
            </select>
            <button id="getDataBtn" className="formElm" onClick={this.getData}>Get Data</button>
            <button className="formElm" onClick={this.clearData}>Clear Data</button>
            <div id="imgDiv">
              <img  id="imgSpace">
              </img>
            </div>
            <div id="userDetails">
            </div>
          </form>
        </div>
        
      </div>
    );
  }
  
}

App.propTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    email : PropTypes.string,
    first_name : PropTypes.string,
    last_name : PropTypes.string,
    avatar:PropTypes.string
  })),
  currentData : PropTypes.object,
  getUserData : PropTypes.func,
  getCurrentUserData : PropTypes.func
 
}

const mapStateToProps=(state)=>({
data : state.data,
currentData : state.currentData
})

const mapDispatchToProps=(dispatch)=>({
  
  getUserData :() => { console.log("I am first")
  /*fetch("https://reqres.in/api/users").then(res=>res.json()).then(data=>dispatch(
    {type: "FETCHDATA",
  payload : data.data}))*/
  return dispatch(userAction())

  },
  getCurrentUserData:(current)=>{
    return dispatch(getCurrentUserData(current))
  }
 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
