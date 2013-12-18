StarshipChristmas::Application.routes.draw do

  root :to => 'save_santa#index'
  match '*path' => 'save_santa#index', :as => :index
end
