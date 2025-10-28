import Blog from '../models/Blog.js';

// ✅ Get all blogs
export async function getBlogs(req, res) {
  try {
    const data = await Blog.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// 👀 Get a single blog by ID and increment view count
export async function getBlogById(req, res) {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // increment view count
    blog.view = (blog.view || 0) + 1;
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ➕ Create a new blog
export async function createBlog(req, res) {
  try {
    const item = new Blog(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✏️ Update a blog
export async function updateBlog(req, res) {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Blog not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// 🗑️ Delete a blog
export async function deleteBlog(req, res) {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
