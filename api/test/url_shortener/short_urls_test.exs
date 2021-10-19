defmodule UrlShortener.ShortUrlsTest do
  use UrlShortener.DataCase
  import UrlShortener.Fixtures
  alias UrlShortener.ShortUrls
  alias UrlShortener.ShortUrls.ShortUrl

  @valid_url "http://google.com"
  @valid_https "https://google.com"
  @missing_scheme "google.com"
  @invalid_scheme "habc://google.com"
  @missing_host "http://"

  setup [:create_short_url]

  describe "create short urls" do
    test "create with valid url" do
      assert {:ok, %ShortUrl{} = url} = ShortUrls.create(@valid_url)
      assert(url.url == @valid_url)
    end

    test "create with valid https" do
      assert {:ok, %ShortUrl{} = url} = ShortUrls.create(@valid_https)
      assert(url.url == @valid_https)
    end

    test "create with missing scheme" do
      assert {:error, %Ecto.Changeset{}} = ShortUrls.create(@missing_scheme)
    end

    test "create with invalid scheme" do
      assert {:error, %Ecto.Changeset{}} = ShortUrls.create(@invalid_scheme)
    end

    test "create with missing host" do
      assert {:error, %Ecto.Changeset{}} = ShortUrls.create(@missing_host)
    end
  end

  describe "get url" do
    setup [:create_short_url]

    test "get url from slug", %{short_url: short_url} do
      %{slug: slug, url: url} = short_url
      assert ShortUrls.get!(slug).url == url
    end
  end

  defp create_short_url(_) do
    {:ok, short_url} = fixture(:short_url)
    %{short_url: short_url}
  end
end
