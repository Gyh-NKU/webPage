let x=[0,1,2,3,4,5,6];
function xy(){
    
    for(let i=1;i<=6;i++){
    x[i]+=6;
    if(x[i]>12){x[i]-=12;}
    document.getElementById('pic'+i).src="./images/banner-"+x[i]+".jpg";
    }
}



