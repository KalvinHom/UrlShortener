.PHONY: $(MAKECMDGOALS)
# `make setup` will be used after cloning or downloading to fulfill
# dependencies, and setup the the project in an initial state.
# # This is where you might download rubygems, node_modules, packages,
# # compile code, build container images, initialize a database,
# # anything else that needs to happen before your server is started
# # for the first time
setup:
	cd api; \
	mix deps.get; \
	mix ecto.create; 
	cd client; \
	yarn; \
	yarn global add pm2;


# `make test` will be used after `make setup` in order to run
# your test suite.
test: test-backend test-frontend
	
# runs phoenix tests
test-backend:
	cd api;	\
	mix test

# starts server, runs cypress tests, and stops processes
test-frontend:
	cd api; \
	MIX_ENV=integration mix ecto.reset; \
	MIX_ENV=integration mix compile; \
	MIX_ENV=integration mix release --overwrite; \
	_build/integration/rel/url_shortener/bin/url_shortener daemon;
	cd client; \
	pm2 start --name UrlShortener npm -- start; \
	yarn cypress run; \
	pm2 stop UrlShortener; \
	pm2 delete UrlShortener; 
	cd api; \
	_build/integration/rel/url_shortener/bin/url_shortener stop;





# `make server` starts the phoenix server on localhost:4000
server:
	cd api; \
	mix ecto.migrate; \
	mix phx.server;

# `make client` starts the frontend application on localhost:3000
client: 
	cd client; \
	yarn; \
	yarn start

	
build:
	build-server;
	build-client;

build-server:
	cd api; \
	mix deps.get --only prod; \
	MIX_ENV=prod mix ecto.migrate; \
	MIX_ENV=prod mix compile; \
	MIX_ENV=prod mix release --overwrite;

build-client:
	cd client; \
	yarn; \
	yarn build;

