'use strict';
//需要加入兼容写法。
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};

var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    // 注意有两种写法
    // video.srcObject = stream;
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.mediaDevices.getUserMedia error: ', error);
}

// 新的api提供了promise的写法
navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
    successCallback(stream)
}).catch(function(error){
  errorCallback(error)
})
//stream 是一个全局变量
setTimeout(() => {
  console.log("stream",stream)
}, 1000)