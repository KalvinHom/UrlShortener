defmodule UrlShortenerWeb.FallbackController do
  @moduledoc """
  Translates controller action results into valid `Plug.Conn` responses.

  See `Phoenix.Controller.action_fallback/1` for more details.
  """
  use UrlShortenerWeb, :controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    conn
    |> put_status(:unprocessable_entity)
    |> put_view(UrlShortenerWeb.ChangesetView)
    |> render("error.json", changeset: changeset)
  end

  def call(conn, {:error, :not_found}) do
    conn
    |> put_status(:not_found)
    |> put_view(UrlShortenerWeb.ErrorView)
    |> render(:"404")
  end

  def call(conn, {:error, errors}) when is_list(errors) do
    conn
    |> put_status(400)
    |> json(%{errors: errors})
  end

  def call(conn, {:error, errors}) do
    conn
    |> put_status(400)
    |> json(%{errors: [errors]})
  end

  def call(conn, nil) do
    conn
    |> put_status(:not_found)
    |> put_view(UrlShortenerWeb.ErrorView)
    |> render(:"404")
  end
end
