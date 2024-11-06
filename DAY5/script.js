// function display(){
//     alert("hello JS");
// }
// let x=12;

// function display(){
//     console.log("Hello",x);
// }
// let y="hello";
// console.log(typeof x);
// console.log(typeof y);
// let z=true;
// console.log(typeof z);

// let obj=
// {
//     "name":"John",
//     id:13,
//     "age":25

// }
// console.log(typeof obj);
// let ar=[1,2,3,4,5];
// console.log(typeof ar);
// let a;
// console.log(typeof a); 
// let b=null;
// console.log(typeof b);
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // alert(username);

    if (username == "" || password == "") {
      alert("Please enter both username and password");
      return false;
    }
    if (username == "admin" && password == "admin") {
        let x="STATUS:"
        document.getElementById("res").innerHTML= x,"SUCCESS";
      }
    else{document.getElementById("res").innerHTML=x,"FAILED";}
  }
//   let a=12;
//   let b='12';
//   console.log(a==b);
//   console.log(a===b);
//   let a=(x,y)=>{
//     console.log("hello");
// console.log(x+y);
//     return(x+y);
// }
// let y=a(12,13);
// console.log(y);
// let say=()=>alert("no!")
// say();












// let b=()=>alert("well done!");
// b();
function display(){
    let p1=document.querySelector("p");
    p1.innerHTML="result";
    p1.style.backgroundColor="red";
    
}