//Get current month and find(winter, fall, summer)
var month=new Date();
var save=month.getMonth();
console.log(save);

if(save<4){
	document.write("summer");
}

else if(ram>=4 && ram<=08){
	document.write("winter");
}
else{
	document.write("fall");
}