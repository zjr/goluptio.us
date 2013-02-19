class Message < ActiveRecord::Base
  attr_accessible :company, :content, :email, :from, :phone
end
