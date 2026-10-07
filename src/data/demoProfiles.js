/**
 * InstaLens - Realistic Demo Profiles & Data Generator
 * Provides realistic multi-hundred post datasets for demonstrating scale.
 * Note: Clearly flagged as Demo Data in accordance with product guidelines.
 */

// Categories required by specification
export const CONTENT_CATEGORIES = [
  'Educational',
  'Promotional',
  'Entertainment',
  'Testimonial',
  'Career/Advice',
  'Product/Service',
  'Event',
  'Behind the Scenes',
  'Founder/Personal Brand',
  'Community',
  'Other'
];

export const HOOK_TYPES = [
  'Problem-Agitate',
  'Curiosity Gap',
  'Contrarian Claim',
  'Direct Educational',
  'Social Proof',
  'Story Opening',
  'Checklist/Framework',
  'Mistake Callout'
];

export const CONTENT_OBJECTIVES = [
  'Awareness',
  'Education',
  'Engagement',
  'Consideration',
  'Conversion',
  'Community'
];

export const TONES = [
  'Educational',
  'Motivational',
  'Promotional',
  'Humorous',
  'Emotional',
  'Professional',
  'Analytical',
  'Empathetic'
];

// Profile 1: EdTech & Tech Career Institute (@growthacademy.ai)
const growthAcademyTemplates = [
  {
    topic: 'Salary',
    pillar: 'Career Guidance',
    category: 'Career/Advice',
    formatWeights: { Reel: 0.6, Carousel: 0.3, Image: 0.1 },
    hookTemplate: (i) => [
      "Stop accepting $65k when entry-level data roles are paying $110k.",
      "The exact email script I used to negotiate a $28k salary increase in tech.",
      "Why your current resume is automatically getting filtered out by ATS scanners.",
      "Salary transparency check: What a 2-year Data Analyst makes across 5 major cities.",
      "3 negotiation mistakes that cost junior engineers thousands before day one."
    ][i % 5],
    captionTemplate: (i) => `Negotiating your tech compensation is 80% market leverage and 20% timing. Here is the step-by-step breakdown of industry benchmarks for 2026 roles.\n\nSave this checklist for your next offer review! 👇`,
    targetAudience: 'Early-career professionals & career switchers seeking tech compensation insights',
    mainMessage: 'Tech salaries depend on verifiable portfolio leverage rather than years of traditional tenure',
    objective: 'Education',
    tone: 'Professional',
    cta: 'Save this guide for your next salary negotiation',
    baseViews: 142000,
    baseLikes: 8400,
    baseComments: 412,
    baseShares: 2900,
    baseSaves: 7100
  },
  {
    topic: 'Data Analytics',
    pillar: 'Course Education',
    category: 'Educational',
    formatWeights: { Reel: 0.5, Carousel: 0.4, Image: 0.1 },
    hookTemplate: (i) => [
      "Here is how to learn SQL in 7 days without spending a dime on college courses.",
      "The 4 Python libraries every aspiring data analyst must know in 2026.",
      "Tableau vs PowerBI: Which tool actually gets you hired in 90 days?",
      "Stop practicing on clean datasets. Real business data looks like this mess:",
      "Build this one portfolio project to prove end-to-end analytics capability."
    ][i % 5],
    captionTemplate: (i) => `Most tutorials show you toy problems. In real companies, data is fragmented, dirty, and stored across multiple silos. Here is the architecture you need to practice.\n\nDrop a comment if you want the sample GitHub repo!`,
    targetAudience: 'Aspiring data analysts, bootcamp learners, and junior developers',
    mainMessage: 'Practical project-based competency beats rote memorization of syntax',
    objective: 'Education',
    tone: 'Educational',
    cta: 'Comment "PORTFOLIO" for the open-source dataset',
    baseViews: 198000,
    baseLikes: 11400,
    baseComments: 780,
    baseShares: 4300,
    baseSaves: 10500
  },
  {
    topic: 'Student Success',
    pillar: 'Alumni Transformations',
    category: 'Testimonial',
    formatWeights: { Reel: 0.7, Carousel: 0.2, Image: 0.1 },
    hookTemplate: (i) => [
      "From retail cashier to $94k Business Intelligence Specialist in 5 months.",
      "Meet Priya: She got rejected 84 times before revamping her capstone project.",
      "How Marcus transitioned from hospitality into a full-time Machine Learning internship.",
      "Proof that a non-CS degree won't hold you back if your GitHub proves your code.",
      "Behind the scenes: The mock interview session that cracked the final offer."
    ][i % 5],
    captionTemplate: (i) => `Consistency beats pedigree every single time. Here is the exact portfolio project, resume structure, and interview prep strategy that led to this milestone offer.\n\nTap the link in bio to read the full case study!`,
    targetAudience: 'Prospective students contemplating a career transition',
    mainMessage: 'Structured hands-on mentorship bridges the gap between self-study and job placement',
    objective: 'Social Proof',
    tone: 'Motivational',
    cta: 'Check the link in bio to read the full alumni case study',
    baseViews: 285000,
    baseLikes: 18200,
    baseComments: 940,
    baseShares: 5100,
    baseSaves: 8800
  },
  {
    topic: 'Career',
    pillar: 'Career Guidance',
    category: 'Career/Advice',
    formatWeights: { Reel: 0.65, Carousel: 0.25, Image: 0.1 },
    hookTemplate: (i) => [
      "The top 3 interview red flags that tell you to run away from a company.",
      "Why 'Tell me about yourself' is the most misunderstood interview question.",
      "How to answer: 'Why is there an employment gap on your resume?' with confidence.",
      "5 LinkedIn headline tweaks that increased recruiter inbound messages by 340%.",
      "What hiring managers secretly look for in your behavioral interview answers."
    ][i % 5],
    captionTemplate: (i) => `Recruiters spend an average of 6 seconds reviewing your profile. If your first bullet point doesn't quantify revenue or operational speed, they move on.\n\nSwipe through for the before & after transformation!`,
    targetAudience: 'Active job applicants and interview candidates in tech',
    mainMessage: 'Interviewing is a learnable skill that requires framing results over responsibilities',
    objective: 'Education',
    tone: 'Educational',
    cta: 'Save this post before your next round of interviews',
    baseViews: 220000,
    baseLikes: 13900,
    baseComments: 630,
    baseShares: 6200,
    baseSaves: 12100
  },
  {
    topic: 'Courses',
    pillar: 'Product & Admissions',
    category: 'Promotional',
    formatWeights: { Carousel: 0.5, Reel: 0.3, Image: 0.2 },
    hookTemplate: (i) => [
      "Doors are now open for our Summer 2026 AI & Data Fellowship cohort!",
      "Early bird enrollment expires this Friday midnight: Save 25% on tuition.",
      "What is included inside our new 16-week Full-Stack Data Science curriculum.",
      "Only 12 seats left for next month's live mentor-led intensive bootcamp.",
      "Why we redesigned our entire data track around Generative AI workflows."
    ][i % 5],
    captionTemplate: (i) => `Our next cohort kicks off in two weeks. Live workshops, 1-on-1 industry mentorship, and guaranteed interview referrals with hiring partners.\n\nApply via link in bio before seats fill up.`,
    targetAudience: 'Warm leads ready to invest in structured education',
    mainMessage: 'Limited cohort enrollment creates urgency for career transformation',
    objective: 'Conversion',
    tone: 'Promotional',
    cta: 'Click the link in bio to apply for the upcoming cohort',
    baseViews: 42000,
    baseLikes: 1850,
    baseComments: 95,
    baseShares: 210,
    baseSaves: 480
  },
  {
    topic: 'Technology',
    pillar: 'Industry Trends',
    category: 'Educational',
    formatWeights: { Reel: 0.55, Carousel: 0.35, Image: 0.1 },
    hookTemplate: (i) => [
      "Will AI replace junior data analysts in 2026? Here is the unvarnished truth.",
      "The massive shift in how Fortune 500 companies are deploying LLMs in production.",
      "3 emerging tech roles that didn't exist 18 months ago but pay over $130k.",
      "Why SQL is still the undisputed king of enterprise analytics despite AI hype.",
      "How smart analysts use Claude and ChatGPT to automate 70% of mundane data cleaning."
    ][i % 5],
    captionTemplate: (i) => `AI won't replace analysts. Analysts who master AI tools will replace analysts who resist them. Here is how your tech stack needs to evolve.\n\nShare this with someone navigating tech disruption!`,
    targetAudience: 'Tech workers curious about AI trends and job security',
    mainMessage: 'Embracing AI-assisted tooling amplifies analytical leverage',
    objective: 'Awareness',
    tone: 'Analytical',
    cta: 'Share this with your engineering or analytics peers',
    baseViews: 310000,
    baseLikes: 19500,
    baseComments: 1120,
    baseShares: 7800,
    baseSaves: 14200
  },
  {
    topic: 'Student Success',
    pillar: 'Community & Culture',
    category: 'Community',
    formatWeights: { Reel: 0.4, Carousel: 0.3, Image: 0.3 },
    hookTemplate: (i) => [
      "250 students, 36 hours of hacking: Highlights from our annual Demo Day!",
      "Our community Discord just hit 45,000 active learners across 38 countries 🌍",
      "Late night study session in our virtual coworking room: The grind is real.",
      "Student spotlight: Meet the team that won 1st place in the FinTech hackathon.",
      "Alumni reunion in NYC! Nothing beats meeting cohort peers in real life."
    ][i % 5],
    captionTemplate: (i) => `Learning alone is tough. Learning with an ambitious community of peers who review your code and celebrate your wins changes everything.\n\nDrop your country flag in the comments below!`,
    targetAudience: 'Current students, alumni, and prospective community members',
    mainMessage: 'Peer community and cohort camaraderie drive sustained learning momentum',
    objective: 'Community',
    tone: 'Motivational',
    cta: 'Drop a 🚀 in the comments if you were there!',
    baseViews: 76000,
    baseLikes: 5800,
    baseComments: 420,
    baseShares: 890,
    baseSaves: 1200
  },
  {
    topic: 'Behind the Scenes',
    pillar: 'Behind the Scenes',
    category: 'Behind the Scenes',
    formatWeights: { Reel: 0.6, Image: 0.2, Carousel: 0.2 },
    hookTemplate: (i) => [
      "What it actually takes to build a world-class curriculum from scratch.",
      "Reviewing 300 student project submissions with our Lead Instructor at 11 PM.",
      "Inside our studio: How we record interactive coding tutorials with dual screens.",
      "How our curriculum committee decides which technologies get taught each quarter.",
      "Unfiltered look: Mistakes we made when launching our first cohort 3 years ago."
    ][i % 5],
    captionTemplate: (i) => `Transparency builds trust. We believe education should have open doors, showing you exactly how our mentors grade projects and structure lesson feedback.\n\nWhat topic should we break down next?`,
    targetAudience: 'Followers seeking authentic brand transparency and instructor intimacy',
    mainMessage: 'Radical transparency about academic craftsmanship humanizes the brand',
    objective: 'Consideration',
    tone: 'Conversational',
    cta: 'Comment what behind-the-scenes question you have for our faculty',
    baseViews: 88000,
    baseLikes: 6400,
    baseComments: 310,
    baseShares: 650,
    baseSaves: 980
  }
];

