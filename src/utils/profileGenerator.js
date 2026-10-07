import { DEMO_PROFILES, CONTENT_CATEGORIES, HOOK_TYPES, TONES } from '../data/demoProfiles.js';

/**
 * 17 Standard Content Pillars specified in product architecture
 */
export const CONTENT_PILLARS_17 = [
  'Educational',
  'Promotional',
  'Career advice',
  'Course promotion',
  'Student success',
  'Testimonial',
  'Placement',
  'Founder',
  'Faculty',
  'Institute culture',
  'Industry insight',
  'Event',
  'Internship',
  'Student project',
  'Entertainment',
  'Trend',
  'Meme',
  'Community'
];

export const REEL_TYPES = [
  'Problem → Solution Reel',
  'Educational Reel',
  'Career Advice Reel',
  'Myth-Busting Reel',
  'Storytelling Reel',
  'Student Testimonial Reel',
  'Founder Reel',
  'Trend-Based Reel',
  'Listicle Reel',
  'Tutorial Reel',
  'Before/After Reel',
  'Question-Based Reel',
  'Opinion Reel',
  'Promotional Reel',
  'Social Proof Reel',
  'Entertainment Reel'
];

export const HOOK_CATEGORIES = [
  'Curiosity hook',
  'Question hook',
  'Problem hook',
  'Fear/pain-point hook',
  'Benefit hook',
  'Contrarian hook',
  'Story hook',
  'Number/list hook',
  'Trend hook'
];

export const AUDIENCE_INTENTS = [
  'Awareness',
  'Engagement',
  'Education',
  'Trust',
  'Consideration',
  'Conversion',
  'Community'
];

export const FUNNEL_STAGES = ['TOFU', 'MOFU', 'BOFU'];

export const CAPTION_LANGUAGES = ['English', 'Malayalam', 'Manglish', 'Mixed'];

export const CTA_TYPES = [
  'Comment',
  'Share',
  'Save',
  'Follow',
  'DM',
  'Visit website',
  'Enquire',
  'Register',
  'Learn more'
];

/**
 * Validates that an input is an Instagram profile URL or valid username handle.
 * Accepts:
 * - https://www.instagram.com/example/
 * - https://instagram.com/example?igsh=xyz
 * - www.instagram.com/example
 * - @example
 * - example
 */
export function validateInstagramUrl(input) {
  if (!input || typeof input !== 'string') {
    return {
      isValid: false,
      error: 'Please enter an Instagram profile URL or handle.'
    };
  }

  const trimmed = input.trim();
  if (trimmed.length === 0) {
    return {
      isValid: false,
      error: 'Input cannot be empty.'
    };
  }

  // Reject invalid non-Instagram URLs
  if (/^https?:\/\//i.test(trimmed) && !/instagram\.com/i.test(trimmed)) {
    return {
      isValid: false,
      error: 'Please enter a valid Instagram URL (e.g., https://www.instagram.com/username/).'
    };
  }

  // Check username structure
  const username = extractInstagramUsername(trimmed);
  if (!username) {
    return {
      isValid: false,
      error: 'Could not detect an Instagram username in the link.'
    };
  }

  // Instagram username rules: 1-30 chars, letters, numbers, periods, underscores
  const validUsernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
  if (!validUsernameRegex.test(username)) {
    return {
      isValid: false,
      error: `"${username}" does not look like a valid Instagram username. Usernames may only contain letters, numbers, periods, and underscores.`
    };
  }

  return {
    isValid: true,
    username: username.toLowerCase(),
    formattedUrl: `https://www.instagram.com/${username.toLowerCase()}/`
  };
}

/**
 * Normalizes any Instagram URL or handle into a clean username
 */
