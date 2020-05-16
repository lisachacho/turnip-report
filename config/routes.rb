Rails.application.routes.draw do
  resources :stocks, except: [:new, :edit]
  resources :islands, except: [:new, :edit]
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
