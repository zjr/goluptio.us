class Gol.Models.Home extends Backbone.Model
  paramRoot: 'home'

  # defaults:

class Gol.Collections.HomesCollection extends Backbone.Collection
  model: Gol.Models.Home
  url: '/homes'
