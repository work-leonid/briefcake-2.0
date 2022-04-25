Rails.application.routes.draw do
  get "pages/*page", to: "pages#show"
  get "dashboard/:page", to: "dashboard#show"
  get "component/:page", to: "component#show"
  get "feed/:page", to: "feed#show"
  root "component#show", page: "home"
end
