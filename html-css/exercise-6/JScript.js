var check=false;
function disappeared1(){	
	if(check==true)
	{
		document.getElementById("content1").style.display="none";
		document.getElementById("arrow1").src="top2.gif";	
	}
	else
	{
		document.getElementById("content1").style.display="block";
		document.getElementById("arrow1").src="top.gif";
	}
	check= !check;	
}
function disappeared2()
{
	if(check==true)
	{
		document.getElementById("content2").style.display="none";
		document.getElementById("arrow2").src="top2.gif";
	}
	else
	{
		document.getElementById("content2").style.display="block";
		document.getElementById("arrow2").src="top.gif";
	}
	check=!check;
}
function disappeared3()
{
	if(check==true)
	{
		document.getElementById("content3").style.display="none";
		document.getElementById("arrow3").src="top2.gif";
	}
	else
	{
		document.getElementById("content3").style.display="block";
		document.getElementById("arrow3").src="top.gif";
	}
	check= !check;
}