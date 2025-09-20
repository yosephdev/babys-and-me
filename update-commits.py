#!/usr/bin/env python3

import subprocess
import sys
import re

def get_commit_messages():
    """Get all commit messages from the last 4 months"""
    cmd = ["git", "log", "--oneline", "--since=4 months ago"]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.stdout.strip().split('\n')

def update_commit_message(commit_hash, current_message):
    """Update commit message based on commit hash"""
    commit_messages = {
        "ebaee4d": "config: Add environment variables for Adtraction API integration",
        "c35a604": "assets: Update favicon for better brand recognition",
        "9d6b0c8": "feat: Enhance admin dashboard functionality",
        "0700ed1": "refactor: Move register API route to correct folder structure",
        "7292be8": "refactor: Move register API route to correct folder structure",
        "6ad444d": "refactor: Move register API route to correct folder structure",
        "c896466": "refactor: Move register API route to correct folder structure",
        "8198517": "refactor: Move register API route to correct folder structure",
        "de042d6": "refactor: Move register API route to correct folder structure",
        "737defc": "refactor: Move register API route to correct folder structure",
        "df0a19b": "feat: Update user registration functionality",
        "7bcb863": "feat: Update user registration functionality",
        "a5f7f25": "feat: Update user registration functionality",
        "a86e385": "feat: Update user registration functionality",
        "148bce5": "config: Update TypeScript configuration for Node.js",
        "bbb5d8a": "feat: Add email verification helper function",
        "d24c032": "feat: Add email verification helper function",
        "d1f2ecf": "content: Add new blog posts to website",
        "f0e7f2f": "feat: Add products from approved advertisers",
        "23d8519": "data: Update website product data",
        "83e028e": "data: Update website product data",
        "fc0d1a0": "feat: Update website functionality and design",
        "8793ddd": "deploy: Trigger Vercel redeploy",
        "9d087d8": "deploy: Trigger Vercel redeploy",
        "d4ef99e": "deploy: Trigger Vercel redeploy",
        "2a8a96d": "deploy: Trigger Vercel redeploy",
        "aa6f51a": "fix: Update Tailwind config for Vercel build compatibility",
        "2617b76": "deploy: Trigger manual rebuild",
        "87ceb9a": "feat: Update blog post page functionality",
        "bc08b5c": "feat: Update products page with new features",
        "7bf14ce": "feat: Update products page with new features",
        "f563d75": "feat: Update products page with new features",
        "7367abe": "feat: Update products page with new features",
        "78b1d4e": "feat: Update products page with new features",
        "f0ba03c": "feat: Update products page with new features",
        "a2b3b67": "feat: Update products page with new features",
        "766b6be": "feat: Update products page with new features",
        "1ca6278": "feat: Update products page with new features",
        "b2cfcd3": "feat: Update products page with new features",
        "f8ffece": "feat: Update products page with new features",
        "3de84ec": "feat: Update website functionality and design",
        "ef96d33": "feat: Update website functionality and design",
        "31df13c": "feat: Update donation section and page",
        "69698ff": "feat: Update website functionality and design",
        "92639d1": "config: Update Vercel deployment configuration",
        "ff95428": "feat: Update website functionality and design",
        "93f3d35": "feat: Update index.html with new content"
    }
    
    return commit_messages.get(commit_hash, current_message)

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 update-commits.py <commit_hash> <current_message>")
        sys.exit(1)
    
    commit_hash = sys.argv[1]
    current_message = sys.argv[2]
    
    new_message = update_commit_message(commit_hash, current_message)
    print(new_message)

if __name__ == "__main__":
    main()
