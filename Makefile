##---------- Preliminaries ----------------------------------------------------
.POSIX:     # Get reliable POSIX behaviour
.SUFFIXES:  # Clear built-in inference rules

##---------- Variables --------------------------------------------------------
PREFIX = /usr/local  # Default installation directory

##---------- Build targets ----------------------------------------------------

help: ## Show this help message (default)
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run development server
	hugo server -D

build: ## Build
	hugo

local: ## Local
	hugo server -D --bind 192.168.0.195 --port 8080 --baseURL http://192.168.0.195:8080

# cursor: 15 del
