import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "巧巧的个人网站",
    description: "经济学与生物学的交叉视角，专注产品运营与数据驱动的创新者",
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
    { name: "邮箱", href: "mailto:hello@example.com", icon: "mdi:email" },
    { name: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: "mdi:linkedin" },
    { name: "微信", href: "#", icon: "mdi:wechat" },
  ],

  friendCard: {
    name: "巧巧的个人网站",
    description: "经济学与生物学的交叉视角，专注产品运营与数据驱动的创新者",
    link: "https://your-domain.com",
    avatar: "https://your-domain.com/logo.svg",
  },

  // --- 首页问候语 ---
  hero: {
    greeting: "👋 你好，我是巧巧",
    // 支持 HTML。使用 <span class="font-medium text-foreground underline decoration-primary/30"> 来高亮关键词
    description:
      '<span class="font-medium text-foreground">南京大学</span> · <span class="font-medium text-foreground">经济管理</span> × <span class="font-medium text-foreground">生物科学</span> | <span class="font-medium text-foreground">产品运营</span> & <span class="font-medium text-foreground">数据驱动</span>',
    subdescription: '在理性思维和感性表达间，做高效准确的产品决策，致力于创造有价值的产品体验',
    cards: [
      { icon: "mdi:chart-line", label: "最新动态", value: "Deadliner 累计用户 3000+，Lifi AI 功能已上架iOS" },
      { icon: "mdi:trophy", label: "高光成就", value: "挑战杯全国三等奖 & 投资实习经历" },
      { icon: "mdi:account-clock", label: "当前状态", value: "大三在读，寻找产品运营或商业分析实习" },
    ],
  },

  // --- 页脚 ---
  footer: {
    copyright: "© 2026 巧巧",
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
      name: "开发",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "终端", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ]
    },
    {
      name: "设计",
      items: [
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
        { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
      ]
    },
    {
      name: "生产力",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
        { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
        { name: "Arc 浏览器", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- UI 标签 ---
  // 自定义这些值以更改页面上显示的文本
  labels: {
    postsTitle: "文章",
    postsDescription: "分享思考、学习心得和行业见解",
    projectsTitle: "项目",
    projectsDescription: "用技术解决实际问题的实践成果",
    friendsTitle: "合作",
    friendsDescription: "志同道合的伙伴与资源网络",
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
