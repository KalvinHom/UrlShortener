defmodule UrlShortener.ShortUrls.ShortUrl do
    use Ecto.Schema
    import Ecto.Changeset
    @derive {Jason.Encoder, only: [:url, :slug]}

    schema "short_urls" do
        field :url, :string
        field :slug, :string
    end

    def changeset(short_url, attrs) do
        short_url
        |> cast(attrs, [:url, :slug])
        |> validate_required([:url, :slug])
    end

end