---
title: 'World Action Models：从「预测画面」到「预测对动作有用的未来」'
date: 2026-08-05
category: radar
summary: 为什么 WAM 不应该只在 RGB 空间预测未来，以及结构化世界建模的趋势。
tags:
  - World Model
  - Embodied AI
  - VLA
---

最近 World Action Model（WAM）方向的一个明显趋势是：大家开始质疑「在 RGB 像素空间做未来预测」这件事本身。

## 问题：RGB 预测纠缠了太多噪声

传统做法让模型预测未来的 RGB 画面。但纹理、光照、背景、视角这些因素，对「下一步该做什么动作」往往无关，却占据了大量建模容量。于是预测得很逼真，不代表动作学得好。

## 思路：预测「对动作有用的状态」

顺着这个逻辑，涌现了一批工作，试图把未来预测从「还原画面」转向「还原结构」——包括外观、运动、几何、语义等互补视角。关键点在于：

1. **训练时**引入这些 beyond-RGB 的监督信号；
2. **推理时**仍然只吃 RGB 输入，保持部署简单；
3. 让动作分支共享视频分支的注意力，从而从「结构化的未来」中获益。

这类方法在 LIBERO、LIBERO-Plus 以及真实机器人上，都表现出了对视觉扰动的更强鲁棒性。

这也呼应了我自己做 DreamWAM 时的核心观点：*Future prediction should preserve what matters for action.*
