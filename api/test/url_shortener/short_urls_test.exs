defmodule UrlShortener.ShortUrlsTest do
  use UrlShortener.DataCase

  alias UrlShortener.ShortUrls
  alias UrlShortener.ShortUrls.ShortUrl

  @valid_url "http://google.com"
  @valid_https "https://google.com"
  @missing_scheme "google.com"
  @invalid_scheme "habc://google.com"
  @missing_host "http://"

  describe "short_urls" do
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
end
