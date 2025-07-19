import React from 'react';
import DynamicAsciiArt from '../DynamicAsciiArt';

const Contact = () => {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">contact</h2>
      <div className="flex justify-center mb-4">
        <DynamicAsciiArt type="triangle" />
      </div>
      <ul className="list-disc list-inside space-y-2 text-text">
        <li>phone: +44-07553994632</li>
        <li>email: <a href="mailto:sxt589@student.bham.ac.uk" className="text-primary hover:underline">sxt589@student.bham.ac.uk</a></li>
        <li>personal website: <a href="https://srinivastb.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">srinivastb.netlify.app</a></li>
        <li>linkedin: <a href="https://www.linkedin.com/in/srinivastb/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/srinivastb</a></li>
        <li>github: <a href="https://github.com/ch33nchan" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ch33nchan</a></li>
        <li>google scholar: <a href="https://scholar.google.com/citations?hl=en&user=UgR4sMUAAAAJ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">scholar.google.com/citations?hl=en&user=ugr4smuaaaj</a></li>
        <li>twitter: <a href="https://x.com/srinitwtts" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">x.com/srinitwtts</a></li>
        <li>location: birmingham, united kingdom</li>
      </ul>
    </section>
  );
};

export default Contact;
