#!/bin/bash

# This script will help update commit messages
# We'll use it with git rebase

# Function to update commit message based on commit hash
update_commit_message() {
    local commit_hash="$1"
    local current_message="$2"
    
    case "$commit_hash" in
        "ebaee4d")
            echo "config: Add environment variables for Adtraction API integration"
            ;;
        "c35a604")
            echo "assets: Update favicon for better brand recognition"
            ;;
        "9d6b0c8")
            echo "feat: Enhance admin dashboard functionality"
            ;;
        "0700ed1"|"7292be8"|"6ad444d"|"c896466"|"8198517"|"de042d6"|"737defc")
            echo "refactor: Move register API route to correct folder structure"
            ;;
        "df0a19b"|"7bcb863"|"a5f7f25"|"a86e385")
            echo "feat: Update user registration functionality"
            ;;
        "148bce5")
            echo "config: Update TypeScript configuration for Node.js"
            ;;
        "bbb5d8a"|"d24c032")
            echo "feat: Add email verification helper function"
            ;;
        "d1f2ecf")
            echo "content: Add new blog posts to website"
            ;;
        "f0e7f2f")
            echo "feat: Add products from approved advertisers"
            ;;
        "23d8519"|"83e028e")
            echo "data: Update website product data"
            ;;
        "fc0d1a0"|"ef96d33"|"69698ff"|"ff95428")
            echo "feat: Update website functionality and design"
            ;;
        "8793ddd"|"9d087d8"|"d4ef99e"|"2a8a96d")
            echo "deploy: Trigger Vercel redeploy"
            ;;
        "aa6f51a")
            echo "fix: Update Tailwind config for Vercel build compatibility"
            ;;
        "2617b76")
            echo "deploy: Trigger manual rebuild"
            ;;
        "87ceb9a")
            echo "feat: Update blog post page functionality"
            ;;
        "bc08b5c"|"7bf14ce"|"f563d75"|"7367abe"|"78b1d4e"|"f0ba03c"|"a2b3b67"|"766b6be"|"1ca6278"|"b2cfcd3"|"f8ffece")
            echo "feat: Update products page with new features"
            ;;
        "3de84ec")
            echo "feat: Update website functionality and design"
            ;;
        "31df13c")
            echo "feat: Update donation section and page"
            ;;
        "92639d1")
            echo "config: Update Vercel deployment configuration"
            ;;
        "93f3d35")
            echo "feat: Update index.html with new content"
            ;;
        *)
            echo "$current_message"
            ;;
    esac
}

# Main execution
if [ "$#" -eq 2 ]; then
    update_commit_message "$1" "$2"
else
    echo "Usage: $0 <commit_hash> <current_message>"
    exit 1
fi
