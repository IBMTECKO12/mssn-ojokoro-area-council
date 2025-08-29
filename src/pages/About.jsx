import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
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

      // Animation for the office and office holder lists
      const officeItems = document.querySelectorAll('.office-item');
      officeItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        setTimeout(() => {
          item.style.transition = 'all 0.5s ease-in-out';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 150);
      });

      // Animation for the leadership team and Amir sections
      const leadershipItems = document.querySelectorAll('.leadership-item');
      leadershipItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        setTimeout(() => {
          item.style.transition = 'all 0.7s ease-in-out';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, index * 300);
      });
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
      <section className="relative">
        <img src="/images/banner-about.jpeg" alt="About Banner" className="w-full h-64 object-cover md:h-80 lg:h-96" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-3xl font-bold text-white sm:text-4xl md:text-5xl">About Us</h1>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4 bg-green-200 text-center">
        <h2 className="section-title text-2xl font-bold mb-3 sm:text-3xl sm:mb-6">Our Mission</h2>
        <p className="animate-item max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
          We are dedicated to community engagement and education. Join us in our journey since 2024.
        </p>
      </section>
      {/* Office Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Office</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 max-w-md mx-auto sm:max-w-2xl md:max-w-3xl">
          <div>
            <p className="office-item text-sm sm:text-base">Amir</p>
            <p className="office-item text-sm sm:text-base">Amirah</p>
            <p className="office-item text-sm sm:text-base">Naibul Amir</p>
            <p className="office-item text-sm sm:text-base">Naibatul Amirah</p>
            <p className="office-item text-sm sm:text-base">General Secretary</p>
            <p className="office-item text-sm sm:text-base">Assistant Secretary</p>
            <p className="office-item text-sm sm:text-base">Secretary Sister</p>
            <p className="office-item text-sm sm:text-base">Financial Secretary</p>
            <p className="office-item text-sm sm:text-base">Director of studies</p>
            <p className="office-item text-sm sm:text-base">Public relation officer</p>
            <p className="office-item text-sm sm:text-base">Public relation officer sister</p>
            <p className="office-item text-sm sm:text-base">Assistant public relation officer</p>
            <p className="office-item text-sm sm:text-base">Welfare</p>
            <p className="office-item text-sm sm:text-base">Welfare Sister</p>
            <p className="office-item text-sm sm:text-base">Business Chairman</p>
            <p className="office-item text-sm sm:text-base">Treasurer</p>
          </div>
          <div>
            <p className="office-item text-sm sm:text-base">Bro. Abdulganivy Fadipe</p>
            <p className="office-item text-sm sm:text-base">Sis. Halmah Tijani</p>
            <p className="office-item text-sm sm:text-base">Bro. Ridwan King</p>
            <p className="office-item text-sm sm:text-base">Sis. Khadeejah Balogun</p>
            <p className="office-item text-sm sm:text-base">Bro. Mustapha Rabiu</p>
            <p className="office-item text-sm sm:text-base">Bro. Faisal Odunuga</p>
            <p className="office-item text-sm sm:text-base">Sis. Ghaniyyah Abdulakareem</p>
            <p className="office-item text-sm sm:text-base">Bro. Jamilu Abbas</p>
            <p className="office-item text-sm sm:text-base">Bro. Abdulsemiu Bello</p>
            <p className="office-item text-sm sm:text-base">Bro. Abdulganivy Saheed</p>
            <p className="office-item text-sm sm:text-base">Sis. Nofisah Ogbonna</p>
            <p className="office-item text-sm sm:text-base">Bro. Ibrahim Arbisala</p>
            <p className="office-item text-sm sm:text-base">Bro. Suleiman Alausa</p>
            <p className="office-item text-sm sm:text-base">Sis. Lateefah Obadina</p>
            <p className="office-item text-sm sm:text-base">Bro. Qoseem Taiwo</p>
            <p className="office-item text-sm sm:text-base">Sis. Sarat Awonusi</p>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4 bg-green-700 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Our Vision</h2>
        <p className="text-center max-w-md mx-auto sm:max-w-lg md:max-w-2xl">To establish a world governed by the principles and rules of Allah.</p>
      </section>
      {/* History Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Our History</h2>
        <p className="text-center max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
          The Muslim Students' Society of Nigeria (MSSN) was founded in Lagos, Nigeria, on April 18, 1954, in response to the yearnings of Muslim students for a platform to discuss and find solutions to common problems and challenges, especially in the face of the hostile colonial and evangelical environment then prevalent in the country. The organization has continued to adapt and respond to the challenges and needs of its members and the Nigerian Muslim community in general.
        </p>
      </section>
      {/* Aims and Objectives Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4 bg-green-800 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Aims and Objectives</h2>
        <ul className="list-disc max-w-md mx-auto pl-4 sm:pl-5 sm:max-w-lg md:max-w-2xl">
          <li>To bring all Muslims into a closer Union and inculcate in them the true Islamic spirit of brotherhood and absolute faith in Allah as the only basis for the achievement of peace among mankind</li>
          <li>To establish an Islamic Ummah governed by the principle and rule of the SHARIAH</li>
          <li>To encourage the study of the Qur'an as the book of guidance and the Arabic Language as the Lingua Franca of the Islamic World</li>
          <li>To promote the welfare of Muslims and safeguard their fundamental human rights in any community</li>
          <li>To constitute a strong force for propagating and strengthening Islam in Nigeria and throughout the world</li>
          <li>To champion the course of the oppressed in any community</li>
          <li>To encourage, promote, and acquire sound and qualitative education by all Muslims, especially the youth</li>
          <li>Performing or undertaking any other ancillary or incidental function to the above aims</li>
        </ul>
      </section>
      {/* Leadership Team Section */}
      <section className="py-6 px-2 sm:py-8 sm:px-4 bg-green-700 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-3 sm:text-3xl sm:mb-6">Meet The Leadership Team</h2>
      </section>
      {/* Meet the Amir */}
      <section className="leadership-item py-6 px-2 sm:py-8 sm:px-4 flex flex-col sm:flex-row items-center">
        <img src="/images/Amir.jpeg" alt="Amir" className="rounded-full mr-0 sm:mr-6 w-24 h-24 sm:w-32 sm:h-32" />
        <div>
          <h2 className="text-xl font-bold mb-1 sm:text-3xl sm:mb-2">Meet the Amir</h2>
          <p className="text-sm sm:text-base">Name: Ibrahim AbdulGhaniy Fadipe</p>
          <p className="text-sm sm:text-base">State of Origin: Ogun</p>
          <p className="text-sm sm:text-base">Academic qualifications:</p>
          <ol className="list-decimal pl-4 sm:pl-5 text-sm sm:text-base">
            <li>National diploma in Chemical engineering (Laspotech)</li>
            <li>BSC. Chemical engineering (OAU)</li>
            <li>MSC chemical engineering (LASU)</li>
            <li>Professional diploma in quality, safety, environment, and sustainability management (QHSES Leadership Academy)</li>
          </ol>
          <p className="text-sm sm:text-base">Profession: Site SHE coordinator, Unilever Nigeria PLC</p>
        </div>
      </section>
      {/* Meet the Amirah */}
      <section className="leadership-item py-6 px-2 sm:py-8 sm:px-4 flex flex-col sm:flex-row items-center">
        <img src="/images/Amirah.png" alt="Amirah" className="rounded-full mr-0 sm:mr-6 w-24 h-24 sm:w-32 sm:h-32" />
        <div>
          <h2 className="text-xl font-bold mb-1 sm:text-3xl sm:mb-2">Meet the Amirah</h2>
          <p className="text-sm sm:text-base">Haleemah Tijani Balogun is an alumna of OOU, UNILAG, PAU/EDC, FATE Foundation, and CPD College, UK and still counting, bi idhniLlah.</p>
          <p className="text-sm sm:text-base">She is the pioneer secretary and a member of the Board of Trustees of the Association of Diction Coaches of Nigeria (ADCN).</p>
          <p className="text-sm sm:text-base">She's the founder and CEO of Pacesetters Phonics and Diction Institute (PPDI), Lagos.</p>
          <p className="text-sm sm:text-base">She's the author of Pacesetters Diction-In-English Book series</p>
          <p className="text-sm sm:text-base">She's been an active member of MSSN since 1995 and has held official posts across the organization's hierarchy except at the national level.</p>
          <p className="text-sm sm:text-base">She's happily married and blessed with children.</p>
          <p className="text-sm sm:text-base">Her philosophy is "After Allah, you are the next solution to your problem."</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;