defmodule UrlShortener.ShortUrls.ShortUrl do
  use Ecto.Schema
  import Ecto.Changeset
  @derive {Jason.Encoder, only: [:url, :slug]}

  schema "short_urls" do
    field(:url, :string)
    field(:slug, :string)
  end

  def changeset(short_url, attrs) do
    short_url
    |> cast(attrs, [:url, :slug])
    |> validate_required([:url, :slug])
    |> validate_change(:url, &validate_url/2)
  end

  defp validate_url(field, value) do
    value
    |> URI.parse
    |> validate_scheme
    |> validate_host
    |> case do
      :error -> [{:url, "Invalid URL"}]
      _ -> []
    end
  end

  defp validate_scheme(%URI{scheme: scheme} = uri) when scheme == "http" or scheme == "https",
    do: uri

  defp validate_scheme(_), do: :error

  defp validate_host(%URI{host: host} = uri) do
    case :inet.gethostbyname(Kernel.to_charlist host) do
        {:ok, _} -> uri
        {:error, _} -> :error
    end
  end
  
  defp validate_host(_), do: :error
end
