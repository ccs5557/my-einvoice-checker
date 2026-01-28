export type Language = 'en' | 'zh';

export const translations = {
  en: {
    // Header
    title: 'Malaysia e-Invoice',
    subtitle: 'Compliance Checker',
    badge: 'Updated 2026',
    lhdnRules: 'Based on LHDN 2026 Rules',

    // Start Screen
    welcomeTitle: 'Check Your e-Invoicing Status',
    welcomeDesc: 'Answer 3 quick questions to find out if your business needs to comply with Malaysia\'s e-Invoicing requirements.',
    startButton: 'Start Checking',
    freeNote: 'Free • Takes 30 seconds • No registration',

    // Questions
    questionOf: 'Question {current} of {total}',

    // Q1: Annual Turnover
    q1Title: 'What is your annual business turnover?',
    q1Desc: 'Select the range that best matches your business revenue.',
    q1Opt1: 'Below RM 150,000',
    q1Opt1Desc: 'Small business / Part-time',
    q1Opt2: 'RM 150,000 - RM 1,000,000',
    q1Opt2Desc: 'Growing SME',
    q1Opt3: 'Above RM 1,000,000',
    q1Opt3Desc: 'Established business',

    // Q2: Entity Type
    q2Title: 'What is your business entity type?',
    q2Desc: 'Select your registered business structure.',
    q2Opt1: 'Sole Proprietorship',
    q2Opt1Desc: 'Individual business owner',
    q2Opt2: 'Sdn Bhd / Partnership',
    q2Opt2Desc: 'Registered company',
    q2Opt3: 'Freelancer',
    q2Opt3Desc: 'Self-employed individual',

    // Q3: Invoicing Method
    q3Title: 'How do you currently handle invoicing?',
    q3Desc: 'Select your current invoicing practice.',
    q3Opt1: 'Manual (Paper/Excel)',
    q3Opt1Desc: 'Handwritten or spreadsheet',
    q3Opt2: 'Basic Accounting Software',
    q3Opt2Desc: 'SQL, AutoCount, etc.',
    q3Opt3: 'No Formal Invoicing',
    q3Opt3Desc: 'Receipts or verbal only',

    // Navigation
    back: 'Back',
    next: 'Next',
    seeResults: 'See My Results',

    // Results
    resultsTitle: 'Your Compliance Assessment',
    riskLevel: 'Risk Level',

    // Risk Levels
    lowRisk: 'Low Risk',
    lowRiskDesc: 'Good news! Based on your answers, you may qualify for exemptions or deferred requirements under the 2026 LHDN relief measures for businesses with turnover below RM 1M.',

    mediumRisk: 'Medium Risk',
    mediumRiskDesc: 'Your business falls into a transitional category. While you may have some flexibility, it\'s recommended to prepare for e-invoicing compliance soon.',

    highRisk: 'High Risk',
    highRiskDesc: 'Your business likely needs to comply with e-invoicing requirements. Immediate action is recommended to avoid penalties and ensure smooth operations.',

    // Recommendations
    recommendationsTitle: 'Recommended Actions',
    rec1Low: 'Monitor LHDN announcements for updates',
    rec2Low: 'Keep business records organized',
    rec3Low: 'Consider voluntary early adoption',

    rec1Med: 'Start evaluating e-invoicing solutions',
    rec2Med: 'Consult with your accountant',
    rec3Med: 'Plan for system integration',

    rec1High: 'Register with MyInvois portal immediately',
    rec2High: 'Implement compliant invoicing software',
    rec3High: 'Train staff on e-invoicing procedures',

    // CTA
    ctaTitle: 'Need a Custom Lead Magnet Like This?',
    ctaDesc: 'This interactive tool was built to demonstrate how engaging calculators and quizzes can generate qualified leads for your business.',
    ctaButton: 'WhatsApp Me for a Demo',
    ctaCredit: 'Built by',

    // Footer
    disclaimer: 'Disclaimer: This tool provides general guidance only. Please consult LHDN or a tax professional for specific advice.',
    restartQuiz: 'Take Quiz Again',
  },
  zh: {
    // Header
    title: '马来西亚电子发票',
    subtitle: '合规检查器',
    badge: '2026年更新',
    lhdnRules: '依据 LHDN 2026 法规',

    // Start Screen
    welcomeTitle: '检查您的电子发票状态',
    welcomeDesc: '回答3个简单问题，了解您的企业是否需要遵守马来西亚电子发票要求。',
    startButton: '开始检查',
    freeNote: '免费 • 仅需30秒 • 无需注册',

    // Questions
    questionOf: '问题 {current} / {total}',

    // Q1: Annual Turnover
    q1Title: '您的年营业额是多少？',
    q1Desc: '选择最符合您业务收入的范围。',
    q1Opt1: '低于 RM 150,000',
    q1Opt1Desc: '小型企业 / 兼职',
    q1Opt2: 'RM 150,000 - RM 1,000,000',
    q1Opt2Desc: '成长中的中小企业',
    q1Opt3: '高于 RM 1,000,000',
    q1Opt3Desc: '成熟企业',

    // Q2: Entity Type
    q2Title: '您的企业类型是什么？',
    q2Desc: '选择您注册的企业结构。',
    q2Opt1: '独资经营',
    q2Opt1Desc: '个人企业主',
    q2Opt2: 'Sdn Bhd / 合伙企业',
    q2Opt2Desc: '注册公司',
    q2Opt3: '自由职业者',
    q2Opt3Desc: '自雇人士',

    // Q3: Invoicing Method
    q3Title: '您目前如何处理发票？',
    q3Desc: '选择您当前的开票方式。',
    q3Opt1: '手动（纸张/Excel）',
    q3Opt1Desc: '手写或电子表格',
    q3Opt2: '基础会计软件',
    q3Opt2Desc: 'SQL、AutoCount 等',
    q3Opt3: '没有正式发票',
    q3Opt3Desc: '仅收据或口头',

    // Navigation
    back: '返回',
    next: '下一步',
    seeResults: '查看结果',

    // Results
    resultsTitle: '您的合规评估',
    riskLevel: '风险等级',

    // Risk Levels
    lowRisk: '低风险',
    lowRiskDesc: '好消息！根据您的回答，您可能符合2026年LHDN对营业额低于RM 100万企业的豁免或延期要求。',

    mediumRisk: '中等风险',
    mediumRiskDesc: '您的企业处于过渡阶段。虽然可能有一定灵活性，但建议尽快准备电子发票合规。',

    highRisk: '高风险',
    highRiskDesc: '您的企业可能需要遵守电子发票要求。建议立即采取行动以避免罚款并确保业务顺利运营。',

    // Recommendations
    recommendationsTitle: '建议行动',
    rec1Low: '关注LHDN公告更新',
    rec2Low: '保持业务记录整齐',
    rec3Low: '考虑自愿提前采用',

    rec1Med: '开始评估电子发票解决方案',
    rec2Med: '咨询您的会计师',
    rec3Med: '规划系统集成',

    rec1High: '立即在 MyInvois 门户注册',
    rec2High: '实施合规的发票软件',
    rec3High: '培训员工电子发票流程',

    // CTA
    ctaTitle: '需要这样的定制营销工具吗？',
    ctaDesc: '这个互动工具展示了如何通过吸引人的计算器和问卷为您的业务获取优质潜在客户。',
    ctaButton: 'WhatsApp 联系我',
    ctaCredit: '开发者',

    // Footer
    disclaimer: '免责声明：此工具仅提供一般指导。具体建议请咨询LHDN或税务专业人士。',
    restartQuiz: '重新测试',
  }
} as const;

export type TranslationKey = keyof typeof translations.en;
