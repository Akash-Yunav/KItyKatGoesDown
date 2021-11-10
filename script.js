// document.write("Hello Kity!");

var x;

for (x = 0; x < 25 ; x++){

    setTimeout(function(){
        var box = document.createElement('div');
        box.className = 'box';
        document.getElementById('container').appendChild(box);
    }, 500*x);
}


