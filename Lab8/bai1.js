 //play and pause
 var x = document.getElementById("myVideo");

 function playVid() {
   x.play();
 }

 function pauseVid() {
   x.pause();
 }
 var vid = document.getElementById("myVideo");

 //tăng giảm âm lượng
 function increaseVolume() {
   var currentVolume = vid.volume;
   if (currentVolume < 1) {
     vid.volume += 0.2;
   }
 }

 function decreaseVolume() {
   var currentVolume = vid.volume;
   if (currentVolume > 0) {
     vid.volume -= 0.2;
   }
 }
 var vid = document.getElementById("myVideo");

 //dừng video và đưa thời gian về 0(stop)
 function stopVideo() {
   vid.pause();
   vid.currentTime = 0;
 }
 //Tắt bật chức năng play lặp đi lặp lại
 var vid = document.getElementById("myVideo");

 function toggleLoop() {
   vid.loop = !vid.loop;
 }