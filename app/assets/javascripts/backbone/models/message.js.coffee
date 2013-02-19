class Gol.Models.Message extends Backbone.Model
  paramRoot: 'message'

  defaults:
    from: null
    email: null
    company: null
    phone: null
    content: null

class Gol.Collections.MessagesCollection extends Backbone.Collection
  model: Gol.Models.Message
  url: '/messages'
