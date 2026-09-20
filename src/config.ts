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

export interface ResearchItem {
  term: string;
  intro: Bilingual;
  future?: boolean;
}

export interface ResearchArea {
  title: Bilingual;
  items: ResearchItem[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: { en: 'Embodied AI', zh: '具身智能' },
    items: [
      {
        term: 'VLA',
        intro: {
          en: 'Vision-language-action models that map visual perception and language instructions to robot actions.',
          zh: '视觉-语言-动作模型：将视觉感知与语言指令映射为机器人动作。',
        },
      },
      {
        term: 'WAM',
        intro: {
          en: 'World action models that learn action-relevant world dynamics for robot manipulation.',
          zh: '世界动作模型：学习与动作相关的世界动态，用于机器人操作。',
        },
      },
      {
        term: 'Embodied RSI',
        intro: {
          en: 'Recursive self-improvement for embodied agents — robots that iteratively improve their own skills through self-generated data.',
          zh: '具身递归自我提升：让机器人通过自身数据循环迭代提升技能与能力。',
        },
        future: true,
      },
    ],
  },
  {
    title: { en: 'Image / Video Generation', zh: '图像 / 视频生成' },
    items: [
      {
        term: 'Efficient On-device I2V / T2I / T2V',
        intro: {
          en: 'Efficient on-device deployment of image/video generation models, covering DC-AE, time-step distillation, and other efficiency strategies.',
          zh: '高效的端侧部署图像/视频生成模型（I2V/T2I/T2V），技术路线覆盖 DC-AE、时间步数蒸馏等高效策略。',
        },
      },
    ],
  },
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
    date: '2026.09',
    text: {
      en: 'MotionVLA is accepted to CoRL 2026.',
      zh: 'MotionVLA 被 CoRL 2026 接收。',
    },
  },
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
  {
    date: '2025.08',
    text: {
      en: 'Joined D-Robotics (a Horizon Robotics subsidiary) as an algorithm development intern.',
      zh: '加入地平线旗下地瓜机器人（D-Robotics），从事算法开发实习生工作。',
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
  { name: 'MobileI2V', start: '2024-09', end: '2025-07', period: '2024.09 — 2025.07', note: { en: 'Undergraduate at HUST', zh: '本科 · 华中科技大学' }, link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mHuyk9MAAAAJ&citation_for_view=mHuyk9MAAAAJ:u5HHmVD_uO8C' },
  { name: 'MotionVLA', start: '2025-08', end: '2026-01', period: '2025.08 — 2026.01', note: { en: 'First-author · D-Robotics intern', zh: '第一作者 · D-Robotics 实习' }, link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mHuyk9MAAAAJ&citation_for_view=mHuyk9MAAAAJ:u-x6o8ySG0sC' },
  { name: 'DreamWAM', start: '2026-03', end: '2026-08', period: '2026.03 — 2026.08', note: { en: 'First-author · D-Robotics intern', zh: '第一作者 · D-Robotics 实习' }, link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mHuyk9MAAAAJ&citation_for_view=mHuyk9MAAAAJ:d1gkVwhDpl0C' },
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
