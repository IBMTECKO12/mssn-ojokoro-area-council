import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UploadForm from './UploadForm';

const News = () => {
  useEffect(() => {
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

  const handleSubmit = (data) => {
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
  submissions.push(data);
  localStorage.setItem('submissions', JSON.stringify(submissions));
  console.log('Submitted Data Saved Locally:', data);
  alert('Data saved locally. Check console or localStorage.');
};

  return (
    <div className="min-h-screen bg-white text-green-900">
      <Header />
      <section className="relative">
        <img src="/images/banner-news.jpeg" alt="News Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-5xl font-bold text-white">News</h1>
        </div>
      </section>
      <section className="py-10 px-4">
        <UploadForm onSubmit={handleSubmit} formTitle="Submit Your News" />
      </section>
      <section className="py-4 bg-green-700 text-center">
        <button className="animate-item bg-yellow-400 text-green-900 px-6 py-2 rounded hover:bg-yellow-500">Stay Updated</button>
      </section>
      <section className="py-10 px-4 bg-green-800 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6 text-yellow-300">Our Official Contacts</h2>
        <div className="animate-item max-w-2xl mx-auto text-center">
          <p className="mb-2">Jubril Alade Yussuff Compound, Jubril Alade Yussuff Drive, Off Nurain Road, Kola Bus-stop, Agbado, Lagos.</p>
          <p className="mb-2">Amir - +234 807 900 7292</p>
          <p className="mb-2">Naibul Amir - +234 802 896 5287</p>
          <p className="mb-2">Secretariat - +234 806 666 9591</p>
          <p>24 hours a Day, 7 days a week</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;