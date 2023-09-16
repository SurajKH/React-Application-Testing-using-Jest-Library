import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import First from './Components/First';
import PropsTestComponent from './Components/PropsTestComponent';


/*
   test(event_name,action(function action to be performed)=>{
      render(component)
      initializations of variables if necessary
      expect(render vs original)
   },timeout);
   
*/

//

test('Test of h1 Elements',()=>{
  //even though h1 Elements is not in the App,it is present in the Child Component.
render(<App/>);
const h1Element=screen.getByText(/Testing using ReactJS and Typescript./i);
expect(h1Element).toBeInTheDocument();
});

test('Test of h2 Elements',()=>{

  //even though h1 Elements is not in the App,it is present in the Child Component.
  //render the React Based Component.
 render(<App/>);
 //screen to query the virtual DOM.
 const h2Element=screen.getByText(/Jest : the ReactJS Testing Library/i);
 //result comparision.
 expect(h2Element).toBeInTheDocument();
});

test('Test for First Component',()=>
{
  //Child Component.
  render(<First/>);
  const hseries=screen.getByText(/Jest : the ReactJS Testing Library/i);
  expect(hseries).toBeInTheDocument();
})

//Testing for PropsTestComponent:
//Component Wise Testing helps in easy TDD over here.
/*test.only('props testing',()=>{
  render(<PropsTestComponent name="Props Testing in JestReactJS Library."/>);
  const NameProp=screen.getByText(/Props Testing in JestReactJS Library./i);
  expect(NameProp).toBeInTheDocument();

})
*/

test.skip('props testing',()=>{
  render(<PropsTestComponent name="Props Testing in JestReactJS Library."/>);
  const NameProp=screen.getByText(/Props Testing in JestReactJS Library./i);
  expect(NameProp).toBeInTheDocument();

});

/*

Test Results:

   Test Suites: 1 passed, 1 total
   Tests:       1 skipped, 3 passed, 4 total
   Snapshots:   0 total
   Time:        0.754 s, estimated 1 s
*/



//we are writing the test cases over here.
/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
