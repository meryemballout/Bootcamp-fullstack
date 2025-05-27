// 1 We will get an error because you can't reassign a const variable

// 2 We will get an error because you can't reassign a const variable AGAIN :/

//

function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();

// 4 It will work because the variable is declared both in the global and local scope

// 5 It will work because the variable is declared both in the global and local scope AGAIN :/
