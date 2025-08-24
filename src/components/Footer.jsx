import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 p-4 text-center text-white">
      {/* Official Contacts */}
      <section className="animate-section py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Official Contacts</h2>
        <p>Jubril Alade Yussuff Compound, Jubril Alade Yussuff Drive, Off Nurain Road, Kola Bus-stop, Agbado, Lagos.</p>
        <p>Amir - +234 807 900 7292</p>
        <p>Naibul Amir - +234 802 896 5287</p>
        <p>Secretariat - +234 806 666 9591</p>
        <p>24 hours a Day, 7 days a week</p>
      </section>
      <p className="mb-2">COPYRIGHT ©2024, MSSN. ALL RIGHTS RESERVED.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://web.facebook.com/mssnojokoro/?_rdc=1&_rdr"><img src="/images/facebook-icon.png" alt="Facebook" className="hover:opacity-75 w-16 h-16" /></a>
        <a href="https://www.youtube.com/@MSSNOJOKOROAREACOUNCIL-rw6ed"><img src="/images/youtube-icon.png" alt="YouTube" className="hover:opacity-75 w-16 h-16" /></a>
        <a href="https://www.instagram.com/mssnojokoroareacouncil?igsh=YzljYTk1ODg3Zg=="><img src="/images/instagram-icon.png" alt="Instagram" className="hover:opacity-75 w-16 h-16" /></a>
      </div>
    </footer>
  );
};

export default Footer;