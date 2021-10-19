defmodule UrlShortenerWeb.ShortUrlControllerTest do
  use UrlShortenerWeb.ConnCase
  import UrlShortener.Fixtures

  @valid_url "http://google.com"
  @invalid_url "http://"

  describe "test short url endpoints" do
    test "creating slug and retrieving url", %{conn: conn} do

      conn = post(conn, Routes.short_url_path(conn, :create, url: @valid_url))
      assert %{"slug" => slug} = json_response(conn, 201)

      conn = get(conn, Routes.short_url_path(conn, :show, slug))
      assert json_response(conn, 200)["url"] == @valid_url
    end

    test "get 404 from invalid slug", %{conn: conn} do
      assert_error_sent 404, fn ->
       get(conn, Routes.short_url_path(conn, :show, "abc"))
      end
    end

    test "get 422 from invalid request", %{conn: conn} do
      conn = post(conn, Routes.short_url_path(conn, :create, url: @invalid_url))
      assert json_response(conn, 422)["errors"] != %{}
    end
  end
end
