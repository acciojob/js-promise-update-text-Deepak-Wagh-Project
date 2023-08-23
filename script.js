//your JS code here. If required.
let pro=new Promise((resolve, reject)=>{
	setTimeout(
	 resolve("Hello,world!"),1000);
	
});
prom.then((data)=>{
	const ele =document.getElementById("output");
	ele.innerText=data;
})