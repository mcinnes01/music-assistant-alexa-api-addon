# Music Assistant Alexa API

This project provides a simple REST API bridge between [Music Assistant](https://github.com/music-assistant) and an Alexa skill. It allows Music Assistant to push a stream URL, which can then be fetched by an Alexa skill.

## Features

- **POST /ma/push-url**  
  Accepts a JSON payload with a `streamUrl` to store the latest stream URL.

- **GET /ma/latest-url**  
  Returns the most recently pushed `streamUrl` for Alexa to consume.

## Usage

### Running Locally

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the server:**
   ```sh
   npm start
   ```
   By default, the server listens on port `3000`. You can override this with the `PORT` environment variable:
   ```sh
   PORT=8080 npm start
   ```

### Building and Running with Docker

1. **Build the image:**
   ```sh
   docker build -t music-assistant-alexa-api .
   ```

2. **Run the container:**
   ```sh
   docker run --rm -d -p 3000:3000 music-assistant-alexa-api
   ```
   You can override the port with:
   ```sh
   docker run --rm -d -e PORT=8080 -p 8080:8080 music-assistant-alexa-api
   ```

### Using GitHub Container Registry (GHCR) and Docker Run

1. **Pull the image from GitHub Container Registry (GHCR):**
    ```sh
    docker pull ghcr.io/alams154/music-assistant-alexa-api:latest
    ```

2. **Run the container:**
    ```sh
    docker run --rm -d -p 3000:3000 ghcr.io/alams154/music-assistant-alexa-api:latest
    ```

### Using GitHub Container Registry (GHCR) and Docker Compose

```yaml
services:
    music-assistant-alexa-api:
        image: ghcr.io/alams154/music-assistant-alexa-api:latest
        ports:
            - "3000:3000"
```

## API

### POST `/ma/push-url`

**Body:**
```json
{
  "streamUrl": "https://example.com/stream.mp3"
}
```

**Response:**
```json
{ "status": "ok" }
```

### GET `/ma/latest-url`

**Response:**
```json
{
  "streamUrl": "https://example.com/stream.mp3"
}
```
Returns `404` if no URL has been pushed yet.

## Files

- `server.js` — Express server with the API endpoints.
- `Dockerfile` — For containerizing the app.
- `package.json` — Project metadata and dependencies.

## License

MIT