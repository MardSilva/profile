// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MardSilva', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Eymard Silva',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ariful-alam',
    x: 'arif_szn',
    mastodon: 'eymardsilva@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'ei_mard',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'eym_silva',
    dev: 'eym_silva',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mardsilva.github.io/profile/',
    phone: '',
    email: 'eym_silva@outlook.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.NET',
    '.NET Core',
    'Blazor',
    'EF Core',
    'SQL',
    'PL-SQL',
    'MySQL/SQLite',
    'Git',
    'PostgreeSQL',
    'MongoDB',
    'Kubernetes',
    'RabbitMQ',
    'Microservices/Monolith',
  ],
  experiences: [
    {
      company: 'Serviços Partilhados do Ministério da Saúde de Portugal',
      position: '.NET Developer',
      from: 'Feb/2025',
      to: 'Present',
      companyLink: 'https://www.spms.min-saude.pt/',
    },
    {
      company: 'Noatum Logistics',
      position: 'Position',
      from: 'Ago/2024',
      to: 'Dez/2024',
      companyLink: 'https://www.noatumlogistics.com/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'IGTI',
      degree: 'Post graduate in Software Architecture and SOlutions',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'UNINTER - Centro Universitário Internacional',
      degree: 'Associate Degree',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Why is Clean Architecture Essential in Software Development?',
      conferenceName: '',
      journalName: 'LinkedIn Articles',
      authors: 'Eymard Silva',
      link: 'https://www.linkedin.com/pulse/why-clean-architecture-essential-software-development-eymard-silva-qt3kf/?trackingId=TX%2F9%2F1%2F2T3K1DbNUcU89yQ%3D%3D',
      description:
        'Have you ever faced systems that turned into a tangled mess of code, hard to modify and even harder to test? If so, you've experienced the struggle of poorly structured code. But don’t worry, there’s a solution: Clean Architecture!',
    },
    {
      title: 'Delving into Unit Test Naming Conventions in .NET',
      conferenceName: 'Conference Name',
      journalName: 'LinkedIn Articles',
      authors: 'Eymard Silva',
      link: 'https://www.linkedin.com/pulse/delving-unit-test-naming-conventions-net-eymard-silva-lxlbf/?trackingId=TX%2F9%2F1%2F2T3K1DbNUcU89yQ%3D%3D',
      description:
        'Delving into Unit Test Naming Conventions in .NET: Dive into the art of naming conventions in .NET unit testing. Drawing from the insights of Julio Casal and Pierre 🐐 Belin, this article delves deep into naming patterns that amplify clarity and understanding of tests. A must-read for developers aiming to refine their testing practices.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'eym_silva', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
