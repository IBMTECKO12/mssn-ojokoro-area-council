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
        <img src="/images/banner-blog.jpeg" alt="Blog Banner" className="w-full h-64 object-cover md:h-80 lg:h-96" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-3xl font-bold text-white sm:text-4xl md:text-5xl">Blog</h1>
        </div>
      </section>
      <section className="py-6 px-4 sm:py-8 sm:px-6">
        <UploadForm onSubmit={handleSubmit} formTitle="Submit Your Blog" />
        {uploadStatus && <p className="mt-2 text-sm text-red-600 sm:text-base">{uploadStatus}</p>}
      </section>
      <section className="py-3 bg-green-700 text-center sm:py-4">
        <button className="animate-item bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-500 sm:px-6 sm:py-2">Stay Updated</button>
      </section>
      {blogItems.length > 0 && (
        <section className="py-6 px-4 sm:py-8 sm:px-6">
          <h2 className="section-title text-2xl font-bold text-green-900 mb-4 sm:text-3xl sm:mb-6">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogItems.map((item) => (
              <div key={item.id} className="animate-item mb-4 bg-white p-2 rounded-lg shadow-md relative sm:p-4">
                <img src={item.image_url} alt={`Blog by ${item.user_name}`} className="w-full h-32 object-cover rounded-lg mb-2 sm:h-48 sm:mb-4" />
                <p className="text-sm text-green-800 sm:text-lg">{item.text}</p>
                <p className="text-xs text-gray-600 mt-1 sm:text-sm sm:mt-2">
                  Posted by {item.user_name} on {item.created_at}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs hover:bg-red-600 sm:top-2 sm:right-2 sm:px-2 sm:py-1 sm:text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Blog;