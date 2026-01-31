export type Language = 'en' | 'zh';

export const translations = {
  en: {
    // Header
    title: 'Malaysia e-Invoice',
    subtitle: 'Compliance Checker',
    badge: 'Updated 2026',
    lhdnRules: 'Based on LHDN 2026 Rules',
    versionInfo: 'Updated: January 2026',
    guidelineVersion: 'Per LHDN e-Invoice Guidelines v2.1',

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
    q2Opt2: 'Enterprise',
    q2Opt2Desc: 'Trading / Services / Others',
    q2Opt3: 'Sdn Bhd / Partnership',
    q2Opt3Desc: 'Registered company',
    q2Opt4: 'Freelancer',
    q2Opt4Desc: 'Self-employed individual',

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
    statusLabel: 'Your Status',

    // Status Levels
    lowRisk: 'Not Required (For Now)',
    lowRiskDesc: 'Good news! Based on your answers, you may qualify for exemptions or deferred requirements under the 2026 LHDN relief measures. Keep monitoring for updates.',

    mediumRisk: 'Prepare Now',
    mediumRiskDesc: 'Your business should start preparing for e-invoicing. While you may have some flexibility, it\'s wise to evaluate solutions and plan your transition.',

    highRisk: 'Action Required',
    highRiskDesc: 'Your business needs to comply with e-invoicing requirements. Start your implementation now to ensure smooth operations and avoid last-minute rush.',

    // Recommendations
    recommendationsTitle: 'Recommended Next Steps',
    rec1Low: 'Keep monitoring LHDN announcements for any policy changes',
    rec2Low: 'Organize your business records (income, expenses, receipts)',
    rec3Low: 'Re-check your status if annual turnover increases',

    rec1Med: 'Prepare basic business info (SSM registration, address, contact)',
    rec2Med: 'List all transaction types you issue (invoice / receipt / quotation)',
    rec3Med: 'Discuss your implementation timeline with your accountant',
    rec4Med: 'Research e-Invoice platforms that suit your business needs',

    rec1High: 'Register on MyInvois Portal (portal.hasil.gov.my) now',
    rec2High: 'Prepare business info: SSM number, address, contact details',
    rec3High: 'List all transaction types: invoices, receipts, credit/debit notes',
    rec4High: 'Choose your method: MyInvois portal / POS system / accounting software',
    rec5High: 'Set your implementation date with your accountant',

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
    versionInfo: '更新于：2026年1月',
    guidelineVersion: '依据 LHDN 电子发票指南 v2.1',

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
    q2Opt2: 'Enterprise 企业',
    q2Opt2Desc: '贸易 / 服务 / 其他',
    q2Opt3: 'Sdn Bhd / 合伙企业',
    q2Opt3Desc: '注册公司',
    q2Opt4: '自由职业者',
    q2Opt4Desc: '自雇人士',

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
    statusLabel: '您的状态',

    // Status Levels
    lowRisk: '暂不需要',
    lowRiskDesc: '好消息！根据您的回答，您可能符合2026年LHDN的豁免或延期要求。请持续关注最新公告。',

    mediumRisk: '建议准备',
    mediumRiskDesc: '您的企业应该开始准备电子发票。虽然可能有一定灵活性，但建议尽早评估方案并规划过渡。',

    highRisk: '需要行动',
    highRiskDesc: '您的企业需要遵守电子发票要求。请立即开始实施，确保业务顺利运营，避免临时赶工。',

    // Recommendations
    recommendationsTitle: '建议下一步',
    rec1Low: '持续关注 LHDN 公告，留意政策变化',
    rec2Low: '整理业务记录（收入、支出、收据）',
    rec3Low: '若年营业额增加，请重新检查您的状态',

    rec1Med: '准备基本商业资料（SSM 注册号、地址、联系方式）',
    rec2Med: '列出所有交易类型（发票 / 收据 / 报价单）',
    rec3Med: '与会计师讨论实施时间表',
    rec4Med: '研究适合您业务的电子发票平台',

    rec1High: '立即在 MyInvois 门户注册 (portal.hasil.gov.my)',
    rec2High: '准备商业资料：SSM 号码、地址、联系方式',
    rec3High: '列出所有交易类型：发票、收据、贷记/借记单',
    rec4High: '选择方式：MyInvois 门户 / POS 系统 / 会计软件',
    rec5High: '与会计师确定实施日期',

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
