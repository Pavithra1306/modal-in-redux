export const userAction = ()=>{
    console.log("I am second")

return ({
    type: "FETCHDATA"
})

}

export const getCurrentUserData=(current)=>{
return ({
    type : "FETCHCURRENT",
    payload : current
})
}



