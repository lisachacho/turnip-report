Rails.application.routes.draw do
  resources :stocks, except: [:new, :edit]
  resources :islands, only: [:create, :show, :update, :destroy]

  devise_for :users

  get 'home/welcome'
  root to: 'home#welcome'
end
