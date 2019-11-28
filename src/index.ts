import {checkAccessibility} from 'helpers';


// check accessibility done 🐶
checkAccessibility().then(res => {
  console.log(res);
}).catch(e => {
  let {reason} = e;
  reason && console.error(reason);
});
