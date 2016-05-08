 var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
 
 
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

  $(document).ready(function() {
    $('#layer-one').mousemove(function(e) {
      parallax(e, this, 1);
      parallax(e, document.getElementById('layer-two'), 2);
      parallax(e, document.getElementById('layer-three'), 3);
    });
  });

  function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageY - ($(window).width() / 5)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageX - ($(window).height() / 5)) / layer_coeff;
    $(target).offset({
      top: y,
      left: x
    });
  };
