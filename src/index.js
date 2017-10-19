import './style.css';
import {cube} from './math.js';
import _ from "lodash";
// import Print from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
  btn.innerHTML = "Click";

  // btn.onclick = Print.bind(null, "Hello webpack!");
  btn.onclick = (e) => {
    import(/* webpackChunkName: "print" */ "./print").then(
      (module) => {
        var print = module.default;
        print();
      }
    )
  };
  element.appendChild(btn);

  return element;
}

// async function getComponent() {
//   var element = document.createElement("div");
//   const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   return element;
// }

document.body.appendChild(component());

// getComponent().then(component => {
//   document.body.appendChild(component);
// });