window.onload=function(){
	var my3D=document.getElementById("pagegroup");
	var Three3D={
		"img1":"img/1.jpg",
		"img2":"img/2.jpg",
		"img3":"img/3.jpg",
		"img4":"img/4.jpg"
	}
	var i=0;
	var num=0;
	for ( i in Three3D) {
		num+=1;
		var div=document.createElement("div");
		div.className="page"
		div.id="page"+num;
		my3D.appendChild(div);
		var img=document.createElement("img");
		img.src=Three3D[i];
		div.appendChild(img);
	};
}
var curIndex=1;
function next(){
	if (curIndex==4) {return;}
	var curpage=document.getElementById("page"+curIndex);
	curpage.style.webkitTransform="rotateX(-90deg)";
	curIndex++;
	var nextpage=document.getElementById("page"+curIndex);
	nextpage.style.webkitTransform="rotateX(0deg)";
}
function pre(){
	if (curIndex==1) {return;}
	var curpage=document.getElementById("page"+curIndex);
	curpage.style.webkitTransform="rotateX(90deg)";
	curIndex--;
	var prepage=document.getElementById("page"+curIndex);
	prepage.style.webkitTransform="rotateX(0deg)";
}