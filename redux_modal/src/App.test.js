import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {shallow} from 'enzyme';
import {getCurrentUserData} from './action/action.js'

it('check if test works', () => {
  const wrapper = shallow(<div className="welcome">Heloo</div>)
  expect(wrapper.find('.welcome').length).toEqual(1);
})

it('check if getUserData called once(in componentDidMount)',()=>{
  const mockGetUserData=jest.fn();
  const wrapper = shallow(<App getUserData={mockGetUserData} />)
  expect(mockGetUserData.mock.calls.length).toBe(1)
 // expect(wrapper.find('.App').length).toEqual(1);
})

it('check if getData function called',()=>{
  const mockGetUserData=jest.fn();
  //const getData=jest.fn();
  const app = shallow(<App getUserData={mockGetUserData}/>)
    const instance = app.instance()
    const spy = jest.spyOn(instance, 'getData').mockImplementation(()=>console.log("working"))

    instance.forceUpdate();    //this is important

    const p = app.find('#getDataBtn')
    p.simulate('click')
    //instance.getData();
    expect(spy).toHaveBeenCalledTimes(1)
})

//Testing Actions 


it('check if api call works',()=>{

})


it('check getCurrentUserData action returns correct object',()=>{
  const data = {"id":1,"name":"John"}
  const expected ={
    type : "FETCHCURRENT",
    payload : data
  }
  expect(getCurrentUserData(data)).toEqual(expected)
})