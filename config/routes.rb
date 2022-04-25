Rails.application.routes.draw do
  get "pages/*page", to: "pages#show"
  get "dashboard/:page", to: "dashboard#show"
  root "pages#show", page: "home"
end
