process.on('tick', function(count){
    console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function(){
    console.log('2초 후에 tick 이벤트 전달을 시도');

    process.emit('tick', '2');
}, 2000);