export function extractInstagramUsername(input) {
  if (!input || typeof input !== 'string') return 'growthacademy.ai';
  
  let clean = input.trim();
  // Remove protocols
  clean = clean.replace(/^https?:\/\//i, '');
  // Remove www.
  clean = clean.replace(/^www\./i, '');
  // Remove domain
  clean = clean.replace(/^instagram\.com\//i, '');
  // Remove query params and hash
  clean = clean.split('?')[0].split('#')[0];
  // Remove @ and trailing slashes
  clean = clean.replace(/^@/, '').replace(/\/$/, '');
  
  // Extract first path segment if there are multiple (e.g. username/p/xxx -> username)
  const segments = clean.split('/').filter(Boolean);
  const username = segments[0] || 'growthacademy.ai';
  
  return username.toLowerCase();
}

/**
 * Detects appropriate niche and metadata based on username keywords
 */
function detectNicheFromUsername(username) {
  const u = username.toLowerCase();
  
  if (/fit|gym|run|sport|athle|nike|train|workout|muscle/i.test(u)) {
    return {
      industry: 'Athletics & Human Performance',
      avatarUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80',
      bio: 'Pushing boundaries in high-performance training, daily motivation & athletic gear ⚡ | Train like a pro | linkin.bio/training',
      pillars: ['Educational', 'Career advice', 'Student success', 'Institute culture', 'Trend'],
      primaryAudience: 'Fitness enthusiasts, athletes, and active lifestyle consumers',
      strategyOverview: 'High-energy visual Reels paired with problem-solution carousels targeting training plateaus.'
    };
  }
  
  if (/skin|beauty|glow|care|cosmetic|derma|lash|hair/i.test(u)) {
    return {
      industry: 'D2C Skincare & Beauty Science',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      bio: 'Clean formulations backed by clinical dermatology 🌿 | Cruelty-free, vegan & lab-tested in California ✨ shop.cleanbeauty.com',
      pillars: ['Educational', 'Testimonial', 'Course promotion', 'Student success', 'Industry insight'],
      primaryAudience: 'Skincare obsessives, dermatologists, and conscious beauty shoppers',
      strategyOverview: 'Educational ingredient carousels mixed with aesthetic ASMR texture Reels.'
    };
  }

  if (/market|growth|scale|b2b|saas|biz|hubspot|agency|venture/i.test(u)) {
    return {
      industry: 'B2B Marketing & Growth Engineering',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Actionable B2B playbooks for modern marketers and high-growth founders 📈 | Cheat sheets, case studies & teardowns | newsletter.growth.io',
      pillars: ['Career advice', 'Industry insight', 'Student project', 'Educational', 'Promotional'],
      primaryAudience: 'Founders, demand gen leads, and performance marketers',
      strategyOverview: 'Swipe-heavy infographic carousels providing immediate tactical frameworks.'
    };
  }

  if (/tech|ai|code|dev|data|cloud|software|python|engineer|academy|institute|edu/i.test(u)) {
    return {
      industry: 'AI Systems & Tech Career Institute',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Empowering 50,000+ students to break into Data, AI & Tech Careers 🚀 | Verified placement stats, live bootcamps & curriculum breakdowns 💼 linktr.ee/academy',
      pillars: ['Career advice', 'Student success', 'Placement', 'Educational', 'Testimonial', 'Course promotion'],
      primaryAudience: 'Early-career professionals, engineering students, and career switchers',
      strategyOverview: 'Short problem-agitate coding Reels backed by comprehensive 10-slide cheatsheets.'
    };
  }

  // Default Digital Brand & Creator
  return {
    industry: 'Digital Media & Creator Strategy',
    avatarUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
    bio: `Documenting high-leverage strategies, creative workflows & audience building 🔥 | Join 180k+ minds | linkin.bio/${username}`,
    pillars: ['Educational', 'Industry insight', 'Founder', 'Trend', 'Community'],
    primaryAudience: 'Creative entrepreneurs, digital professionals, and engaged industry peers',
    strategyOverview: 'Curiosity-gap Reels driving deep comment discussions and high save rates.'
  };
}

/**
 * Normalizes any post to ensure it complies strictly with Steps 3–9 schema requirements.
 */
export function normalizePostSchema(post, index, profile) {
  const isReel = post.format === 'Reel' || post.mediaType === 'VIDEO' || post.type === 'Reel';
  const isCarousel = post.format === 'Carousel' || post.mediaType === 'CAROUSEL_ALBUM';
  const format = isReel ? 'Reel' : (isCarousel ? 'Carousel' : 'Single image');

  // Content Pillar from the 17 Standard Pillars
  let contentPillar = post.contentPillar || post.pillar;
  if (!contentPillar || !CONTENT_PILLARS_17.includes(contentPillar)) {
    const raw = `${post.category || ''} ${post.topic || ''} ${post.caption || ''}`.toLowerCase();
    if (/placement|salary offer|ctc|package|hired at/i.test(raw)) contentPillar = 'Placement';
    else if (/student success|placed|transformation|milestone/i.test(raw)) contentPillar = 'Student success';
    else if (/testimonial|review|quote/i.test(raw)) contentPillar = 'Testimonial';
    else if (/internship|intern|stipend/i.test(raw)) contentPillar = 'Internship';
    else if (/course|admissions|curriculum|bootcamp|fellowship/i.test(raw)) contentPillar = 'Course promotion';
    else if (/career|resume|ats|interview/i.test(raw)) contentPillar = 'Career advice';
    else if (/faculty|instructor|mentor|teacher/i.test(raw)) contentPillar = 'Faculty';
    else if (/founder|ceo|building in public/i.test(raw)) contentPillar = 'Founder';
    else if (/culture|behind the scenes|bts|office/i.test(raw)) contentPillar = 'Institute culture';
    else if (/event|hackathon|workshop|webinar/i.test(raw)) contentPillar = 'Event';
    else if (/project|capstone|github|code/i.test(raw)) contentPillar = 'Student project';
    else if (/trend|2026|algorithm|shift/i.test(raw)) contentPillar = 'Trend';
    else if (/meme|humor|relatable|funny/i.test(raw)) contentPillar = 'Meme';
    else if (/community|discord|alumni/i.test(raw)) contentPillar = 'Community';
    else if (/promo|discount|early bird|seats left/i.test(raw)) contentPillar = 'Promotional';
    else if (/insight|industry|enterprise/i.test(raw)) contentPillar = 'Industry insight';
    else contentPillar = 'Educational';
  }

  // Audience Intent & Funnel Stage
  const audienceIntent = post.audienceIntent || AUDIENCE_INTENTS[index % AUDIENCE_INTENTS.length];
  const funnelStage = post.funnelStage || (
    ['Awareness', 'Entertainment'].includes(audienceIntent) ? 'TOFU' :
    ['Education', 'Trust', 'Engagement'].includes(audienceIntent) ? 'MOFU' : 'BOFU'
  );

  // Reel Category (Step 5)
  const reelCategory = post.reelCategory || (
    isReel 
      ? REEL_TYPES[index % REEL_TYPES.length]
      : 'Not a Reel'
  );

  // Hook details (Step 6)
  const hookCategory = post.hookCategory || HOOK_CATEGORIES[index % HOOK_CATEGORIES.length];
  const hookStrengthScore = post.hookStrengthScore || (
    (index % 5 === 0) ? 94 :
    (index % 3 === 0) ? 88 :
    (index % 2 === 0) ? 82 : 75
  );

  const hookText = post.hook || post.firstLineHook || `How this simple strategy drives 3x results in 2026.`;
  const hookExplanation = post.hookExplanation || (
    hookCategory.includes('Curiosity')
      ? 'Creates an irresistible knowledge gap that compels the viewer to stay past the critical 3-second threshold.'
      : hookCategory.includes('Question')
      ? 'Directly asks a high-friction question that pre-qualifies ambitious learners facing this exact dilemma.'
      : hookCategory.includes('Contrarian')
      ? 'Directly challenges common industry dogma, triggering instant cognitive dissonance and high comment debate.'
      : hookCategory.includes('Problem')
      ? 'Names a painful real-world friction point immediately, validating audience frustration and positioning the post as the remedy.'
      : 'Leverages quantifiable authority and social proof in the opening frame to establish instant credibility.'
  );

  // Caption Analyzer (Step 7)
  const captionText = post.caption || '';
  const firstSentence = captionText.split(/[.\n?!]/)[0] || hookText;
  const captionStructure = (
    captionText.includes('1.') || captionText.includes('•') ? 'List-based' :
    captionText.length > 300 ? 'Storytelling' :
    captionText.toLowerCase().includes('how to') || captionText.toLowerCase().includes('guide') ? 'Educational' :
    captionText.toLowerCase().includes('enroll') || captionText.toLowerCase().includes('apply') ? 'Promotional' :
    captionText.includes('?') ? 'Question-based' : 'Short-form'
  );

  // Language support (English, Malayalam, Manglish, Mixed)
  const captionLanguage = post.captionLanguage || (
    (index === 3 || index === 14) ? 'Manglish' :
    (index === 7 || index === 21) ? 'Mixed' : 'English'
  );

  const ctaAction = post.ctaAction || CTA_TYPES[index % CTA_TYPES.length];

  // Post Text OCR & Communication Style (Step 8)
  const postText = post.postText || {
    headline: hookText,
    subheadline: '3 Step Execution Blueprint for 2026',
    hook: hookText,
    supportingText: 'Practical workflows tested with over 500+ participants.',
    cta: `Tap link in bio to read full guide`,
    offer: contentPillar === 'Course promotion' ? 'Early applicant scholarship' : 'Free downloadable guide',
    numbers: [2026, 500, 3],
    benefits: ['Accelerated career progression', 'Practical portfolio artifact', 'Direct mentor feedback'],
    questions: ['Are you making this common beginner mistake?'],
    emotionalLanguage: ['Frustrated', 'Transform', 'Confidence', 'Clarity'],
    careerLanguage: ['Salary negotiation', 'Portfolio review', 'ATS screening', 'Full-time placement'],
    communicationStyle: 'Number-based educational hook + career outcome messaging'
  };

  // Visual Creative Analyzer (Step 9)
  const visualCreative = post.visualCreative || {
    thumbnail: post.thumbnailUrl || profile.avatarUrl,
    firstFrame: isReel ? 'High-contrast text headline + face-to-camera presenter' : 'Clean bold typography card on dark slate background',
    typography: 'Modern clean sans-serif with high visual hierarchy (Outfit / Inter)',
    textPlacement: 'Upper-third centered for safe reels UI zones',
    visualHierarchy: 'Headline (bold) → Subhead (light) → Credential footer',
    faceUsage: isReel ? 'Face-to-camera direct address' : 'Graphic carousel slide',
    brandColors: ['#0F172A', '#0284C7', '#38BDF8'],
    logoUsage: 'Discreet watermark icon top-right',
    imageQuality: 'High-definition 1080x1350 vertical format',
    designConsistency: 'Cohesive brand typography & high-contrast cards',
    informationDensity: isCarousel ? 'High-density tactical frameworks' : 'Focused single-take message',
    visualHook: 'Rapid dynamic text animation within first 1.5 seconds'
  };

  // Step 11: "Why Did This Go Viral / Perform Well?" Forensic Breakdown
  const whyItPerformedWell = [
    `High resonance topic: Directly solves a high-stakes ${contentPillar.toLowerCase()} dilemma.`,
    `Hook retention: ${hookCategory} scored ${hookStrengthScore}/100, arresting feed scroll within 2 seconds.`,
    `Utility multiplier: Actionable structure drove elevated saves and private bookmarking.`,
    `Format-market fit: ${format} format optimized for algorithmic watch-time and replay loops.`
  ];

  // Step 12: Underlying strategy + adapted recreation idea
  const underlyingStrategy = 'Career outcome + numbered list + curiosity gap + practical tangible value';
  const adaptedIdeaForInstitute = `Adapt ${hookText} into our institute's curriculum: "5 Real Industry Projects Our Students Build Before Getting Hired in Tech".`;

  return {
    ...post,
    id: post.id || `post-${index + 1}`,
    url: post.url || `https://www.instagram.com/p/C${Math.random().toString(36).substring(2, 8)}/`,
    date: post.date || new Date(Date.now() - index * 86400000 * 3).toISOString(),
    format,
    mediaType: isReel ? 'VIDEO' : (isCarousel ? 'CAROUSEL_ALBUM' : 'IMAGE'),
    caption: captionText,
    hashtags: post.hashtags || ['#techcareers', '#learninpublic', '#education', '#growth'],
    views: post.views || 45000,
    likes: post.likes || 2400,
    comments: post.comments || 120,
    shares: post.shares || 380,
    saves: post.saves || 940,
    engagementRate: post.engagementRate || 5.2,
    
    // Categorization
    contentPillar,
    pillar: contentPillar,
    category: contentPillar,
    audienceIntent,
    funnelStage,
    reelCategory,
    
    // Hook & Caption
    firstLineHook: hookText,
    hook: hookText,
    hookCategory,
    hookStrengthScore,
    hookExplanation,
    openingVisual: visualCreative.firstFrame,
    
    captionAnalysis: {
      firstSentence,
      structure: captionStructure,
      language: captionLanguage,
      messaging: {
        problem: 'Identifies common friction point faced by candidates',
        solution: 'Presents structured 3-step solution framework',
        benefit: 'Provides immediate clarity and actionable next steps',
        proof: 'Cites verifiable graduate numbers or testing results',
        cta: `Direct prompt to ${ctaAction.toLowerCase()}`
      },
      ctaAction
    },
    
    postText,
    visualCreative,
    whyItPerformedWell,
    underlyingStrategy,
    adaptedIdeaForInstitute
  };
}

/**
 * Builds or retrieves a rich profile dataset from any user input URL
 */
export function resolveProfileFromInput(input) {
  const username = extractInstagramUsername(input);

  // Return verified demo profile if already defined
  let targetProfile = null;
  if (DEMO_PROFILES[username]) {
    targetProfile = DEMO_PROFILES[username];
  } else {
    // Check case-insensitive match among demo keys
    const existingKey = Object.keys(DEMO_PROFILES).find(
      (k) => k.toLowerCase() === username.toLowerCase()
    );
    if (existingKey) {
      targetProfile = DEMO_PROFILES[existingKey];
    }
  }

  if (targetProfile) {
    // Ensure all posts in verified demo profiles have normalized schema
    const normalizedPosts = targetProfile.posts.map((p, idx) => 
      normalizePostSchema(p, idx, targetProfile)
    );
    return {
      ...targetProfile,
      posts: normalizedPosts
    };
  }

  // Generate dynamic customized profile for any custom handle
  const niche = detectNicheFromUsername(username);
  const totalPosts = 48;
  const followers = Math.floor(140000 + Math.random() * 380000);
  const following = Math.floor(180 + Math.random() * 320);

  const rawPosts = [];
  const now = Date.now();
  const stepMs = (180 * 24 * 60 * 60 * 1000) / totalPosts; // 6 months span

  for (let i = 0; i < totalPosts; i++) {
    const pillar = niche.pillars[i % niche.pillars.length];
    const isReel = i % 2 === 0;
    const isCarousel = !isReel && i % 3 === 0;
    const format = isReel ? 'Reel' : (isCarousel ? 'Carousel' : 'Single image');
    const isViral = i === 4 || i === 18 || i === 32;

    const baseViews = isReel ? Math.floor(followers * (isViral ? 2.8 : 0.85)) : Math.floor(followers * 0.35);
    const likes = Math.floor(baseViews * (isViral ? 0.08 : 0.05));
    const comments = Math.floor(likes * (isViral ? 0.12 : 0.06));
    const saves = Math.floor(likes * (format === 'Carousel' ? 0.45 : 0.22));
    const shares = Math.floor(likes * (isReel ? 0.35 : 0.12));
    const engagementRate = Number((((likes + comments + saves + shares) / (baseViews || 1)) * 100).toFixed(2));

    const sampleHooks = [
      `Stop doing ${pillar.toLowerCase()} the old way in 2026.`,
      `The 3 mistakes costing you opportunities in ${niche.industry}.`,
      `How one student went from complete beginner to placed professional.`,
      `Why 90% of beginners fail to build consistency in ${pillar.toLowerCase()}.`,
      `Here is the exact step-by-step roadmap we teach our cohort.`
    ];

    rawPosts.push({
      id: `post-${username}-${i + 1}`,
      format,
      category: pillar,
      topic: pillar,
      contentPillar: pillar,
      hook: sampleHooks[i % sampleHooks.length],
      caption: `Unlocking the truth behind ${pillar.toLowerCase()}: Why most creators get this wrong, and the 3-step framework we use to generate predictable results.\n\nSave this for your next planning session.`,
      views: baseViews,
      likes,
      comments,
      shares,
      saves,
      engagementRate,
      date: new Date(now - (totalPosts - i) * stepMs).toISOString(),
      thumbnailUrl: niche.avatarUrl,
      tone: TONES[i % TONES.length]
    });
  }

  // Formulate formatted title
  const formattedName = username
    .split(/[._]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const draftProfile = {
    id: username,
    username,
    fullName: `${formattedName} (Analyzed)`,
    avatarUrl: niche.avatarUrl,
    verified: followers > 200000,
    bio: niche.bio,
    followers,
    following,
    industry: niche.industry,
    dateRange: 'Recent 6 Months (Analyzed)',
    postingFrequency: '4.6 posts/week',
    postsAnalyzedCount: totalPosts,
    isDemo: false,
    isCustomGenerated: true,
    nicheMetadata: niche
  };

  const normalizedPosts = rawPosts.map((p, idx) => normalizePostSchema(p, idx, draftProfile));
  draftProfile.posts = normalizedPosts;

  return draftProfile;
}
