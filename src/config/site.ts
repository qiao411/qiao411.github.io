import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "陈巧的个人网站",
    description: "我喜欢从具体的小麻烦出发，看看 AI 能不能让事情变得更简单。",
    author: "巧巧",
    logo: "/头像.jpg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "zh-CN",
  },

  // --- 导航菜单 ---
  // subtitle: 显示在名称下方的装饰性标签（大写，小文本）
  navigation: [
    { name: "首页", subtitle: "HOME", href: "/" },
    { name: "项目", subtitle: "PROJECTS", href: "/projects" },
    { name: "经历", subtitle: "EXPERIENCE", href: "/experience" },
    { name: "合作", subtitle: "PARTNERS", href: "/friends" },
    { name: "关于", subtitle: "ABOUT", href: "/about" },
  ],

  // --- 社交链接 ---
  social: [
    { name: "GitHub", href: "https://github.com/qiao411", icon: "mdi:github" },
    { name: "邮箱", href: "mailto:3545659167@qq.com", icon: "mdi:email" },
  ],

  friendCard: {
    name: "陈巧的个人网站",
    description: "专注 AI 产品、Agent 与大模型应用落地",
    link: "https://qiao411.github.io",
    avatar: "/头像.jpg",
  },

  // --- 首页问候语 ---
  hero: {
    greeting: "让 AI 不只聪明，也真正好用。",
    // 支持 HTML。使用 <span class="font-medium text-foreground underline decoration-primary/30"> 来高亮关键词
    description:
      '我是<span class="font-medium text-foreground">陈巧</span>，南京大学生物科学本科、商科辅修。现在在做 <span class="font-medium text-foreground">AI 产品与 Agent</span>，关心模型如何进入真实工作流，而不只是在对话框里给出一个漂亮答案。',
    subdescription: "从教育实验室到企业案例检索，再到多端任务管理：我喜欢把一个模糊需求拆成可体验、可评估、能上线的产品。",
    cards: [
      { icon: "mdi:flask-outline", metric: "73", label: "个物理实验", value: "从交互原型推进到真实上线" },
      { icon: "mdi:database-search-outline", metric: "118", label: "个行业案例", value: "由案例管理 Agent 支持录入与检索" },
      { icon: "mdi:calendar-check-outline", metric: "5,000+", label: "位用户", value: "持续打磨 AI 原生任务管理体验" },
    ],
  },

  // --- 页脚 ---
  footer: {
    copyright: "© 2026 陈巧",
    builtWith: "使用 Astro 构建",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- 工具页面数据 ---
  // 每个项目可以使用 `icon`（Iconify 名称）或 `logo`（公共路径或 { light, dark } 路径）
  tools: [
    {
      name: "AI 产品",
      items: [
        { name: "Claude Code", icon: "mdi:robot-outline" },
        { name: "Cursor", link: "https://www.cursor.com", icon: "mdi:cursor-default-click" },
        { name: "Trae", link: "https://www.trae.ai", icon: "mdi:code-braces" },
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
      ]
    },
    {
      name: "AI 应用",
      items: [
        { name: "Prompt 设计与评测", icon: "mdi:message-text-outline" },
        { name: "RAG", icon: "mdi:database-search-outline" },
        { name: "AI Agent / Skills", icon: "mdi:robot" },
        { name: "多模态模型", icon: "mdi:layers-triple-outline" },
      ]
    },
    {
      name: "数据与开发",
      items: [
        { name: "Python", icon: "mdi:language-python" },
        { name: "SQL", icon: "mdi:database-outline" },
        { name: "React", icon: "mdi:react" },
        { name: "Astro", link: "https://astro.build", icon: "mdi:rocket-launch-outline" },
      ]
    },
  ],

  // --- UI 标签 ---
  // 自定义这些值以更改页面上显示的文本
  labels: {
    postsTitle: "产品手记",
    postsDescription: "AI 产品、Agent 工作流与项目现场的观察和复盘",
    projectsTitle: "项目",
    projectsDescription: "围绕 AI Agent 与多模态应用的产品实践",
    friendsTitle: "合作",
    friendsDescription: "一起探索 AI 产品与效率工具",
    toolsTitle: "工具栈",
    toolsDescription: "提升效率的常用工具和技术",
    aboutTitle: "关于",
    aboutDescription: "了解我的背景、理念和目标",
    experienceTitle: "经历",
    experienceDescription: "个人成长与专业发展的历程",
    tagsTitle: "标签",
    tagsDescription: "按主题浏览内容",
    categoriesTitle: "分类",
    categoriesDescription: "按类别浏览内容",
    backToPosts: "返回文章列表",
    goHome: "返回首页",
    notFoundTitle: "页面未找到",
    notFoundDescription: "您正在寻找的页面可能已被移除或链接已损坏。",
    endOfPost: "文章结束",
    tableOfContents: "目录",
    searchPlaceholder: "搜索文章、标签或项目...",
    searchNavigate: "导航",
    commentSuccess: "评论已提交",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
