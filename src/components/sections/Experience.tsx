import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-primary font-mono">experience</h2>
      <div className="space-y-8 text-text">
        <div className="border-b border-border pb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-primary font-mono">lossfunk</h3>
            <span className="text-xs text-muted font-mono">aug 2025 - present</span>
          </div>
          <p className="text-sm text-secondary font-mono mb-3">resident researcher | remote</p>
          <ul className="space-y-2 text-sm font-mono">
            <li>exploring novel dual-stream reinforcement learning architecture that addresses fundamental limitations in current rl research through multi-scale temporal hierarchies and physics-aware learning, contributing to advances in safety-critical robotics simulation.</li>
            <li>investigating multi-algorithm comparison framework for systematic evaluation of conventional vs dual-stream reward schemes across dqn, ppo, sac, and a3c, with real-time genesis physics simulation and taichi backend integration for authentic robotic control.</li>
            <li>contributing to production-ready rl systems through modular environment adapters, automated training pipelines with progress tracking, and comprehensive model management for physics simulation and game environments, aiming to advance safe ai.</li>
          </ul>
        </div>

        <div className="border-b border-border pb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-primary font-mono">alan turing institute</h3>
            <span className="text-xs text-muted font-mono">dec 2024 - april 2025</span>
          </div>
          <p className="text-sm text-secondary font-mono mb-3">research associate | collaboration: university of birmingham & u.s. army research institute</p>
          <ul className="space-y-2 text-sm font-mono">
            <li>developed a heterogeneous-agent reinforcement learning framework using human-proxy agents that simulate realistic human constraints and capabilities to improve ai-human collaboration in multi-agent systems.</li>
            <li>designed a cooperative grid-world capture environment based on stag hunt game theory, where machine agents had full observability but couldn't detect target health, while human-proxy agents had limited vision but unique disease detection abilities.</li>
            <li>conducted experiments across various environment configurations, varying disease probability and penalty severity to analyze cooperation patterns.</li>
            <li>demonstrated that rl agents trained with human-proxy teammates achieved superior cross-environment performance, with teams trained under moderate risk conditions showing 30-40% higher collaboration rates.</li>
          </ul>
        </div>

        <div className="border-b border-border pb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-primary font-mono">riskopsai</h3>
            <span className="text-xs text-muted font-mono">jun 2023 - aug 2024</span>
          </div>
          <p className="text-sm text-secondary font-mono mb-3">ai ml intern | san jose, remote</p>
          <ul className="space-y-2 text-sm font-mono">
            <li>built a deep learning pipeline with tensorflow and pytorch using resnet-50 and transformer models for classification. used tensorrt to optimize inference, achieving 25% faster performance and 15% higher accuracy.</li>
            <li>created distributed ml infrastructure with apache airflow and mlflow on aws gpu clusters using horovod, reducing training time by 20%. set up automated data pipelines for feature engineering.</li>
            <li>developed a predictive analytics system using postgresql and bigquery with scikit-learn and xgboost on imbalanced data. optimized queries to improve decision-making efficiency by 30%.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-primary font-mono">srm institute of science & technology</h3>
            <span className="text-xs text-muted font-mono">oct 2022 - feb 2024</span>
          </div>
          <p className="text-sm text-secondary font-mono mb-3">researcher under dr. vaishnavi moorthy | chennai, india</p>
          <ul className="space-y-2 text-sm font-mono">
            <li>developed an autonomous navigation system using ros2 by fusing lidar, rgb-d, and imu data through an extended kalman filter. this improved localization accuracy by 15%.</li>
            <li>built a slam system using sac and trpo algorithms in pytorch to improve path planning with rrt* and a*. reduced navigation errors by 25% using dynamic obstacle avoidance.</li>
            <li>created a real-time perception pipeline using opencv and pcl, integrating yolov7 for object detection. achieved 20ms latency and 95% detection accuracy in changing environments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;