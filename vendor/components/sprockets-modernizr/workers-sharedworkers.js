//= require modernizr
Modernizr.addTest('sharedworkers', function(){
  return !!window.SharedWorker;
});