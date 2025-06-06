'use client';

import PostForm from '../../components/PostForm';

export default function DevPage() {
  return (
    <div>
      <h1>Developer Page</h1>
      <PostForm type="blog" />
      <PostForm type="portfolio" />
    </div>
  );
}
