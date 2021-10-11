defmodule UrlShortenerWeb.UrlController do
    use UrlShortenerWeb, :controller

    def create(conn, url) do
        json(conn, %{slug: "abc"})
    end

    def get(conn, slug) do
        json(conn, %{url: "http://abc"})
    end



end