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
        <img src="/images/banner-home.jpeg" alt="Home Banner" className="w-full h-64 object-cover md:h-80 lg:h-96" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-3xl font-bold text-white sm:text-4xl md:text-5xl">Welcome to MSSN OJOKORO AREA COUNCIL</h1>
        </div>
      </section>
      {/* Welcome Section */}
      <section className="text-center py-6 px-2 sm:py-8 sm:px-4">
        <h1 className="welcome-text text-2xl font-bold mb-2 sm:text-3xl sm:mb-4">Welcome to MSSN Ojokoro Area Council</h1>
        <p className="text-sm mx-auto max-w-sm sm:text-base sm:max-w-md md:text-lg md:max-w-2xl">
          The Muslim Students' Society of Nigeria (MSSN) is the meeting point for all Muslim students in secondary schools, technical schools, and higher institutions. The society is the largest spread of students' society (religious or otherwise) in Nigeria. The establishment of the MSSN is geared towards making every Muslim youth privileged to attend any school in the country, secondary or tertiary to gain consciousness about Islam.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="py-6 px-2 sm:py-8 sm:px-4">
        <h2 className="text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="event-item bg-green-700 text-white p-2 rounded-lg sm:p-4">
            <img src="/images/event4.jpeg" alt="Islamic Vacation Course" className="w-full h-32 object-cover mb-1 sm:h-48 sm:mb-2" />
            <h3 className="text-lg font-semibold sm:text-xl">Islamic Vacation Course (IVC): December, 2025</h3>
            <p className="text-sm sm:text-base">An avenue whereby members of the society and other members usually gather to boost their spirituality and also a means to reawaken the community...</p>
            <button className="mt-1 sm:mt-2 bg-yellow-400 text-green-900 px-2 py-1 rounded hover:bg-yellow-500 sm:px-4 sm:py-2">Register Now!</button>
          </div>
          <div className="event-item bg-green-700 text-white p-2 rounded-lg sm:p-4">
            <img src="/images/event1.jpg" alt="SMP Graduation and Inauguration" className="w-full h-32 object-cover mb-1 sm:h-48 sm:mb-2" />
            <h3 className="text-lg font-semibold sm:text-xl">SMP Graduation and Inauguration: 30th August, 2025</h3>
            <p className="text-sm sm:text-base">A remarkable moment of transition: Celebrating the successful Graduation of Cohort 1, honoring their journey and achievements, while joyfully welcoming the Official Inauguration of Cohort 2 as they begin their own path of growth and excellence.</p>
          </div>
          <div className="event-item bg-green-700 text-white p-2 rounded-lg sm:p-4">
            <img src="/images/event2.jpeg" alt="YLF Graduation and Inauguration" className="w-full h-32 object-cover mb-1 sm:h-48 sm:mb-2" />
            <h3 className="text-lg font-semibold sm:text-xl">YLF Graduation of class of 2025 and Inauguration: 31th August, 2025</h3>
            <p className="text-sm sm:text-base">A proud celebration: Marking the Graduation of the Class of 2025 YLF students, recognizing their hard work and dedication, while also celebrating the Promotion of students into higher classes and joyfully welcoming the Inauguration of new members into the YLF classes.</p>
          </div>
          <div className="event-item bg-green-700 text-white p-2 rounded-lg sm:p-4">
            <img src="/images/event3.jpg" alt="Teachers Get-Together" className="w-full h-32 object-cover mb-1 sm:h-48 sm:mb-2" />
            <h3 className="text-lg font-semibold sm:text-xl">Teachers Get-Together: 5th October, 2025</h3>
            <p className="text-sm sm:text-base">An inspiring occasion of connection and appreciation: The Teachers’ Get-Together brings our educators together to relax, share experiences, strengthen bonds, and celebrate the invaluable role they play in shaping lives and building the future.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="animate-section py-6 px-2 sm:py-8 sm:px-4 bg-green-100">
        <h2 className="text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Our Core Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 text-center">
          <p className="text-sm sm:text-base">Sound Ideology</p>
          <p className="text-sm sm:text-base">Spirituality</p>
          <p className="text-sm sm:text-base">Brotherhood</p>
          <p className="text-sm sm:text-base">Discipline</p>
          <p className="text-sm sm:text-base">Leadership</p>
          <p className="text-sm sm:text-base">Islamic dress code</p>
          <p className="text-sm sm:text-base">Welfare</p>
          <p className="text-sm sm:text-base">Collaboration and collectivism</p>
          <p className="text-sm sm:text-base">Respect and good interpersonal relationship</p>
          <p className="text-sm sm:text-base">Knowledge and understanding</p>
          <p className="text-sm sm:text-base">Commitment to grass root mobilisation</p>
          <p className="text-sm sm:text-base">Professionalism and productivity</p>
        </div>
        <button className="mt-2 sm:mt-4 bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-500 sm:px-6 sm:py-2">Stay Updated</button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;