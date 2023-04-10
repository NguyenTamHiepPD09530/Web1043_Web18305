var arr_hinh=[
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
  ]
  var index=0;
  function next(){
    index++;
    if(index>=arr_hinh.length)index=0;

    var hinh=document.getElementById("hinh");
    hinh.src = arr_hinh[index];
    document.getElementById ("dem").innerHTML = index+"/" + arr_hinh.length;
  }
  function prev(){
    index--;
    if(index<0) index= arr_hinh.length -1;

    document.getElementById("hinh").src=arr_hinh[index];
    document.getElementById("dem").innerHTML =index+"/" + arr_hinh.length;
  }