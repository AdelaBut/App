if ('serviceWorker' in navigator){
navigator.serviceWorker
.register('/service-worker.js')
.then(function(){
    console.log('Service worker registred');

});
}