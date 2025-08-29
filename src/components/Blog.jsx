import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UploadForm from './UploadForm';

const Blog = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    // Load existing blog posts from localStorage on mount
    const savedItems = localStorage.getItem('blogItems');
    if (savedItems) {
      setBlogItems(JSON.parse(savedItems));
    }

    // Custom animations
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'all 0.8s ease-in-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, index * 200);
    });

    const items = document.querySelectorAll('.animate-item');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-in-out';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 150);
    });
  }, []);

  const handleSubmit = async (data) => {
    console.log("Form Data:", data);
    const { text, image } = data;
    if (!text.trim() || !image) {
      setUploadStatus("Please provide both text and an image.");
      return;
    }

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.readAsDataURL(image);
      const base64Image = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });

      const currentTime = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
      const newItem = {
        id: Date.now(),
        text,
        image_url: base64Image,
        user_name: "Anonymous",
        created_at: currentTime,
      };
      const updatedItems = [newItem, ...blogItems];
      setBlogItems(updatedItems);
      localStorage.setItem('blogItems', JSON.stringify(updatedItems));

      setUploadStatus(`Blog post submitted successfully at ${currentTime} WAT!`);
    } catch (error) {
      setUploadStatus(`Error submitting blog post: ${error.message}`);
    }
  };

  const handleDelete = (id) => {
    const updatedItems = blogItems.filter(item => item.id !== id);
    setBlogItems(updatedItems);
    localStorage.setItem('blogItems', JSON.stringify(updatedItems));
    setUploadStatus("Blog post deleted successfully.");
  };

  return (
    <div className="min-h-screen bg-white text-green-900">
      <Header />
      <section className="relative">
        <img src="/images/banner-blog.jpeg" alt="Blog Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-5xl font-bold text-white">Blog</h1>
        </div>
      </section>
      <section className="py-10 px-4">
        <UploadForm onSubmit={handleSubmit} formTitle="Submit Your Blog" />
        {uploadStatus && <p className="mt-4 text-sm text-red-600">{uploadStatus}</p>}
      </section>
      <section className="py-4 bg-green-700 text-center">
        <button className="animate-item bg-yellow-400 text-green-900 px-6 py-2 rounded hover:bg-yellow-500">Stay Updated</button>
      </section>
      {blogItems.length > 0 && (
        <section className="py-10 px-4">
          <h2 className="section-title text-3xl font-bold text-green-900 mb-6">Latest Blog Posts</h2>
          {blogItems.map((item) => (
            <div key={item.id} className="animate-item mb-6 bg-white p-4 rounded-lg shadow-md relative">
              <img src={item.image_url} alt={`Blog by ${item.user_name}`} className="w-full h-full object-cover rounded-lg mb-4" />
              <p className="text-lg text-green-800">{item.text}</p>
              <p className="text-sm text-gray-600 mt-2">
                Posted by {item.user_name} on {item.created_at}
              </p>
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Blog;