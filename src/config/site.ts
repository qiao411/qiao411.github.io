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
    description: "南京大学生物科学本科生，专注 AI 产品、Agent 与大模型应用落地",
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
    greeting: "👋 你好，我是陈巧",
    // 支持 HTML。使用 <span class="font-medium text-foreground underline decoration-primary/30"> 来高亮关键词
    description:
      '<span class="font-medium text-foreground">南京大学</span> · <span class="font-medium text-foreground">生物科学</span> × <span class="font-medium text-foreground">商科</span> | <span class="font-medium text-foreground">AI 产品</span> · <span class="font-medium text-foreground">Agent</span> · <span class="font-medium text-foreground">大模型应用</span>',
    subdescription: "从用户问题出发，拆解 AI 场景并推动产品从原型、评估到工程落地。",
    cards: [
      { icon: "mdi:robot-outline", label: "AI 产品实践", value: "教育智能体回答准确率从 70% 提升至 94%" },
      { icon: "mdi:cellphone-link", label: "个人项目", value: "Deadliner 多端 AI 任务管理产品，累计用户 5000+" },
      { icon: "mdi:briefcase-outline", label: "当前工作", value: "字节跳动飞书 · AI 企业效能顾问" },
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
    postsTitle: "文章",
    postsDescription: "分享思考、学习心得和行业见解",
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
