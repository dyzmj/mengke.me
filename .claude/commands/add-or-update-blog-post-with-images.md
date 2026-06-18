---
name: add-or-update-blog-post-with-images
description: Workflow command scaffold for add-or-update-blog-post-with-images in mengke.me.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-blog-post-with-images

Use this workflow when working on **add-or-update-blog-post-with-images** in `mengke.me`.

## Goal

Adds a new blog post with associated images, or updates an existing post's content or image formats.

## Common Files

- `data/blog/YYYYMM/Post_Title.mdx`
- `public/static/images/blog/YYYYMM/Post_Title/*.{jpg,jpeg,png,mp4}`
- `json/tag-data.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or modify an MDX file for the blog post in data/blog/YYYYMM/Post_Title.mdx
- Add or update associated images/videos in public/static/images/blog/YYYYMM/Post_Title/
- Update tag or metadata files as needed (e.g., json/tag-data.json)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.