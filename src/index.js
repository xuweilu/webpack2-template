import './style.css';
import printMe from './print';
import {cube} from './math.js';

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash").then((_) => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
    return element;
  }).catch((error) => ("An error occurred while loading the component"));


  // var element = document.createElement('div');
  // var btn = document.createElement('button');
  //
  // element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
  // btn.innerHTML = "Click";
  // btn.onclick = printMe;
  // element.appendChild(btn);
  //
  // return element;
}

// async function getComponent() {
//   var element = document.createElement("div");
//   const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   return element;
// }

// document.body.appendChild(component());

getComponent().then(component => {
  document.body.appendChild(component);
});