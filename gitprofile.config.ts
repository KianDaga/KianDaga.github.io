// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kiandaga', // Your GitHub org/user name. (This is the only required config)
  },

  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // Example repos
      },
    },
  },

  seo: { 
    title: 'Portfolio of Kian Daga', 
    description: 'Showcasing my projects, certifications, and skills in Python, JavaScript, and web development.', 
    imageURL: 'https://avatars.githubusercontent.com/u/kiandaga.png', // Replace with your GitHub avatar URL or any custom image
  },

  social: {
    x: 'DagaKian81085',
    facebook: 'Kian Daga',
    instagram: 'dagakian',
    reddit: 'u/Far-Cantaloupe-6156',
    youtube: 'BloxDudeKD',
    medium: 'Kian daga',
    discord: 'fifabros.official',
    email: 'kiandaga3@gmail.com',
  },

  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Replace with your real resume link
  },

  skills: [
    'HTML',
    'Python',
    'JavaScript',
    'TypeScript',
    'Git',
  ],

  certifications: [
    {
      name: 'Python Practical',
      body: 'Python Practical Projects Course',
      year: 'August 2025',
      link: 'https://theyoungmaker.com',
    },
    {
      name: 'Python Advanced',
      body: 'Python Advanced Course',
      year: 'May 2025',
      link: 'https://theyoungmaker.com',
    },
    {
      name: 'Python Intermediate',
      body: 'Python Intermediate Course',
      year: 'February 2025',
      link: 'https://theyoungmaker.com',
    },
    {
      name: 'Python Beginner',
      body: 'Python Beginner Course',
      year: 'November 2024',
      link: 'https://theyoungmaker.com',
    },
  ],

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },

  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'lofi',

    disableSwitch: false, // Show/hide theme switcher
    respectPrefersColorScheme: false, // Use system preference
    displayAvatarRing: true, // Show profile picture ring

    // Available themes
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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
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
