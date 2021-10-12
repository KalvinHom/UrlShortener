defmodule UrlShortenerWeb.ShortUrlController do
    use UrlShortenerWeb, :controller
    action_fallback(UrlShortenerWeb.FallbackController)

    alias UrlShortener.ShortUrls
    def create(conn, %{"url" => url}) do
        with {:ok, short_url} <- ShortUrls.create(url) do
            conn
            |> put_status(:created)
            |> json(short_url)
        end
    end

    def show(conn, %{"slug" => slug}) do
        short_url = ShortUrls.get!(slug)
        json(conn, short_url)
    end
end