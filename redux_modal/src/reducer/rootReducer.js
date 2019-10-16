

import {combineReducers} from 'redux';

const intialState={
    requiredItem: 0,
    brochure: [
        {
          title: "Gold",
          msg: "24k Bracelet"
        }, {
          title: "Silver",
          msg: "Necklace"
        }, {
          title: "Diamond",
          msg: "Ring"
        }
      ]

}

const rootReducer = (state=intialState,action)=>{
    switch(action.type){
        case "REPLACEMODALITEM" :
        console.log("replace Modal");
        return({
            ...state,
            requiredItem : action.payload 
        })
        break;

        case "SAVEMODAL":
            console.log("Save Modal");
            break;
      }
   return state;
}



export default rootReducer;