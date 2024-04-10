let listPost = [];
const MAXPOST = 5;
class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}
const searchPosts = (keyword) => {
    const result = listPost.filter(post =>
        post.title.includes(keyword) ||
        post.content.includes(keyword) ||
        post.author.includes(keyword)
    );
    console.log("Kết quả tìm kiếm:");
    if (result.length === 0) {
        console.log("Không tìm thấy bài viết nào.");
    } else {
        for (const post of result) {
            console.log(`Tiêu đề: ${post.title}, Nội dung: ${post.content}, Tác giả: ${post.author}`);
        }
    }
};
const createPost = (title, content, author) => {
    if (listPost.length >= MAXPOST) {
        console.log("Danh sách bài viết đã đầy.");
        return;
    }
    const newPost = new Post(title, content, author);
    listPost = [...listPost, newPost];
};
const displayPosts = () => {
    console.log("Danh sách bài viết:");
    for (const post of listPost) {
        console.log(`Tiêu đề: ${post.title}, Nội dung: ${post.content}, Tác giả: ${post.author}`);
    }
};
export { createPost, displayPosts, searchPosts };