#!/bin/zsh
# Script to add all variables from .env.local to Vercel for the 'development' environment

ENV_FILE=".env.local"
ENVIRONMENT="development"

if [ ! -f "$ENV_FILE" ]; then
  echo "$ENV_FILE not found!"
  exit 1
fi

while IFS= read -r line || [ -n "$line" ]; do
  # Skip empty lines and comments
  if [[ -z "$line" || "$line" =~ ^# ]]; then
    continue
  fi
  # Extract key and value
  KEY="${line%%=*}"
  VALUE="${line#*=}"
  # Remove possible surrounding quotes from value
  VALUE="${VALUE%\"}"
  VALUE="${VALUE#\"}"
  VALUE="${VALUE%\'}"
  VALUE="${VALUE#\'}"
  # Add to Vercel
  echo "Adding $KEY to Vercel ($ENVIRONMENT)"
  echo "$VALUE" | vercel env add "$KEY" "$ENVIRONMENT"
done < "$ENV_FILE"
