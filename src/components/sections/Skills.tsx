import React from 'react';
import DynamicAsciiArt from '../DynamicAsciiArt';

const Skills = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">technical skills</h2>
      <div className="flex justify-center mb-4">
        <DynamicAsciiArt type="triangle" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">programming languages:</h3>
          <p>python, c++, sql, bash, cmake</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">machine learning & ai:</h3>
          <p>pytorch, tensorflow, jax, scikit-learn, xgboost, opencv, hugging face transformers</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">reinforcement learning:</h3>
          <p>stable baselines3, ray rllib, openai gym, gymnasium, multi-agent rl frameworks</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">robotics & simulation:</h3>
          <p>ros2, isaac gym, isaac sim, mujoco, gazebo, point cloud library (pcl)</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">data science & analytics:</h3>
          <p>numpy, pandas, scipy, matplotlib, seaborn, tensorboard, weights & biases</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">mlops & development:</h3>
          <p>docker, kubernetes, ray, horovod, mlflow, airflow, git, ci/cd, tensorrt, onnx</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">research & theory:</h3>
          <p>policy gradient methods, actor-critic algorithms, multi-agent coordination, sim-to-real transfer</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;