  /**
* Module : _ProgressBarModule
* Public Api : _ProgressBarModule.init();
* Created on : 29.10.2017
* Author : Leo Jacobs
*/
 
var _ProgressBarModule = (function(window){
'use strict';
  var _PrivateSettings = {
    $progressBars : document.querySelectorAll('div[role="progressbar"]'),
    $timer: 5000
  }
 
  var _showPercentage = function(){
    setTimeout(function(){
      $('.percentage').addClass('show');
    }, _PrivateSettings.$timer);
    
  };


  var init = function(){
    //Reverse JS Loop - taken from https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/
    for(var i = _PrivateSettings.$progressBars.length-1; i>=0; i--){
      var widthValue = _PrivateSettings.$progressBars[i].getAttribute('aria-valuenow') + "%";
      $(_PrivateSettings.$progressBars[i]).animate({
        width: widthValue
      }, _PrivateSettings.$timer, _showPercentage());
      
    }
  }
 
  return {
    init: init
  }
}(window));

