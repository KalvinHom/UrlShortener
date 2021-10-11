defmodule UrlShortenerWeb.UrlController do
    use UrlShortenerWeb, :controller
    alias UrlShortener.ShortUrls
    def create(conn, %{"url" => url}) do
        with {:ok, short_url} <- ShortUrls.create_short_url(url) do
            conn
            |> put_status(:created)
            |> json(conn, short_url)
        end
    end
end