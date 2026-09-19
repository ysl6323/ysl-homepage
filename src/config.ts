// Single source of truth for personal information & site metadata.
// Edit this file to update your profile, links, education, experience, etc.

export const site = {
  base: '/Personal-Website-ShanglinYuan',
  url: 'https://ysl6323.github.io',
  labUrl: 'https://hustvl.github.io/',
  nameEn: 'Shanglin Yuan',
  nameZh: '袁上林',
  titleEn: 'M.S. Student · HUST Vision Lab',
  titleZh: '在读硕士 · 华中科技大学 HUST Vision Lab',
  affiliationEn:
    'School of Electronic Information and Communications, Huazhong University of Science and Technology',
  affiliationZh: '华中科技大学 电子信息与通信学院',
  email: 'yuanshanglin2003@gmail.com',
  mottoEn: 'The best time to plant a tree was twenty years ago. The second best time is now.',
  mottoZh: '种一棵树最好的时间是二十年前，其次是现在。',
};

export const bio = {
  en: 'I am a Master’s student at HUST Vision Lab, Huazhong University of Science and Technology, advised by Prof. Xinggang Wang and Prof. Wenyu Liu. My research lies in Embodied AI and Image/Video Generation, with a focus on vision-language-action (VLA) models and world action models for robot manipulation.',
  zh: '我是华中科技大学电子信息与通信学院 HUST Vision Lab 的在读硕士，师从王兴刚教授和刘文予教授。研究方向为具身智能（Embodied AI）与图像/视频生成，重点关注用于机器人操作的视觉-语言-动作（VLA）模型与世界动作模型。',
};

export interface Bilingual {
  en: string;
  zh: string;
}

export const interests: Bilingual[] = [
  { en: 'Embodied AI', zh: '具身智能' },
  { en: 'Vision-Language-Action Models', zh: '视觉-语言-动作模型' },
  { en: 'World Action Models', zh: '世界动作模型' },
  { en: 'Image / Video Generation', zh: '图像 / 视频生成' },
];

export interface Advisor extends Bilingual {
  url: string;
}

export const advisors: Advisor[] = [
  { en: 'Prof. Xinggang Wang', zh: '王兴刚 教授', url: 'https://xwcv.github.io/' },
  { en: 'Prof. Wenyu Liu', zh: '刘文予 教授', url: 'https://eic.hust.edu.cn/professor/liuwenyu/' },
];

export interface SocialLink {
  key: string;
  label: string;
  href: string;
  enabled: boolean;
}

export const socials: SocialLink[] = [
  { key: 'email', label: 'Email', href: 'mailto:yuanshanglin2003@gmail.com', enabled: true },
  {
    key: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com.hk/citations?user=mHuyk9MAAAAJ&hl=en',
    enabled: true,
  },
  { key: 'github', label: 'GitHub', href: 'https://github.com/ysl6323', enabled: true },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-handle', // TODO: replace with your real URL, then set enabled: true
    enabled: false,
  },
  { key: 'dblp', label: 'DBLP', href: 'https://dblp.org/', enabled: false }, // TODO: 填你的 DBLP 主页 URL 后把 enabled 改成 true
  { key: 'x', label: 'X (Twitter)', href: 'https://x.com/', enabled: false },
];

export interface TimelineItem {
  period: string;
  title: Bilingual;
  org: Bilingual;
  note?: Bilingual;
}

export const education: TimelineItem[] = [
  {
    period: '2025.09 — Present',
    title: { en: 'M.S. in Artificial Intelligence', zh: '人工智能 · 硕士' },
    org: {
      en: 'Huazhong University of Science and Technology',
      zh: '华中科技大学 电子信息与通信学院',
    },
    note: {
      en: 'HUST Vision Lab · advised by Prof. Xinggang Wang & Prof. Wenyu Liu',
      zh: 'HUST Vision Lab · 师从王兴刚教授、刘文予教授',
    },
  },
  {
    period: '2021.09 — 2025.06',
    title: { en: 'B.Eng. in Electronic Information Engineering', zh: '电子信息工程 · 本科' },
    org: {
      en: 'Huazhong University of Science and Technology',
      zh: '华中科技大学 电子信息与通信学院',
    },
    note: {
      en: 'Mathematics & Physics Enhanced Class (数理提高班)',
      zh: '数理提高班',
    },
  },
];

export const experience: TimelineItem[] = [];

export interface NewsItem {
  date: string;
  text: Bilingual;
}

export const news: NewsItem[] = [
  {
    date: '2026.08',
    text: {
      en: 'DreamWAM is released on arXiv, with code and models publicly available.',
      zh: 'DreamWAM 论文上线 arXiv，代码与模型权重已开源。',
    },
  },
  {
    date: '2026.06',
    text: {
      en: 'MotionVLA is released on arXiv.',
      zh: 'MotionVLA 论文上线 arXiv。',
    },
  },
  {
    date: '2025.09',
    text: {
      en: 'Started M.S. at HUST Vision Lab.',
      zh: '进入华中科技大学 HUST Vision Lab 攻读硕士。',
    },
  },
];

export interface ResearchProject {
  name: string;
  start: string; // 'YYYY-MM'
  end: string; // 'YYYY-MM'
  period: string;
  note: Bilingual;
  link?: string;
}

export const researchTimeline: ResearchProject[] = [
  { name: 'MobileI2V', start: '2024-09', end: '2025-07', period: '2024.09 — 2025.07', note: { en: 'Undergraduate research', zh: '本科科研' } },
  { name: 'MotionVLA', start: '2025-08', end: '2026-01', period: '2025.08 — 2026.01', note: { en: 'First-author paper', zh: '第一作者' }, link: 'https://hustvl.github.io/MotionVLA/' },
  { name: 'DreamWAM', start: '2026-03', end: '2026-08', period: '2026.03 — 2026.08', note: { en: 'First-author paper', zh: '第一作者' }, link: 'https://hustvl.github.io/DreamWAM/' },
];

export interface NoteCategory {
  id: 'notes' | 'radar' | 'life';
  label: Bilingual;
  icon: string;
  blurb: Bilingual;
}

export const noteCategories: NoteCategory[] = [
  {
    id: 'notes',
    label: { en: 'Notes', zh: '学习笔记' },
    icon: '📚',
    blurb: {
      en: 'Reading notes & technical study logs.',
      zh: '读书笔记与技术学习记录。',
    },
  },
  {
    id: 'radar',
    label: { en: 'Radar', zh: '前沿调研' },
    icon: '🔭',
    blurb: {
      en: 'Field radar — trends & paper surveys in Embodied AI & generation.',
      zh: '行业动态与具身智能、生成领域的前沿调研。',
    },
  },
  {
    id: 'life',
    label: { en: 'Life', zh: '生活随笔' },
    icon: '🌿',
    blurb: {
      en: 'Personal thoughts & life logs.',
      zh: '个人生活感想与随手记录。',
    },
  },
];

export const nav: { href: string; label: Bilingual }[] = [
  { href: '/', label: { en: 'Home', zh: '首页' } },
  { href: '/publications', label: { en: 'Publications', zh: '论文' } },
  { href: '/about', label: { en: 'About', zh: '关于' } },
  { href: '/notes', label: { en: 'Notes', zh: '随笔' } },
  { href: '/guestbook', label: { en: 'Guestbook', zh: '留言' } },
];
