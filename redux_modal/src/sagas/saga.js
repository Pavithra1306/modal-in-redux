import {takeEvery,put} from 'redux-saga/effects';

function* fetchAsync(){
    var userData="";
    try {
        yield fetch("https://reqres.in/api/users").then(res=>res.json()).then(data=>userData=data)
        
        yield put({type : 'FETCHASYNC',
                    payload : userData.data
                })
       }
    catch(error){
        yield put({type : 'FETCHERROR',
        payload : error
        })
     }
}

function* fetchCurrent(action){
    var currentData="";
    console.log("action",action);   
    try{
        yield fetch("https://reqres.in/api/users/"+action.payload)
        .then(res=>res.json())
        .then(data=>currentData=data)
        console.log("currentData",currentData)
        yield put({type : 'CURRENTDATA',
                    payload : currentData.data
                })
    }
    catch(error){

    }
}

export default function* watchFetch(){
    console.log("inside watchFetch")
    yield takeEvery("FETCHDATA",fetchAsync)
    yield takeEvery("FETCHCURRENT",fetchCurrent)
}