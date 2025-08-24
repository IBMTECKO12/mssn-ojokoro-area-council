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
        <img src="/public/images/banner-about.jpeg" alt="About Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-10 px- bg-green-200 text-center">
        <h2 className="section-title text-3xl font-bold mb-6">Our Mission</h2>
        <p className="animate-item max-w-2xl mx-auto">
          We are dedicated to community engagement and education. Join us in our journey since 2024.
        </p>
      </section>
      {/* Office Section */}
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Office</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div>
            <p className="office-item">Amir</p>
            <p className="office-item">Amirah</p>
            <p className="office-item">Naibul Amir</p>
            <p className="office-item">Naibatul Amirah</p>
            <p className="office-item">General Secretary</p>
            <p className="office-item">Assistant Secretary</p>
            <p className="office-item">Secretary Sister</p>
            <p className="office-item">Financial Secretary</p>
            <p className="office-item">Director of studies</p>
            <p className="office-item">Public relation officer</p>
            <p className="office-item">Public relation officer sister</p>
            <p className="office-item">Assistant public relation officer</p>
            <p className="office-item">Welfare</p>
            <p className="office-item">Welfare Sister</p>
            <p className="office-item">Business Chairman</p>
            <p className="office-item">Treasurer</p>
          </div>
          <div>
            <p className="office-item">Bro. Abdulganivy Fadipe</p>
            <p className="office-item">Sis. Halmah Tijani</p>
            <p className="office-item">Bro. Ridwan King</p>
            <p className="office-item">Sis. Khadeejah Balogun</p>
            <p className="office-item">Bro. Mustapha Rabiu</p>
            <p className="office-item">Bro. Faisal Odunuga</p>
            <p className="office-item">Sis. Ghaniyyah Abdulakareem</p>
            <p className="office-item">Bro. Jamilu Abbas</p>
            <p className="office-item">Bro. Abdulsemiu Bello</p>
            <p className="office-item">Bro. Abdulganivy Saheed</p>
            <p className="office-item">Sis. Nofisah Ogbonna</p>
            <p className="office-item">Bro. Ibrahim Arbisala</p>
            <p className="office-item">Bro. Suleiman Alausa</p>
            <p className="office-item">Sis. Lateefah Obadina</p>
            <p className="office-item">Bro. Qoseem Taiwo</p>
            <p className="office-item">Sis. Sarat Awonusi</p>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-10 px-4 bg-green-700 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Our Vision</h2>
        <p className="text-center max-w-2xl mx-auto">To establish a world governed by the principles and rules of Allah.</p>
      </section>

      {/* History Section */}
      <section className="py-10 px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Our History</h2>
        <p className="text-center max-w-2xl mx-auto">
          The Muslim Students' Society of Nigeria (MSSN) was founded in Lagos, Nigeria, on April 18, 1954, in response to the yearnings of Muslim students for a platform to discuss and find solutions to common problems and challenges, especially in the face of the hostile colonial and evangelical environment then prevalent in the country. The organization has continued to adapt and respond to the challenges and needs of its members and the Nigerian Muslim community in general.
        </p>
      </section>

      {/* Aims and Objectives Section */}
      <section className="py-10 px-4 bg-green-800 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Aims and Objectives</h2>
        <ul className="list-disc max-w-2xl mx-auto pl-5">
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
      <section className="py-10 px-4 bg-green-700 text-white">
        <h2 className="section-title text-3xl font-bold text-center mb-6">Meet The Leadership Team</h2>
      </section>

      {/* Meet the Amir */}
      <section className="leadership-item py-10 px-4 flex flex-col md:flex-row items-center">
        <img src="/images/Amir.jpeg" alt="Amir" className="rounded-full mr-6 w-32 h-32" />
        <div>
          <h2 className="text-3xl font-bold mb-2">Meet the Amir</h2>
          <p>Name: Ibrahim AbdulGhaniy Fadipe</p>
          <p>State of Origin: Ogun</p>
          <p>Academic qualifications:</p>
          <ol className="list-decimal pl-5">
            <li>National diploma in Chemical engineering (Laspotech)</li>
            <li>BSC. Chemical engineering (OAU)</li>
            <li>MSC chemical engineering (LASU)</li>
            <li>Professional diploma in quality, safety, environment, and sustainability management (QHSES Leadership Academy)</li>
          </ol>
          <p>Profession: Site SHE coordinator, Unilever Nigeria PLC</p>
        </div>
      </section>

      {/* Meet the Amirah */}
      <section className="leadership-item py-10 px-4 flex flex-col md:flex-row items-center">
        <img src="/images/Amirah.png" alt="Amirah" className="rounded-full mr-6 w-32 h-32" />
        <div>
          <h2 className="text-3xl font-bold mb-2">Meet the Amirah</h2>
          <p>Haleemah Tijani Balogun is an alumna of OOU, UNILAG, PAU/EDC, FATE Foundation, and CPD College, UK and still counting, bi idhniLlah.</p>
          <p>She is the pioneer secretary and a member of the Board of Trustees of the Association of Diction Coaches of Nigeria (ADCN).</p>
          <p>She's the founder and CEO of Pacesetters Phonics and Diction Institute (PPDI), Lagos.</p>
          <p>She's the author of Pacesetters Diction-In-English Book series</p>
          <p>She's been an active member of MSSN since 1995 and has held official posts across the organization's hierarchy except at the national level.</p>
          <p>She's happily married and blessed with children.</p>
          <p>Her philosophy is "After Allah, you are the next solution to your problem."</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;