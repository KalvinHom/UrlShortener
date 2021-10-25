.PHONY: build client build-server build-client

# `make setup` will be used after cloning or downloading to fulfill
# dependencies, and setup the the project in an initial state.
# # This is where you might download rubygems, node_modules, packages,
# # compile code, build container images, initialize a database,
# # anything else that needs to happen before your server is started
# # for the first time
# setup:

# # `make server` will be used after `make setup` in order to start
# # an http server process that listens on any unreserved port
# #	of your choice (e.g. 8080). 



build:
	build-server;
	build-client;

build-server:
	cd api; \
	MIX_ENV=prod mix release --overwrite

build-client:
	cd client && yarn build

# `make test` will be used after `make setup` in order to run
# your test suite.
# make 