import React from 'react';
import DynamicAsciiArt from '../DynamicAsciiArt';

const Experience = () => {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">experience</h2>
      <div className="flex justify-center mb-4">
        <DynamicAsciiArt type="square" />
      </div>
      <div className="space-y-6 text-text">
        <div>
          <h3 className="text-xl font-semibold text-primary">alan turing institute</h3>
          <p className="text-sm text-text">dec 2024 - april 2025 | research associate | collaboration: university of birmingham & u.s. army research institute</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>developed a heterogeneous-agent reinforcement learning (harl) framework using human-proxy agents that simulate realistic human constraints and capabilities to improve ai-human collaboration in multi-agent systems.</li>
            <li>designed a cooperative grid-world capture environment based on stag hunt game theory, where machine agents had full observability but couldn't detect target health, while human-proxy agents had limited vision but unique disease detection abilities.</li>
            <li>conducted experiments across various environment configurations, varying disease probability and penalty severity to analyze cooperation patterns.</li>
            <li>demonstrated that rl agents trained with human-proxy teammates achieved superior cross-environment performance, with teams trained under moderate risk conditions showing 30-40% higher collaboration rates.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">riskopsai</h3>
          <p className="text-sm text-text">jun 2023 - aug 2024 | ai ml intern</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>built a deep learning pipeline with tensorflow and pytorch using resnet-50 and transformer models for classification. used tensorrt to optimize inference, achieving 25% faster performance and 15% higher accuracy.</li>
            <li>created distributed ml infrastructure with apache airflow and mlflow on aws gpu clusters using horovod, reducing training time by 20%. set up automated data pipelines for feature engineering.</li>
            <li>developed a predictive analytics system using postgresql and bigquery with scikit-learn and xgboost on imbalanced data. optimized queries to improve decision-making efficiency by 30%.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">srm institute of science & technology</h3>
          <p className="text-sm text-text">oct 2022 - feb 2024 | researcher under dr. vaishnavi moorthy</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
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