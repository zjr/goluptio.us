Gol.Views.Messages ||= {}

class Gol.Views.Messages.MessageView extends Backbone.View
  template: JST["backbone/templates/messages/message"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this
