// function navigation()
// {
//     var images = document.getElementById("pictures"); 
//     images.width = 1000;
//     images.height = 2000;
// }

var imgIndex = 1;
showImg(imgIndex);

function nextImg(n)
{
    showImg(imgIndex += n);
}

function currentImg(n)
{
    showImg(imgIndex =  n);
}

function showImg(n)
{
    var i;
    var img = document.getElementsByClassName("img");
    if(n > img.length)
    {
        imgIndex = 1;
    }
    if(n < 1)
    {
        imgIndex = img.length;
    }
    for(i = 0; i < img.length; i++)
    {
        img[i].style.display = "None";
    }
    img[imgIndex-1].style.display = "block";
}