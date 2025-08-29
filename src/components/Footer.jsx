import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 p-2 text-center text-white sm:p-4">
      {/* Official Contacts */}
      <section className="animate-section py-4 px-2 sm:py-6 sm:px-4">
        <h2 className="text-xl font-bold text-center mb-2 sm:text-3xl sm:mb-6">Our Official Contacts</h2>
        <p className="text-sm sm:text-base">Jubril Alade Yussuff Compound, Jubril Alade Yussuff Drive, Off Nurain Road, Kola Bus-stop, Agbado, Lagos.</p>
        <p className="text-sm sm:text-base">Amir - +234 807 900 7292</p>
        <p className="text-sm sm:text-base">Naibul Amir - +234 802 896 5287</p>
        <p className="text-sm sm:text-base">Secretariat - +234 806 666 9591</p>
        <p className="text-sm sm:text-base">24 hours a Day, 7 days a week</p>
      </section>
      <p className="mb-1 text-xs sm:text-sm sm:mb-2">COPYRIGHT ©2024, MSSN. ALL RIGHTS RESERVED.</p>
      <div className="flex justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="https://web.facebook.com/mssnojokoro/?_rdc=1&_rdr"><img src="/images/facebook-icon.png" alt="Facebook" className="hover:opacity-75 w-10 h-10 sm:w-16 sm:h-16" /></a>
        <a href="https://www.youtube.com/@MSSNOJOKOROAREACOUNCIL-rw6ed"><img src="/images/youtube-icon.png" alt="YouTube" className="hover:opacity-75 w-10 h-10 sm:w-16 sm:h-16" /></a>
        <a href="https://www.instagram.com/mssnojokoroareacouncil?igsh=YzljYTk1ODg3Zg=="><img src="/images/instagram-icon.png" alt="Instagram" className="hover:opacity-75 w-10 h-10 sm:w-16 sm:h-16" /></a>
      </div>
    </footer>
  );
};

export default Footer;