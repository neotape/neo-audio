import {checkAccessibility} from 'helpers';

async function f() {
  let a = await checkAccessibility();
  console.log(a);
}

f()
