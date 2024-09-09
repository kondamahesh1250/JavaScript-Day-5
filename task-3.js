var a="banana";
var count=0;
var value="a";
for(i=0;i<a.length;i++){
    if(a[i]==value){
        count=count+1;
    }
}
    console.log(`The character "a" appears ${count} times in "${a}"`);