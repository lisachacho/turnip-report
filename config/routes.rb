Rails.application.routes.draw do
  resources :stocks, except: [:new, :edit]
  resources :islands, only: [:create, :show, :update, :destroy]

  devise_for :users

  root to: 'home#react'
  get '*pages', to: 'home#react', constraints: { format: 'html' }
end
