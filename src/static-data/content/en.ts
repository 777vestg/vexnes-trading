import { domain, email, fullProjectName, phoneNumber, shortProjectName } from "./variables";

const header = {
  menuList: [
    { name: "Account Types", link: "/account-types", subItems: [] },
    {
      name: "Trade",
      link: `https://trade.${domain}/registration-en`,
      subItems: [],
      linkType: "_blank",
    },
    { name: "Education", link: "/education", subItems: [] },
    { name: "Analytics", link: "/analytics", subItems: [] },
    {
      name: "About us",
      link: "/company",
      subItems: [
        { name: "Contacts", link: "/contacts" },
        { name: "Documentation", link: "/legal-information" },
      ],
    },
  ],
  location: { name: "en", flag: "/images/header/flags/united-kingdom.png" },
  loginButton: {
    name: "Login",
    link: `https://trade.${domain}/auth-en`,
  },
  registrationButton: {
    name: "Registration",
    link: `https://trade.${domain}/registration-en`,
  },
};

const mainPage = {
  pageTitle: `${fullProjectName}`,
  firstBlock: {
    title: ' BIGGER MARKET <span class="goldText">BIG</span> OPPORTUNITIES ',
    bannerCard: {
      title: "Better conditions",
      description:
        `${shortProjectName} provides access to the world's largest financial markets, through implementation of innovative technological solutions`,
      buttonText: "More",
      buttonLink: `https://trade.${domain}/registration-en`,
    },
    bannerNote: `Invest in the most high-yield market at ${fullProjectName}`,
  },
  assetsBlock: {
    assetsNumber: "17000",
    assetsText: "ASSETS",
    assetsDescription:
      "CFD trading allows you to invest in both rising and falling markets",
    assetsSlider: [
      {
        title: "Forex",
        smallImage: "/images/main-page/assets-block/01.png",
        mainImage: "/images/main-page/assets-block/1.jpg",
        subtitle: "Forex Trading",
        description:
          "As the world's most traded financial market, Forex opens up many opportunities for those who are able to work with its volatility. Open a Forex trading account and use our smart platform to profit from currency price movements.",
      },
      {
        title: "Indexes",
        smallImage: "/images/main-page/assets-block/02.png",
        mainImage: "/images/main-page/assets-block/2.jpg",
        subtitle: "CFD trading on indexes",
        description:
          "Get the opportunity to expand your trading portfolio with more than 80 indices by opening any CFD trading account.",
      },
      {
        title: "Cryptocurrencies",
        smallImage: "/images/main-page/assets-block/03.png",
        mainImage: "/images/main-page/assets-block/3.jpg",
        subtitle: "Cryptocurrency trading",
        description:
          "Discover huge opportunities thanks to the highest volatility of cryptocurrency assets. We will provide you with the best liquidity and fast transactions.",
      },
      {
        title: "Stocks",
        smallImage: "/images/main-page/assets-block/04.png",
        mainImage: "/images/main-page/assets-block/4.jpg",
        subtitle: "CFD trading on stocks",
        description:
          "Leveraged CFDs allow you to gain full access to stocks with only a small deposit. With proper money management, you can achieve higher returns.",
      },
      {
        title: "Commodity trading",
        smallImage: "/images/main-page/assets-block/05.png",
        mainImage: "/images/main-page/assets-block/5.jpg",
        subtitle: "Торговля сырьевыми товарами",
        description:
          "Strike while the iron, copper, lead, zinc, nickel or cobalt is hot. Open an account with us to start trading commodities, including metals, energy and agricultural commodities.",
      },
    ],
  },
  studyBlock: {
    title: "Learn, Invest, Profit",
    subTitle: "Are you new to trading?",
    description:
      "Take our courses from beginner to advanced trader, study analytics and increase your professionalism. What's more - our managers will help beginners at the beginning to develop an effective investment plan and in general are always ready to help with advice.",
    buttonText: "Open an account",
    buttonLink: `https://trade.${domain}/registration-en`,
  },
  differenceBlock: {
    title:
      `What makes <span class="goldText">${fullProjectName}</span> different?`,
    differenceList: [
      {
        title: "Commitment to your success ",
        description: "We provide our clients with daily analytics ",
        image: "/images/main-page/difference-block/01.svg",
      },
      {
        title: "Unlimited possibilities",
        description:
          "Access to the most popular markets and the largest number of assets ",
        image: "/images/main-page/difference-block/02.svg",
      },
      {
        title: "Excellent trading conditions",
        description: "Hedging, scalping, low spreads and instant execution ",
        image: "/images/main-page/difference-block/03.svg",
      },
      {
        title: "Only the best for our customers ",
        description: "Trading and analytical tools, auto-trading options ",
        image: "/images/main-page/difference-block/04.svg",
      },
      {
        title: "Unified trading platform",
        description:
          "Sophisticated platform will make your trading as comfortable as possible ",
        image: "/images/main-page/difference-block/05.svg",
      },
      {
        title: "We love communicating with our customers",
        description:
          "The support department consists of highly qualified specialists ",
        image: "/images/main-page/difference-block/06.svg",
      },
    ],
  },
  platformBlock: {
    title: 'A platform designed <span class="goldText">for traders</span>',
    description:
      "Use the most technologically advanced platform to bring your trading to perfection.",
    mainImage: "/images/main-page/platform-block/mockup-platform-home-bg.png",
    mainImageAlt: "phone",
    platformList: [
      "Fast and easy to use web platform",
      "Ability to trade from any mobile device",
      "Specialized quotes and charts",
      "A complete set of tools for money management",
    ],
    buttonText: "Open an account",
  },
  trustBlock: {
    title: "Confidence and trust in us in numbers",
    description:
      `${fullProjectName} has been providing its services since 2013 and since then our high reliability is reflected in outstanding performance every year`,
    trustList: [
      { title: "23", symbol: "%", description: "core capital ratio" },
      {
        title: "410000",
        symbol: "",
        description: "customers all over the world",
      },
      { title: "3", symbol: " mln.", description: "products" },
      { title: "39", symbol: "$ bln.", description: "products" },
    ],
    clientAllowTitle: "Investor is allowed:",
    clientAllowList: [
      "Keep records and control receipts from the Robotic System.",
      "Request a detailed report, the end date of the automatic cycle and the number of residual trades from the accompanying expert.",
      "Apply to move to a more profitable Robotic System.",
      "Monitor the operation of the system online.",
      "Receive a monthly result (profit) of the work of the Robotic System.",
      "Within 6 months, withdraw the monthly profit received from Robotic Systems. After 6 months from the date of activation, the client has the right to reset the account.",
    ],

    clientNotAllowTitle: "Investor prohibited:",
    clientNotAllowTList: [
      "It is strictly forbidden to interfere in the process of PC trading, open, close transactions at the time of active work. Any inconsistent actions can lead to a technical failure of the program.",
      "It is forbidden to create requests for funds transfer in accordance with the margin level and risk management rules.",
      "Reset, close the account before 6 months of use. Create requests for account closures ahead of schedule",
      "Requests for activation or deactivation of the PC are considered strictly according to the approved methodology and are discussed in advance with a personal expert.",
      "Participation in additional corporate transactions is possible only after the temporary deactivation of the trading robot.",
      "In the event of a technical failure of the program, your account may be temporarily blocked for security purposes. Get detailed instructions from a personal expert.",
      "Closing an account without fulfilling the conditions of arbitrage trading within the limits of solvency A client who violates one of the points of the methodology assumes all the risks and consequences of trading results.",
    ],

    buttonText: "Open an account",
    buttonLink: `https://trade.${domain}/registration-en`,
  },
};

const accountTypesPage = {
  pageTitle: "Account Types",
  title: "Account Types",
  table: {
    account: {
      items: [
        { title: "Account Type", color: "gold", subtitle: "Первый депозит" },
        { title: "Standart", subtitle: '<span class="super-bold">$250</span>' },
        {
          title: "Gold",
          subtitle: '<span class="super-bold">$2 500</span>',
          color: "gold",
        },
        {
          title: "Platinum",
          subtitle: '<span class="super-bold">$25 000</span>',
          color: "platinum",
        },
        {
          title: "VIP",
          subtitle: '<span class="super-bold">$50 000</span>',
          color: "vip",
        },
      ],
    },
    bonusSystemTitle: [{ title: "Bonus system", subtitle: "" }],
    bonusSystem: [
      { title: "", subtitle: "First Deposit Bonuses" },
      { title: "", subtitle: "―" },
      { title: "", subtitle: "―" },
      { title: "", subtitle: "50%" },
      { title: "", subtitle: "100%" },
    ],
    supportTitle: [{ title: "Help and support", subtitle: "" }],
    support: [
      { title: "", subtitle: "Individual consultations" },
      { title: "", subtitle: "―" },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
      { title: "", subtitle: "/images/main-page/platform-block/check.png" },
      { title: "", subtitle: "/images/main-page/platform-block/check.png" },
    ],
    dealsTitle: [
      { title: "Transactions assistance from a specialist", subtitle: "" },
    ],
    deals: [
      {
        title: "",
        subtitle: "Support",
      },
      { title: "―", subtitle: "24/5" },
      {
        title: "/images/main-page/platform-block/check.png",
        subtitle: "24/5",
      },
      {
        title: "/images/main-page/platform-block/check.png",
        subtitle: "24/5",
      },
      {
        title: "/images/main-page/platform-block/check.png",
        subtitle: "24/5",
      },
    ],
    helpAnalystTitle: [{ title: "Help from an analyst", subtitle: "" }],
    helpAnalyst: [
      { title: "", subtitle: "Personal assistance" },
      { title: "―", subtitle: "" },
      { title: "―", subtitle: "" },
      {
        title: "/images/main-page/platform-block/check.png",
        subtitle: "",
      },
      {
        title: "/images/main-page/platform-block/check.png",
        subtitle: "",
      },
    ],
    creditShoulderTitle: [{ title: "Условия", subtitle: "" }],
    creditShoulder: [
      { title: "", subtitle: "Leverage" },
      { title: "", subtitle: "До 1:100" },
      { title: "", subtitle: "До 1:200" },
      {
        title: "",
        subtitle: "До 1:300",
      },
      {
        title: "",
        subtitle: "До 1:400",
      },
    ],
    noRiskDeals: [
      { title: "", subtitle: "Risk-free transactions" },
      { title: "", subtitle: "―" },
      { title: "", subtitle: "5" },
      {
        title: "",
        subtitle: "10",
      },
      {
        title: "",
        subtitle: "15",
      },
    ],
    studyTitle: [{ title: "Analytics and education", subtitle: "" }],
    study: [
      { title: "", subtitle: "Text lessons" },
      { title: "", subtitle: "/images/main-page/platform-block/check.png" },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
    ],
    studyVideo: [
      { title: "", subtitle: "Video lessons" },
      { title: "", subtitle: "/images/main-page/platform-block/check.png" },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
      {
        title: "",
        subtitle: "/images/main-page/platform-block/check.png",
      },
    ],
  },
  buttonsText: "Open an account",
  buttonsTarget: "_blank",
  buttonLink: `https://trade.${domain}/registration-en`,
};

const educationPage = {
  pageTitle: "Education",
  title: "Education",
  educationVideoList: [
    {
      title: "For beginners",
      description: "",
      buttonText: "More",
      buttonsTarget: "_blank",
      buttonLink: `https://trade.${domain}/registration-en`,
    },
    {
      title: "For advanced",
      description: "",
      buttonText: "More",
      buttonsTarget: "_blank",
      buttonLink: `https://trade.${domain}/registration-en`,
    },
    {
      title: "Cryptocurrencies",
      buttonText: "More",
      buttonsTarget: "_blank",
      buttonLink: `https://trade.${domain}/registration-en`,
    },
  ],
};

