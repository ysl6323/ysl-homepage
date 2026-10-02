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
venue: CoRL 2026
year: 2026
venueUrl: https://2026.corl.org/
arxiv: https://arxiv.org/abs/2606.08288
code: https://github.com/hustvl/MotionVLA.git
project: https://hustvl.github.io/MotionVLA/
teaser: images/papers/motionvla.webp
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
  @inproceedings{yuan2026motionvla,
        title={MotionVLA: Injecting Geometric Motion into Vision-Language-Action Model},
        author={Yuan, Shanglin and Zhao, Weiheng and Guo, Xianda and Sui, Wei and Yu, Li and Liu, Wenyu and Wang, Xinggang},
        booktitle={Conference on Robot Learning (CoRL)},
        year={2026}
  }
---
