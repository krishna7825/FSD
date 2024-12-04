// const mypromise =  new Promise((resolve ,reject)=>{
//     let success = false;
//     setTimeout (()=>{
//     if(success){
//         resolve("Data send successfully ");
//     }
//     else{
//         reject("data fails to send");
//     }
// },4000);
// })
// mypromise
//     .then((message)=>{
//     console.log("Data recieved = " + message);
//     })
//     .catch((err)=>{
//         console.log("FAiled to fectch data" +err);
//     })

    function task(message,delay){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(message);
                resolve();
            },delay);
        })
    }

task("first task completed",1000)
.then(()=>task("Second task completed",2000))
.then(()=>task("Third task completed",3000));
