Gol.Views.Home = Backbone.View.extend({
	el: $("body"),
	events: {
		"click .nav-item": "slide"
	},
	slide: function(e) {
		e.preventDefault();
		this.path = e.target.pathname;
		Gol.home.router.navigate(this.path, {trigger:true});
	},
	ScrollSpy: function(){
		$('.ms-panel').each(function(i){
			var position = $(this).position();
			var area = this.id;
			var stateObj = { section: area };
			$(this).scrollspy({
				min: position.top,
				max: position.top + $(this).height(),
				onEnter: function(element, position) {
					if (area === "home") {
						Gol.home.router.navigate("", {replace: true});
					} else {
						Gol.home.router.navigate("/"+area, {replace: true});
					}
				},
				onLeave: function(element, position) {
					return true;
				}
			});
		});
	},
	Plx: {
		w: window.innerWidth,
		h: document.height,
		
		bg: $('#bg')[0],
		
		bgObj: null,
		
		canvas: $('#plx-container canvas')[0],
		renderer: null,
		camera: null,
		scene: new THREE.Scene(),
		
		rendPick: function(){
			if (Modernizr.webgl) {
				this.renderer = new THREE.WebGLRenderer({
					canvas: this.canvas,
					alpha: false,
					clearColor: 0x000000
				});
			} else if (Modernizr.canvas) {
				this.renderer = new THREE.CanvasRenderer({
					canvas: this.canvas
				});
				this.renderer.setClearColorHex(0x000000);
			}
		},

		mainBG: $('#ms-scroll')[0],

		ticking: false,
		lastScrollY: 0,

		onResize: function (){
			$('#plx-container').height(document.height);
			var _this = Gol.home.view.Plx;
			if(_this.camera === null){
				_this.createElements();
				_this.camera = new THREE.OrthographicCamera(0, window.innerWidth, 0, window.innerHeight, -2000, 2000);
				_this.scene.add(_this.camera);
			} else {
				_this.camera.right = window.innerWidth;
				_this.camera.bottom = window.innerHeight;
			}
			_this.renderer.setSize(window.innerWidth, window.innerHeight);
			_this.updateElements(window.scrollY);
		},

		onScroll: function (evt){
			var _this = Gol.home.view.Plx;
			if(!_this.ticking){
				_this.ticking = true;
				_this.lastScrollY = window.scrollY;
				requestAnimationFrame(_this.updateElements);
			}
		},

		createElements: function (){
			this.bgRat = 1.5144124168514412;
			this.bgTexture = new THREE.Texture(this.bg);
			this.bgMaterial = new THREE.MeshBasicMaterial({map: this.bgTexture});
			this.bgTexture.needsUpdate = true;
			this.bgObj = new THREE.Mesh(new THREE.PlaneGeometry(window.innerHeight*2*this.bgRat, window.innerHeight*2, 1, 1), this.bgMaterial);
			this.bgObj.rotation.x = Math.PI;
			this.bgObj.position.x = window.innerHeight*2*this.bgRat/2;
			this.bgObj.position.z = -1;
			this.scene.add(this.bgObj);
		},

		updateElements: function(){
			var _this = Gol.home.view.Plx;
			var relativeY = _this.lastScrollY / _this.h;

			_this.bgObj.position.y = window.innerHeight + _this.pos(0, -window.innerHeight, relativeY, 0);

			_this.renderer.render(_this.scene, _this.camera);
			_this.ticking = false;
		},

		pos: function(base, range, relY, offset){
			return base + this.limit(0, 1, relY - offset) * range;
		},

		prefix: function(obj, prop, value){
			var prefs = ['webkit', 'moz', 'o', 'ms'];
			for (var pref in prefs){
				obj[prefs[pref] + prop] = value;
			}
		},

		limit: function(min, max, value){
			return Math.max(min, Math.min(max, value));
		},

		initListen: function(){
			window.addEventListener('load', this.onResize, false);
			window.addEventListener('resize', this.onResize, false);
			window.addEventListener('scroll', this.onScroll, false);
		}
	},
	GMap: {
		initialize: function() {
			var styles = [
				{
					"stylers": [
						{ "saturation": -100 },
						{ "lightness": 0 },
						{ "invert_lightness": true }
					]
				},{
					"featureType": "poi",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{ "color": "#17c58a" }
					]
				}
			];
			var styledMap = new google.maps.StyledMapType(styles, {styles: "Goluptious Map"});
			var mapOptions = {
				zoom: 5,
				center: new google.maps.LatLng(41.8, -78.5),
				disableDefaultUI: true,
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
				}
			};
			var map = new google.maps.Map(document.getElementById("GMap"), mapOptions);
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');

			var flint = new google.maps.LatLng(43.0125, -83.6875);
			var marker = new google.maps.Marker({
				position: flint,
				map: map,
				title:"Goluptious: Flint, MI"
			});
			google.maps.event.addListener(marker, 'click', zoom);
			var zoomed = false;
			function zoom(){
				if (!zoomed) {
					map.setCenter(marker.getPosition());
					map.setZoom(12);
					zoomed = true;
				} else {
					map.setCenter(mapOptions.center),
					map.setZoom(5),
					zoomed = false;
				}
			}
		},
		loadScript: function() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCPKUi9m6cgY0s-wwzVV9RrZDRXyflhQ_U&sensor=false&callback=Gol.home.view.GMap.initialize';
			document.body.appendChild(script);
		}
	},
	loadForm: function(){
		this.formView = new Gol.Views.Messages.NewView({
			el: $('#form-container'),
			collection: new Gol.Collections.MessagesCollection()
		});
		this.formView.render();
	}
});
