import React from 'react';

const Bio = () => {
  return (
    <section id="bio" className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-primary font-mono">about</h2>
      <div className="space-y-4 text-text font-mono text-sm">
        <p className="leading-relaxed">
          machine learning engineer specializing in reinforcement learning and robotics, 
          developing intelligent systems for real-world applications.
        </p>
        
        <p className="leading-relaxed">
          creating simulation environments and training pipelines to bridge ai research 
          with robotics, experimenting with reward engineering and optimization.
        </p>
        
        <p className="leading-relaxed">
          implementing algorithms for robot control tasks, improving training 
          efficiency and performance.
        </p>
        
        <p className="leading-relaxed">
          building software systems that integrate perception, planning, and control, 
          applying architecture principles to maintainable code.
        </p>
        
        <div className="pt-4 border-t border-border">
          <p className="leading-relaxed">
            <span className="text-secondary">education:</span> 
            <span className="text-primary"> msc ai/ml @ university of birmingham</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;