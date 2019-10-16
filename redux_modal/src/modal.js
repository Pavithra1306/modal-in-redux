import React, { Component } from 'react';
import {connect} from 'react-redux';

class Modal extends Component {
    constructor(props) {
        super(props);
       // console.log(props)
        this.handleSave = this.handleSave.bind(this);
      
    }

  

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    msgHandler(e) {
        this.setState({ msg: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        console.log(this.props.title)
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Title:</span><input value={this.props.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Msg:</span><input value={this.props.msg} onChange={(e) => this.msgHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
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

      export default connect(mapStateToProps,mapDispatchToProps)(Modal);

