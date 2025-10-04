#!/usr/bin/with-contenv bashio

bashio::log.info "Starting Music Assistant Alexa API Addon..."

# Get configuration
USERNAME=$(bashio::config 'username')
PASSWORD=$(bashio::config 'password')
PORT=$(bashio::config 'port')

# Set environment variables if provided
if bashio::config.has_value 'username'; then
    export API_USERNAME="$USERNAME"
fi

if bashio::config.has_value 'password'; then
    export API_PASSWORD="$PASSWORD"
fi

export API_PORT="$PORT"

bashio::log.info "API will be available on port $PORT"

# Start the application
exec node /app/server.js