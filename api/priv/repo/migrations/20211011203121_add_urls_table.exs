defmodule UrlShortener.Repo.Migrations.AddShortUrlsTable do
  use Ecto.Migration

  def change do
    create table(:short_urls) do
      add(:slug, :string, null: false)
      add(:url, :text, null: false)
    end

    create index(:short_urls, [:slug], unique: true)
  end
end