const analyticsPage = {
  pageTitle: "Analytics",
  title: "Analytics",
  analyticsFirstList: [
    {
      title: "News",
      description:
        "Regular news publications on economic and financial situation in the world",
      buttonText: "More",
      buttonLink: "/in-work",
      buttonsTarget: "_blank",
    },
    {
      title: "Fundamental analysis",
      description:
        "Regular analytical publications on financial and manufacturing operations",
      buttonText: "More",
      buttonLink: "/in-work",
      buttonsTarget: "_blank",
    },
    {
      title: "Technical analysis",
      description:
        "Regular analytical publications about past patterns on the chart",
      buttonText: "More",
      buttonLink: "/in-work",
      buttonsTarget: "_blank",
    },
    {
      title: "Determining trend potential",
      description:
        "Regular analytical publications on determining the future graphic trend",
      buttonText: "More",
      buttonLink: "/in-work",
      buttonsTarget: "_blank",
    },
  ],

  analyticsSecondList: [
    {
      title: "Calendars",
      buttonText: "More",
      buttonLink: "/in-work",
      innerList: ["Public Holidays Calendar", "Interest rate calendar"],
    },
    {
      title: "Calculators",
      buttonText: "More",
      buttonLink: "/in-work",
      innerList: [
        "Public Holidays Calendar",
        "Pip calculator",
        "Forex calculator",
      ],
    },
    {
      title: "Informers",
      buttonText: "More",
      buttonLink: "/in-work",
      innerList: [
        "Forex Trading Sessions Schedule",
        "Course table",
        "Market Review",
        "Reference levels",
        "Market Sentiment Index",
        "Historical Market Sentiment Index",
        "Daily Movers & Shakers",
      ],
    },
  ],
  analyticsThirdList: [
    {
      title: "Signals",
      description:
        "Special calculations for technical indicators for convenient trading",
      buttonText: "More",
      buttonLink: "/in-work",
    },
    {
      title: "Economic calendar",
      description: "Complete table of all world economic events",
      buttonText: "More",
      buttonLink: "/in-work",
    },
  ],
};

const companyPage = {
  pageTitle: "About company",
  title: "About company",
  firstBlock: {
    title: "About company",
    bannerCard: {
      description:
        `${fullProjectName} was founded in 2013 by a group of leading financial market experts to provide its clients with independent trading opportunities.`,
    },
  },
  assetsBlock: {
    title: "Maximum access to the markets",
    description:
      "During our existence, we have managed to achieve the widest access to the financial markets, opening traders the opportunity to invest in more than 17,000 trading assets. This is our main advantage, which together with our excellent service provides us with an incredible demand.",
    buttonText: "Registration",
    buttonLink: `https://trade.${domain}/registration-en`,
    buttonsTarget: "_blank",
    percentList: [
      { title: "Currency pairs", percent: "85" },
      { title: "Commodities", percent: "54" },
      { title: "Stocks", percent: "76" },
      { title: "Cryptocurrencies", percent: "90" },
      { title: "Indexes", percent: "96" },
    ],
  },
  successWayBlock: {
    title: "On the way to success",
    description:
      "For more than 9 years, we have been gradually occupying a leading position in the provision of online investment and trading services.",
  },
  chooseBlock: {
    title:
      `What makes <span class="goldText">${fullProjectName} different</span>`,
    chooseBlockList: [
      {
        title: "Precise data",
        description: "Quotes are supplied by the world's leading news agencies",
        image: "/images/company-page/choose-block/1.svg",
      },
      {
        title: "Affordable terms",
        description:
          "One of the best trading conditions and investment opportunities on the market",
        image: "/images/company-page/choose-block/2.svg",
      },
      {
        title: "24/5 support",
        description: "Quick and highly professional customer support",
        image: "/images/company-page/choose-block/3.svg",
      },
      {
        title: "Software",
        description:
          "High-end trading platform with a wide range of financial assets",
        image: "/images/company-page/choose-block/4.svg",
      },
      {
        title: "Interface",
        description: "Convenience for both professional traders and beginners",
        image: "/images/company-page/choose-block/5.svg",
      },
      {
        title: "Cryptomarkets",
        description: "Access to cryptocurrency trading on the best terms",
        image: "/images/company-page/choose-block/6.svg",
      },
    ],
  },
  reviewWorkBlock: {
    title: "Experience the speed and quality of our platform",
  },

  trustBlock: {
    title: "Confidence and trust in us in numbers",
    description:
      `${fullProjectName} has been providing its services since 2013 and since then our high reliability is reflected in outstanding performance every year`,
    trustList: [
      { title: "23", symbol: "%", description: "core capital ratio" },
      {
        title: "410000",
        symbol: "",
        description: "customers all over the world",
      },
      { title: "3", symbol: " mln.", description: "products" },
      { title: "39", symbol: "$ bln.", description: "products" },
    ],
    clientAllowTitle: "Investor is allowed:",
    clientAllowList: [
      "Keep records and control receipts from the Robotic System.",
      "Request a detailed report, the end date of the automatic cycle and the number of residual trades from the accompanying expert.",
      "Apply to move to a more profitable Robotic System.",
      "Monitor the operation of the system online.",
      "Receive a monthly result (profit) of the work of the Robotic System.",
      "Within 6 months, withdraw the monthly profit received from Robotic Systems. After 6 months from the date of activation, the client has the right to reset the account.",
    ],

    clientNotAllowTitle: "Investor prohibited:",
    clientNotAllowTList: [
      "It is strictly forbidden to interfere in the process of PC trading, open, close transactions at the time of active work. Any inconsistent actions can lead to a technical failure of the program.",
      "It is forbidden to create requests for funds transfer in accordance with the margin level and risk management rules.",
      "Reset, close the account before 6 months of use. Create requests for account closures ahead of schedule",
      "Requests for activation or deactivation of the PC are considered strictly according to the approved methodology and are discussed in advance with a personal expert.",
      "Participation in additional corporate transactions is possible only after the temporary deactivation of the trading robot.",
      "In the event of a technical failure of the program, your account may be temporarily blocked for security purposes. Get detailed instructions from a personal expert.",
      "Closing an account without fulfilling the conditions of arbitrage trading within the limits of solvency A client who violates one of the points of the methodology assumes all the risks and consequences of trading results.",
    ],

    buttonText: "Open an account",
    buttonLink: `https://trade.${domain}/registration-en`,
    buttonsTarget: "_blank",
  },
};

const contactsPage = {
  title: "Contacts",
  pageTitle: "Contacts",
  subtitle: "Contact us in any method convenient for you",
  contactsList: [
    {
      title: "Ulitsa Okhotnyy Ryad, 2, Moscow, Russia, 109012",
      image:
        '<svg xmlns="http://www.w3.org/2000/svg" width={16} height={22} viewBox="0 0 16 22" fill="none" > <path d="M8 0C3.58878 0 0 3.57423 0 7.96753C0 13.4198 7.15922 21.4239 7.46403 21.762C7.75033 22.0796 8.25019 22.079 8.53597 21.762C8.84078 21.4239 16 13.4198 16 7.96753C15.9999 3.57423 12.4112 0 8 0ZM8 11.9762C5.7806 11.9762 3.97504 10.1779 3.97504 7.96753C3.97504 5.75713 5.78065 3.95889 8 3.95889C10.2194 3.95889 12.0249 5.75717 12.0249 7.96758C12.0249 10.178 10.2194 11.9762 8 11.9762Z" fill="white" /> </svg>',
      alt: "map",
    },
    {
      title: `${email}`,
      image:
        '<svg xmlns="http://www.w3.org/2000/svg" width={19} height={15} viewBox="0 0 19 15" fill="none" > <path d="M8.39747 7.40236C8.88367 7.73312 9.73678 7.73316 10.2231 7.40233C10.2232 7.40229 10.2233 7.40222 10.2233 7.40218L18.5103 1.7648C18.2385 0.962639 17.4913 0.384766 16.614 0.384766H2.00643C1.12906 0.384766 0.381956 0.962639 0.110107 1.7648L8.39721 7.40222C8.39732 7.40229 8.3974 7.40229 8.39747 7.40236Z" fill="white" /> <path d="M10.8283 8.32884C10.8282 8.32892 10.8282 8.32899 10.8281 8.32903C10.4025 8.61852 9.85619 8.76328 9.31006 8.76328C8.76382 8.76328 8.21772 8.61856 7.79211 8.32899C7.79203 8.32895 7.792 8.32892 7.79192 8.32888L0 3.02832V12.5682C0 13.6969 0.899991 14.6153 2.00626 14.6153H16.6139C17.7202 14.6153 18.6201 13.6969 18.6201 12.5682V3.02832L10.8283 8.32884Z" fill="white" /> </svg>',
      alt: "mail",
    },
    {
      title: `${phoneNumber}`,
      image:
        '<svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none" > <path d="M17.9904 13.4867L16.0124 11.5506C15.5593 11.107 14.9561 10.8871 14.3574 10.9473C13.8409 10.9992 13.3861 11.2657 13.1096 11.6783L12.4012 12.7351C11.5815 12.5659 9.45114 12.0018 7.90483 10.4882C6.35835 8.97446 5.78196 6.88881 5.60925 6.08709L6.68904 5.3937C7.11057 5.12299 7.38274 4.67785 7.43584 4.17238C7.49737 3.58645 7.27266 2.99601 6.81945 2.55236L4.84146 0.61632C4.23158 0.0193256 3.34691 -0.165386 2.64007 0.156694C1.30837 0.763335 0.410749 2.00755 0.112464 3.65999C-0.160474 5.1719 0.0656223 6.91867 0.766313 8.71154C1.50501 10.6016 2.73797 12.4253 4.33196 13.9855C5.9259 15.5457 7.78911 16.7526 9.72004 17.4756C11.0474 17.9726 12.3499 18.2256 13.5545 18.2256C14.0121 18.2256 14.4557 18.189 14.8808 18.1155C16.569 17.8235 17.8402 16.9449 18.4599 15.6415C18.7889 14.9496 18.6003 14.0836 17.9904 13.4867Z" fill="white" /> </svg>',
      alt: "phone",
    },
  ],
};

