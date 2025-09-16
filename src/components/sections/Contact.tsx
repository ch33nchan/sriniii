import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-primary font-mono">contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Links */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">email</div>
              <a 
                href="mailto:sxt589@student.bham.ac.uk" 
                className="text-secondary hover:text-primary text-xs font-mono"
              >
                sxt589@student.bham.ac.uk
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">linkedin</div>
              <a 
                href="https://www.linkedin.com/in/srinivastb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary text-xs font-mono"
              >
                /in/srinivastb
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">github</div>
              <a 
                href="https://github.com/ch33nchan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary text-xs font-mono"
              >
                /ch33nchan
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">scholar</div>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=UgR4sMUAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary text-xs font-mono"
              >
                google scholar
              </a>
            </div>
          </div>
        </div>

        {/* More Links */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">website</div>
              <a 
                href="https://sriniii.tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary text-xs font-mono"
              >
                sriniii.tech
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">location</div>
              <span className="text-secondary text-xs font-mono">
                birmingham, uk
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div>
              <div className="text-primary font-mono text-sm">status</div>
              <span className="text-secondary text-xs font-mono">
                open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
