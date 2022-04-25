class ComponentController < ApplicationController
  def show
    if valid_page?
      render template: "components/#{params[:page]}", layout: 'component'
    else
      render file: "public/404.html", status: :not_found
    end
  end

  private
  def valid_page?
    File.exist?(Pathname.new(Rails.root + "app/views/components/#{params[:page]}.html.erb"))
  end
end