// Helper to generate a realistic sequence of posts across time
function generateProfilePosts(templates, totalCount, startDate, endDate, accountMetrics) {
  const posts = [];
  const startMs = new Date(startDate).getTime();
  const endMs = new Date(endDate).getTime();
  const timeStep = (endMs - startMs) / totalCount;

  for (let i = 0; i < totalCount; i++) {
    const templateIndex = (i * 3 + (i % 7)) % templates.length;
    const template = templates[templateIndex];

    // Determine format based on format weights
    const rand = Math.random();
    let format = 'Reel';
    if (template.formatWeights.Carousel && rand < template.formatWeights.Carousel) {
      format = 'Carousel';
    } else if (template.formatWeights.Image && rand < (template.formatWeights.Carousel || 0) + template.formatWeights.Image) {
      format = 'Image';
    } else {
      format = 'Reel';
    }

    // Variance multipliers (simulate viral hits vs steady performers)
    const isViral = Math.random() < 0.08;
    const isUnderperformer = Math.random() < 0.15;
    let variance = 0.6 + Math.random() * 0.8;
    if (isViral) variance = 2.4 + Math.random() * 2.8;
    if (isUnderperformer) variance = 0.2 + Math.random() * 0.3;

    // Format modifier: Reels have higher views, Carousels have higher saves/engagement
    let formatViewMod = format === 'Reel' ? 1.4 : (format === 'Carousel' ? 0.75 : 0.45);
    let formatSaveMod = format === 'Carousel' ? 1.8 : (format === 'Reel' ? 1.1 : 0.6);

    const views = format === 'Image' 
      ? Math.round(template.baseViews * 0.35 * variance)
      : Math.round(template.baseViews * formatViewMod * variance);
    
    const likes = Math.round(template.baseLikes * variance * (format === 'Carousel' ? 1.2 : 1.0));
    const comments = Math.round(template.baseComments * variance * (isViral ? 1.6 : 1.0));
    const shares = Math.round(template.baseShares * variance * (format === 'Reel' ? 1.5 : 0.9));
    const saves = Math.round(template.baseSaves * formatSaveMod * variance);

    const postDate = new Date(startMs + i * timeStep + (Math.random() * 43200000 - 21600000)).toISOString();
    const hook = template.hookTemplate(i);
    const caption = template.captionTemplate(i);

    // Engagement calculation: (likes + comments + shares + saves) / (views || likes * 10) * 100
    const totalInteractions = likes + comments + shares + saves;
    const baseAudienceReach = views > 0 ? views : likes * 10;
    const engagementRate = Math.min(18.5, Number(((totalInteractions / baseAudienceReach) * 100).toFixed(2)));

    // Categorize performance level
    let performanceLevel = 'Average';
    if (engagementRate > 9.5 || views > 220000) performanceLevel = 'High';
    else if (engagementRate > 6.5 || views > 140000) performanceLevel = 'Above Average';
    else if (engagementRate < 3.5 && views < 70000) performanceLevel = 'Low';

    // Hook type assignment
    const hookType = HOOK_TYPES[i % HOOK_TYPES.length];

    // Detailed why it worked or why it underperformed
    let whyItWorked = null;
    if (performanceLevel === 'High' || performanceLevel === 'Above Average') {
      whyItWorked = {
        hookScore: 9.2,
        hookAnalysis: `Strong ${hookType}: Immediately isolates a tangible tension or high-leverage pain point in the first 2 seconds.`,
        topicRelevance: 'Directly addresses audience aspirations around high-paying career security and tangible tooling.',
        educationalValue: 'Structured actionable steps with no fluff, encouraging high save-to-view ratios.',
        emotionalAppeal: 'Empathetic yet authoritative; validates audience struggles while showing clear escape velocity.',
        ctaEffectiveness: `Specific conversational prompt ("${template.cta}") creates high comment intent without appearing spammy.`,
        shareability: 'High peer-recommendation value; audience shares with friends or colleagues facing identical hurdles.',
        formatSynergy: format === 'Reel' 
          ? 'Fast-paced visual text overlays paired with dynamic screen captures maintain 68%+ watch-through rate.'
          : 'High-density multi-slide carousel designed for reference bookmarking.'
      };
    }

    const aiAssessment = {
      strengths: [
        `Clear audience positioning targeting ${template.targetAudience.toLowerCase()}.`,
        `Opening hook utilizes ${hookType.toLowerCase()} to capture feed attention quickly.`,
        `Strong alignment with core content pillar: "${template.pillar}".`
      ],
      weaknesses: [
        template.category === 'Promotional' ? 'Heavy direct pitch with relatively lower upfront value creation.' : 'Audio pacing could benefit from stronger sound design.',
        'Could include a pinned comment with structured timestamps or resource links.'
      ]
    };

    posts.push({
      id: `post_${String(i + 1).padStart(3, '0')}`,
      shortcode: `C${Math.random().toString(36).substring(2, 7)}${i}`,
      date: postDate,
      format,
      category: template.category,
      pillar: template.pillar,
      topic: template.topic,
      hook,
      hookType,
      caption,
      targetAudience: template.targetAudience,
      mainMessage: template.mainMessage,
      objective: template.objective,
      tone: template.tone,
      cta: template.cta,
      views,
      likes,
      comments,
      shares,
      saves,
      engagementRate,
      performanceLevel,
      whyItWorked,
      aiAssessment
    });
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Beauty / D2C Brand Profile Templates
const luminaSkincareTemplates = [
  {
    topic: 'Ingredient Breakdown',
    pillar: 'Clinical Education',
    category: 'Educational',
    formatWeights: { Carousel: 0.6, Reel: 0.3, Image: 0.1 },
    hookTemplate: (i) => [
      "Why Niacinamide and Vitamin C don't actually cancel each other out.",
      "The exact molecular weight difference between cheap and medical-grade Hyaluronic Acid.",
      "Stop layering Retinol with these 3 active acids: Here is what causes chemical burns.",
      "Dermatologist explains: The one ingredient your skin barrier actually needs in winter.",
      "Ceramides vs Peptides: Which one repairs damaged texture faster?"
    ][i % 5],
    captionTemplate: (i) => `Skincare chemistry simplified. Don't waste money layering incompatible actives. Swipe through for the optimal AM/PM ingredient pairing sequence.\n\nSave for your evening skincare routine!`,
    targetAudience: 'Skincare enthusiasts and consumers dealing with sensitive or compromised skin barriers',
    mainMessage: 'Formulation chemistry and ph balance matter far more than single high-percentage actives',
    objective: 'Education',
    tone: 'Educational',
    cta: 'Save this guide before building your next skincare routine',
    baseViews: 110000,
    baseLikes: 9400,
    baseComments: 480,
    baseShares: 3200,
    baseSaves: 9800
  },
  {
    topic: 'Customer Transformations',
    pillar: 'Clinical Proof & Results',
    category: 'Testimonial',
    formatWeights: { Carousel: 0.5, Reel: 0.4, Image: 0.1 },
    hookTemplate: (i) => [
      "12 weeks of our Barrier Repair Complex: Unretouched skin barrier progression.",
      "From painful cystic flare-ups to calm, hydrated glass skin: Meet Sarah's journey.",
      "What 60 days of giving up physical scrubs and using gentle enzymes looks like.",
      "Before & After: How our calming serum reduced erythema and redness by 64%.",
      "Real customer diary: 'I thought my skin was broken until I stopped over-exfoliating.'"
    ][i % 5],
    captionTemplate: (i) => `No filters, no studio ring lights. Just consistent barrier nourishment over 12 weeks. Clinical results don't happen overnight, but real cellular repair lasts.\n\nShop the Barrier Bundle via link in bio.`,
    targetAudience: 'Individuals suffering from acne, rosacea, or damaged moisture barriers',
    mainMessage: 'Sustainable skin health requires gentle barrier repair rather than aggressive stripping',
    objective: 'Social Proof',
    tone: 'Empathetic',
    cta: 'Shop the Barrier Repair Bundle with 15% off using code GLOW15',
    baseViews: 165000,
    baseLikes: 14200,
    baseComments: 790,
    baseShares: 4100,
    baseSaves: 8200
  },
  {
    topic: 'Product Launch & Restock',
    pillar: 'Formulations & Drops',
    category: 'Promotional',
    formatWeights: { Reel: 0.5, Carousel: 0.3, Image: 0.2 },
    hookTemplate: (i) => [
      "The viral Barrier Cream is officially back in stock (while supplies last)!",
      "Introducing our new Multi-Peptide Firming Eye Complex: 18 months in formulating.",
      "Flash 48-Hour Weekend Event: Free full-size cleanser on all orders over $75.",
      "Our most requested formulation of 2026 is finally here: Meet the Ceramide Mist.",
      "Last chance to claim the Spring Discovery Kit before this batch sells out."
    ][i % 5],
    captionTemplate: (i) => `Hand-formulated in small batches in our certified lab. Clean, vegan, fragrance-free, and tested for sensitive skin types.\n\nTap link in bio to secure yours before it sells out again.`,
    targetAudience: 'Repeat customers and high-intent skincare buyers',
    mainMessage: 'Premium small-batch formulations sell out quickly due to uncompromised ingredient sourcing',
    objective: 'Conversion',
    tone: 'Promotional',
    cta: 'Tap link in bio to shop before the restock sells out',
    baseViews: 38000,
    baseLikes: 2100,
    baseComments: 140,
    baseShares: 220,
    baseSaves: 510
  },
  {
    topic: 'Lab Behind the Scenes',
    pillar: 'Brand Craft & Science',
    category: 'Behind the Scenes',
    formatWeights: { Reel: 0.7, Image: 0.2, Carousel: 0.1 },
    hookTemplate: (i) => [
      "Inside our cleanroom lab: How we emulsify lipid barriers without synthetic fragrance.",
      "Why we rejected 14 formulation batches before approving our new SPF 50.",
      "Packaging sustainability test: How our post-consumer recycled glass protects actives.",
      "Spend a day with our cosmetic chemist formulating our autumn peptide batch.",
      "Testing stability at 45°C: Why cheap vitamin C turns brown on your shelf."
    ][i % 5],
    captionTemplate: (i) => `Most brands white-label off-the-shelf formulas. We formulate every single dropper in-house with clinical rigor. Here is the testing protocol behind batch #24.\n\nAsk our head chemist anything in the comments!`,
    targetAudience: 'Consumers valuing transparency, formulation craftsmanship, and clinical rigor',
    mainMessage: 'True clinical efficacy comes from in-house research, testing, and batch stability',
    objective: 'Awareness',
    tone: 'Conversational',
    cta: 'Comment below what ingredient you want our lab team to test next',
    baseViews: 98000,
    baseLikes: 8900,
    baseComments: 560,
    baseShares: 1400,
    baseSaves: 3100
  },
  {
    topic: 'Skincare Routines & Myths',
    pillar: 'Clinical Education',
    category: 'Educational',
    formatWeights: { Reel: 0.6, Carousel: 0.3, Image: 0.1 },
    hookTemplate: (i) => [
      "3 skincare 'rules' dermatologists wish you would stop believing immediately.",
      "The order you apply your skincare matters more than how much you spent on it.",
      "Why foaming cleansers might be destroying your skin's acid mantle.",
      "Morning vs Evening routine: What your skin actually absorbs while you sleep.",
      "How to tell if your skin is purging or just severely irritated from a new product."
    ][i % 5],
    captionTemplate: (i) => `Stop complicating your routine with 10 steps. 3 well-formulated steps tailored to your skin type will always outperform a chaotic shelfie of conflicting products.\n\nSave this sequence!`,
    targetAudience: 'Consumers confused by conflicting TikTok beauty trends and multi-step routines',
    mainMessage: 'Minimalist, skin-identical ingredients outperform chaotic multi-step regimens',
    objective: 'Education',
    tone: 'Educational',
    cta: 'Save this post for your next AM routine check',
    baseViews: 215000,
    baseLikes: 16800,
    baseComments: 920,
    baseShares: 6800,
    baseSaves: 13400
  }
];

// Tech Creator / AI Tools Profile Templates
const alexRiveraTechTemplates = [
  {
    topic: 'AI Workflows',
    pillar: 'Practical AI Tooling',
    category: 'Educational',
    formatWeights: { Reel: 0.65, Carousel: 0.3, Image: 0.05 },
    hookTemplate: (i) => [
      "This new AI workflow replaced 4 paid SaaS subscriptions in my business.",
      "How to connect Claude 3.7 to your local documents for automated client research.",
      "5 free AI tools that feel completely illegal to know about in 2026.",
      "Stop writing basic prompts. Use this 4-part system architecture instead.",
      "I tested 10 AI video generators: Only 2 are actually ready for commercial production."
    ][i % 5],
    captionTemplate: (i) => `Prompt engineering is evolving into context engineering. If you aren't feeding structured schemas and clean constraints, you are getting generic output.\n\nSwipe through for the full system prompt template!`,
    targetAudience: 'Entrepreneurs, content creators, and developers seeking workflow automation',
    mainMessage: 'Structured AI context workflows yield 10x leverage over manual execution',
    objective: 'Education',
    tone: 'Analytical',
    cta: 'Comment "PROMPT" to get the free downloadable markdown template',
    baseViews: 240000,
    baseLikes: 16500,
    baseComments: 1420,
    baseShares: 8400,
    baseSaves: 15600
  },
  {
    topic: 'Productivity & Tech Stack',
    pillar: 'Creator Systems',
    category: 'Career/Advice',
    formatWeights: { Carousel: 0.5, Reel: 0.4, Image: 0.1 },
    hookTemplate: (i) => [
      "My entire daily productivity system running on Obsidian, Raycast, and Notion.",
      "How I organize 500+ client assets and video projects without getting overwhelmed.",
      "3 minimalist desk upgrades that actually improved my focus and output.",
      "The 'Second Brain' setup that saves me 15 hours of repetitive searching every week.",
      "Why I ditched complex project management tools for simple markdown files."
    ][i % 5],
    captionTemplate: (i) => `Tools don't make you productive. Frictionless capture and clear retrieval systems make you productive. Here is my daily triage protocol.\n\nSave this for your weekend workspace reset!`,
    targetAudience: 'Digital knowledge workers and solo founders wanting streamlined setups',
    mainMessage: 'Frictionless capture systems amplify cognitive bandwidth',
    objective: 'Education',
    tone: 'Professional',
    cta: 'Save this post before your next systems overhaul',
    baseViews: 145000,
    baseLikes: 11200,
    baseComments: 630,
    baseShares: 3900,
    baseSaves: 11800
  },
  {
    topic: 'Creator Monetization',
    pillar: 'Digital Business',
    category: 'Founder/Personal Brand',
    formatWeights: { Reel: 0.5, Carousel: 0.4, Image: 0.1 },
    hookTemplate: (i) => [
      "How I monetize a 300k audience: Transparent revenue breakdown for Q1 2026.",
      "Why brand deals are the worst way to monetize an audience long-term.",
      "The step-by-step strategy I used to launch a $48k digital template in 72 hours.",
      "Stop trying to go viral. 5,000 hyper-engaged buyers beat 500k passive lurkers.",
      "What I learned losing $12,000 on my first failed digital product launch."
    ][i % 5],
    captionTemplate: (i) => `Audience size is a vanity metric; audience trust is an equity asset. Build deep specific utility rather than chasing superficial algorithm spikes.\n\nRead the full breakdown in my newsletter (link in bio).`,
    targetAudience: 'Creators, consultants, and indie hackers building online businesses',
    mainMessage: 'Deep trust and productized utility outperform broad algorithmic reach',
    objective: 'Consideration',
    tone: 'Conversational',
    cta: 'Subscribe to the Sunday Deep Dive via link in bio',
    baseViews: 185000,
    baseLikes: 14800,
    baseComments: 890,
    baseShares: 4700,
    baseSaves: 9400
  }
];

// Profile Metadata
export const DEMO_PROFILES = {
  'growthacademy.ai': {
    id: 'growthacademy.ai',
    username: 'growthacademy.ai',
    fullName: 'GrowthAcademy | AI & Tech Careers',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    verified: true,
    bio: 'Empowering 50,000+ students to break into Data, AI & Tech Careers 🚀 | Verified placement stats, live bootcamps & curriculum breakdowns 💼 linktr.ee/growthacademy',
    followers: 284500,
    following: 342,
    industry: 'EdTech & Career Intelligence',
    dateRange: 'Jan 2025 - Present (12 Months)',
    postingFrequency: '4.8 posts/week',
    postsAnalyzedCount: 248,
    isDemo: true,
    posts: generateProfilePosts(growthAcademyTemplates, 248, '2025-01-15T00:00:00Z', '2026-03-28T00:00:00Z', {
      followers: 284500
    })
  },
  'lumina_skincare': {
    id: 'lumina_skincare',
    username: 'lumina_skincare',
    fullName: 'Lumina Clinical Botanicals',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    verified: true,
    bio: 'Clinical formulations, botanical ingredients 🌿 | Transparent skincare backed by dermatology | Vegan & Cruelty-Free | Lab tested in California 🔬 luminaclinical.com',
    followers: 194200,
    following: 218,
    industry: 'D2C Skincare & Beauty',
    dateRange: 'Mar 2025 - Present (10 Months)',
    postingFrequency: '4.2 posts/week',
    postsAnalyzedCount: 192,
    isDemo: true,
    posts: generateProfilePosts(luminaSkincareTemplates, 192, '2025-03-01T00:00:00Z', '2026-03-25T00:00:00Z', {
      followers: 194200
    })
  },
  'alexrivera.tech': {
    id: 'alexrivera.tech',
    username: 'alexrivera.tech',
    fullName: 'Alex Rivera | AI & Systems',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    verified: false,
    bio: 'Simplifying AI tools & modern workflows for 300k+ builders ⚡ | Daily breakdowns, prompt systems & SaaS reviews | Newsletter: alexrivera.tech/weekly',
    followers: 312800,
    following: 415,
    industry: 'Tech Creator & AI Tools',
    dateRange: 'Feb 2025 - Present (11 Months)',
    postingFrequency: '3.6 posts/week',
    postsAnalyzedCount: 175,
    isDemo: true,
    posts: generateProfilePosts(alexRiveraTechTemplates, 175, '2025-02-10T00:00:00Z', '2026-03-29T00:00:00Z', {
      followers: 312800
    })
  }
};