const legalInformation = {
  title: "Documentation",
  pageTitle: "Documentation",
  legalInformationList: [
    {
      title: "Legal Information",
      description: `<p>We value each of our clients, regardless of the type of his account. In all cases, you will receive the upmost professional service. But, the company V.R.T. GROUP LTD (hereinafter – the Company) does not trade with you, for you, instead of you and do not manage your finances, and also does not give direct instructions about the market.</p><p>The company provides you with a complete and exceptional service and, if the level of your Trading Account allows, and you express a desire, the Company can spend time explaining the mechanisms of the Exchange Trading or the basics allowing you to gain skills of reading technical indicators or their possible combinations, and You can get explanations from the Company about the most significant factors that have the greatest impact on financial markets at a given point of time, i.e. the ABC of financial markets.</p><p>Any «Signals», «Strategies», «Tips», «Training», «Training video courses», «Webinars» and other recommendations are informational, you make decisions on your own, in which we are not your advisor or fiduciary.</p><p>Legal aspects</p><p>By opening a Trading Account on our Website, you must agree to the Client Agreement, privacy policy, as well as other policies and conditions posted on the Website, which are in essence an Irrevocable Offer submitted in accordance with the laws of REPUBLIC OF THE MARSHALL ISLANDS.</p><p>You must confirm your Trading Account, i.e. go through the verification procedure.</p><p>If necessary, based on the results of your trading, you can request a report from us on the operations of your trading account to provide tax reports in your country of residence.</p><p>This website is property of V.R.T. GROUP LTD, registration number 110989. Location: Post Office Address P.O. Box 1405 Majuro Marshall Islands.</p><p><b>Company Contacts</b>:</p><p>Tel.: ${phoneNumber}</p><p>Email: ${email}</p>`,
    },
    {
      title: "Disclaimer",
      description:
        "<p>V.R.T. GROUP LTD don’t offer trading in binary options.</p><p>When trading CFD and operating in the Forex market, as well as trading any financial assets, there is a possibility of partial or complete loss of your investment funds. Therefore, it is strongly recommended to refrain from investing and trading funds that you cannot afford to lose in the event of an unfavorable outcome of such trading.</p><p>In CFD and Forex trading, the risks of loss are very real. Please make sure to read our terms and conditions carefully before you start investing in digital options and the Forex market.</p><p>By accepting the terms of the Agreement, you confirm that you are aware of the risks inherent in the activities in the field of CFD and the Forex market, including the partial or total loss of invested funds. The company V.R.T. GROUP LTD(hereinafter – the Company) believes that when starting trading in the Forex market or CFD, you invest only in the amount that you can afford. Before starting operations, we ask you to familiarize yourself with the terms of the Client’s Agreement, the privacy policy, as well as all annexes to them.</p><p>The company warns that this notice cannot, does not disclose and does not explain all possible risks and other important aspects related to trading in CFD and modernizing operations in the Forex market. This document explains the nature of possible risks arising when working with CFD and performing trades in the Forex market in general terms.</p><p>Please be advised that the exchange rates on the Website are similar to those established by the Company for the sale of CFD to customers. At the same time, the Company is not responsible for their discrepancy with the rates on the market in real-time option sales.</p><p>The company reserves the right to close the deal ahead of schedule if it is impossible to update the rates within 30 seconds. In this case, the client is automatically notified of the cancellation of the trade via e-mail, and the funds invested in the trade are returned to the client’s account.</p><p>By accepting the terms of the Agreement, you assume full responsibility for interacting with the Company within the limits established by law, including compliance of this interaction with the laws and other legal acts of your country of residence. We ask you in advance, before accepting the terms of the Agreement, to familiarize yourself with the possibility of tax penalties for profits from similar operations in your country.</p><p>The company does not bear financial responsibility for the results of operations performed by the Client. The company is also not responsible for losses associated with the service of copying trades of other persons.</p><p>Each client has the right to open only one trading account on the platform. Profits received on accounts opened under a fictitious name, or on several accounts opened by the same person will be canceled and unavailable for withdrawal. If one client opened several trading accounts, then the profit will be canceled on all of the opened accounts, and access to all accounts will be closed for further proceedings. By making an agreement with the Company, it is possible to restore access to only one of the accounts and transfer funds from the remaining blocked accounts, in the absence of illegal actions on the side of the client when gaining profits using several accounts.</p><p>In the event of improper financial damage to the Company, the Company has the right to withhold the amount equal to the costs of such damage (legal, operational, etc.) from the client’s account caused by the improper actions of the Client, including the costs caused by the dispute of payments received from client involving third parties.</p><p>The company assumes that You are familiar with the business model of the activity being carried out, the result of which is completely subordinate to the choice of a specific direction of asset price movement from the initial strike price to the specified expiration date.</p><p>Before making a trade, you are provided with full information about the trade: name of the asset, price of execution, chosen direction of price change, as well as the amount of investment determined by the trader for the specific trade.</p><p>Any «Signals», «Ideas for trading», «Tips», «Coaching» and other recommendations are informational in nature, you always make decisions independently in which the Company is not your adviser or confidant.</p><p>Recommendations that we provide are not a direct offer of purchase/sale or an invitation to make offers in trading CFD, trading in the Forex market. Every decision you make with us is YOUR independent decision. We do not act as your advisor or trustee. You agree that we do not have any fiduciary obligations to you and accept no responsibility for any claims, losses, costs and expenses, including court fees, which you may incur by following the company’s trade recommendations, as well as any of your actions or omissions, caused by our recommendations or information provided by us.</p><p>Recommendations are based on personal judgment and are not a guarantee.</p><p>Our market recommendations are based solely on the opinion of our staff. They can be equally consonant or not with the market positions or intentions of the Company, its branches and employees. We provide our recommendations based on information that is believed to be reliable, but in no way guarantee their accuracy and completeness and do not claim that following these recommendations can reduce or eliminate the risk inherent in trading CFD and the Forex market.</p><p>Visitors to our site are required to pre-verify that their interaction with the Company takes place strictly within the framework of the law in force in their country of residence and the restrictions imposed in it. Clients should also be aware of their obligations to pay taxes on capital gains in their country</p><p>As much as possible, the company disclaims all warranties of any kind, express or implied, relating to the site, platform, site content and services, including (without limitation) the right of ownership, market demand, suitability for a particular purpose, no violation of rights property during operations or performance.</p><p>The company disclaims all warranties, express or implied, regarding:</p><ul><li>security, accuracy, reliability, timeliness and efficiency of the site, its content, platform, services;</li><li>smooth operation of the site, platform and service, the absence of errors or the fact that any errors will be corrected;</li><li>performance and accuracy, quality, timing, completeness and usefulness of any information provided on the site, platform and services.</li></ul>",
    },
    {
      title: "Client Agreements",
      description:
        "<p>1. Introduction</p><p>1.1. V.R.T. GROUP LTD (hereinafter, the Company), whose registered office is located at Post Office Address P.O. Box 1405 Majuro Marshall Islands, registration number 110989, provides clients with access to its proprietary client portal gateway and other ancillary services (hereinafter, the Services) under the terms of this agreement (hereinafter, Agreement) to any individual or legal entity (hereinafter, Client) (defined individuals over 18 years of age and legal entities of non-prohibited countries in which the Services are not offered).</p><p>1.2. The following documents are an integral part of this Agreement:</p><p>a) Risk Disclosures;&nbsp;<br>b) Regulations for Non-Trading Operations;&nbsp;<br>c) Any other applicable documents as included on the Company Website(s) and associated materials.</p><p>1.3. This Agreement and the documents listed above are collectively referred to as the “Terms of Business”.</p><p>1.4. The Terms of Business should be carefully read by the Client, as it governs all the Client’s trading and non-trading operations. By accepting the terms of this Agreement, the Client also accepts the Terms of Business as listed below.</p><p>1.5. The terms of this Agreement shall be considered as accepted unconditionally by the Client upon the Company’s receipt of an advance payment made by the Client in accordance with this Agreement.</p><p>1.6. As soon as the Company receives the Client’s advance payment, every operation made by the Client in the Client Portal or with associated trading platform(s) shall be subject to the Terms of Business.</p><p>1.7. The Client and the Company entering into each operation in the client portal or in the associated trading platform as principals, and the Company DOES not act as an agent on the Client’s behalf. The Client shall be directly and fully responsible for fulfilling all of his/her obligations regarding his/her operations within the client portal or on the associated trading platform. If the Client acts on behalf of someone else, regardless of whether that individual is identified, the Company shall not view that individual as a Client and shall not bear any responsibility to him/her unless otherwise specifically agreed.</p><p>1.8. The terms used in this&nbsp;<br>Agreement are defined in Clause 17.</p><p>1.8.1.&nbsp;<b>«Payment»</b>&nbsp;shall mean the deposit of funds by the Client to pay for future expenses.</p><p>1.8.2.&nbsp;<b>«Base Currency»</b>&nbsp;shall mean the first currency in the currency pair, against which the Client buys or sells the quote currency.</p><p>1.8.3.&nbsp;<b>«Balance»</b>&nbsp;shall mean the total financial result of all completed transactions and deposit/withdrawal operations on the trading account.</p><p>1.8.4.&nbsp;<b>«Credit/Debit Card»</b>&nbsp;shall mean a thin plastic card that contains identification information, with the help of which the cardholder can pay for purchases and services, as well as withdraw cash from the account.</p><p>1.8.5.&nbsp;<b>«Currency Pair»</b>&nbsp;shall mean the object of a transaction, based on the change in value of one currency against another.</p><p>1.8.6.&nbsp;<b>«Website»</b> shall mean Company’s website at vestatg.com</p><p>1.8.7.&nbsp;<b>«Client’s External Account»</b>&nbsp;shall mean the bank and/or electronic account of the Client or the Client’s Authorized Person.</p><p>1.8.8.&nbsp;<b>«Long Position»</b>&nbsp;shall mean a Buy position that appreciates in value if market prices increase. Regarding currency pairs: buying the base currency against the quote currency.</p><p>1.8.9.&nbsp;<b>«Identification Information»</b>&nbsp;shall mean, for an individual – the passport/ID information specified in the Client Registration Form, and for a legal entity – the information from registration and founding documents specified while registering.</p><p>1.8.10.&nbsp;<b>«Instrument»</b>&nbsp;shall mean any currency pair, cryptocurrency pair, spot metal, contract for difference and other financial instruments offered by the Company.</p><p>1.8.11.&nbsp;<b>«Client Account»</b>&nbsp;shall mean any account opened by the Client at the Company including transitory accounts, trading accounts, partner accounts, manager’s accounts, investor’s accounts and other account types.</p><p>1.8.12.&nbsp;<b>«Short Position»</b>&nbsp;shall mean a Sell position that appreciates in value if market prices fall. Regarding currency pairs: selling the base currency against the quote currency.</p><p>1.8.13.&nbsp;<b>«Rate»</b>&nbsp;shall mean the value of the base currency in the terms of the quote currency.</p><p>1.8.14.&nbsp;<b>«Client portal gateway»</b>&nbsp;shall mean the Client’s personal page on the Company’s website, access to which is secured by a login and password. This service is provided to the Client by the Company on the basis of the Client Agreement concluded between the Company and Client.</p><p>1.8.15.&nbsp;<b>«Margin Trading»</b>&nbsp;shall mean trading using leverage, where the Client may make transactions of a certain size, while having significantly less funds on their trading account.</p><p>1.8.16.&nbsp;<b>«Inactive Trading Account»</b>&nbsp;shall mean a Client’s trading account which has not had an open position, pending order, or non- trading operation in a 3 month period.</p><p>1.8.17.&nbsp;<b>«Client Transactions»</b>&nbsp;shall mean instructions and requests by the Client to the Company in relation to their trading and non-trading operations in Clients Portal and trading platforms.</p><p>1.8.18.&nbsp;<b>«Open Position»</b>&nbsp;shall mean the result of the first part of a completed transaction. In this case the Client shall be obliged to:</p><p>a) make a counter transaction of the same volume&nbsp;<br>b) maintain equity no lower than the necessary margin level (this level may vary depending on an account type. For more information, please refer to the Company’s Website).</p><p>1.18.19.&nbsp;<b>«Written Notification»</b>&nbsp;shall mean an electronic document (including emails, internal mail on the client terminal etc.) or an announcement on the “Company News” page on the Website. A written notice is considered to be received by the Client:</p><p>a) an hour once it has been sent to the Client’s email address;&nbsp;<br>b) an hour after the news has been published on the Website.</p><p>1.18.20.&nbsp;<b>«Instruction»</b>&nbsp;shall mean the Client’s instruction to the Company to open/close a position, place, remove or change the level of the pending order.</p><p>1.18.21.&nbsp;<b>«Withdrawal Request»</b>&nbsp;shall mean an instruction given via the Clients Portal account on the Company website to withdraw funds from the trading account and transfer them to the Client’s external account.</p><p>1.8.22.&nbsp;<b>«Server»</b>&nbsp;shall mean all programs and technology used to make and carry out the Client’s instructions, as well as presenting trading information in real-time, with consideration of the mutual obligations of the Client and Company in correspondence with the relevant Regulation.</p><p>1.8.23.&nbsp;<b>«Spread»</b>&nbsp;shall mean the difference between the Ask and Bid prices.</p><p>1.8.24.&nbsp;<b>«Trading Platform»</b>&nbsp;shall mean all programs and technology that present quotes in real- time, allows placement/modification/ deletion of orders and calculate all mutual obligations of the Client and the Company. For the purposes of simplification for this Agreement, a trading platform consists of a server and client terminal.</p><p>1.8.25.&nbsp;<b>«Client’s Authorised Person»</b>&nbsp;shall mean:</p><p>a) an individual over 18 years of age, citizen and/or tax resident of any country, except for those countries in which the Company does not offer the given service, authorized to perform or receive non-cash (bank and/or electronic) transfers on behalf of the Client, for the purpose of crediting funds to the Client’s account or withdrawing funds from the Client’s account;<br>b) a legal body or entity of another business legal structure, organized under the existing laws of any country, except for those countries in which the Company does not offer the given service, authorized to perform or receive a non-cash (bank or/and electronic) transfer on behalf of the Client for the purpose of crediting funds to the Client’s account or withdrawing funds from the Client’s account.</p><p>1.8.26.&nbsp;<b>«Force Majeure»</b>&nbsp;shall mean lack of conformity of the terms and conditions of the Company and the terms and conditions of the counterparty, current market situation, possibilities of software or hardware of the Company or other situations which cannot be foreseen.</p><p>2. Services</p><p>2.1. Subject to the Client fulfilling the obligations under this Agreement and the Regulations, the Company shall provide the Client with the ability to make operations offered within the client portal and the Terms of Business.</p><p>2.2. The Company is merely providing a technological platform to the Client and process the transactions on an execution- only basis, neither managing the account nor advising the Client. The Company shall process the Client’s transactions even if the transactions shall result in a loss for the Client. The Company is under no obligation, unless otherwise agreed in this Agreement and the Terms of Business, to monitor or advise the Client on the status of any Client transaction, to make margin calls, or to close out any of the Client’s open positions. Unless otherwise specifically agreed, the Company is not obligated to make an attempt to execute the Client’s order using quotes more favorable than those offered through the trading platform.</p><p>2.3. The Client shall not be entitled to demand the Company to provide investment or trading advice or any information intended to encourage the Client to make any particular transaction.</p><p>2.4. In the event that the Company does provide advice, information or provide advice, information or recommendations to the Client, the Company shall not be held responsible for the consequences or result received from using these recommendations or advice.</p><p>The Client acknowledges that the Company shall not, in the absence of fraud, intentional failure to carry out its responsibilities or gross negligence, be liable for any losses, costs, expenses or damages suffered by the Client arising from any inaccuracy or mistake in any information given to the Client including, but not limited to, information regarding any Client transactions. Though the Company has the right to void or close any transaction in the specific circumstances set out in this Agreement or Terms of Business, any transaction the Client carries out following such an inaccuracy or mistake shall nonetheless remain valid and binding in all respects both on the side of the Company and of the Client.</p><p>2.5. The Company shall not execute or process physical delivery of currency in the settlement of any trading operation. Profit or loss in the deposit currency is deposited to/withdrawn from the Client’s trading account immediately after a position is closed.</p><p>2.6. The Company, partners of the Company or other affiliated parties may have material interest, a legal relationship or arrangement concerning a specific transaction in Clients Portal or in the trading platform or interests, relationships, or arrangements that may be in conflict with the interests of the Client. By way of example, the Company may:</p><p>a) act as Principal concerning any instrument on the Company’s own account by selling to or buying the instrument from the Client;&nbsp;<br>b) combine the Client’s transaction with that of another Client;&nbsp;<br>c) buy or sell an instrument the Company offers to the Client;&nbsp;<br>d) advise and provide other services to partners or other clients of the Company who may have interests in instruments or underlying assets which conflict with the Client’s interests.</p><p>The Client consents to and grants the Company authority to deal with or for the Client in any manner which the Company considers appropriate, notwithstanding any conflict of interest or the existence of any material interest in any transaction in the client portal or in the trading platform, without prior notification of the Client. The Company’s employees are required to comply with a policy of impartiality and to disregard any material interests or conflicts of interest when advising the Client.</p><p>2.7. The Company may periodically act on a Client’s behalf in relations with parties with whom the Company or another affiliated party has an agreement permitting the Company to receive goods or services. The Company ensures that such arrangements shall operate in the best interest of Clients, for example, arrangements granting access to information or other benefits/services which would not otherwise be available.</p><p>2.8. Should the Company provide Swap-free accounts upon the Client’s request, the Client accepts the terms and conditions of the Agreement and agrees, amongst other things, not to be charged for swaps on any trading account. However, if the Company suspects any fraud, manipulation, swap- arbitrage or other forms of deceitful or fraudulent activity related or connected to any/all of the transactions on one/several Client’s account(s) with the Company, the Company reserves the right to decide, at its sole discretion, to close all open positions on the Client’s trading account and recover costs (equivalent to the swap and/or any profit amount) for all transactions currently and/or previously made on the account, whilst declining any further requests from the Client to be exempted from any swap charges.</p><p>Swap-free requests made apply to all of the Client’s trading accounts. The Company reserves the right to discontinue the provision of the Swap-free accounts without any prior notice.</p><p>2.9. The Company aims to provide cutting- edge Services to Clients and Client warrants that it will make use of Services in fairness and with honestly. Shall the Company detect or suspect fraud or other manipulation including, amongst others, latency arbitrages, dishonest scalping or others, the Company reserves the right to unilaterally suspend the account of the Client and to recalculate all open and close positions to reflect market conditions. In such event, the Company reserves the right to deposit/withdrawn fund from the Client’s account.</p><p>3. Client Requests and Instructions</p><p>3.1. The Company processes and executes Client requests and instructions in accordance with the Terms of Business.</p><p>3.2. The Company is entitled to decline a Client’s request or instruction if any of the conditions set out in the Terms of Business have not been satisfied before the request or instruction is processed by the Company. However, the Company may, at its sole discretion, accept and execute the Client request or instruction, notwithstanding the lack of compliance with Terms of Business.</p><p>If the Company executes the Client request or instruction and subsequently becomes aware of a breach of the conditions of the Terms of Business, the Company may act in accordance with the Terms of Business.</p><p>4. Netting</p><p>4.1. For transactions between the Client and the Company, a conversion will take place using the current exchange rates in accordance with the Terms of Business.</p><p>4.2. If the accrued amount owed the Company by the Client under the Terms of Business is equal to the accrued amount owed the Client by the Company, the obligations of both sides will be canceled out.</p><p>4.3 If the accrued amount owed by one party under the Terms of Business exceeds the accrued amount owed by the other party, then the party with the larger accrued amount shall pay the excess to the other party and following which all obligations to pay will be automatically satisfied and discharged.</p><p>4.4. The Client is obligated to pay any amount due, including all commissions, charges and other costs determined by the Company.</p><p>4.5. The Client may not transfer rights, vest responsibilities, or otherwise transfer or purport to assign rights or obligations under the Terms of Business without the Company’s written notice. Any purported assignment or transfer in violation of this condition shall be considered void.</p><p>5. Payments</p><p>5.1. The Client may deposit funds to a Client account at any time.</p><p>5.2. Fund deposit to and withdrawal from the Client’s account shall be governed by the Terms of Business for Non-Trading Operations.</p><p>5.3. If the Client is under the obligation to pay any amount to the Company which exceeds the Equity of the account, the Client shall pay the excess within 2 business days of the obligation arising.</p><p>5.4. The Client acknowledges and agrees that (without prejudice to any of the Company’s other rights to close out the Client’s open positions and exercise other default remedies against the Client in accordance with the Regulations) where a sum is due and payable to the Company in accordance with the Terms of Business and sufficient cleared funds have not yet been credited to the Client’s account, the Company shall be entitled to treat the Client as having failed to make a payment to the Company and to exercise its rights under the Terms of Business.</p><p>5.5. The Client shall hold full responsibility for the accuracy of payments executed. If the Company bank details change, the Client shall bear full responsibility for any payments carried out to the outdated bank details from the moment the new details are published in client portal gateway.</p><p>5.6. Acceptance of payments by clients of the Company by means of international card payment systems can also be carried out by official partners of the Company, information about which is provided in the Terms of Business for Non-trading Operations and in Clients Portal.</p><p>6. Client Funds and Interest</p><p>6.1. Client funds are held on Company accounts including segregated accounts opened in the Company’s name for holding Client funds separate from the Company’s funds.</p><p>6.2. The Client acknowledges and agrees that the Company will not pay interest to the Client on funds located on Client accounts. The Company reserves the right to establish when and how much interest it will pay on Client funds.</p><p>6.3. Using of bonuses the Company may add a bonus to a trading account.</p><p>The amount of the bonus depends on the size of the Client’s deposit or the conditions of the personal offer made by the Company to the Client, under which bonus funds are credited to the Client.</p><p>Bonus funds credited to the Client’s trading account are not a financial obligation from the side of the Company to the Client.</p><p>The funds in the Client’s trading account are available for withdrawal only after the Client completes the required trading turnover on his account.</p><p>The size of the mandatory turnover is equal to the amount of the bonus multiplied by his leverage. The bonus leverage is equal to 35, and for bonuses, the size of which is more then 50% of the total deposit of the Client, the leverage equals 40.</p><p>Bonus offers may be limited in duration.</p><p>Trades with a “no income” result (in case the strike price of an asset is equal to the expiration price) are not counted when calculating the mandatory trading turnover made by the Client.</p><p>Refusal from the bonus or its cancellation is possible only if there were no trading operations on the account starting from the moment the bonus funds were credited.</p><p>Upon expiration of the bonus offer, the bonus accrued within its framework may be debited from the Client’s trading account.</p><p>The bonus is cleared if the balance of the Client’s trading account falls below the minimum allowable trade’s size.</p><p>7. Complaints and Disputes</p><p>7.1. The procedure for handling complaints and disputes is described in the corresponding Terms of Business.</p><p>8. Communications</p><p>8.1. The rules for communication between the Client and the Company are set out in the Terms of Business.</p><p>8.2. The Client shall submit all trading instructions through the trading platforms. For specific account types, the Client may get phone support.</p><p>8.3. The Client shall submit requests to debit or credit funds only via the client portal gateway and in accordance with the Terms of Business for Non-trading Operations.</p><p>8.4. By accepting the terms of this Agreement, the Client also agrees to receive emails from the Company to the Client’s personal email address and SMS messages to the mobile telephone number registered in client portal.</p><p>9. Time of Essence</p><p>9.1. The time periods of fulfillment by the Client and the Company of their obligations shall be an essential condition of all Terms of Business.</p><p>10. Events of Default</p><p>10.1. Each of the following circumstances constitutes an event of default:</p><p>a) Client’s failure to pay any due amount under the corresponding Terms of Business;&nbsp;<br>b) Client’s failure to fulfill any obligation to the Company;&nbsp;<br>c) the initiation of proceedings by a third party for the Client’s bankruptcy or for the company’s liquidation (if the Client is a legal entity), or for the appointment of an administrator or receiver in respect of the Client or any of the Client’s assets (if the Client is a legal entity), or (for both legal entities and individuals) if the Client makes a contract or an arrangement with their creditors concerning the settlement of their debt or any other analogous procedure is initiated regarding the Client;&nbsp;<br>d) any representation or warranty made by the Client in Clause 11 hereof is or becomes false;&nbsp;<br>e) Client’s inability to pay debts when they fall due;&nbsp;<br>f) if the Client dies or becomes legally incompetent;&nbsp;<br>g) any other circumstance where</p><p>the Company reasonably believes that it is necessary or desirable to take any action set out in Clause 10.2 hereof.</p><p>10.2. In cases of events of default by the Client, the Company may, at its sole discretion, at any time and without prior written notice to the Client, take one or more of the following steps:</p><p>a) close out all or any of the Client’s open positions at the current quote;&nbsp;<br>b) debit the Client’s account for amounts owed to the Company;&nbsp;<br>c) close any or all of the Client’s accounts held within the Company;&nbsp;<br>d) refuse to open new accounts under the Client’s name.</p><p>11. Representations and Warranties</p><p>11.1. The Client shall represent and warrant that:</p><p>a) all information presented in this Agreement, the Terms of Business and the Client Registration Form is true, complete and accurate in all material respects;&nbsp;<br>b) the Client warrants that he shall be treated as a Professional Client as per MIFID I and MIFID II definitions. As a result, the Company will treat the Client as a professional client and the Client explicitly waive any rights or protection arising from opting out the retail status with the Company;&nbsp;<br>c) the Client explicitly acknowledges that the Company is not regulated in any jurisdictions and that the Services offered are not regulated within the territory of REPUBLIC OF THE MARSHALL ISLANDS. As a consequence, the Client acknowledge that the Company cannot offer him the same level of protection as other regulated entities;&nbsp;<br>d) the Client is duly authorized to enter into this Agreement, to issue instructions and requests and to fulfill his/her obligations in accordance with the Terms of Business;&nbsp;<br>e) the Client acts as principal;&nbsp;<br>f) the Client is the individual who submitted the Client Registration Form or if the Client is a legal entity, the person who provided the Client Registration Form on the Client’s behalf is duly authorized to do so;&nbsp;<br>g) all actions performed under the Regulations will not violate any law, ordinance, charter, by-law or rule applicable to the Client or in the jurisdiction in which the Client is resident, or any agreement by which the Client is bound or that concerns any of the Client’s assets;&nbsp;<br>h) any trading systems used by the Client are not targeted at exploiting any weakness in the Company’s software;&nbsp;<br>i) the Client warrants that he is NOT a USA resident, resident of Canada, of Japan, Australia and New Zealand.<br>j) the Client acknowledges that the Company is not acting as a Tax Agent in any jurisdictions, therefore any revenues, profit or loss arising from the Client’s trading activities shall be duly reported by the Client to the relevant tax authorities (if any).</p><p>11.2. If the Client breaches clause 11.1 of this Agreement, the Company has the right to void any position or close out any or all of the Client’s positions at the current price at any time, at its sole discretion.</p><p>12. Governing Law and Jurisdiction</p><p>12.1. This Agreement is governed by the laws of REPUBLIC OF THE MARSHALL ISLANDS.</p><p>12.2. With respect to any proceedings, the Client irrevocably:</p><p>a) agrees that the courts of REPUBLIC OF THE MARSHALL ISLANDS shall have exclusive jurisdiction to settle any proceedings regarding this Agreement;&nbsp;<br>b) submits to the jurisdiction of the courts of REPUBLIC OF THE MARSHALL ISLANDS;&nbsp;<br>c) waives any objection which the Client may have at any time to the laying of any proceedings brought in any such court;&nbsp;<br>d) agrees not to claim that such proceedings have been brought in an inconvenient forum or that such court does not have jurisdiction over the Client.</p><p>12.3. The Client irrevocably waives to the fullest extent permitted by applicable laws of REPUBLIC OF THE MARSHALL ISLANDS, with respect to the Client and the Client’s revenues and assets (regardless of their use or intended use), all immunity (on the grounds of sovereignty or other similar grounds) from (a) suit, (b) jurisdiction of any courts, (c) relief by way of injunction, order for specific performance or for recovery of property, (d) attachment of assets (whether before or after judgement) and (e) execution or enforcement of any judgement to which the Client or the Client’s revenues or assets might otherwise be entitled in any proceedings in the courts of any jurisdiction and irrevocably agrees to the extent permissible by the law of REPUBLIC OF THE MARSHALL ISLANDS not claim any such immunity in any proceedings.</p><p>The Client consents to satisfying all requirements and court orders in connection with such proceedings, particularly, but not limited to, those regarding any of the Client’s assets.</p><p>12.4. Where this Agreement and the Regulations are issued in a language other than English, the English language version shall prevail in the event of any conflict.</p><p>12.5. The Company will communicate with the Client in English, Russian or other languages as per mutual agreement, however agreements the Company concludes with the Client shall be in English.</p><p>13. Limitation of Liability</p><p>13.1. The Client will indemnify the Company for all liabilities, costs, claims, demands and expenses of any nature which the Company suffers or incurs as a direct or indirect result of any failure by the Client to fulfill any of the obligations under the Terms of Business.</p><p>13.2. The Company shall in no circumstances be liable to the Client for any consequential direct or indirect losses, loss of profits, missed opportunities (due to subsequent market movement), costs, expenses or damages the Client may suffer in relation to this Agreement, unless otherwise agreed in the Terms of Business.</p><p>13.3. The Client does not have the right to give third parties access passwords to the trading platform or client portal gateway and agrees to keep them secure and confidential. All actions related to the fulfillment of the Terms of Business and/or the usage of logins and passwords are considered executed by the Client. The Company does not bear responsibility for the unauthorized use of registration data by third parties.</p><p>13.4. The Client acknowledges and accepts that trading in leveraged or non-leveraged products is highly speculative as specified in the Risk Disclosure on the Company’s Website. Shall the Client does not understand the Risk Disclosures; the Company recommend the Client to seek independent advice or contact his customer representative. The Client acknowledges and accepts that leveraged or non-leveraged products may bring significant risks, including, but not limited to, legal and financial risks to the extent of causing unlimited losses, without any guarantee of retaining the capital invested or generating any profits. The Client acknowledges and accepts that trading leveraged or non- leveraged products are suitable only for professional individuals who are able to bear financial losses risking their initial deposits and who have the financial comfort to suffer substantial losses without an impact on their living standard.</p><p>14. Force Majeure</p><p>14.1. КThe Company may, having just cause, determine that a Force Majeure event (uncontrollable circumstances) exists, in which case the Company will, in due course, take reasonable steps to inform the Client. Force Majeure circumstances includes without limitation:</p><p>a) any act, event or occurrence (including, without limitation, any strike, riot or civil commotion, terrorism, war, act of God, accident, fire, flood, storm, interruption of power supply, communication equipment or supplier failure, hardware or software failure, civil unrest, government sanction, blockage, embargo, lockouts) which, in the Company’s reasonable opinion, prevents the Company from maintaining market stability in one or more of the instruments;&nbsp;<br>b) the suspension, liquidation or closure of any market or the imposition of limits or special or unusual terms on trading on any such market or on any such event.</p><p>14.2. If the Company determines with just cause that a Force Majeure event exists (without infringing any other rights under the Terms of Business), the Company may at any time and without giving prior written notification take any of the following steps:</p><p>a) increase margin requirements;&nbsp;<br>b) close any or all open Client positions at prices the Company reasonably considers fair;&nbsp;<br>c) suspend or modify the application of any or all terms of the Terms of Business to the extent that the Force Majeure event makes it impossible or impractical for the Company to comply with them;&nbsp;<br>d) take or not take action concerning the Company, the Client and other clients as the Company deems to be reasonably appropriate in the circumstances.</p><p>14.3. The Company does not bear responsibility for not fulfilling (improperly fulfilling) its obligations when prevented from doing so by force major circumstances.</p><p>15. Miscellaneous</p><p>15.1. In the case that the Company receives a request for a refund of the transaction, the Company reserves the right to freeze the current balance of the client for the refund amount until the end of proceedings on this issue.</p><p>15.2. In the absence of trading activity on the Client’s account for more than 30 (thirty) days, since the last active position is closed, the Company has the right to charge a fee for maintaining this trading account at the rate of $50 per month.</p><p>15.3. In the absence of trading activity on the Client’s account for more than 3 (three) months or in the absence of money on the Client’s account for more than 1 (one) month, the Company has the right to consider this account to be inactive, close it and transfer it to the archive.</p><p>15.4. The Company has the right to suspend service to the Client at any time for any justified reason (notification of the Client is not required).</p><p>15.5. In the event that a situation arises that is not covered under the Terms of Business, the Company will resolve the matter on the basis of good faith and fairness and, when appropriate, by taking action consistent with market practice.</p><p>15.6. No single or partial exercise or failure or delay in exercising any right, power or privilege (under this Agreement or at law) by the Company shall constitute a waiver by the Company of, or impair or preclude any exercise or further exercise of that or any other right, power or remedy arising under the Regulations or applicable law.</p><p>15.7. The Company may in whole or in part release the Client from liability stemming from the latter’s violation of the conditions of the Terms of Business during the period of it being in force or, alternatively, may reach a compromise decision. In this case, all violations, regardless of how long ago they were committed and in connection with which the Company may file a grievance with the Client at any time, are taken into consideration. The above stated conditions do not prevent the Company from exercising its other rights in accordance with the Regulations.</p><p>15.8. The rights and remedies provided to the Company under the Terms of Business are cumulative and are not exclusive of any rights or remedies provided under the law of REPUBLIC OF THE MARSHALL ISLANDS.</p><p>15.9. The Company may transfer its rights and obligations to a third party in whole or in part, subject to due notification to the Client and consent of the assignee to the terms hereof and of the applicable Regulations.</p><p>15.10. If any term of the Terms of Business (or any part of any term) shall be held by a court оf competent jurisdiction to be unenforceable for any reason, then such term shall be deemed severable and not form part of this Agreement and the Terms of Business, but the remainder of the Agreement shall continue to be valid and enforceable.</p><p>16. Amendment and Termination</p><p>16.1. The Client acknowledges that the Company shall have the right to amend:</p><p>a) any part of this Agreement or the Terms of Business at any time, having provided to the Client the notice of such amendments;&nbsp;<br>b) the value of a spread, swap and dividend specified in the Contract Specifications without prior notification to the Client;&nbsp;<br>c) other trading conditions with written notification to the Client of a minimum of 1 (one) calendar day.</p><p>Amendments come into force from the date specified in the notice. In event of force major circumstances at the markets the Client recognizes the right of the Company to make amendments to the Terms of Business immediately, without prior notification.</p><p>16.2. The Client acknowledges that the Company may introduce new products and services without providing prior notification.</p><p>16.3. The Client may suspend or terminate this Agreement by giving the Company written notification.</p><p>16.4. The Company may suspend or terminate this Agreement immediately by giving the Client notification.</p><p>16.5. The Company retains the right to refuse the Client for providing service of Clients Portal without explanation.</p><p>16.6. Termination of this Agreement will not abrogate any obligations held by either the Client or the Company regarding any outstanding transaction or any legal rights or obligations which may already have arisen under this Agreement or the Regulations, particularly relating to any open positions and deposit/withdrawal operations made on the Client’s account.</p><p>16.7. Upon termination of this Agreement, all amounts owed by the Client to the Company must be settled immediately, including, but not limited to:</p><p>a) all outstanding fees, charges and commissions;&nbsp;<br>b) any expenses incurred by terminating this Agreement;&nbsp;<br>c) any losses and expenses sustained by the Company in closing out any transactions or in connection with any other of the Company’s obligations initiated or caused by the Client.</p>",
    },
    {
      title: "Regulations for Non-Trading Operations",
      description: `<p>1. General Terms</p><p>1.1. These Regulations for Non-Trading Operations (hereinafter, “Regulations”) have been developed within the framework of International cooperation measures aimed to combat financial irregularities, expose and prevent law violations, and set principles for performing non-trading operations on a Client’s Account with V.R.T. GROUP LTD (hereinafter, “Company”).</p><p>1.2. “Non-Trading Operation” shall mean any operation of the Client for deposit of funds to their Client’s Account, withdrawal of funds from their Client’s Account or internal transfers of funds between Client’s Accounts in client portal.</p><p>The terms and interpretations applicable to these Regulations are specified in clause 17 of the Client Agreement which can be found in the Company Website. In cases where certain clauses of these Regulations do not correspond to certain clauses of the Client Agreement or the Terms of Business, concerning non-trading operations, the clauses of these Regulations shall prevail. This circumstance shall not render other terms of the aforementioned documents invalid.</p><p>1.3. The instruction of a non-trading operation can be sent by the Client to the Company only through client portal. All other means of communication specified in Clause 3 hereof are for further supporting correspondence between the Company and the Client and notifications of the Client by the Company.</p><p>1.4. When registering for client portal on the Company Website, the Client shall provide accurate and valid information to identify themselves in accordance with the requirements of the Client Registration Form on the Company Website and these Regulations. The Client shall inform the Company about changes in identification data in due time.</p><p>1.5. The Company shall have the right at any time to request the following documents in order to verify the Client’s identity of the physical person:</p><p>a) Proof of identity. A high-resolution scanned copy or photo of pages of a passport or any other national ID, indicating family name and name(s), date and place of birth, passport number, issue and expiry dates, country of issue and Client’s signature.&nbsp;<br>b) Proof of address. A high-resolution copy of a: utility bill (water, electricity, phone bill) issued within the last 3 months; bank statement (for a current account, deposit account or credit card account); bank reference letter, confirming the address of the Client.</p><p>1.6. The Company shall have the right at any time to request the following documents in order to verify the identity of a client as a legal entity:</p><p>a) incorporation, foundational documents and documents confirming the good standing status of the Company and the authority of the signatory to the Client’s Account.</p><p>1.7. The Company reserves the right to suspend execution of non-trading operations on the Client’s Account if it is discovered that the Client’s identification information is incorrect or false, as well as in cases where the Client does not provide the required documents.</p><p>1.8. The Company carries out collection of data, allowing it to define the identity of new and existing Clients as those people to whom the requirements according to FATCA apply. In this regard the Company may request the Client complete one of questionnaires on self-certification in a form from the Company, the W- 8 form as well as to request additional documents and information. The Company cannot provide services to those people to whom the requirements of FATCA regarding their foreign accounts apply.</p><p>1.9. The Client shall guarantee the legal source, lawful possession and right to use the funds being transferred to the Client’s Account.</p><p>1.10. The Company shall have the right to amend the terms of these Regulations at its sole discretion and at any time, giving the Client 3 (three) business day’s prior notification in one or several ways described in clause 3.1 of these Regulations. Such amendments will become effective on the date specified in the notification.</p><p>1.11. These Regulations are transparent and are an integral part of any agreement concluded between the Company and the Client. The content of these Regulations shall be disclosed without limitation upon the request of any interested party.</p><p>2. Suspicious Non-Trading Operations</p><p>2.1. The Company may declare a non-trading operation suspicious in following cases, including, but not limited to:</p><p>a) abuse of fund transfers without using the services of the Company (without completing trading operations on the trading account; without using investment services);&nbsp;<br>b) unusual nature of operations that do not have obvious economic substance or obvious legal purpose;&nbsp;<br>c) circumstances implying that the operations are performed for the purpose of money laundering or financing terrorism;&nbsp;<br>d) failure of the Client to provide identification information and verification documents, as well as submission a misrepresentation of information;&nbsp;<br>e) the impossibility to contact the Client by the specified registered e-mail address and telephone number;&nbsp;<br>f) failure of the Client to provide identification information for the beneficiary, i.e. a person for the benefit of whom the Client acts (in particular, on the basis of an agent contract, commission and trust management contracts, while carrying out non-trading operations);&nbsp;<br>g) submission of false or invalid documents.</p><p>2.2. The Company can declare a non-trading operation suspicious on the basis of analysis of the nature of a non-trading operation, its components, attending circumstances and interaction with the Client or the Client’s representative.</p><p>2.3. The Company reserves the right to investigate the nature of any suspicious non-trading operations listed in clause 2.1 of these Regulations for Non-Trading Operations, whereupon such operations will be suspended until the reasons for their occurrence are clarified and the investigation is completed.</p><p>2.4. During the course of an investigation, in accordance with clause 2.3 of these Regulations, the Company shall have the right to request that the Client provide proof of identity, payment and other documents confirming the lawful possession and legal source of the funds transferred to Client’s Account.</p><p>2.5. If suspicious non-trading operations should be exposed, the Company shall have the right to:</p><p>a) refuse to perform these operations, by rejecting the respective request;&nbsp;<br>b) limit fund deposit and/or fund withdrawal from the Client’s Account through any method at the Company’s discretion;&nbsp;<br>c) return funds, previously deposited to the Client’s Account, to the same source of payment from which the deposit to Client’s Account was made;&nbsp;<br>d) write off any compensated commissions or bonuses credited to the Client for operations of the Client;&nbsp;<br>e) terminate relations with the Client.</p><p>2.6. Refusal to perform suspicious non-trading operations or termination of relations with the Client as a result of suspicious non-trading operations performed by the Client shall not impose civil liability on the Company for breach of any agreement with the Client.</p><p>3. Communications</p><p>3.1. In order to communicate with the Client, the Company may use:</p><p>a) trading platform internal mail;&nbsp;<br>b) email;&nbsp;<br>c) telephone;&nbsp;<br>d) post;<br>e) news in the Company Website;&nbsp;<br>f) notifications in client portal.</p><p>3.2. The Company will use the Client’s contact details, specified when registering or updated in accordance with clause 3.4 of these Regulations. The Client shall agree to accept any notifications from the Company at any time.</p><p>3.3. Any communications sent to the Client (documents, notifications, confirmations, news, statements, etc.) are deemed to be received:</p><p>a) if sent by email, within 1 (one) hour after emailing it;&nbsp;<br>b) if sent by trading platform internal mail, immediately after sending it;&nbsp;<br>c) if by telephone, once the telephone conversation has been finished;&nbsp;<br>d) if sent by post, 7 (seven) calendar days after posting it;&nbsp;<br>e) if posted in the Company Website, immediately after the notification is published;&nbsp;<br>f) if posted in client portal, immediately after the notification is published.</p><p>3.4. The Client shall notify the Company in due time of any change in the Client’s contact details either by updating the information in client portal or through any other method offered by the Company.</p><p>3.5. The Client understands and accepts that the Company reserves the right to terminate relations with the Client unilaterally shall the Client behave inappropriately in communications with a Company employee.</p><p>3.6. Every non-trading operation of a Client shall be confirmed by a log in the “Transfer History” of client portal. If the Client has reason to believe that the log is inconsistent, the Client shall have the right to lodge a complaint in accordance with clause 7 of these Regulations.</p><p>3.7. If the Client finds an error in the record in his favor, he is obliged to notify the employee of the Company as soon as possible using the contact information on the Company’s Website.</p><p>4. Payments Policy</p><p>4.1. Fund deposits to Client’s Account and fund withdrawals from Client’s Account shall be performed via those deposit and withdrawal options which are available in client portal. Fees as well as other charges for each deposit and withdrawal option are published in client portal and on the Company Website and may be changed by the Company from time to time.</p><p>4.2. The Client understands and accepts that any commissions or other charges (Commissions and other charges (in accordance with the table of charges) of online payment systems or processing centers, involved in the transfer of funds) incurred by the transfer of funds shall be at the Client’s expense.</p><p>The Company shall be obliged to not charge any additional commission for funds transfer, except for the commissions and other expenses described in these Regulations.</p><p>4.3. Funds shall be credited to the Client’s Account on the basis of the funds deposit request. Funds shall be withdrawn from the Client’s Account on the basis of the funds withdrawal request. Funds shall be transferred to another of the Client’s Account on the basis of the internal fund transfer request. These requests shall be processed by the Company within 1 (one) business day, but not later than at the end of the business day following the day of submitting the request (or following the day after funds were credited to the Company Account, in case it is funds deposit).</p><p>4.4. Requests for Non-trading operations such as deposit requests, withdrawal requests and internal fund transfer requests shall be submitted by the Client in client portal and shall be considered accepted by the Company if they are displayed in the “Transfer History” of client portal and in the Company records of Client requests.</p><p>4.5. The Company will credit the sum received on the Company Account to the Client’s Account.</p><p>4.6. Funds shall be credited to the Client’s Account in the currency of the Client’s Account, regardless of the currency the funds were initially transferred in. If the transfer currency differs from the Client’s Account currency, the transfer amount shall be converted at the exchange rate as published in client portal at the moment the payment is received on the Company Account.</p><p>4.7. Funds withdrawals from the Client’s Account shall be performed in the currency of the Client’s Account. If the Client’s Account currency differs from the transfer currency, the transfer amount shall be converted into the transfer currency at the exchange rate as published in client portal at the moment the funds are debited from the Client’s Account.</p><p>4.8. Exchange rates are published in client portal and are updated by the Company from time to time.</p><p>4.9. Currencies accepted by the Company for crediting the Client’s Account, as well as currencies available for transfer to the Client’s External Account, dependent on the funds transfer method, are indicated in client portal.</p><p>4.10. The Company shall have the right to set restrictions on minimum and maximum transfer amounts, differentiated by the Deposit and Withdrawal options and transfer currency.</p><p>4.11. The Company shall have the right to set restrictions on maximum number of withdrawal requests and internal fund transfer requests, submitted in one Client’s client portal within 24 hours. These restrictions are published in client portal and may be changed by the Company from time to time.</p><p>4.12. In case funds are returned to the Company Account, after being transferred to the Client on the basis of their withdrawal request, the funds shall be credited to the Client’s Account in the amount, which has been received on the Company Account, while any commissions or other charges incurred by funds eturning shall be at the Client’s expense and shall be paid by deducting them from the amount re-credited to Client’s Account.</p><p>4.13. ЕIf funds transferred as a deposit to the Client’s Account through bank transfer are not credited to the Client’s Account within 5 (five) business days from the date of payment, the Client shall have the right to request that the Company make inquiry on the transfer according to clause 7.4. The Client understands that the inquiry may involve paying commission (in accordance with the tariffs of the payment system or processing center), which shall be at the Client’s expense. The payment method for such expenses shall be determined on an individual basis and may be carried out by transferring the necessary amount to the Company Account or by deducting the amount from the Client’s Account.</p><p>4.14. If funds transferred as a deposit to the Client’s Account through an Online Payment System are not credited to the Client’s Account within 2 (two) business days from the date of payment, the Client shall have the right to request that the Company make inquiry on the transfer according to clause 7.5.</p><p>4.15. If funds transferred to Client’s External Account through bank transfer were not credited to the Client within 5 (five) business days since the date the withdrawal request acquired the “Processed” status, the Client shall have the right to request that the Company make an inquiry on the transfer. The Company may provide the Client with a document to confirm the transfer of funds:</p><p>a) for an inquiry on a bank transfer in currency other than RUR: a SWIFT copy confirming the bank transfer’s execution.</p><p>4.16. If funds transferred to the Client’s External Account through an Online Payment System were not credited to the Client within 2 (two) business days from the date the withdrawal request acquired the “Processed” status, the Client shall have the right to request the Company to make an inquiry on the transfer. The Company may provide the Client with a screenshot confirming the transfer of funds to the Client’s External Account.</p><p>4.17. The Client understands and accepts that the inquiry and request for documents, in accordance to clauses 4.13, 4.14, 4.15 and 4.16 of these Regulations, may involve paying commission (in accordance with the tariffs of the remitting bank or Online Payment System), which shall be at the Client’s expense. The payment method for such expenses shall be determined on an individual basis and may be carried out through transferring the necessary amount to the Company Account or by deducting the amount from the Client’s Account.</p><p>4.18. The Client may activate the “Withdrawal only through bank transfer” restriction. The Client shall submit an email ${email}. Once this service has been confirmed, funds withdrawal from the Client’s Account shall only be available through:</p><p>a) the bank transfer to account registered under the name of the Client;<br>b) the internal fund transfer to another of the Client’s Accounts within client portal, provided that the same restriction shall be placed on the Account to which the funds have been transferred.</p><p>4.19. A Client may remove the “Withdrawal only through bank transfer” restriction through the following procedure: by visiting the nearest Company office with an identification document and by submitting an application letter (in no particular format) for removing the restriction.</p><p>4.20. If a Company employee should make a mistake when carrying out a transfer which results in funds not being credited to the Client’s External Account, the sum of the request shall be indemnified to the Client at the Company’s expense.</p><p>4.21. If the Client should indicate invalid payment details when filling out the withdrawal request which results in funds not being credited to the Client’s External Account, the sum of the fees and other charges applied to resolve the issue shall be at the Client’s expense.</p><p>4.22. The Client consents to the Company having the right to unilaterally collect arrears on a Client’s Account out of funds held on other Client’s Accounts within client portal, or from another client portal account if the Company believes that there is a connection between this client portal account and the Client.</p><p>4.23. The transfer of funds to the Company Account and fund withdrawals from the Client’s Account shall meet the requirements and take into account restrictions established by these Regulations, by the laws in force and other legal acts of countries within the jurisdiction of which the fund transfer takes place.</p><p>4.24. The Company has the right to restrict the availability of the Client to conduct Non-trading operations (as well as to suspend the execution of submitted Requests of the Client), until the moment the situation shall be solved, in the following cases:</p><p>a) in case the Client breaches clause 11.1 of the Client Agreement;<br>b) in case of an elimination of consequences caused by a Spike;<br>c) in case of a technical failure occurring at the Company or at an authorized Company Agent.</p><p>4.25. Where the Client’s Account with the Company is in arrears, the Company retains the right to suspend any of the Client’s withdrawal and internal account-to-account transfer requests – including requests which were already made before the Client’s Account fell into arrears – until the Client has paid off the arrears in full.</p><p>5. Funds Transfer Options</p><p><b>5.1. Bank Transfer</b></p><p>5.1.1. The Client may use bank transfer to deposit funds to the Client’s Account and withdraw funds from the Client’s Account, provided that this payment method is supported by the Company at the moment the transfer is executed.</p><p>5.1.2. This transfer method shall be available for the Client’s use once the Company has been provided the signed Client Registration Form and a copy of the Client’s passport (the Client shall provide Company Employee with a scanned copy of their passport/ID and their signed Client Registration Form).</p><p>5.1.3. The Client may only deposit funds through bank transfer to the Company Account from a bank account registered in the Client’s name or may execute the bank transfer without opening a bank account.</p><p>5.1.4. Before carrying out a bank transfer to deposit funds, the Client shall submit a deposit request in client portal and download a payment invoice. Invoice parameters such as the Company bank details, purpose of payment and the invoice due date should be observed carefully by the Client. In case the Client cannot make a transfer with the specified purpose of payment in the invoice, the Client must contact the employee of the Company to address this issue on an individual basis.</p><p>5.1.5. The Company shall have the right to reject the deposit of funds transferred by bank transfer to the Company Account in cases where the specified purpose of payment has been changed or in cases where funds have been transferred by a third person on the behalf of the Client. In such cases the Company shall return the funds back to the bank account from which they were transferred. All costs incurred by returning of such transfers shall be at the Client’s expense.</p><p>5.1.6. The Client may submit the withdrawal request through bank transfer only to bank accounts registered in the Client’s name.</p><p>5.1.7. The Company shall transfer money to the bank account of the Client in accordance with the details provided in the withdrawal request, provided that the conditions in clause 5.1.2 of these Regulations are satisfied.</p><p>5.1.8. When transferring funds, the Company shall use the purpose of payment as provided in client portal. In the case that the purpose of payment is changed, the Company shall be obliged to inform the Client about the new purpose of payment immediately by publishing it in client portal.</p><p>5.1.9. The Client understands and accepts that the Company shall not bear responsibility for the terms and time of execution of a bank transfer (usually bank transfers take around 2-5 business days) by the Client’s bank.</p><p><b>5.2. Credit/Debit Card Transfer</b></p><p>5.2.1. The Client may make a deposit to their Account with accepted types of Credit/Debit Card specified in client portal at any time, provided that this method is supported by the Company at the moment the transfer is executed.</p><p>5.2.2. Acceptance of payments by Clients of the Company through client portal by means of international card payment systems are carried out by official partners of the Company.</p><p>5.2.3. The Client may only carry out a transfer from a Credit/Debit Card issued in the Client’s Account name. Transfers from Credit/Debit Cards of third parties are not accepted by the Company. In cases where the Company receives a payment to the Client’s Account from Credit/Debit Card of a third party, the Company shall perform a refund to the Credit/Debit Card from which they were transferred. All costs incurred by such refund shall be at the expense of the Client or such other third party.</p><p>5.2.4. When making a deposit with Credit/Debit Card the Company shall have the right to request the Client the following documents:</p><p>a) a high resolution scanned copy or photo of passport;&nbsp;<br>b) a high resolution scanned copy or photo of a Credit/Debit Card where the scan or photo of the front of the card should show: the first 6 and last 4 digits of the card number, the full name of the cardholder, the name of the issuing bank and the expiration date. The scan or photo of the back side should show the cardholder’s signature, but the CVC2 or CVV2 code should be concealed. The Client will need to provide a scan or photo for each card used only once;&nbsp;<br>c) in case of transferring funds from a prepaid or virtual credit card (one where the cardholder’s name is not shown), the Client will need to provide a scan of the official confirmation letter from the issuing bank, verifying that the Client is the genuine cardholder. The document must contain the card number, the Client’s full name and bear the stamp of the bank that issued the card.</p><p>5.2.5. The Client understands and accepts that when using this type of transfer, the following restrictions shall be applied on Client’s Account:</p><p>a) Fund withdrawals and internal funds transfer will only be available after 30 calendar days (the restriction under clause 5.2.5 (a) shall be removed in the case that the Client provides the documents specified in clause 5.2.4 of these Regulations, and after such documents have been accepted by the Company);&nbsp;<br>b) Fund withdrawals will only be available through bank transfer to a bank account registered in the Client’s name or to the Credit/Debit card which was used upon deposit, provided that this payment method is supported by the Company at the moment the transfer is executed.</p><p>5.2.6. The Client understands and accepts that the Company shall not be held responsible for the time required to execute transfers, nor for the terms of payments execution by the issuing bank of Credit/Debit Card or for circumstances which result in a technical failure during the execution of transfer when they are not the fault of the Company, but the fault of the issuing bank, processing center or international payment system.</p><p>5.2.7. After the funds transferred by the Client using a Credit/Debit Card have been credited to the Client’s Account with the Company, the obligation of the Company to render the service of crediting the amount is fully performed and not subject to dispute.</p><p>5.2.8. In certain exceptional circumstances, the Company may refund payments made by Credit/Debit Card. In this case, the funds will be refunded to the card that was used for the deposit.</p><p><b>5.3. Internal Fund Transfer</b></p><p>5.3.1. The Client may submit an internal fund transfer request at any time, provided this method is supported by the Company at the moment the transfer is executed.</p><p>5.3.2. The Client may submit an internal fund transfer request to another Client’s Account within client portal. Internal fund transfer request to the accounts of third parties shall not be accepted by the Company.</p><p>5.3.3. When performing the internal transfer of funds from the Client’s Account which previously received a deposit via a Credit/Debit Card, the restrictions shall be applied to the Client’s Account to which funds are being transferred.</p><p>5.3.4. If a Company employee should make a mistake when carrying out an internal transfer that results in funds being credited to the wrong account, the sum of the request shall be indemnified to the Client at the Company’s expense.</p><p>5.3.5. If the Client should make a mistake when filling out the internal fund transfer request which results in funds being credited to the wrong account, the sum of the request shall not be indemnified to the Client.</p><p>6. Client portal</p><p>6.1. The Client agrees with the clauses of these Regulations concerning the usage of client portal.</p><p>6.2. Client portal access is password-protected.</p><p>6.3. The Client confirms and agrees that client portal is accessible only by using a password.</p><p>6.4. The Client shall take full responsibility for the security of their password and its protection from unauthorized access by third parties.</p><p>6.5. All instructions completed through client portal after entering the password are considered to be executed by the Client.</p><p>6.6. Any party who has gained access to client portal by entering the password shall be considered to be the Client.</p><p>6.7. The Company shall not be responsible for any losses endured by the theft, loss or disclosure of the password to third parties.</p><p>6.8. The Client shall have the right to change the password to client portal individually or follow the password recovery procedure.</p><p>To restore the password for access to the client portal, the Customer must send the following documents to the Company’s postal address:</p><p>a) a copy of the Client’s passport/ID;&nbsp;<br>b) a completed, signed and notarized password change application.</p><p>6.9. Deposit requests, withdrawal requests and internal fund transfer requests are displayed in the “Transfer History” section of client portal.</p><p>6.10. The Client shall see the following statuses of the deposit request in the client portal “Transfer History” section:</p><p>a) The “Processing” status means that the funds are expected to be transferred to the Company Account;&nbsp;<br>b) The “Successful” status means that the funds have been deposited to the Client’s Account;&nbsp;<br>c) The “Denied” status means that the request has been denied. The reason the request has been denied is shown in the details of the transfer.</p><p>6.11. The Client shall see the following statuses of the withdrawal request and internal fund transfer request in the client portal “Transfer History” section:</p><p>a) The “Processing” status means that the request has been received by the Company;&nbsp;<br>b) The “Successful” status means that the funds have been transferred to the Client’s External Account that was specified in the instruction or that the funds have been deposited to another of the Client’s accounts if it was an Internal funds transfer;&nbsp;<br>c) The “Denied” status means that the request has been denied. The reason the request has been denied is shown in the details of the transfer.</p><p>6.12. The deposit request, withdrawal request and internal fund transfer request may be canceled by the Client (in the “Transfer History” section of client portal) before they are executed.</p><p>6.13. The deposit request, withdrawal request and internal fund transfer request may be rejected by the Company, specifying the reason for rejection.</p><p>7. Inquiries on transfers and Dispute Resolution</p><p>7.1. If any dispute should arise, the Client shall have the right to lodge a complaint with the Company or send a request for an inquiry. Complaints and requests should be received by the Company within 5 (five) business days of the grievance arising.</p><p>7.2. To lodge a complaint, the time when the dispute arises shall be considered the moment when the log appears in the “Transfer History” of client portal. To send a request, the time when the dispute arises shall be considered the moment as described in clauses 4.13, 4.14, 4.15 and 4.16.</p><p>7.3. To file a request to make an inquiry regarding a bank transfer to the Client, the Client shall:</p><p>a) complete the standard form in the “Payment History” of client portal.<br>b) for an inquiry on a bank transfer in currency other than RUR: attach a SWIFT copy confirming the bank transfer’s execution.</p><p>7.4. To make an inquiry on a Credit/Debit Card transfer, the Client shall:</p><p>a) complete the standard form in the “Payment History” of client portal. All requests filed through any other method (forum, email, telephone, etc.) will not be taken under consideration.&nbsp;<br>b) for an inquiry on a Credit/Debit Card transfer: attach proof of identity and a copy of the Credit/Debit Card.</p><p>7.5. To file a complaint on non-trading operations, the Client should complete the standard form in client portal.</p><p>7.6. Any complaint or request filed in accordance with clauses 7.3, 7.4 and 7.5 is automatically assigned a unique number (TID). The Client shall receive this confirmation in an email sent from ${email}.</p><p>7.7. The complaint must not include:</p><p>a) emotional description/appraisal of the dispute;&nbsp;<br>b) offensive language;&nbsp;<br>c) obscenities or expletives.</p><p>7.8. The Company shall have the right to request that the Client provide additional documents to make an inquiry.</p><p>7.9. The Company shall have the right to refuse a Client complaint regarding non-trading operations in the following circumstances:</p><p>a) where the complaint was not made in accordance with clauses 7.3 and 7.4 of these Regulations;&nbsp;<br>b) where the complaint was not made to the Company via the “Payment History” section of client portal (but by e-mail, telephone, on the forum, etc.).&nbsp;<br>c) where the Client initiates non-trading operations by way of internal account-to-account transfers to other trading or different accounts in the Client’s client portal using the funds credited to the Client’s Account as part of a disputed non-trading operation, or where the Client initiates trading operations using funds which have been credited to the Client’s Account by way of a disputed non-trading operation.&nbsp;<br>d) in other cases, provided for by these Regulations, the Client Agreement and other Business Conditions on the Company’s Website.</p><p>7.10. If the Client is not satisfied with the result of the Company’s review of a disputed situation, the Client may appeal to the relevant authorities in REPUBLIC OF THE MARSHALL ISLANDS in accordance with the laws of REPUBLIC OF THE MARSHALL ISLANDS.</p><p>V.R.T. GROUP LTD</p>`,
    },
    {
      title: "Refund Policy",
      description: `<p>V.R.T. GROUP LTD (hereinafter, the «Company») strives to make every Client happy with the pro-vided service. We have therefore created this Refund Policy, which is an integral part of the Client Agreements, in order to prevent disagreements with our Clients:</p><p>1. By opening a Client Account on the Company’s Website, the Clients agree not to request or demand a refund or chargeback from their bank or credit/debit card provider at any time while or after using Company’s services under the terms of the Client Agreements and other polices and conditions posted on the Website, which are an integral part of the Client Agreements. Any attempt by the Clients regarding the mentioned refund/chargeback may be considered as a breach of the Client Agreements.</p><p>2. If the Company receives the refund or chargeback for any transaction the Company reserves the rights to freeze the current balance of the Client for the refund amount until the end of pro-ceedings on this issue and send the funds back after all required fees have been charged. The Clients are responsible for covering any reversed payments and/or chargeback fees.</p><p>3. The Company reserves the right, at its sole discretion, to refund payments to the Clients, made by any payment system including credit/debit cards, with one day prior notification to the Cli-ent. In this case the funds will be refunded back to the same payment system from which the funds were originally received.</p><p>4. If the Client used a bank transfer to deposit funds to the Client’s Account, the Company shall have the right to reject the deposit of funds transferred by bank transfer to the Company Ac-count in cases where the specified purpose of payment has been changed or in cases where funds have been transferred by a third person on the behalf of the Client. In such cases the Company shall return the funds back to the bank account from which they were transferred. All costs incurred by returning of such transfers shall be at the Client’s expense.</p><p>5. In cases where the Company receives a payment to the Client’s Account from credit/debit card of a third party, the Company shall perform a refund to the credit/debit card from which they were transferred. All costs incurred by such refund shall be at the expense of the Client or such other third party.</p><p>6. If there is a reasonable basis to believe or suspect that the origins of Client’s funds and/or Cli-ent’s entire activities are contrary to Company’s Anti-Money Laundering Policy (AML policy) or any terms of the Client Agreement and all its integral parts or any law, regulations etc, the Company reserves unilateral rights to deny fund deposit/withdrawal to/from Client’s accounts within Company’s systems, freeze such funds, block the Client’s Account, cancel any payments made and/or return such funds back. The Client shall indemnify for and against the Company’s direct and indirect losses/damages which the Company suffers as the result of aforementioned.</p><p>7. In case the Company reasonably classifies any of Client’s activities as suspicious, inappropriate and/or contradicting the usual purpose of the Company’s services usage, with the presence of direct or indirect illegal intent of the Client or without a good faith, the Company reserves the rights to act under this Policy and return funds without giving any prior notification to the Cli-ent. In such cases the Client shall indemnify for and against the Company’s direct and indirect losses/damages, expenses which the Company suffers as the result of the Client’s actions.</p><p>8. The Company will not provide any refunds for the Client’s losses due to any reasons.</p><p>9. The Client may send a written refund request if the Client’s account had been deposited into, provided that the Client has not performed any trading operations or other transactions for more than 14 days. The Company will refund any funds with the same method of deposited payment within a reasonable time. The refund can only be carried out to the Client, who has deposited funds into particular Client’s Account. All costs incurred by such refund shall be at the expense of the Client. The refund will be for the full amount, unless other arrangements have been made. All other requests will be considered as withdrawal and will be processed using the usual meth-ods and procedures.</p><p>10. In case of detecting any abuses or fraudulent activities by the Client against the Company’s pol-icies, the Company reserves the right to decline the Client’s request of refund.</p><p>11. The refund request should be sent by the Client to ${email} with the following details:</p><p>1. Full Name</p><p>2. Account Number</p><p>3. Country of Residence</p><p>4. Currency Used</p><p>5. Amount of Requested Refund</p><p>6. Payment Method</p><p>12. This Refund Policy is for informing the Clients that the Company does not provide any refunds unless any of the above occurred.</p><p>13. The Company reserves rights to modify the Refund Policy at its discretion, without notice.</p>`,
    },
    {
      title: "Privacy Policy",
      description: `<p>1. Obligations of the company</p><p>1.1. V.R.T. GROUP LTD (the Company) places a high priority on the privacy and integrity of the personal information of our Clients, both present and future and other visitors to the site. The Company strives to ensure the safety and confidentiality of all information received from the Client. This Privacy Policy (the Policy) describes how the Company collects, uses and protects the personal information of the Client. This Policy does not require you to submit any more information than you have already provided to the company if you are our client, and in the case of changes to the service by authorized representatives of the company.</p><p>2. The Client’s Personal Data</p><p>2.1. To open an account, the Company will need certain information (Personal Data) about the Client. This data will also provide you with a better understanding of your needs and will help us provide you with information about products and services that are most suitable and convenient for you. This data will also be used to improve the quality of advising our Clients on all emerging issues.</p><p>3. The Personal Data received from the Client</p><p>3.1. Information provided on applications and other Company forms, such as name, address, date of birth, passport data, occupation and personal mobile phone number.</p><p>3.2. Financial information such as income, assets, investment experience.</p><p>3.3. Documents provided to confirm identity, such as passport, utility bills, and/or bank statements or company incorporation information.</p><p>3.4. Payment documents: money transfer orders, bank statements, bank card copies, etc.</p><p>4. Use of Personal Data</p><p>4.1. The Company may use a Client’s Personal Data for one or more of the following purposes:</p><p>a) to confirm the Client’s identity;&nbsp;<br>b) to process trading and non-trading operations;&nbsp;<br>c) carry out the company’s anti-money laundering policy;&nbsp;<br>d) to inform the Client of Company products or services that may be of interest to the Client;&nbsp;<br>e) to provide other services that are relevant to the Client’s business relationship with the Company;&nbsp;<br>f) to keep a correct database of the Client’s account data;&nbsp;<br>g) to analyze statistical data to provide Clients with the most suitable products and services.</p><p>5. Cookies</p><p>5.1. Cookies are small text files sent by a web server and stored on a visitor’s browser which are read later by the server when the visitor returns to the site. Cookies store information such as passwords (encrypted), usernames, shopping cart, certain preferences, etc. allowing visitors to visit sites repeatedly without having to enter the same information over and over. Cookies are not used to determine the personal identity of anyone visiting the site.</p><p>6. Third Parties</p><p>6.1. The Company may convey the Client’s Personal Data to associated or affiliated companies, auditors, agents (including payment agents), banks or other authorized organizations or persons (Authorized Persons) for the sole purpose of processing the Client’s trading and non-trading instructions.</p><p>The Company guarantees that all Authorized Persons will adhere to the terms of this Policy and take all necessary steps to protect the Client’s Personal Data. The Company may provide Personal Data to third parties who are not the Company’s partners, agents or affiliates only when requested by representatives of legal or administrative authorities.</p><p>7. Use of Information</p><p>7.1. By registering an account with the Company, you consent to the use of your personal details, and their processing: collection, recording, classification, aggregation, storage (updating, changing) extraction, use, transfer (distribution, provision of access) anonymization, blocking, deletion, and destruction of any information relating directly or indirectly to you, your trade transactions and payments, in accordance with this Privacy Policy.</p><p>8. Security and Protection</p><p>8.1. The Company takes the issue of security very seriously and takes all possible measures to ensure the safety of your confidential information, including adhering to strict standards for the internal use of confidential information and using leading data storage technology.</p><p>8.2. The company uses the Transport Layer Security (TLS) cryptographic protocol version 1.2. for the protection of Customer information.</p><p>8.3. To make a payment from a plastic card, you fill out the form on the website of the processing center. To exclude the possibility of using these data, they are transferred to the Company in a reduced version (PSI / DSS standard) via a secure connection (see 8.2.). The company does not store full information about bank cards of customers.</p><p>9. Contacts</p><p>9.1. If you have any questions about this Policy do not hesitate to contact us:</p><p>${email}</p><p>V.R.T. GROUP LTD</p>`,
    },
    {
      title: "AML and KYC",
      description:
        "<p>AML and KYC policy is applicable to the Company, its partners and Clients and is intended to hinder and actively prevent money laundering and any other activity facilitating money laundering, financing of terrorism or criminal activity. The company demands from its executives, employees and affiliates to follow the principles of this Policy in order to prevent use of its services for the purposes of money laundering.</p><p>The Company determines money laundering as the process by means of which true origin and ownership to the revenues obtained from criminal activity are concealed in such a way that they could be used without any suspicion. It may take many forms, including:</p><p>– efforts to transform money received by illegal means into lawfully obtained money;</p><p>– making profit from lucrative crime, such as theft, fraud and evasion of taxes;</p><p>– be directly related to any property, money, received by illegal means or connected with terrorist activity;</p><p>– investment of revenues obtained from criminal activity into full range of financial products.</p><p>The essence of AML and KYC policy includes the necessity to provide the potential clients of the Company with the package of documents containing regulated data on its identity.</p><p>This system performs simultaneously several functions. On the one hand, KYC enables the Company:</p><p>– to verify identity of the client;</p><p>– enables the security service to evaluate the risk of involvement of the client into the illegal activity;</p><p>– enables to establish a filter regulating the type and number of transactions for the particular client in order to manage its risks;</p><p>– enables to monitor unusual client transactions and, if needed, to initiate their investigation.</p><p>– The minimal requirements for identification in order to open new account are listed below. If the client refuses or is unable to provide the required information for opening its account, the account shall be closed:</p><p>– official name and any other used names (for example, a maiden name);</p><p>– correct permanent address, proved by one of the official documents – utility bill, tax assessment, bank statement. The date of issue of such document shall not exceed 3 months;</p><p>– telephone number, fax number and e-mail address;</p><p>– date and place of birth;</p><p>– nationality;</p><p>– profession, job title and/or name of the employer;</p><p>– official personal identification number or other unique identifier, contained in the up-to-date official document (for example, passport, identity card, residence permit, driving license), having the photo of the customer;</p><p>– personally signed application.</p><p>If the documents of the Client are issued not in English, such documents at the request of the Company shall at first be translated into English by any official translator, and such translated copy shall be duly signed and affixed by this translator and forwarded with other relevant documents and photos of the Client.</p><p>The Client undertakes the following obligations within the framework of the AML and KYC policy:</p><p>– to uphold legal standards, including international, intended to fight against illegal trade, financial fraud, money laundering and legalization of proceeds, received by illegal means;</p><p>– to eliminate direct or indirect aiding illegal financial activity and any other illegal transactions using the Website.</p><p>The Client guarantees non-criminal origin, lawful ownership and right to use money transferred by it to the Accounts of the Company.</p><p>In case of suspicious or fraudulent money adding, including use of the stolen credit cards and/or any other fraudulent activity (including any repayment or annulments of payments), the Company reserves the right to block the account of the Client and annul any performed payments, as well as to investigate the nature of suspicious transactions on the Account of the Client, and therefore to suspend such transactions till clarification of the reasons of arising thereof and termination of the investigation.</p><p>During the investigation, the Company reserves the right to require from the Client the copies of the identity cards and bank card used for deposits, payment, as well as other documents, proving the legal ownership and non-criminal origin of the funds.</p><p>The Client is prohibited to use services and/or software for any illegal or fraudulent action, or for any illegal or fraudulent transaction (including money laundering) pursuant to the legislation of the state of the jurisdiction of the Client.</p><p>The refusal of the Company to execute suspicious transactions shall not serve the ground for arising of the legal liability of the Company for the failure to fulfil obligations with regard to the Client.</p><p>When depositing funds, the name of the sender shall coincide with the name of the client, stated in the account of the Company. In this case third-party mediation shall be prohibited.</p><p>The Client may withdraw funds in the same manner by online transfer through the same system of online transfer to the same account, from which they were transferred.</p><p>The Company strives to implement strict policy of anti-money laundering in order to guarantee that its clients will be identified as such suspicions to a certain standard in order to minimize the procedural obstacles for actual and legal clients. In order to fulfil its obligation to provide comprehensive assistance to the government, fighting against such illegal financial transactions, the Company has the electronic system, which completely verifies the identity of its client and may maintain the detailed report on all previous financial transactions.</p><p>The Company allows monitoring all suspicious actions and timely providing the law enforcement agencies with detailed information. That is why complete legal defence is provided to the clients, who provide the confidential financial data of the Company.</p><p>The Company also adheres to compliance with AML and KYC policy in order to fulfil its official legal obligations.</p><p>Considering new normative guiding principles, the procedure of due diligence will also include the verification of potential employees on the list of terrorists/individuals/organizations. The role of the employees in realization of any structure of AML is essential, the employees will have to perform effectively the specified procedures. The employees shall keep strict confidentiality regarding KYC and other AML procedures. If any kind of activity is transferred to any agency private person, it will be guaranteed that they follow the principles specified in this Policy.</p><p>The Company also ensures regular update of its platform according to current rules and provisions developed to monitor money laundering and other criminal financial practices on site.</p><p>Each subdivision of the Company shall apply AML and KYC policy, executed pursuant to the requirements of local legislation.</p><p>All personal and service documentation will be kept within minimum period of time, determined by local legislation.</p><p>All new employees obligatory undergo training concerning AML and KYC. The existing employees undergo training annually. Participation in additional training programs is obligatory for all employees related to AML and KYC.</p><p>V.R.T. GROUP LTD</p>",
    },
  ],
};

