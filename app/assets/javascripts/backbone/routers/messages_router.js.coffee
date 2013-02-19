class Gol.Routers.MessagesRouter extends Backbone.Router
  initialize: (options) ->
    @messages = new Gol.Collections.MessagesCollection()
    @messages.reset options.messages

  routes:
    "new"      : "newMessage"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newMessage: ->
    @view = new Gol.Views.Messages.NewView(collection: @messages)
    $("#messages").html(@view.render().el)

  index: ->
    @view = new Gol.Views.Messages.IndexView(messages: @messages)
    $("#messages").html(@view.render().el)

  show: (id) ->
    message = @messages.get(id)

    @view = new Gol.Views.Messages.ShowView(model: message)
    $("#messages").html(@view.render().el)

  edit: (id) ->
    message = @messages.get(id)

    @view = new Gol.Views.Messages.EditView(model: message)
    $("#messages").html(@view.render().el)
