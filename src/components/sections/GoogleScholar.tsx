import React from 'react';

const GoogleScholar = () => {
  return (
    <section id="scholar" className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-primary font-mono">research</h2>
      
      <div className="space-y-6">
        <div className="group">
          <p className="text-secondary font-mono text-sm mb-4">
            <a 
              href="https://scholar.google.com/citations?hl=en&user=UgR4sMUAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300 hover:text-accent"
            >
              google scholar profile →
            </a>
          </p>
          
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg transition-all duration-300 hover:border-accent hover:shadow-lg">
              <h4 className="font-semibold text-primary font-mono text-sm mb-2">
                <span>enhancing low-light surveillance images with mirnet</span>
              </h4>
              <p className="text-xs text-secondary font-mono mb-1">
                v. moorthy, t. b. srinivas (2024)
              </p>
              <p className="text-xs text-muted font-mono mb-3">
                smart trends in computing and communications, springer
              </p>
              <a 
                href="https://doi.org/10.1007/978-981-97-1329-5_36" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn text-xs"
              >
                read paper
              </a>
            </div>

            <div className="p-4 border border-border rounded-lg transition-all duration-300 hover:border-accent hover:shadow-lg">
              <h4 className="font-semibold text-primary font-mono text-sm mb-2">
                <span>alats: analysis of localization algorithms in terrestrial surveillance bots</span>
              </h4>
              <p className="text-xs text-secondary font-mono mb-1">
                v. moorthy, d. shah, s. kapoor, s. t. b., a. lal (2023)
              </p>
              <p className="text-xs text-muted font-mono mb-3">
                ieee international conference on electronics, computing and communication technologies
              </p>
              <a 
                href="https://doi.org/10.1109/CONECCT58849.2023.10234740" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn text-xs"
              >
                read paper
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-secondary">status:</span>
              <span className="text-primary ml-1">actively publishing</span>
            </div>
            <div>
              <span className="text-secondary">areas:</span>
              <span className="text-primary ml-1">ml, rl, robotics, cv</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleScholar;
