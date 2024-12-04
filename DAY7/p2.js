function fectchdata(){
    return new Promise ((resolve,reject)=>{
        let data = {id:1,name:'krishna',city:'GZB'};
        setTimeout(()=>{
            resolve(data);
        },3000);
    })
}

fectchdata()
    .then((data)=>{
    console.log(data);
    })
    .catch((err)=>{
        console.log("FAiled to fectch data" +err);
    })


