import React, { useState } from 'react';

const UploadForm = ({ onSubmit, formTitle }) => {
  const [formData, setFormData] = useState({
    text: '',
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
    } else {
      setImagePreview(null);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ text: '', image: null });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleFormSubmit} className="animate-item max-w-sm mx-auto bg-green-100 p-3 rounded-lg shadow-md sm:max-w-md sm:p-4 md:max-w-lg md:p-6">
      <h2 className="text-xl font-bold text-center mb-3 sm:text-2xl sm:mb-4 md:text-3xl md:mb-6">{formTitle}</h2>
      <div className="mb-2 sm:mb-3 md:mb-4">
        <label className="block text-xs font-medium mb-1 sm:text-sm sm:mb-2" htmlFor="text">Text</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          className="w-full p-1 rounded bg-white text-green-900 border border-green-300 sm:p-2 md:p-3"
          rows="4"
          placeholder="Enter your news text"
          required
        ></textarea>
      </div>
      <div className="mb-2 sm:mb-3 md:mb-4">
        <label className="block text-xs font-medium mb-1 sm:text-sm sm:mb-2" htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-1 rounded bg-white text-green-900 border border-green-300 sm:p-2 md:p-3"
          required
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 w-full h-32 object-cover rounded sm:mt-3 sm:h-40 md:mt-4 md:h-48" />
        )}
      </div>
      <button type="submit" className="bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-500 w-full sm:px-6 sm:py-2 md:px-6 md:py-2">
        Submit
      </button>
    </form>
  );
};

export default UploadForm;