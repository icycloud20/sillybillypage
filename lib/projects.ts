export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  media: { source: string; poster?: string };
};

export const projects: Project[] = [
  {
    slug: 'mega-rolls-rolling',                              // url: /showcase/my-demo
    title: 'Rolling + Satisfying Currency',
    description: 'A rolling system with a satisfying currency earning effect',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-rolling.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-upgrade-tree',                              // url: /showcase/my-demo
    title: 'Satisfying Upgrade Tree',
    description: 'A satisfying and smooth upgrade tree system',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-upgrade-tree.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-summoning',                              // url: /showcase/my-demo
    title: 'Basic Summoning System',
    description: 'A half satisfying summoning system lol',
    tags: ['Mega Rolls', 'Simulator', 'Luck/RNG', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-summoning.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-inventory-exists',                              // url: /showcase/my-demo
    title: 'Inventory & Exist Counts System',
    description: 'A inventory system with equipping/unequipping along with accurate exist counts & serials (one serial is missing because I gave it to myself)',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-inventory-exists.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-potions-n-notifs',                              // url: /showcase/my-demo
    title: 'Potions, Giftbags & Item Notifications System',
    description: 'System that allows you to use multiple of a potion/gift bag as well as satisfying item notifcations to come with.',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-potions-n-notifs.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-chest',                              // url: /showcase/my-demo
    title: 'Satisfying Chest Open',
    description: 'A satisfying chest opening effect with item notifications',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-chest.mp4',              // local file path under /public
    }
  },

  {
    slug: 'mega-rolls-digging',                              // url: /showcase/my-demo
    title: 'Digging System',
    description: 'Satisfying digging system which gets a random chest and opens it each with their own luck boost.',
    tags: ['Mega Rolls', 'Simulator', '2025'],                    // used by filter/search
    media: {
      source: '/videos/mega-rolls-digging.mp4',              // local file path under /public
    }
  },

  {
    slug: 'punching-system-simple',                              // url: /showcase/my-demo
    title: 'Simple Punching System',
    description: 'Simple combat punching system with multiplayer stun',
    tags: ['Combat', '2025'],                    // used by filter/search
    media: {
      source: '/videos/punching-system-simple.mp4',              // local file path under /public
    }
  },

  {
    slug: 'weird-multishot-ability',                              // url: /showcase/my-demo
    title: 'Multishot Star Ability',
    description: 'Star looking ability that well shoots multiple at once',
    tags: ['Combat', 'Ability', '2022'],                    // used by filter/search
    media: {
      source: '/videos/weird-multishot-ability.mp4',              // local file path under /public
    }
  },

  {
    slug: 'pew-pew',                              // url: /showcase/my-demo
    title: 'Shoot + Currency',
    description: 'Shooting system with satisfying coin drop effects',
    tags: ['Simulator', '2023'],                    // used by filter/search
    media: {
      source: '/videos/pew-pew.mp4',              // local file path under /public
    }
  },

  // YEARS ONLY FILES
  {
    slug: 'cutscene',                              // url: /showcase/my-demo
    title: 'Player Cutscene',
    description: 'Silly dramatic cutscene for the player',
    tags: ['2024'],                    // used by filter/search
    media: {
      source: '/videos/cutscene.mp4',              // local file path under /public
    }
  }
];
