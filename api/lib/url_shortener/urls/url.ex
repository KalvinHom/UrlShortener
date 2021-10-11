defmodule UrlShortener.Urls.Url do
    use Ecto.Schema
    import Ecto.Changeset

    schema "urls" do
        field :url, :string
        field :slug, :string
    end

    def changeset(url, attrs) do
        url
        |> cast(attrs, [:url, :slug])
        |> validate_required([:url, :slug])
    end

end