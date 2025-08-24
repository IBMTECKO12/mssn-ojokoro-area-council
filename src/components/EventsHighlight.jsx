import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UploadForm from './UploadForm';

const EventsHighlight = () => {
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

    // Animation for event items
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach((item, index) => {
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
        <img src="/images/banner-events.jpeg" alt="Events Highlight Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-5xl font-bold text-white">Events Highlight</h1>
        </div>
      </section>
      {/* Upcoming Events Section */}
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="event-item bg-green-100 p-4 rounded-lg shadow-md">
            <img src="/images/event1.jpg/300x200" alt="Islamic Lecture" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Islamic Lecture</h3>
            <p>Date: August 30, 2025</p>
            <p>Time: 10:00 AM - 12:00 PM WAT</p>
            <p>Location: MSSN Secretariat, Lagos</p>
            <p>Details: Join us for an enlightening lecture on contemporary Islamic issues.</p>
          </div>
          <div className="event-item bg-green-100 p-4 rounded-lg shadow-md">
            <img src="/images/event2.jpg/300x200" alt="Community Outreach" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Community Outreach</h3>
            <p>Date: September 5, 2025</p>
            <p>Time: 9:00 AM - 2:00 PM WAT</p>
            <p>Location: Ogun State Community Center</p>
            <p>Details: Volunteer with us to support local community welfare programs.</p>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-10 px-4 bg-green-700 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="event-item bg-green-800 p-4 rounded-lg shadow-md">
            <img src="/images/event3.jpg/300x200" alt="Annual Qur'an Recitation" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Annual Qur'an Recitation</h3>
            <p>Date: July 15, 2025</p>
            <p>Location: Lagos Central Mosque</p>
            <p>Details: A successful event with over 200 participants.</p>
          </div>
          <div className="event-item bg-green-800 p-4 rounded-lg shadow-md">
            <img src="/images/event4.jpg/300x200" alt="Youth Empowerment Seminar" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Youth Empowerment Seminar</h3>
            <p>Date: June 20, 2025</p>
            <p>Location: OAU Campus</p>
            <p>Details: Focused on skill development for Muslim youth.</p>
          </div>
        </div>
      </section>

      {/* Ongoing Programs Section */}
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Ongoing Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="event-item bg-green-100 p-4 rounded-lg shadow-md">
            <img src="/images/program1.jpg/300x200" alt="Arabic Language Classes" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Arabic Language Classes</h3>
            <p>Schedule: Every Saturday, 2:00 PM - 4:00 PM WAT</p>
            <p>Location: MSSN Learning Center</p>
            <p>Details: Free classes for all age groups to learn Arabic.</p>
          </div>
          <div className="event-item bg-green-100 p-4 rounded-lg shadow-md">
            <img src="/images/program2.jpg/300x200" alt="Welfare Support Initiative" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Welfare Support Initiative</h3>
            <p>Schedule: Ongoing</p>
            <p>Location: Various communities</p>
            <p>Details: Providing aid and support to needy families.</p>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-10 px-4 bg-green-800 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Featured Event</h2>
        <div className="event-item bg-green-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto text-center">
          <img src="/images/featured-event.jpg/600x400" alt="Islamic Lecture" className="w-full h-64 object-cover rounded mb-4" />
          <h3 className="text-2xl font-semibold">Islamic Lecture: Understanding the Sunnah</h3>
          <p>Date: August 30, 2025</p>
          <p>Time: 10:00 AM - 12:00 PM WAT</p>
          <p>Location: MSSN Secretariat, Lagos</p>
          <p className="mt-2">Join our esteemed speaker, Sheikh Musa Abdallah, for an insightful session on the importance of the Sunnah in daily life. Registration is free and open now!</p>
          <a href="#" className="mt-4 inline-block bg-yellow-300 text-green-900 font-bold py-2 px-4 rounded hover:bg-yellow-400">Register Now</a>
        </div>
      </section>

      {/* Registration Call-to-Action Section */}
      <section className="py-10 px-4 bg-green-700 text-white text-center">
        <h2 className="section-title text-3xl font-bold mb-4">Stay Involved</h2>
        <p className="mb-4">Register for upcoming events and programs to stay connected with our community.</p>
        <a href="#" className="inline-block bg-yellow-300 text-green-900 font-bold py-2 px-6 rounded hover:bg-yellow-400">Sign Up Today</a>
      </section>
      <section className="py-10 px-4">
        <UploadForm onSubmit={handleSubmit} formTitle="Submit Event Highlight" />
      </section>
      <section className="py-4 bg-green-700 text-center">
        <button className="animate-item bg-yellow-400 text-green-900 px-6 py-2 rounded hover:bg-yellow-500">Stay Updated</button>
      </section>
      <Footer />
    </div>
  );
};

export default EventsHighlight;