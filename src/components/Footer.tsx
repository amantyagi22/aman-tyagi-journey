
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-primary text-primary-foreground text-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>&copy; {currentYear} Aman Tyagi. All Rights Reserved.</p>
          </div>
          <div className="mt-2 md:mt-0">
            <p>Backend Developer & DevOps Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
