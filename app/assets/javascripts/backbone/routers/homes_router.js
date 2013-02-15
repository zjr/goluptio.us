Gol.Routers.Home = Backbone.Router.extend({
  routes: {
    "": "index",
    "about": "about",
    "services": "services",
    "contact": "contact",
    "work": "work"
  },
  index: function(){
    this.goTo("index");
  },
  about: function(){
    this.goTo("about");
  },
  services: function(){
    this.goTo("services");
  },
  contact: function(){
    this.goTo("contact");
  },
  work: function(){
    this.goTo("work");
  },
  goTo: function(e){
    $("html, body").stop(true,true);
    
    if (!this.entry) {
      if (e === "index") {
        $("html, body").scrollTop(0);
        this.entry = true;
      } else {
        $(document).ready($("html, body").scrollTop($("#"+e).offset().top));
        Gol.home.view.Plx.onScroll();
        this.entry = true;
      }
    } else {
      if (e === "index") {
        $("html, body").animate({
          scrollTop: 0
        }, 2000, "easeOutExpo");
      } else {
        $("html, body").animate({
        scrollTop: $("#" + e).offset().top
        }, 2000, "easeOutExpo");
      }
    }

  }
});
