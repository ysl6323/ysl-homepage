---
title: 'DreamWAM: Beyond RGB Future Prediction for World Action Models'
authors:
  - Shanglin Yuan
  - Weiheng Zhao
  - Xin Shi
  - Haoyi Jiang
  - Xianda Guo
  - Liu Liu
  - Wenyu Liu
  - Wei Sui
  - Xinggang Wang
highlight: Shanglin Yuan
coFirstAuthors:
  - Weiheng Zhao
venue: arXiv preprint
year: 2026
arxiv: https://arxiv.org/abs/2608.04996
code: https://github.com/hustvl/DreamWAM
project: https://hustvl.github.io/DreamWAM/
hf: https://huggingface.co/hustvl/DreamWAM
teaser: images/papers/dreamwam.png
tags:
  - World Action Model
  - Embodied AI
order: 1
abstract: |
  World Action Models (WAMs) learn action-relevant representations by predicting
  how the observed world will evolve. Existing methods predict the future in RGB
  space, which entangles task-relevant state changes with nuisance factors such as
  texture, illumination, background, and viewpoint. We argue that future prediction
  should preserve what matters for action, and propose DreamWAM, which models the
  future through structured, complementary views of appearance, motion, geometry,
  and semantics. DreamWAM combines joint latent denoising of RGB and motion with
  lightweight gated residual branches for depth and DINO features, and shares
  attention between its VideoDiT and ActionDiT so the action branch benefits from
  structured future cues. All beyond-RGB supervision branches are disabled at
  inference, keeping deployment RGB-only. On LIBERO, DreamWAM improves from 97.30%
  to 98.40% (no-rollout) and 98.00% to 98.90% (joint); under LIBERO-Plus
  perturbations it improves from 51.36% to 63.44% and 69.16% to 75.47%; and on real
  robots it averages 74.4% under unseen visual shifts versus 55.6% for Fast-WAM-Joint.
bibtex: |
  @misc{yuan2026dreamwamrgbfutureprediction,
        title={DreamWAM: Beyond RGB Future Prediction for World Action Models},
        author={Shanglin Yuan and Weiheng Zhao and Xin Shi and Haoyi Jiang and Xianda Guo and Liu Liu and Wenyu Liu and Wei Sui and Xinggang Wang},
        year={2026},
        eprint={2608.04996},
        archivePrefix={arXiv},
        primaryClass={cs.RO},
        url={https://arxiv.org/abs/2608.04996},
  }
---
