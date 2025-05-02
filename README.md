
# 🛠️ Renovate Runner for AWS Lambda

This is a self-hosted Renovate bot runner designed to mirror Dependabot functionality using Bitbucket + AWS Lambda + Docker.

## 🚀 Features

- Automatically pulls your Bitbucket repo(s)
- Creates PRs for outdated dependencies
- Fully configurable via `renovate-config.js`
- Can run on a schedule via EventBridge (daily, weekly, etc.)
- Hosted entirely by you (no GitHub/Dependabot limits)

## 📦 Project Structure

```
.
├── Dockerfile              # Docker image for Lambda
├── index.js                # Entrypoint script for Renovate
├── renovate-config.js      # Renovate config with Bitbucket auth
└── README.md               # This file
```

## 🔧 Environment Variables

Make sure to configure the following in your AWS Lambda settings:

| Variable               | Description                        |
|------------------------|------------------------------------|
| `BITBUCKET_USERNAME`   | Bitbucket bot username             |
| `BITBUCKET_APP_PASSWORD` | Bitbucket app password (read/write) |

## 🐳 Build & Push Docker to ECR

```
docker build -t renovate-lambda .
docker tag renovate-lambda:latest <your-ecr-url>/renovate-lambda:latest
docker push <your-ecr-url>/renovate-lambda:latest
```

## 🕒 Schedule with EventBridge

Use AWS EventBridge to schedule automatic execution of your Lambda, e.g.

```
rate(1 day)
```

## 📄 License

MIT
