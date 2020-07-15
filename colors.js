var Link = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i+1;
        }
    }
}

var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self){
    
var target = document.querySelector('body');
if(self.value === 'night'){
//target.style.backgroundColor='black';
Body.setBackgroundColor('black');
//target.style.color='white';
Body.setColor('white');
self.value = 'day';

// var alist = document.querySelectorAll('a');
// var i = 0;
// while(i < alist.length){
// alist[i].style.color = 'powderblue';
// i = i +1;
// }
Link.setColor('powderblue');


} else {
    //target.style.backgroundColor='white';
    Body.setBackgroundColor('white');
    //target.style.color='black';
    Body.setColor('black');
    self.value = 'night';

    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color = 'black';
    // i = i +1;
    // }
    Link.setColor('black');
}
    }