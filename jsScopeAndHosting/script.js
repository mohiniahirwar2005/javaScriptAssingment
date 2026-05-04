let test = "this is global test variable"
function classA(){
    console.log("classA" , test);
    
}
function classB(){
    console.log("classB", test);
  console.log(a);
      
}
function classC(){
    let test2 = "this is local Variable"
    console.log("classc", test);
    
    console.log("classC", test2);
}
function classD(){
    let k = 20;
   console.log("classD", test);
   console.log(k);
   
}
function classE(){
    console.log("classE", test);
}
let a = 5;
function classF(){
    console.log("classF", test);
  console.log(a);

}
function classG(){
    console.log("classG", test);
  console.log(a);
  
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();

