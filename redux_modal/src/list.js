import React, { Component } from 'react';
import Modal from './modal.js';
import {connect} from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);

}


 saveDetails=(item)=> {
    const requiredItem = this.props.requiredItem;
    let tempbrochure = this.props.brochure;
    tempbrochure[requiredItem] = item;
    this.props.saveModalDetails(tempbrochure)
  }

 

  render() {    
    const brochure = this.props.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.props.replaceModalItem(index)}>edit</button> {" "}
            
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.props.requiredItem;
    let modalData = this.props.brochure[requiredItem];
    console.log(modalData)
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Editable Bootstrap Modal In React</h1>
          <h6>Bootstrap 4.0.0-beta.3</h6>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveDetails}
        />
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
    requiredItem : state.requiredItem,
    brochure : state.brochure
    })

    const mapDispatchToProps=(dispatch)=>({
            replaceModalItem :(index)=>{
            dispatch({
                type: "REPLACEMODALITEM",
                payload : index
            })
        },

        saveModalDetails : (tempbrochure)=>{
             dispatch({
                type: "SAVEMODAL",
                payload : tempbrochure
            })
            
        }
       
      })

      export default connect(mapStateToProps,mapDispatchToProps)(List);
