//notes
var notes = document.getElementsByClassName('app_notes')[0];
var maps = document.getElementsByClassName('app_maps')[0],
    $boxTwo = $('.app_maps:eq(1)');
  var sketch = document.getElementsByClassName('app_sketch')[0],
    $boxTwo = $('.app_sketch:eq(1)');
var miku = document.getElementsByClassName('app_miku')[0],
    $boxTwo = $('.app_miku:eq(1)');
var pref = document.getElementsByClassName('app_pref')[0],
    $boxTwo = $('.app_miku:eq(1)');
var wiki = document.getElementsByClassName('app_wiki')[0],
    $boxTwo = $('.app_wiki:eq(1)');
var calc = document.getElementsByClassName('app_calc')[0],
    $boxTwo = $('.app_calc:eq(1)');  

document.getElementsByClassName('app_notes')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/LNbYzY';}, 500) 
  } else {
     this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/LNbYzY';}, 500) 

maps.classList.add('hide');
    wiki.classList.add('hide');
    sketch.classList.add('hide');
    pref.classList.add('hide');
    calc.classList.add('hide');
    miku.classList.add('hide');
    setTimeout(function(){notes.classList.add('zoom');}, 160) 
  }  
}



//sketch

document.getElementsByClassName('app_sketch')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     
  } else {
     this.innerHTML = ' ';
 
maps.classList.add('hide');
    wiki.classList.add('hide');
    pref.classList.add('hide');
    notes.classList.add('hide');
    miku.classList.add('hide');
    calc.classList.add('hide');
    setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/zrGyjE';}, 500) 
    setTimeout(function(){sketch.classList.add('zoom');}, 160) 
  }  
}


//miku

document.getElementsByClassName('app_miku')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='https://s.codepen.io/gi-os/debug/vGKryq';}, 500) 
    miku.classList.add('zoom');
  } else {
     this.innerHTML = ' ';
maps.classList.add('hide');
    wiki.classList.add('hide');
    sketch.classList.add('hide');
    pref.classList.add('hide');
    notes.classList.add('hide');
 calc.classList.add('hide');
    setTimeout(function(){location.href='https://s.codepen.io/gi-os/debug/vGKryq';}, 500) 
    setTimeout(function(){miku.classList.add('zoom');}, 160) 
  }  
}



//pref

document.getElementsByClassName('app_pref')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/wGoMOZ';}, 500) 
    pref.classList.add('zoom');
  } else {
     this.innerHTML = ' ';
 maps.classList.add('hide');
    wiki.classList.add('hide');
    sketch.classList.add('hide');
    miku.classList.add('hide');
    notes.classList.add('hide');
    calc.classList.add('hide');
     setTimeout(function(){pref.classList.add('zoom');}, 160)  
    setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/wGoMOZ';}, 500) 
  }  
}


//wiki

document.getElementsByClassName('app_wiki')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/grLozK';}, 500) 
    wiki.classList.add('zoom');
  } else {
     this.innerHTML = ' ';
maps.classList.add('hide');
    sketch.classList.add('hide');
    pref.classList.add('hide');
    notes.classList.add('hide');
    miku.classList.add('hide');
calc.classList.add('hide');
     setTimeout(function(){wiki.classList.add('zoom');}, 160)  
    setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/grLozK';}, 500) 
  }  
}

//maps
document.getElementsByClassName('app_maps')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/ONbZra';}, 500) 
    
    
  } else {
     this.innerHTML = ' ';
    wiki.classList.add('hide');
    sketch.classList.add('hide');
    pref.classList.add('hide');
    notes.classList.add('hide');
    miku.classList.add('hide');
    calc.classList.add('hide');
 setTimeout(function(){maps.classList.add('zoom');}, 160)   
    setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/ONbZra';}, 500) 
  }  
}

//calc
document.getElementsByClassName('app_calc')[0].onclick = function() {
  if(this.innerHTML === ' ')
  { 
    this.innerHTML = ' ';
     setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/ONbZra';}, 500) 
    
    
  } else {
     this.innerHTML = ' ';
    wiki.classList.add('hide');
    sketch.classList.add('hide');
    pref.classList.add('hide');
    notes.classList.add('hide');
    miku.classList.add('hide');
    maps.classList.add('hide');
 setTimeout(function(){calc.classList.add('zoom');}, 160)   
    setTimeout(function(){location.href='http://s.codepen.io/gi-os/debug/wGgPEJ';}, 500) 
  }  
}
































$(document).ready(function () {
    $('#layer-one').mousemove(function (e) {
        parallax(e, this, 1);
        parallax(e, document.getElementById('layer-two'), 2);
        parallax(e, document.getElementById('layer-three'), 3);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};

