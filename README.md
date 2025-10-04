# Music Assistant Alexa API - Home Assistant Add-on Repository

[![Open your Home Assistant instance and show the add add-on repository dialog with this repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmcinnes01%2Fmusic-assistant-alexa-api)

This repository provides a Home Assistant add-on for the Music Assistant Alexa API - a REST API bridge between [Music Assistant](https://github.com/music-assistant) and an Alexa skill.

## Installation

1. **Add this repository to Home Assistant:**
   - Click the badge above, or
   - Navigate to **Supervisor** > **Add-on Store** > **⋮** > **Repositories**
   - Add: `https://github.com/mcinnes01/music-assistant-alexa-api`

2. **Install the add-on:**
   - Find "Music Assistant Alexa API" in the add-on store
   - Click **Install**

3. **Configure and start:**
   - Set username/password for authentication (optional but recommended)
   - Start the add-on

## Configuration

```yaml
username: "admin"           # Optional: Username for basic auth
password: "secure_password" # Optional: Password for basic auth  
port: 3000                 # Port the API will listen on
```

## Usage

The add-on exposes two API endpoints:

- **POST `/ma/push-url`** - Music Assistant pushes stream URLs here
- **GET `/ma/latest-url`** - Alexa skill fetches URLs from here

## Network Access

The API runs on port 3000 and needs to be publicly accessible for Alexa. Use NGINX Proxy Manager add-on:

1. Install NGINX Proxy Manager add-on
2. Create proxy host pointing to `homeassistant:3000`
3. Configure your domain and SSL certificate

## Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/mcinnes01/music-assistant-alexa-api/issues).

## License

MIT
