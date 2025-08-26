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
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="contact-item bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Secretariat</h3>
            <p><b>Address:</b> MSSN OJOKORO Secretariat, Nurein Yusuf Compound, Kola, Alagbado, Lagos, Nigeria</p>
            <p><b>Phone:</b> +234 807 900 7292, +234 806 868 8096, +234 803 070 6008</p>
            <p><b>Email:</b> mssnojokoroareacouncil@gmail.com</p>
          </div>
          <div className="contact-item bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Support Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
            <p>Saturday - Sunday: 10:00 AM - 2:00 PM WAT</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 px-4 bg-green-700 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="contact-item max-w-lg mx-auto bg-green-800 p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded bg-white text-green-900" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-white text-green-900" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full p-2 rounded bg-white text-green-900" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-yellow-300 text-green-900 font-bold py-2 px-4 rounded hover:bg-yellow-400">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Find Us</h2>
        <div className="contact-item max-w-4xl mx-auto bg-green-100 p-4 rounded-lg shadow-md">
          <div className="h-128 bg-gray-300 rounded" style={{ backgroundImage: 'url(/images/map.png)' }}></div>
          <p className="mt-2 text-center">Location: Jubril Alade Yussuff Compound, Jubril Alade Yussuff Drive, Off Nurain Road, Kola Bus-stop, Agbado, Lagos.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;