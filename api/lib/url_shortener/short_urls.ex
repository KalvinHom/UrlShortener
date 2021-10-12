defmodule UrlShortener.ShortUrls do
  alias UrlShortener.ShortUrls.{SlugGenerator, ShortUrl}
  alias UrlShortener.Repo
  
  def create(url) do
    slug = SlugGenerator.generate()

    %ShortUrl{}
    |> ShortUrl.changeset(%{slug: slug, url: url})
    |> Repo.insert()
  end

  def get!(slug) do
    Repo.get_by!(ShortUrl, slug: slug)
  end
end
