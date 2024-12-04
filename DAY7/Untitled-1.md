# For context, here is a summary of the user's workspace and editor state:
# The user is viewing line 32 of the c:\Users\DELL\OneDrive\Desktop\FSD\DAY7\p1.js file, which is in the javascript language.

```

```



# The user is on a Windows machine.

# The last command and its output in the terminal is: `
PS C:\Users\DELL\OneDrive\Desktop\FSD> node "c:\Users






























                                                    s\DELL\OneDrive\Desktop\FSD\DAY7\p1.js"
first task completed
Second task completed
Third task completed
`
# The current project is a git repository on branch: master




# For context, here is the file "p1.js" at path 'file:///c%3A/Users/DELL/OneDrive/Desktop/FSD/DAY7/p1.js' (line numbers added):
1: // const mypromise =  new Promise((resolve ,reject)=>{
2: //     let success = false;
3: //     setTimeout (()=>{
4: //     if(success){
5: //         resolve("Data send successfully ");
6: //     }
7: //     else{
8: //         reject("data fails to send");
9: //     }
10: // },4000);
11: // })
12: // mypromise
13: //     .then((message)=>{
14: //     console.log("Data recieved = " + message);
15: //     })
16: //     .catch((err)=>{
17: //         console.log("FAiled to fectch data" +err);
18: //     })
19: 
20:     function task(message,delay){
21:         return new Promise((resolve)=>{
22:             setTimeout(()=>{
23:                 console.log(message);
24:                 resolve();
25:             },delay);
26:         })
27:     }
28: 
29: task("first task completed",1000)
30: .then(()=>task("Second task completed",2000))
31: .then(()=>task("Third task completed",3000));
32: 

