var arrAnh = ["img1","img2"]
var currentIndex = 0;
function next(){
    currentIndex++;
    document.getElementById('image').src = arrAnh[currentIndex]
    if(currentIndex == arrAnh.length -1)
    {
        currentIndex = 0
        document.getElementById("image").src = arrAnh[currentIndex];
    }
}
function pre(){
    
    if(currentIndex == arrAnh.length -1)
    {
        currentIndex = 0
        document.getElementById("image").src = arrAnh[currentIndex];
    }
}
