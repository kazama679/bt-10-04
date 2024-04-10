import { createPost, displayPosts, searchPosts } from './managerPost.js';
createPost("123", "abc", "A");
createPost("321", "xyz", "B");

displayPosts();

searchPosts("123");