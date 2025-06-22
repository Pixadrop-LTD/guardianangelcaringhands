import type { Media } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
  highlight: {
    education: Media
    wellness: Media
    activities: Media
  }
  cases: {
    education: Media
    wellness: Media
    skill: Media
  }
}

export const homePage: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  highlight,
  cases,
}) => {
  // Case study data defined directly in the home page config
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'homeHero',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'Donate Now',
            url: '/donate',
          },
        },
        {
          link: {
            type: 'custom',
            appearance: 'secondary',
            label: 'Sponsor a Child',
            url: '/sponsor',
          },
        },
      ],
      media: heroImage.id,
      youTubeVideoId: 'SbD9sXmJJHA',
      title: 'Empowering Vulnerable Children',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Guardian Angels Caring Hands offers a nurturing and safe environment, providing children facing adversity essential support, hope, and healing to build brighter futures.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockType: 'caseStudies',
        sectionTitle: 'Stories of Transformation',
        sectionSubtitle: 'See the real impact of our programs through these case studies.',
        caseStudies: [
          {
            title: 'From Struggling Learner to Star Student',
            program: 'Educational Support',
            youTubeVideoId: 'example-video-id-1',
            media: cases.education.id,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Through our dedicated educational support program, Sarah, who was struggling with reading, gained confidence and improved her grades significantly. She now loves going to school.',
                        version: 1,
                      },
                    ],
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          {
            title: 'A New Lease on Health and Happiness',
            program: 'Health & Wellness',
            youTubeVideoId: 'example-video-id-2',
            media: cases.wellness.id,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Our health and wellness initiatives provided critically needed medical care and nutritional support to David, who is now thriving and full of energy.',
                        version: 1,
                      },
                    ],
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          {
            title: 'Building Confidence and Independence',
            program: 'Life Skills Development',
            media: cases.skill.id,
            description: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Our life skills program equipped James with essential tools for independent living, boosting his confidence and preparing him for a brighter future.',
                        version: 1,
                      },
                    ],
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        ],
      },
      {
        blockName: 'ProcessFlow',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Program Execution Process',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="flowTitle flowDesc">\n  <title id="flowTitle">Guardian Angels Caring Hands Program Execution Flow</title>\n  <desc id="flowDesc">A comprehensive flow diagram showing the complete program execution process from pre-implementation through continuous improvement</desc>\n  \n  <!-- Definitions for reusable elements -->\n  <defs>\n    <!-- Drop shadow filter -->\n    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">\n      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0,0,0,0.1)"/>\n    </filter>\n    \n    <!-- Arrow marker -->\n    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">\n      <polygon points="0,0 0,6 9,3" fill="#E6E6E6"/>\n    </marker>\n    \n    <!-- Dashed arrow marker -->\n    <marker id="arrowheadDashed" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">\n      <polygon points="0,0 0,6 9,3" fill="#E6E6E6" opacity="0.7"/>\n    </marker>\n  </defs>\n  \n  <!-- Title -->\n  <text x="600" y="30" text-anchor="middle" font-size="18" font-weight="600" fill="#333333" font-family="system-ui, sans-serif">\n    Guardian Angels Caring Hands - Program Execution Process\n  </text>\n  \n  <!-- Phase 1: Pre-Implementation -->\n  <g id="phase1">\n    <!-- Start Node -->\n    <rect x="50" y="80" width="200" height="80" rx="8" fill="#00ACEF" filter="url(#dropShadow)"/>\n    <text x="150" y="115" text-anchor="middle" font-size="16" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="150" dy="0">Program Initiation</tspan>\n      <tspan x="150" dy="18">& Planning</tspan>\n    </text>\n    \n    <!-- Resource Development -->\n    <rect x="310" y="80" width="180" height="60" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="400" y="115" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">Resource Development</text>\n    \n    <!-- Quality Assurance Setup -->\n    <rect x="550" y="80" width="180" height="60" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="640" y="115" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">Quality Assurance Setup</text>\n  </g>\n  \n  <!-- Phase 2: Implementation Decision -->\n  <g id="phase2">\n    <!-- Implementation Decision Diamond -->\n    <polygon points="840,60 920,120 840,180 760,120" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="840" y="115" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="840" dy="-5">Ready for</tspan>\n      <tspan x="840" dy="16">Implementation?</tspan>\n    </text>\n    \n    <!-- Implementation Phase -->\n    <rect x="980" y="80" width="180" height="80" rx="8" fill="#00ACEF" filter="url(#dropShadow)"/>\n    <text x="1070" y="115" text-anchor="middle" font-size="16" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="1070" dy="0">Implementation</tspan>\n      <tspan x="1070" dy="18">Phase</tspan>\n    </text>\n  </g>\n  \n  <!-- Phase 3: Community Engagement -->\n  <g id="phase3">\n    <rect x="50" y="220" width="180" height="60" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="140" y="255" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">Community Engagement</text>\n    \n    <!-- Safety & Protection -->\n    <rect x="290" y="220" width="180" height="60" rx="8" fill="#FF8C42" filter="url(#dropShadow)"/>\n    <text x="380" y="255" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">Safety & Protection</text>\n    \n    <!-- Documentation -->\n    <rect x="530" y="220" width="180" height="60" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="620" y="255" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">Documentation & Reporting</text>\n  </g>\n  \n  <!-- Phase 4: Assessment -->\n  <g id="phase4">\n    <!-- Impact Assessment -->\n    <rect x="770" y="220" width="180" height="60" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="860" y="255" text-anchor="middle" font-size="14" fill="#333333" font-family="system-ui, sans-serif">Impact Assessment</text>\n    \n    <!-- Communication -->\n    <rect x="1010" y="220" width="180" height="60" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="1100" y="250" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="1100" dy="0">Communication &</tspan>\n      <tspan x="1100" dy="16">Transparency</tspan>\n    </text>\n  </g>\n  \n  <!-- Phase 5: Evaluation -->\n  <g id="phase5">\n    <!-- Success Evaluation Diamond -->\n    <polygon points="400,340 480,400 400,460 320,400" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="400" y="395" text-anchor="middle" font-size="14" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="400" dy="-5">Program</tspan>\n      <tspan x="400" dy="16">Successful?</tspan>\n    </text>\n    \n    <!-- Continuous Improvement -->\n    <rect x="580" y="370" width="180" height="60" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="670" y="405" text-anchor="middle" font-size="14" fill="#333333" font-family="system-ui, sans-serif">Continuous Improvement</text>\n    \n    <!-- Program Completion -->\n    <rect x="820" y="370" width="180" height="60" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="910" y="405" text-anchor="middle" font-size="14" fill="#333333" font-family="system-ui, sans-serif">Program Completion</text>\n  </g>\n  \n  <!-- Resource Management (Side process) -->\n  <g id="resourceManagement">\n    <rect x="50" y="500" width="200" height="80" rx="8" fill="#45A29E" filter="url(#dropShadow)"/>\n    <text x="150" y="535" text-anchor="middle" font-size="16" fill="white" font-family="system-ui, sans-serif">\n      <tspan x="150" dy="0">Resource Management</tspan>\n      <tspan x="150" dy="18">(Ongoing)</tspan>\n    </text>\n  </g>\n  \n  <!-- Milestone Indicators -->\n  <g id="milestones">\n    <!-- Milestone 1 -->\n    <rect x="50" y="630" width="150" height="40" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="125" y="655" text-anchor="middle" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Phase 1 Complete</text>\n    \n    <!-- Milestone 2 -->\n    <rect x="250" y="630" width="150" height="40" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="325" y="655" text-anchor="middle" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Implementation Active</text>\n    \n    <!-- Milestone 3 -->\n    <rect x="450" y="630" width="150" height="40" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="525" y="655" text-anchor="middle" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Assessment Complete</text>\n    \n    <!-- Milestone 4 -->\n    <rect x="650" y="630" width="150" height="40" rx="8" fill="#FFC857" filter="url(#dropShadow)"/>\n    <text x="725" y="655" text-anchor="middle" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Program Success</text>\n  </g>\n  \n  <!-- Flow Lines -->\n  <g id="flowLines" stroke="#E6E6E6" stroke-width="2" fill="none" marker-end="url(#arrowhead)">\n    <!-- Main horizontal flow -->\n    <line x1="250" y1="120" x2="310" y2="120"/>\n    <line x1="490" y1="110" x2="550" y2="110"/>\n    <line x1="730" y1="110" x2="760" y2="120"/>\n    <line x1="920" y1="120" x2="980" y2="120"/>\n    \n    <!-- Vertical connections to phase 3 -->\n    <line x1="150" y1="160" x2="150" y2="220"/>\n    <line x1="400" y1="140" x2="400" y2="220"/>\n    <line x1="640" y1="140" x2="640" y2="220"/>\n    \n    <!-- Phase 3 horizontal flow -->\n    <line x1="230" y1="250" x2="290" y2="250"/>\n    <line x1="470" y1="250" x2="530" y2="250"/>\n    <line x1="710" y1="250" x2="770" y2="250"/>\n    <line x1="950" y1="250" x2="1010" y2="250"/>\n    \n    <!-- To evaluation diamond -->\n    <line x1="380" y1="280" x2="380" y2="340"/>\n    \n    <!-- From evaluation diamond -->\n    <line x1="480" y1="400" x2="580" y2="400"/>\n    <line x1="760" y1="400" x2="820" y2="400"/>\n    \n    <!-- Resource management connections (dashed) -->\n    <line x1="150" y1="500" x2="150" y2="460" stroke-dasharray="5,5" marker-end="url(#arrowheadDashed)"/>\n    <line x1="250" y1="520" x2="380" y2="460" stroke-dasharray="5,5" marker-end="url(#arrowheadDashed)"/>\n  </g>\n  \n  <!-- Feedback loop (dashed) - using straight lines with sharp corners -->\n  <g id="feedbackLoop" stroke="#E6E6E6" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowheadDashed)">\n    <polyline points="320,400 200,400 200,320 150,320 150,300"/>\n  </g>\n  \n  <!-- Legend -->\n  <g id="legend" transform="translate(950, 480)">\n    <rect x="0" y="0" width="220" height="140" fill="white" stroke="#E6E6E6" stroke-width="1" rx="8"/>\n    <text x="10" y="20" font-size="14" font-weight="600" fill="#333333" font-family="system-ui, sans-serif">Legend</text>\n    \n    <!-- Main Process -->\n    <rect x="10" y="30" width="30" height="15" fill="#00ACEF"/>\n    <text x="50" y="42" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Main Process</text>\n    \n    <!-- Sub Process -->\n    <rect x="10" y="50" width="30" height="15" fill="#45A29E"/>\n    <text x="50" y="62" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Sub Process</text>\n    \n    <!-- Milestone -->\n    <rect x="10" y="70" width="30" height="15" fill="#FFC857"/>\n    <text x="50" y="82" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Milestone</text>\n    \n    <!-- Warning -->\n    <rect x="10" y="90" width="30" height="15" fill="#FF8C42"/>\n    <text x="50" y="102" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Critical Point</text>\n    \n    <!-- Line types -->\n    <line x1="10" y1="115" x2="40" y2="115" stroke="#E6E6E6" stroke-width="2"/>\n    <text x="50" y="119" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Required Path</text>\n    \n    <line x1="10" y1="130" x2="40" y2="130" stroke="#E6E6E6" stroke-width="2" stroke-dasharray="3,3"/>\n    <text x="50" y="134" font-size="12" fill="#333333" font-family="system-ui, sans-serif">Optional Path</text>\n  </g>\n  \n  <!-- Phase Labels -->\n  <g id="phaseLabels" font-size="12" fill="#666666" font-family="system-ui, sans-serif">\n    <text x="50" y="70">Pre-Implementation</text>\n    <text x="760" y="70">Implementation</text>\n    <text x="50" y="210">Execution & Monitoring</text>\n    <text x="320" y="330">Evaluation</text>\n    <text x="50" y="490">Support Systems</text>\n    <text x="50" y="620">Milestones</text>\n  </g>\n</svg>',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
        ],
      },
      {
        blockName: 'Highlights',
        blockType: 'highlights',
        title: 'Programs Highlights',
        subtitle: 'Discover the ways we support vulnerable children.',
        programs: [
          {
            title: 'Educational Support',
            description:
              'Providing tutoring, school supplies, and mentorship to help children succeed academically.',
            media: highlight.education.id,
          },
          {
            title: 'Health & Wellness',
            description:
              'Ensuring access to medical care, nutritious food, and mental health support.',
            media: highlight.wellness.id,
          },
          {
            title: 'Enrichment Activities',
            description:
              'Offering extracurricular activities like sports, arts, and music to foster creativity and social skills.',
            media: highlight.activities.id,
          },
        ],
      },
      {
        blockName: 'Content',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Core features',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Admin Dashboard',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Manage this site's pages and posts from the ",
                        version: 1,
                      },
                      {
                        type: 'link',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'admin dashboard',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        fields: {
                          linkType: 'custom',
                          newTab: false,
                          url: '/admin',
                        },
                        format: '',
                        indent: 0,
                        version: 2,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Preview',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Page Builder',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'SEO',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Editors have complete control over SEO data and site content directly from the ',
                        version: 1,
                      },
                      {
                        type: 'link',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'admin dashboard',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        fields: {
                          linkType: 'custom',
                          newTab: false,
                          url: '/admin',
                        },
                        format: '',
                        indent: 0,
                        version: 2,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Dark Mode',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Users will experience this site in their preferred color scheme and each block can be inverted.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'Statistics',
        blockType: 'statistics',
        statisticsList: [
          {
            label: 'Children rescued',
            value: 300,
          },
          {
            label: 'Children educated',
            value: 80,
          },
          {
            label: 'Donation',
            value: 256,
          },
          {
            label: 'Fund raised',
            value: 1000000,
          },
        ],
      },
      {
        blockName: 'Media Block',
        blockType: 'mediaBlock',
        media: metaImage.id,
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'All posts',
              url: '/posts',
            },
          },
        ],
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is a call to action',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is a custom layout building block ',
                    version: 1,
                  },
                  {
                    type: 'link',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'configured in the admin dashboard',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    fields: {
                      linkType: 'custom',
                      newTab: false,
                      url: '/admin',
                    },
                    format: '',
                    indent: 0,
                    version: 2,
                  },
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'An open-source website built with Payload and Next.js.',
      image: heroImage.id,
      title: 'Payload Website Template',
    },
    title: 'Home',
  }
}
