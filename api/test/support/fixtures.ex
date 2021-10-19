defmodule UrlShortener.Fixtures do
  @valid_url "http://google.com"
  alias UrlShortener.ShortUrls

  def fixture(:short_url) do
     ShortUrls.create(@valid_url)
  end
end