const footer = {
  leftBlock: {
    title: "Documentation:",
    leftBlockList: [
      { title: "Legal information", link: "/legal-information" },
      { title: "Disclaimer", link: "/legal-information" },
      { title: "Client Agreements", link: "/legal-information" },
      {
        title: "Regulations for Non-Trading Operations",
        link: "/legal-information",
      },
      { title: "Refund Policy", link: "/legal-information" },
      { title: "Privacy Policy", link: "/legal-information" },
      { title: "AML and KYC", link: "/legal-information" },
    ],

    subtitle: "Risk Disclosure:",
    descriptionImage: "/images/footer/footer-txt-en-01.svg",
    descriptionImageAlt: "warning text",
  },

  rightBlock: {
    title: "Contacts:",
    rightBlockList: [
      {
        title: "Ulitsa Okhotnyy Ryad, 2, Moscow, Russia, 109012",
        image: "/images/footer/right-block/map.svg",
        alt: "map",
      },
      {
        title: `${email}`,
        image: "/images/footer/right-block/mail.svg",
        alt: "mail",
      },
      {
        title: `${phoneNumber}`,
        image: "/images/footer/right-block/phone.svg",
        alt: "phone",
      },
    ],

    description: [
      `The website ${domain} is a trademark, this site is the property of V.R.T. GROUP LTD, registration number 110989, Ulitsa Okhotnyy Ryad, 2, Moscow, Russia, 109012.`,
      `V.R.T. GROUP LTD company and the website ${domain} do not render any services to citizens and residents of the United States, Belgium, Turkey, Israel, Syria, Sudan, Iran, North Korea, Japan and other countries and jurisdictions, where these services cannot be provided by virtue of the current legislation.`,
    ],
  },
  payPartners: "/images/footer/payments-footer.png",
};

const en = {
  header: header,
  footer: footer,
  mainPage: mainPage,
  accountTypesPage: accountTypesPage,
  educationPage: educationPage,
  analyticsPage: analyticsPage,
  companyPage: companyPage,
  contactsPage: contactsPage,
  legalInformation: legalInformation,
};

export default en;
