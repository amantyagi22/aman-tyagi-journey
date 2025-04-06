
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted/30 text-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p>&copy; {currentYear} Aman Tyagi. All Rights Reserved.</p>
          </div>
          <div className="flex items-center">
            <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-md">
              Backend-Focused Software Engineer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
