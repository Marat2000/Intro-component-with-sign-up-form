var erroricon=document.getElementsByTagName('img');
var errortext=document.getElementsByClassName('errortext');
var input=document.getElementsByTagName('input');
var btn=document.getElementById('claim');


for(var i=0;i<erroricon.length;i++)
{erroricon[i].style.display="none";
errortext[i].style.display="none";
}


btn.onclick=()=>
{




for(i=0;i<2;i++)
{

	if(/^([a-z]+)$/.test(input[i].value))
		{
		erroricon[i].style.display="none";
		errortext[i].style.display="none";
		input[i].style.border="hsl(246, 25%, 77%) .1rem solid";
		}
	else
		{
		erroricon[i].style.display="block";
		errortext[i].style.display="block";
		input[i].style.border=" hsl(0, 100%, 74%) .15rem solid";
		console.log(input[i].placeholder);
		if(input[i].value!='')
		{errortext[i].textContent="Looks like this is not an "+input[i].placeholder};
		}


}


if(/^([a-z\d\.\-\_]+)\@([a-z]+)\.([a-z\.]+)$/.test(input[2].value))
{
		erroricon[2].style.display="none";
		errortext[2].style.display="none";
		input[2].style.border="hsl(246, 25%, 77%) .1rem solid";
		}
	else
		{
		erroricon[2].style.display="block";
		errortext[2].style.display="block";
		input[2].style.border=" hsl(0, 100%, 74%) .15rem solid";
		errortext[2].textContent="Looks like this is not an "+input[2].placeholder;
		}


	if(/^([\w\.\-\@]{8,12})$/.test(input[3].value))
		{
		erroricon[3].style.display="none";
		errortext[3].style.display="none";
		input[3].style.border="hsl(246, 25%, 77%) .1rem solid";
		}
else
	{
		erroricon[3].style.display="block";
		errortext[3].style.display="block";
		input[3].style.border=" hsl(0, 100%, 74%) .15rem solid";
		errortext[3].textContent="The "+input[3].placeholder+" should be between 8-12 letters(@ . - _ also allowed)";
		}


					for(i=0;i<input.length;i++)
					{
						if(input[i].value=='')
						{
						erroricon[i].style.display="block";
						errortext[i].style.display="block";
						input[i].style.border=" hsl(0, 100%, 74%) .15rem solid";
						errortext[i].textContent="cannot be empty "+input[i].placeholder}
						}


}


