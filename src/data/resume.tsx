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
  description: 'I create visuals & software that users love',
  summary: `I'm a web developer & graphic designer with 3+ years of experience shipping software and visual content. Grew a [YouTube channel](https://www.youtube.com/@LogicalHimanshu/shorts) to 200K subscribers (20M+ views on some shorts) and currently growing [KeyCorrect](https://chromewebstore.google.com/detail/autocorrect-misspelled-wo/ppmhjnpgbdlpeoeboaldplmffgkijjji), a Chrome extension with 3,000+ users`,
  avatarUrl: `${basePath}/me.webp`,
  skills: [
    { name: 'React', icon: ReactLight },
    { name: 'Next.js', icon: NextjsIconDark },
    { name: 'TypeScript', icon: Typescript },
    { name: 'JavaScript', icon: Javascript },
    { name: 'Node.js', icon: Nodejs },
    { name: 'Python', icon: Python },
    // { name: 'Postgres', icon: Postgresql },
    { name: 'Figma', icon: Figma },
    { name: 'UI/UX', icon: '' },
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
      start: 'Jun 2023',
      end: 'Jul 2026',
      description:
        "It's a browser extension that autocorrects your typos and makes your typing faster. It has 5000+ users and i built it using Typescript, React.js, Levenshtein distance algorithm, The hardest part was to make it work on google docs",
    },
    {
      company: 'LeadLooking',
      href: 'https://leadlooking.com',
      badges: [],
      location: 'Remote',
      title: 'Designer & Developer',
      logoUrl: `${basePath}/leadlooking.png`,
      start: 'May 2024',
      end: 'Jan 2025',
      description:
        'An AI agent that finds high-intent leads from Reddit on autopilot. I also automated the entire blog generation process, visit (leadlooking.com/blog) to see AI-generated, SEO-ready posts.',
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
      company: 'Craftkal',
      href: '',
      badges: [],
      location: 'Noida, India',
      title: 'UI/UX Designer',
      logoUrl: `${basePath}/craftkal.png`,
      start: 'Jan 2022',
      end: 'Apr 2023',
      description:
        "Designed the complete UI/UX for Craftkal's mobile app as part of the UI/UX team, created all app pages, logo and user flows in Figma, along with Play Store screenshots.",
    },
  ],
  education: [],
  projects: [
    {
      title: 'KeyCorrect: Autocorrect Extension',
      href: 'https://keycorrect.com',
      dates: 'Jun 2023 - Jul 2026',
      active: true,
      description: `- Chrome extension that autocorrects typos \n - Achieved **50ms** correction latency \n - Grew to **5,000+ users**, driving 60%+ of site traffic \n - Generated **$1,000+ revenue** with 22% avg weekly growth`,
      technologies: ['Next.js', 'Typescript', 'PostgreSQL', 'TailwindCSS'],
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
      href: 'https://github.com/thishumanoid/leadlooking/tree/old-main-leadlooking',
      dates: 'May 2024 - Jan 2025',
      active: true,
      description: `- Autonomous AI agent that scrapes Reddit for  leads \n - Uses **Groq AI** to analyze posts in real-time \n - Auto-published **28+ SEO** blog posts via Gemini API pipeline \n - Instant email alerts via **Mailtrap** SDK\n`,
      technologies: ['Next.js', 'React.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI'],
      links: [
        // {
        //   type: 'Source',
        //   href: 'https://github.com/thishumanoid/leadlooking/tree/old-main-leadlooking',
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: `${basePath}/leadlooking-screenshot.png`,
      video: '',
    },
    // {
    //   title: 'FolderXD Workspace',
    //   href: 'https://folderxd.web.app',
    //   dates: 'January 2024 - April 2026',
    //   active: true,
    //   description: `- **VS Code-inspired** folder system on Docs \n - **Sublime**-like fuzzy search across all docs \n - Real-time cloud sync backed by **PostgreSQL** \n - Used **React Context** API for fast in-memory folder state`,
    //   technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Postgres'],
    //   links: [],
    //   image: `${basePath}/folderxd-screenshot.png`,
    //   video: '',
    // },
    {
      title: 'Meta Ad Creative Design',
      href: '',
      dates: 'Jul 2026',
      active: true,
      description: `Designed a performance-focused Meta ad creative for Mullein Brand. Used **Nano Banana** to clean up unwanted leaf clutter before compositing. Final layout, typography, and color grading done in **Photoshop** for a polished, scroll-stopping social ad.`,
      technologies: ['Photoshop', 'Nano Banana', 'Gemini', 'Typography'],
      links: [],
      image: `${basePath}/Mullein-Honey-Ad-Thumbnail.png`,
      video: '',
    },
    {
      title: 'UI/UX Work',
      href: 'https://www.figma.com/design/7SexTDxPkWXowgc6ecmwrp/banner-design?node-id=0-1&t=7sCGo72EyM4e4JQv-1',
      dates: 'Jan 2022 - Apr 2023',
      active: true,
      description: `- Designed complete **UI/UX** for Craftkal's mobile app in Figma \n - Created all app screens, user flows, and the **logo** \n - Designed **Play Store** screenshots for app listing`,
      technologies: ['Figma', 'Lucid Icons', 'Flutter'],
      links: [],
      image: `${basePath}/craftkal-screenshot.png`,
      video: '',
    },
    {
      title: 'Graphic Design Work',
      href: 'https://www.figma.com/design/7SexTDxPkWXowgc6ecmwrp/banner-design?node-id=0-1&t=7sCGo72EyM4e4JQv-1',
      dates: 'Dec 8, 2024',
      active: true,
      description: `Designed a minimal YouTube channel banner in **Figma**, blending clean layout with subtle brutalist design elements for a bold, distinctive look.`,
      technologies: ['Figma', 'Phosphor Icons', 'Midjourney AI'],
      links: [],
      image: `${basePath}/yt-banner.png`,
      video: '',
    },
    {
      title: 'YouTube Channel (200K Subs)',
      href: 'https://himanart.github.io/p/',
      dates: 'Apr 2023 - Mar 2024',
      active: true,
      description: `- Grew channel from **0 to 200K+** subscribers in 15 months \n - Multiple Shorts crossed **[20M+ views](https://www.youtube.com/shorts/TN-NWRZVKAY)** each \n - Made **$1100+** in revenue \n - Learned Hooks, Pacing, Storytelling`,
      technologies: ['Figma', 'Photoshop'],
      links: [],
      image: `${basePath}/thumbnails.png`,
      video: '',
    },
    {
      title: 'TapMo: Amazon Store Banner',
      href: 'https://www.figma.com/design/SLdk7x1A0YW10dOcMwVW1p/Amazon-Graphics?node-id=1-1038&t=bg2CUA8SQxYKy7UN-1',
      dates: 'Aug 2026',
      active: true,
      description: `Designed an Amazon store banner for TapMo, an NFC business card startup. \n - Studied brand identity to craft a **cohesive visual design** \n - Highlighted product's core value: **tap-to-share digital profiles**`,
      technologies: ['Photoshop', 'Nano Banana', 'Gemini', 'Typography'],
      links: [],
      image: `${basePath}/Amazon-Store Banner-Thumbnail.webp`,
      video: '',
    },
    {
      title: 'TapMo: LinkedIn Ad Creative',
      href: '',
      dates: 'Aug 2026',
      active: true,
      description: `- Designed a superhero-themed **LinkedIn ad** for TapMo's metal NFC business card. \n - Used **Gemini AI** to generate custom visual assets \n - Composited AI-generated art with product shots in **Photoshop**`,
      technologies: ['Photoshop', 'Gemini AI'],
      links: [],
      image: `${basePath}/Spiderman-Linkedin-Post.webp`,
      video: '',
    },
    {
      title: 'Finance Carousel Design',
      href: '',
      dates: 'Jul 2026',
      active: true,
      description: `- Designed a **6-page carousel** for Ben Felix (500K+ subs) \n - Broke down 5 personal finance myths with custom illustrations \n - Simplified data-heavy concepts into **clean, scannable visuals**`,
      technologies: ['Figma'],
      links: [],
      image: `${basePath}/Ben-Carousel-Thumbnail.webp`,
      video: '',
    },
    {
      title: 'Lakshita: Fashion Ad Creative',
      href: 'https://www.figma.com/design/ELe5z0NrWmH9jT1LKKVpaL/Lakshita-Brand-Graphics?node-id=9-599&t=zlV376fR1VxItNYa-1',
      dates: 'Sep 2026',
      active: true,
      description: `- Designed a **promotional ad creative** for Lakshita, a fashion brand \n - Combined lifestyle photography with elegant typography`,
      technologies: ['Figma', 'Nano Banana'],
      links: [],
      image: `${basePath}/Lakshita-Post-Thumbnail.webp`,
      video: '',
    },
  ],
  hackathons: [],
} as const;
