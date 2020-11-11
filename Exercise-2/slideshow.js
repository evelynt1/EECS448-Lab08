document.addEventListener("DOMContentLoaded", () => 
{
    let img = document.getElementById("img");
    let filepaths = ["cat.jpg", "dolphin.jpg", "pug.jpg", "eagle.jpg", "panda.jpg"];
    let tracker = 0;

    document.getElementById("prev").addEventListener("click", () => 
    {
        tracker--;
        if (tracker < 0) tracker = 4;
        img.src = filepaths[tracker];
    });
    document.getElementById("next").addEventListener("click", () => 
    {
        tracker++;
        if (tracker > 4) tracker = 0;
        img.src = filepaths[tracker];
    });
});

