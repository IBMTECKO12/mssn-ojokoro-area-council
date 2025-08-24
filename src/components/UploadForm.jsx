import React, { useState } from 'react';

const UploadForm = ({ onSubmit, formTitle }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', content: '', image: null });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleFormSubmit} className="animate-item max-w-lg mx-auto bg-green-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">{formTitle}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-white text-green-900 border border-green-300"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-white text-green-900 border border-green-300"
          rows="6"
          placeholder="Content"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 rounded bg-white text-green-900 border border-green-300"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-4 w-full h-48 object-cover rounded" />
        )}
      </div>
      <button type="submit" className="bg-yellow-400 text-green-900 px-6 py-2 rounded hover:bg-yellow-500 w-full">
        Submit
      </button>
    </form>
  );
};

export default UploadForm;