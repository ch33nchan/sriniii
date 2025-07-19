import React from 'react';

const Bio = () => {
  return (
    <section id="bio" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">about me</h2>
      <ul className="list-disc list-inside space-y-2 text-text">
        <li>cracked researcher, machine learning engineer working on reinforcement learning and robotics, developing intelligent systems for real-world applications.</li>
        <li>creating simulation environments and training pipelines to bridge ai research with robotics, experimenting with reward engineering and multi-objective optimization for robotic behavior.</li>
        <li>implementing reinforcement learning algorithms such as ppo and sac for robot control tasks, improving training efficiency and performance.</li>
        <li>building software systems that integrate perception, planning, and control, applying software architecture principles to maintainable machine learning code.</li>
        <li>cs@uob</li>
      </ul>
    </section>
  );
};

export default Bio;