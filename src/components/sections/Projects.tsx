import React from 'react';
import DynamicAsciiArt from '../DynamicAsciiArt';

const Projects = () => {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">projects</h2>
      <div className="flex justify-center mb-4">
        <DynamicAsciiArt type="circle" />
      </div>
      <div className="space-y-6 text-text">
        <div>
          <h3 className="text-xl font-semibold text-primary">maddpg: multi-agent deep deterministic policy gradient <a href="https://github.com/ch33nchan/rl-agents/tree/main/maddpg-pettingzoo-pytorch-master" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(github)</a></h3>
          <p className="text-sm text-text">jul 2024 -- aug 2024 | tools: python, pytorch, pettingzoo, numpy, multi-agent rl</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>built a reinforcement learning system for multiple agents that can learn to work together or compete in different environments using pettingzoo.</li>
            <li>created shared and individual policies for agents, so they can make decisions independently while still learning as a group.</li>
            <li>added experience buffers for each agent to store past experiences and improve learning from them during training.</li>
            <li>tested the system on tasks like simple_adversary and simple_spread, and tuned settings like learning rates and batch sizes for better performance.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">rl2-enhanced: advanced reinforcement learning for llms <a href="https://github.com/ch33nchan/rl2.0.1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(github)</a></h3>
          <p className="text-sm text-text">jul 2025 | tools: python, pytorch, hydra, mlflow, weights&biases, optuna, numpy, distributed rl</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>extended the original rl2 repository by chenmien tan, adding advanced features for scalable and robust language model training.</li>
            <li>implemented adaptive kl penalty mechanisms (exponential, pid, scheduled controllers) for stable ppo optimization.</li>
            <li>developed multi-objective optimization with pareto frontier tracking, supporting reward, entropy, and kl constraints.</li>
            <li>integrated alternative advantage estimation methods (v-trace, retrace(λ), td(λ), multi-step returns) for improved sample efficiency.</li>
            <li>automated hyperparameter tuning using optuna and hyperopt, enabling bayesian and grid search strategies.</li>
            <li>added advanced memory optimization: gradient checkpointing, cpu offloading, adaptive batch sizing, and detailed profiling.</li>
            <li>enabled experiment tracking and model versioning with mlflow and weights&biases for reproducible research and mlops workflows.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">rl protokit: rapid prototyping toolkit for reinforcement learning <a href="https://github.com/ch33nchan/rl-prokit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(github)</a></h3>
          <p className="text-sm text-text">jul 2024 -- present | tools: python, pytorch, gymnasium, pettingzoo, numpy, reinforcement learning</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>developed modular cli tool for rl prototyping that enables quick generation of custom gym wrappers, hyperparameter tuning, policy debugging, and full end-to-end pipelines, reducing setup time for rl experiments compared to traditional methods.</li>
            <li>implemented advanced rl features including prioritized replay buffers and rnn policy networks for efficient off-policy learning and handling temporal dependencies in partially observable environments, with support for discrete and continuous action spaces.</li>
            <li>integrated intrinsic curiosity module and multi-agent wrappers using pettingzoo for enhanced exploration in sparse-reward settings and cooperative multi-agent scenarios, along with frame-stacking, grayscale transforms, and atari-specific preprocessing.</li>
            <li>added ppo clip annealing, kl-divergence logging, and sac temperature auto-tuning for stable policy optimization and entropy regularization, enabling more robust training across various rl algorithms and environments.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">isaac gym humanoid robot: teaching robots to walk <a href="https://github.com/ch33nchan/isaac-humanoid" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(github)</a></h3>
          <p className="text-sm text-text">nov 2023 | tools: python, pytorch, isaac gym, nvidia gpu</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>created a computer program that teaches virtual humanoid robots how to walk and balance using trial-and-error learning (reinforcement learning).</li>
            <li>used nvidia's isaac gym simulator to run thousands of robot training sessions simultaneously on a single graphics card for faster learning.</li>
            <li>implemented reward systems that give the robot positive feedback for good walking behavior and negative feedback for falling or poor movement.</li>
            <li>applied ppo (proximal policy optimization) algorithm to help the robot gradually improve its walking skills through repeated practice.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">tinygrad rlcv: lightweight rl for computer vision <a href="https://github.com/ch33nchan/rlcv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(github)</a></h3>
          <p className="text-sm text-text">oct 2023 -- dec 2023 | tools: python, tinygrad, opencv, numpy, reinforcement learning</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>created ultra-lightweight neural network operations with tinygrad, achieving a small memory footprint (&lt;10mb) for deployment on resource-limited edge devices (mobile cpus and arm).</li>
            <li>built a memory-optimized dqn agent with prioritized experience replay and flexible policy networks, enabling stable learning and real-time inference (&gt;30 fps) on target hardware.</li>
            <li>developed an optimized opencv pipeline for efficient, real-time feature extraction from webcam streams, enabling robust object tracking on low-power systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
