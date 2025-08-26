import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
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

    // Animation for the welcome text
    const welcomeText = document.querySelector('.welcome-text');
    welcomeText.style.opacity = '0';
    setTimeout(() => {
      welcomeText.style.transition = 'opacity 1s ease-in-out';
      welcomeText.style.opacity = '1';
    }, 100);

    // Animation for the events section
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-in-out';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Animation for the contacts and values sections
    const animateSections = () => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateX(-20px)';
        setTimeout(() => {
          section.style.transition = 'all 0.8s ease-in-out';
          section.style.opacity = '1';
          section.style.transform = 'translateX(0)';
        }, index * 300);
      });
    };
    animateSections();
  }, []);

  return (
    <div className="min-h-screen bg-white text-green-900">
      <Header />
      <section className="relative">
        <img src="/images/banner-home.jpeg" alt="Home Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-5xl font-bold text-white">Welcome to MSSN OJOKORO AREA COUNCIL</h1>
        </div>
      </section>
      {/* Welcome Section */}
      <section className="text-center py-10">
        <h1 className="welcome-text text-4xl font-bold mb-4">Welcome to MSSN Ojokoro Area Council</h1>
        <p className="text-lg mx-auto max-w-2xl">
          The Muslim Students' Society of Nigeria (MSSN) is the meeting point for all Muslim students in secondary schools, technical schools, and higher institutions. The society is the largest spread of students' society (religious or otherwise) in Nigeria. The establishment of the MSSN is geared towards making every Muslim youth privileged to attend any school in the country, secondary or tertiary to gain consciousness about Islam.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="event-item bg-green-700 text-white p-4 rounded-lg">
            <img src="/images/event4.jpeg" alt="Islamic Vacation Course" className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-semibold">Islamic Vacation Course (IVC): December, 2025</h3>
            <p className="text-sm">An avenue whereby members of the society and other members usually gather to boost their spirituality and also a means to reawaken the community...</p>
            <button className="mt-2 bg-yellow-400 text-green-900 px-4 py-2 rounded hover:bg-yellow-500">Register Now!</button>
          </div>
          <div className="event-item bg-green-700 text-white p-4 rounded-lg">
            <img src="/images/event1.jpg" alt="SMP Graduation and Inauguration" className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-semibold">SMP Graduation and Inauguration: 30th August, 2025</h3>
            <p className="text-sm">A remarkable moment of transition: Celebrating the successful Graduation of Cohort 1, honoring their journey and achievements, while joyfully welcoming the Official Inauguration of Cohort 2 as they begin their own path of growth and excellence.</p>
          </div>
          <div className="event-item bg-green-700 text-white p-4 rounded-lg">
            <img src="/images/event2.jpeg" alt="YLF Graduation and Inauguration" className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-semibold">YLF Graduation of class of 2025 and Inauguration: 31th August, 2025</h3>
            <p className="text-sm">A proud celebration: Marking the Graduation of the Class of 2025 YLF students, recognizing their hard work and dedication, while also celebrating the Promotion of students into higher classes and joyfully welcoming the Inauguration of new members into the YLF classes.</p>
          </div>
          <div className="event-item bg-green-700 text-white p-4 rounded-lg">
            <img src="/images/event3.jpg" alt="Teachers Get-Together" className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl font-semibold">Teachers Get-Together: 5th October, 2025</h3>
            <p className="text-sm">An inspiring occasion of connection and appreciation: The Teachers’ Get-Together brings our educators together to relax, share experiences, strengthen bonds, and celebrate the invaluable role they play in shaping lives and building the future.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="animate-section py-10 px-4 bg-green-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <p>Sound Ideology</p>
          <p>Spirituality</p>
          <p>Brotherhood</p>
          <p>Discipline</p>
          <p>Leadership</p>
          <p>Islamic dress code</p>
          <p>Welfare</p>
          <p>Collaboration and collectivism</p>
          <p>Respect and good interpersonal relationship</p>
          <p>Knowledge and understanding</p>
          <p>Commitment to grass root mobilisation</p>
          <p>Professionalism and productivity</p>
        </div>
        <button className="mt-4 bg-yellow-400 text-green-900 px-6 py-2 rounded hover:bg-yellow-500">Stay Updated</button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;