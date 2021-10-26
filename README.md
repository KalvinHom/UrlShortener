# UrlShortener

## Dependencies

Elixir - tested on 1.12.2

Erlang - tested on 22.2

(Versions specified in .tool-versions for asdf version manager)

Postgres - tested on 12

## Running Locally

`make setup` to setup initial DB and get dependencies

`make test` will start both the API and frontend apps in the backround, run both backend and frontend tests, then shut the apps down.

`make server` to start the Phoenix API server at `localhost:4000`

`make client` to start the React application at `localhost:3000`

## Production

This application is being deployed using Render.

The live app is located at `https://urlshortener.kalvinhom.dev`
