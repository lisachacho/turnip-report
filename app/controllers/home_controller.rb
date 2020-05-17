class HomeController < ApplicationController
  def welcome
    render template: 'layouts/application'
  end
end
