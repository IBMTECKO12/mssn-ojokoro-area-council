import React, { useState, useEffect } from 'react';

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      image: '/images/highlight1.jpg',
      title: 'Sister Seminar',
      date: 'February 9, 2025',
      location: 'Alinco Hall, beside Ojokoro LCDA, Ijaiye, Lagos.',
      details: 'A successful event with over 200 participants.',
    },
    {
      id: 2,
      image: '/images/highlight2.jpg',
      title: 'Sister Seminar',
      date: 'February 9, 2025',
      location: 'Alinco Hall, beside Ojokoro LCDA, Ijaiye, Lagos.',
      details: 'Focused on skill development for Muslim youth.',
    },
    {
      id: 3,
      image: '/images/highlight3.jpg',
      title: 'Sister Seminar',
      date: 'February 9, 2025',
      location: 'Alinco Hall, beside Ojokoro LCDA, Ijaiye, Lagos.',
      details: 'Focused on skill development for Muslim youth.',
    },
    {
      id: 4,
      image: '/images/highlight4.jpg',
      title: 'Sister Seminar',
      date: 'February 9, 2025',
      location: 'Alinco Hall, beside Ojokoro LCDA, Ijaiye, Lagos.',
      details: 'The program was held during the MSSN week and aims to educate and enlighten Muslim sisters on their duties towards their Lord and society at large',
    },
    {
      id: 5,
      image: '/images/highlight5.jpg',
      title: 'Youth Conference',
      date: 'May 27, 2025',
      location: 'Ijaiye Housing Estate Senior Grammar School, Ijaiye, Lagos.',
      details: "The program was held on the 27th of May and commemorates Children's Day. It is organized for primary and secondary school students. It features March past, debate, pick and talk, quiz, project exhibition, and many more.",
    },
    {
      id: 6,
      image: '/images/highlight6.jpg',
      title: 'Youth Conference',
      date: 'May 27, 2025',
      location: 'Ijaiye Housing Estate Senior Grammar School, Ijaiye, Lagos.',
      details: "The program was held on the 27th of May and commemorates Children's Day. It is organized for primary and secondary school students. It features March past, debate, pick and talk, quiz, project exhibition, and many more.",
    },
    {
      id: 7,
      image: '/images/highlight7.jpg',
      title: 'Youth Conference',
      date: 'May 27, 2025',
      location: 'Ijaiye Housing Estate Senior Grammar School, Ijaiye, Lagos.',
      details: "The program was held on the 27th of May and commemorates Children's Day. It is organized for primary and secondary school students. It features March past, debate, pick and talk, quiz, project exhibition, and many more.",
    },
    {
      id: 8,
      image: '/images/highlight8.jpg',
      title: 'Youth Conference',
      date: 'May 27, 2025',
      location: 'Ijaiye Housing Estate Senior Grammar School, Ijaiye, Lagos.',
      details: "The program was held on the 27th of May and commemorates Children's Day. It is organized for primary and secondary school students. It features March past, debate, pick and talk, quiz, project exhibition, and many more.",
    },
    {
      id: 9,
      image: '/images/highlight9.jpg',
      title: 'Holiday Training Course (HTC)',
      date: 'July 25, 2025',
      location: 'Anwarul Islam Girls High School, Ahmadiyah, Lagos.',
      details: 'A camping program designed to train the secondary school students for both spiritual and empowerment during the summer holiday. It holds once a year. Every Third Term Break.',
    },
    {
      id: 10,
      image: '/images/highlight10.jpg',
      title: 'Holiday Training Course (HTC)',
      date: 'July 25, 2025',
      location: 'Anwarul Islam Girls High School, Ahmadiyah, Lagos.',
      details: 'A camping program designed to train the secondary school students for both spiritual and empowerment during the summer holiday. It holds once a year. Every Third Term Break.',
    },
    {
      id: 11,
      image: '/images/highlight11.jpeg',
      title: 'Holiday Training Course (HTC)',
      date: 'July 25, 2025',
      location: 'Anwarul Islam Girls High School, Ahmadiyah, Lagos.',
      details: 'A camping program designed to train the secondary school students for both spiritual and empowerment during the summer holiday. It holds once a year. Every Third Term Break.',
    },
    {
      id: 12,
      image: '/images/highlight12.jpeg',
      title: 'Holiday Training Course (HTC)',
      date: 'July 25, 2025',
      location: 'Anwarul Islam Girls High School, Ahmadiyah, Lagos.',
      details: 'A camping program designed to train the secondary school students for both spiritual and empowerment during the summer holiday. It holds once a year. Every Third Term Break.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="event-item bg-green-800 p-4 rounded-lg shadow-md overflow-hidden">
        <img
          src={events[currentSlide].image}
          alt={events[currentSlide].title}
          className="w-full h-128 object-cover rounded mb-4 transition-opacity duration-500"
        />
        <h3 className="text-xl font-semibold">{events[currentSlide].title}</h3>
        <p>Date: {events[currentSlide].date}</p>
        <p>Location: {events[currentSlide].location}</p>
        <p>Details: {events[currentSlide].details}</p>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-green-900 p-2 rounded-full hover:bg-yellow-500"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-green-900 p-2 rounded-full hover:bg-yellow-500"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSlideshow;