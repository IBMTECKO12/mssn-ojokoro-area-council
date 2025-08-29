import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UploadForm from './UploadForm';
import EventSlideshow from './EventSlideshow';

const EventsHighlight = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [eventHighlights, setEventHighlights] = useState([]);

  useEffect(() => {
    // Load existing event highlights from localStorage on mount
    const savedItems = localStorage.getItem('eventHighlights');
    if (savedItems) {
      setEventHighlights(JSON.parse(savedItems));
    }

    // Custom animations
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

  const handleSubmit = async (data) => {
    console.log("Form Data:", data);
    const { text, image } = data;
    if (!text.trim() || !image) {
      setUploadStatus("Please provide both text and an image.");
      return;
    }

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.readAsDataURL(image);
      const base64Image = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });

      const currentTime = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
      const newItem = {
        id: Date.now(),
        text,
        image_url: base64Image,
        user_name: "Anonymous",
        created_at: currentTime,
      };
      const updatedItems = [newItem, ...eventHighlights];
      setEventHighlights(updatedItems);
      localStorage.setItem('eventHighlights', JSON.stringify(updatedItems));

      setUploadStatus(`Event highlight submitted successfully at ${currentTime} WAT!`);
    } catch (error) {
      setUploadStatus(`Error submitting event highlight: ${error.message}`);
    }
  };

  const handleDelete = (id) => {
    const updatedItems = eventHighlights.filter(item => item.id !== id);
    setEventHighlights(updatedItems);
    localStorage.setItem('eventHighlights', JSON.stringify(updatedItems));
    setUploadStatus("Event highlight deleted successfully.");
  };

  return (
    <div className="min-h-screen bg-white text-green-900">
      <Header />
      <section className="relative">
        <img src="/images/banner-events.jpeg" alt="Events Highlight Banner" className="w-full h-64 object-cover md:h-80 lg:h-96" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-3xl font-bold text-white sm:text-4xl md:text-5xl">Events Highlight</h1>
        </div>
      </section>
      {/* Upcoming Events Section */}
      <section className="py-6 px-4 sm:py-8 sm:px-6">
        <h2 className="section-title text-2xl font-bold text-center mb-4 sm:text-3xl sm:mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/event1.jpg" alt="SMP Graduation and Inauguration" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">SMP Graduation and Inauguration</h3>
            <p className="text-sm"><b>Date:</b> August 30, 2025</p>
            <p className="text-sm"><b>Time:</b> 10:00 AM - 2:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Xtraction Training Hub, Alakuko.</p>
            <p className="text-sm"><b>Details:</b> A remarkable moment of transition: Celebrating the successful Graduation of Cohort 1, honoring their journey and achievements, while joyfully welcoming the Official Inauguration of Cohort 2 as they begin their own path of growth and excellence.</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/event2.jpeg" alt="YLF Graduation of class of 2025 and Inauguration" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">YLF Graduation of class of 2025 and Inauguration</h3>
            <p className="text-sm"><b>Date:</b> August 31, 2025</p>
            <p className="text-sm"><b>Time:</b> 10:00 AM - 4:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Wamon Taofeeq Central Mosque, Abule Egba.</p>
            <p className="text-sm"><b>Details:</b> A proud celebration: Marking the Graduation of the Class of 2025 YLF students, recognizing their hard work and dedication, while also celebrating the Promotion of students into higher classes and joyfully welcoming the Inauguration of new members into the YLF classes.</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/event3.jpg" alt="Teachers Get-Together" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">Teachers Get-Together</h3>
            <p className="text-sm"><b>Date:</b> October 5, 2025</p>
            <p className="text-sm"><b>Time:</b> 10:00 AM - 2:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Ojokoro Housing Estate Central Mosque</p>
            <p className="text-sm"><b>Details:</b> An inspiring occasion of connection and appreciation: The Teachers’ Get-Together brings our educators together to relax, share experiences, strengthen bonds, and celebrate the invaluable role they play in shaping lives and building the future.</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/event4.jpeg" alt="Islamic Vacation Course (IVC)" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">Islamic Vacation Course (IVC)</h3>
            <p className="text-sm"><b>Date:</b> December 24, 2025 to January 1, 2026</p>
            <p className="text-sm"><b>Location:</b> Human Capital Development Center (HCDC), Noforija, Epe, Lagos.</p>
            <p className="text-sm"><b>Details:</b> An avenue whereby members of the society and other members usually gather to boost their spirituality and also a means to reawaken the soul, assist individuals to guard their souls against the several menaces and ills of the community during the Christian festive seasons, and also relate with different individuals across Lagos State.</p>
          </div>
        </div>
        {/* User Submitted Event Highlights */}
        {eventHighlights.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <h2 className="section-title text-2xl font-bold text-center mb-4 sm:text-3xl sm:mb-6">Event Highlights</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {eventHighlights.map((item) => (
                <div key={item.id} className="event-item mb-4 bg-green-100 p-2 rounded-lg shadow-md relative sm:p-4">
                  <img src={item.image_url} alt={`Event by ${item.user_name}`} className="w-full h-32 object-cover rounded-lg mb-2 sm:h-48 sm:mb-4" />
                  <p className="text-sm text-green-800 sm:text-lg">{item.text}</p>
                  <p className="text-xs text-gray-600 mt-1 sm:text-sm sm:mt-2">
                    Posted by {item.user_name} on {item.created_at}
                  </p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs hover:bg-red-600 sm:top-2 sm:right-2 sm:px-2 sm:py-1 sm:text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="py-6 px-4 sm:py-8 sm:px-6 bg-green-700 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-4 sm:text-3xl sm:mb-6">Past Events</h2>
        <EventSlideshow />
      </section>

      {/* Ongoing Programs Section */}
      <section className="py-6 px-4 sm:py-8 sm:px-6">
        <h2 className="section-title text-2xl font-bold text-center mb-4 sm:text-3xl sm:mb-6">Ongoing Programs</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/program1.jpeg" alt="Weekly Usrah" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">Weekly Usrah</h3>
            <p className="text-sm"><b>Schedule:</b> Every Friday, 2:45 PM - 4:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Ojokoro Housing Estate Central Mosque and Morkazul Uloom Mosque</p>
            <p className="text-sm"><b>Details:</b> The Usrah serves as a weekly rallying point for the working class, secondary schools, higher institutions, as well as artisans in the council. It features Adhkar's, spiritual and enlightening lectures, including issues around the world.</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/program2.jpg" alt="Youth Leader Forum (YLF)" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">Youth Leader Forum (YLF)</h3>
            <p className="text-sm"><b>Schedule:</b> Every 1st and 3rd Sundays of the month.</p>
            <p className="text-sm"><b>Location:</b> Yusuf Alade Mosque, Nurein Compound, Kola.</p>
            <p className="text-sm"><b>Details:</b> A noble mission: Training Muslim youths to become visionary and responsible leaders, nurturing their character, faith, and skills to inspire positive change and lead with excellence in their communities and beyond.</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/program3.jpeg" alt="Extra Mural Class (EMC)" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">Extra Mural Class (EMC)</h3>
            <p className="text-sm"><b>Schedule:</b> Every Mondays to Thursdays, 4:00 PM - 6:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Fahmid Kiddies Academy
              18, Shittu street, Off Clem road, Alagbado, Lagos.</p>
            <p className="text-sm"><b>Details:</b> It's an academic center, where we teach secondary school students their compulsory subjects. It would facilitate students for two major examinations, WAEC and UTME, which will be well coordinated by the Director of Studies (DOS).</p>
          </div>
          <div className="event-item bg-green-100 p-2 rounded-lg shadow-md sm:p-4">
            <img src="/images/program4.jpeg" alt="Extra Mural Class (EMC)" className="w-full h-32 object-cover rounded mb-2 sm:h-48 sm:mb-4" />
            <h3 className="text-lg font-semibold sm:text-xl">School-Leavers Mentorship Program (SMP)</h3>
            <p className="text-sm"><b>Schedule:</b> Every Saturday, 10:00 AM - 2:00 PM WAT</p>
            <p className="text-sm"><b>Location:</b> Xtraction Training Hub, Alakuko.</p>
            <p className="text-sm"><b>Details:</b> Empowering the next generation: Training school leavers in both tech skills and essential soft skills, equipping them with the knowledge, confidence, and adaptability they need to thrive and succeed in the future.</p>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-6 px-4 sm:py-8 sm:px-6 bg-green-800 text-white">
        <h2 className="section-title text-2xl font-bold text-center mb-4 sm:text-3xl sm:mb-6">Featured Event</h2>
        <div className="event-item bg-green-700 p-4 rounded-lg shadow-md max-w-xl mx-auto text-center sm:p-6 sm:max-w-2xl">
          <img src="/images/event2.jpeg" alt="Islamic Lecture" className="w-full object-cover rounded mb-2 sm:mb-4" />
          <h3 className="text-xl font-semibold sm:text-2xl">YLF Graduation of class of 2025 and Inauguration</h3>
          <p className="text-sm"><b>Date:</b> August 31, 2025</p>
          <p className="text-sm"><b>Time:</b> 10:00 AM - 4:00 PM WAT</p>
          <p className="text-sm"><b>Location:</b> Wamon Taofeeq Central Mosque, Abule Egba.</p>
          <p className="mt-1 sm:mt-2">Join us in Marking the Graduation of the Class of 2025 YLF students, recognizing their hard work and dedication, while also celebrating the Promotion of students into higher classes and joyfully welcoming the Inauguration of new members into the YLF classes.</p>
          <a href="#" className="mt-2 inline-block bg-yellow-300 text-green-900 font-bold py-1 px-3 rounded hover:bg-yellow-400 sm:mt-4 sm:py-2 sm:px-4">Register Now</a>
        </div>
      </section>

      {/* Registration Call-to-Action Section */}
      <section className="py-6 px-4 sm:py-8 sm:px-6 bg-green-700 text-white text-center">
        <h2 className="section-title text-2xl font-bold mb-2 sm:text-3xl sm:mb-4">Stay Involved</h2>
        <p className="mb-2 sm:mb-4">Register for upcoming events and programs to stay connected with our community.</p>
        <a href="#" className="inline-block bg-yellow-300 text-green-900 font-bold py-1 px-4 rounded hover:bg-yellow-400 sm:py-2 sm:px-6">Sign Up Today</a>
      </section>
      <section className="py-6 px-4 sm:py-8 sm:px-6">
        <UploadForm onSubmit={handleSubmit} formTitle="Submit Event Highlight" />
        {uploadStatus && <p className="mt-2 text-sm text-red-600 sm:text-base">{uploadStatus}</p>}
      </section>
      <section className="py-2 bg-green-700 text-center sm:py-4">
        <button className="animate-item bg-yellow-400 text-green-900 px-4 py-1 rounded hover:bg-yellow-500 sm:px-6 sm:py-2">Stay Updated</button>
      </section>
      <Footer />
    </div>
  );
};

export default EventsHighlight;