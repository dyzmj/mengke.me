```markdown
# mengke.me Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides a comprehensive guide to the development patterns, coding conventions, and common workflows used in the `mengke.me` repository. The project is built with TypeScript and Next.js, and follows clear, conventional commit standards and code organization. This document will help you quickly understand how to contribute, maintain, and extend the codebase efficiently.

## Coding Conventions

### File Naming
- Use **snake_case** for all file and folder names.
  - Example: `blog_post_card.tsx`, `user_profile_data.ts`

### Import Style
- Use **alias imports** for modules.
  - Example:
    ```typescript
    import { BlogPost } from '@components/blog_post_card';
    import { fetchData } from '@utils/data_fetcher';
    ```

### Export Style
- Use **named exports**.
  - Example:
    ```typescript
    // In blog_post_card.tsx
    export const BlogPostCard = () => { /* ... */ };
    ```

### Commit Messages
- Follow the **Conventional Commits** standard.
  - Prefixes: `feat`, `docs`, `fix`
  - Example:
    ```
    feat: add responsive layout to blog post card
    docs: update README with deployment instructions
    fix: correct image path resolution in blog post loader
    ```

## Workflows

### Add or Update Blog Post with Images
**Trigger:** When someone wants to publish a new blog post (with images/media) or update an existing post's content or image formats.  
**Command:** `/new-blog-post`

1. **Create or modify an MDX file** for the blog post in the appropriate directory:
   - Path: `data/blog/YYYYMM/Post_Title.mdx`
   - Example:
     ```
     data/blog/202406/my_new_post.mdx
     ```
2. **Add or update associated images/videos** in the corresponding static directory:
   - Path: `public/static/images/blog/YYYYMM/Post_Title/`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.mp4`
   - Example:
     ```
     public/static/images/blog/202406/my_new_post/cover.jpg
     public/static/images/blog/202406/my_new_post/intro.mp4
     ```
3. **Update tag or metadata files** as needed:
   - Path: `json/tag-data.json`
   - Example (add new tag):
     ```json
     {
       "tags": [
         "nextjs",
         "typescript",
         "personal"
       ]
     }
     ```

#### Example Directory Structure
```
data/
  blog/
    202406/
      my_new_post.mdx
public/
  static/
    images/
      blog/
        202406/
          my_new_post/
            cover.jpg
            intro.mp4
json/
  tag-data.json
```

## Testing Patterns

- **Testing Framework:** Unknown (not detected)
- **Test File Pattern:** Files named with `*.test.*`
  - Example: `blog_post_card.test.tsx`
- **Placement:** Test files are typically located alongside the modules they test.

## Commands

| Command         | Purpose                                                        |
|-----------------|----------------------------------------------------------------|
| /new-blog-post  | Add or update a blog post with associated images and metadata. |

```