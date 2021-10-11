defmodule UrlShortener.Urls do
    def create_slug()
        :crypto.strong_rand_bytes(6)
        |> Base.url_encode64()
    end
end