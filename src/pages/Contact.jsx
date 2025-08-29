import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    // Animation for the section titles
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

    // Animation for contact items and form
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-in-out';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 150);
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

  return (
    <div className="min-h-screen bg-white text-green-900">
      <Header />
      {/* Contact Information Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto sm:max-w-4xl">
          <div className="contact-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <h3 className="text-lg font-semibold sm:text-xl">Secretariat</h3>
            <p className="text-sm sm:text-base"><b>Address:</b> MSSN OJOKORO Secretariat, Nurein Yusuf Compound, Kola, Alagbado, Lagos, Nigeria</p>
            <p className="text-sm sm:text-base"><b>Phone:</b> +234 807 900 7292, +234 806 868 8096, +234 803 070 6008</p>
            <p className="text-sm sm:text-base"><b>Email:</b> mssnojokoroareacouncil@gmail.com</p>
          </div>
          <div className="contact-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <h3 className="text-lg font-semibold sm:text-xl">Support Hours</h3>
            <p className="text-sm sm:text-base">Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
            <p className="text-sm sm:text-base">Saturday - Sunday: 10:00 AM - 2:00 PM WAT</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4 bg-green-700 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Get in Touch</h2>
        <div className="contact-item max-w-sm mx-auto bg-green-800 p-3 rounded-lg shadow-md sm:max-w-md sm:p-4 md:max-w-lg md:p-6">
          <form>
            <div className="mb-2 sm:mb-3 md:mb-4">
              <label className="block text-xs font-medium mb-1 sm:text-sm sm:mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-1 rounded bg-white text-green-900 sm:p-2 md:p-3" placeholder="Your Name" />
            </div>
            <div className="mb-2 sm:mb-3 md:mb-4">
              <label className="block text-xs font-medium mb-1 sm:text-sm sm:mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-1 rounded bg-white text-green-900 sm:p-2 md:p-3" placeholder="Your Email" />
            </div>
            <div className="mb-2 sm:mb-3 md:mb-4">
              <label className="block text-xs font-medium mb-1 sm:text-sm sm:mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-1 rounded bg-white text-green-900 sm:p-2 md:p-3" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-yellow-300 text-green-900 font-bold py-1 px-3 rounded hover:bg-yellow-400 w-full sm:py-2 sm:px-4 md:py-2 md:px-4">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Find Us</h2>
        <div className="contact-item max-w-md mx-auto bg-green-100 p-2 rounded-lg shadow-md sm:max-w-2xl sm:p-4 md:max-w-4xl md:p-4">
          <div className="h-64 w-full bg-gray-300 rounded sm:h-80 md:h-96" style={{ backgroundImage: 'url(/images/map.png)' }}></div>
          <p className="mt-1 text-center text-sm sm:text-base">Location: Jubril Alade Yussuff Compound, Jubril Alade Yussuff Drive, Off Nurain Road, Kola Bus-stop, Agbado, Lagos.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;