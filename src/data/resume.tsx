import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';
import { ReactLight } from '@/components/ui/svgs/reactLight';
import { NextjsIconDark } from '@/components/ui/svgs/nextjsIconDark';
import { Typescript } from '@/components/ui/svgs/typescript';
import { Nodejs } from '@/components/ui/svgs/nodejs';
import { Python } from '@/components/ui/svgs/python';
import { Postgresql } from '@/components/ui/svgs/postgresql';
import { Javascript } from '@/components/ui/svgs/javascript';
import { Figma } from '@/components/ui/svgs/figma';
import { UiUx } from '@/components/ui/svgs/uiux';
import { basePath } from '@/lib/basePath';

export const DATA = {
  name: 'Himanshu Gupta',
  initials: 'HG',
  url: 'https://github.com/thishumanoid',
  location: 'Noida, India',
  locationLink: 'https://www.google.com/maps/place/noida',
  description: 'I build software that users love',
  summary: `I'm a web developer & UI/UX designer with 3+ yrs of experience building software, from simple tools to advanced web apps. Currently growing [KeyCorrect](https://chromewebstore.google.com/detail/autocorrect-misspelled-wo/ppmhjnpgbdlpeoeboaldplmffgkijjji), a Chrome extension with 5000+ users.`,
  avatarUrl: `${basePath}/me.webp`,
  skills: [
    { name: 'React', icon: ReactLight },
    { name: 'Next.js', icon: NextjsIconDark },
    { name: 'TypeScript', icon: Typescript },
    { name: 'JavaScript', icon: Javascript },
    { name: 'Node.js', icon: Nodejs },
    { name: 'Python', icon: Python },
    { name: 'Postgres', icon: Postgresql },
    { name: 'Figma', icon: Figma },
    { name: 'UI/UX', icon: UiUx },
  ],
  navbar: [
    // { href: '/portfolio', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'neuhiman@gmail.com',
    // tel: '+91',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/thishumanoid',
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/not-himanshu/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/ThisEarthian',
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'KeyCorrect',
      href: 'https://keycorrect.com',
      badges: [],
      location: 'Remote',
      title: 'Founder & Developer',
      logoUrl: `${basePath}/keycorrect.png`,
      start: 'June 2023',
      end: 'Now',
      description:
        "It's a browser extension that autocorrects your typos and makes your typing faster. It has 5000+ users and i built it using Typescript, React.js, Levenshtein distance algorithm, The hardest part was to make it work on google docs",
    },
    {
      company: 'LeadLooking',
      href: 'https://leadlooking.com',
      badges: [],
      location: 'Remote',
      title: 'Web Developer',
      logoUrl: `${basePath}/leadlooking.png`,
      start: 'May 2024',
      end: 'Jan 2025',
      description:
        "An AI agent that finds high-intent leads from Reddit on autopilot. I also automated the entire blog generation process, visit (leadlooking.com/blog) to see AI-generated, SEO-ready posts.",
    },
    {
      company: 'FolderXD',
      badges: [],
      href: 'https://folderxd.web.app',
      location: 'Remote',
      title: 'Web Developer',
      logoUrl: `${basePath}/folderxd.png`,
      start: 'Jan 2024',
      end: 'Jun 2026',
      description:
        "It's a browser extension that adds folder interface on google workspace apps like Google Docs, Sheets, Slides, etc... so that you can organize your docs in a better way",
    },
    {
      company: "Craftkal",
      href: "",
      badges: [],
      location: "Noida, India",
      title: "UI/UX Designer",
      logoUrl: `${basePath}/craftkal.png`,
      start: "January 2022",
      end: "April 2023",
      description:
        "Designed the complete UI/UX for Craftkal's mobile app as part of the UI/UX team, created all app pages, logo and user flows in Figma, along with Play Store screenshots.",
    },
    
  ],
  education: [
    
  ],
  projects: [
    {
      title: 'KeyCorrect: Autocorrect Extension',
      href: 'https://keycorrect.com',
      dates: 'Jun 2023 - Present',
      active: true,
      description: `It's a browser extension that autocorrects your typos and makes your typing faster. It has 5000+ and i built it using Typescript, React.js, TailwindCSS, Levenshtein distance algorithm.`,
      technologies: ['Next.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI'],
      links: [
        // {
        //   type: 'Website',
        //   href: 'https://keycorrect.com',
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: `${basePath}/keycorrect-screenshot2.png`,
      video: '',
    },
    {
      title: 'LeadLooking: AI Agent',
      href: 'https://leadlooking.com',
      dates: 'May 2024 - Jan 2025',
      active: true,
      description: `A fully autonomous AI agent that monitors Reddit 24/7 for high-intent leads and automatically emails business owners the leads it finds.`,
      technologies: ['Next.js', 'React.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/thishumanoid/leadlooking/tree/old-main-leadlooking',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: `${basePath}/leadlooking-screenshot.png`,
      video: '',
    },
    {
      title: 'FolderXD Workspace',
      href: 'https://folderxd.web.app',
      dates: 'January 2024 - April 2026',
      active: true,
      description: `It's a browser extension that adds folder interface on google workspace apps like Google Docs, Sheets, etc... so that you can organize your docs in a better way`,
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Postgres'],
      links: [
        
      ],
      image: `${basePath}/folderxd-screenshot.png`,
      video: '',
    },
    {
      title: 'UI/UX Work',
      href: 'https://www.figma.com/design/f3EhJ4KOyMwYy3EfU38g5I/playstore-screnshots?node-id=0-1&t=rFN6tQXWCmiWqcXd-1',
      dates: 'Jan 2022 - April 2023',
      active: true,
      description:
        `Designed the complete UI/UX for Craftkal's mobile app as part of the UI/UX team, created all app pages, logo and user flows in Figma, along with Play Store screenshots.`,
      technologies: ['Figma', 'Lucid Icons'],
      links: [
        
      ],
      image: `${basePath}/craftkal-screenshot.png`,
      video: '',
    },
    {
      title: 'Graphic Design',
      href: 'https://www.figma.com/design/7SexTDxPkWXowgc6ecmwrp/banner-design?node-id=0-1&t=7sCGo72EyM4e4JQv-1',
      dates: 'Dec 8, 2024',
      active: true,
      description:
        `Designed a minimal YouTube channel banner in Figma, blending clean layout with subtle brutalist design elements for a bold, distinctive look.`,
      technologies: ['Figma', "Phosphor Icons"],
      links: [
      ],
      image: `${basePath}/yt-banner.png`,
      video: '',
    },
    {
      title: 'Thumbnail Designs',
      href: 'https://himanart.github.io/p/',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        `Designed all video thumbnails for a YouTube channel with 100K+ subscribers in Figma and Photoshop that helped drive consistent viewer engagement.`,
      technologies: ['Figma', 'Photoshop'],
      links: [
       
      ],
      image: `${basePath}/thumbnails.png`,
      video: '',
    },
  ],
  hackathons: [],
} as const;
