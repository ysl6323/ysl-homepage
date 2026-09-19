---
title: 'MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model'
authors:
  - Shanglin Yuan
  - Weiheng Zhao
  - Xianda Guo
  - Wei Sui
  - Li Yu
  - Wenyu Liu
  - Xinggang Wang
highlight: Shanglin Yuan
venue: arXiv preprint
year: 2026
arxiv: https://arxiv.org/abs/2606.08288
teaser: images/papers/motionvla-teaser.png
tags:
  - Vision-Language-Action
  - Robot Learning
  - Embodied AI
order: 2
abstract: |
  Vision-language-action (VLA) models increasingly accumulate spatiotemporal
  context — history frames, depth, and 4D features — to improve robot manipulation.
  We argue that naively stacking non-motion-consistent evidence causes geometric
  drift, fragmented temporal cues, and unstable action generation, and ask: should a
  VLA remember past frames, or remember the motion that connects them? We propose
  MotionVLA, a motion-history interface that transforms a short past-only video
  window into compact, time-continuous trajectory-field tokens. Current visual
  tokens query this history to retrieve task-relevant motion information, which is
  reintegrated into the VLA stream under trajectory-grounded supervision. Across
  simulation benchmarks and early real-robot trials, MotionVLA achieves improved
  long-horizon manipulation with smoother and more direct executions.
bibtex: |
  @misc{yuan2026motionvlainjectinggeometricmotion,
        title={MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model},
        author={Shanglin Yuan and Weiheng Zhao and Xianda Guo and Wei Sui and Li Yu and Wenyu Liu and Xinggang Wang},
        year={2026},
        eprint={2606.08288},
        archivePrefix={arXiv},
        primaryClass={cs.RO},
        url={https://arxiv.org/abs/2606.08288},
  }
---
