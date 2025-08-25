#!/bin/zsh
# Script to update all variables from .env.local in Vercel for the 'development' environment

ENV_FILE=".env.local"
ENVIRONMENT="development"

if [ ! -f "$ENV_FILE" ]; then
  echo "$ENV_FILE not found!"
  exit 1
fi

echo "Updating environment variables in Vercel..."

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

  echo "Updating $KEY in Vercel ($ENVIRONMENT)"

  # Remove existing variable (suppress error if it doesn't exist)
  vercel env rm "$KEY" "$ENVIRONMENT" --yes 2>/dev/null || true

  # Add the updated variable
  echo "$VALUE" | vercel env add "$KEY" "$ENVIRONMENT"

  if [ $? -eq 0 ]; then
    echo "✅ Successfully updated $KEY"
  else
    echo "❌ Failed to update $KEY"
  fi
  echo ""
done < "$ENV_FILE"

echo "Environment variables update completed!"
