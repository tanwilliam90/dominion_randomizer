Rails.application.routes.draw do
  resources :kingdom_cards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'kingdom_cards#index'
  get '/play' => 'kingdom_cards#play'
  get '/get_card' => 'kingdom_cards#get_card'
end
