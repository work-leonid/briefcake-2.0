class FeedController < ApplicationController
  def show
    @empty = true
    if valid_page?
      render template: "feed/#{params[:page]}", layout: 'feed'
    else
      render file: "public/404.html", status: :not_found
    end
  end

  private
  def valid_page?
    File.exist?(Pathname.new(Rails.root + "app/views/feed/#{params[:page]}.html.erb"))
  end
end