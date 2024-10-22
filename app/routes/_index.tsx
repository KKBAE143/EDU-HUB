import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Unified Course Discovery`,
      description: `Access courses from Coursera, Udemy, BYJU's, and more in one place. Save time and find the perfect course effortlessly.`,
      icon: <i className="las la-search"></i>,
    },
    {
      heading: `AI-Powered Recommendations`,
      description: `Get personalized course suggestions based on your goals, learning style, and past performance.`,
      icon: <i className="las la-brain"></i>,
    },
    {
      heading: `Cross-Platform Progress Tracking`,
      description: `Monitor your progress across all platforms in one dashboard. Stay motivated and on track with your learning goals.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Gamified Learning Experience`,
      description: `Earn badges, unlock achievements, and compete with friends. Make learning fun and engaging.`,
      icon: <i className="las la-trophy"></i>,
    },
    {
      heading: `Detailed Analytics`,
      description: `Gain insights into your learning patterns, strengths, and areas for improvement with comprehensive analytics.`,
      icon: <i className="las la-chart-pie"></i>,
    },
    {
      heading: `Custom Learning Paths`,
      description: `Let our AI create tailored learning journeys based on your career goals and current skill level.`,
      icon: <i className="las la-route"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Software Developer`,
      content: `EduHub transformed my learning journey. I was able to upskill in AI and machine learning, which led to a promotion at work. The personalized recommendations were spot-on!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Marketing Manager`,
      content: `As a busy professional, EduHub saved me countless hours in finding the right courses. The cross-platform tracking kept me accountable and motivated.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Recent Graduate`,
      content: `EduHub's gamification made learning addictive! I completed courses I never thought I'd finish, and the skills I gained helped me land my dream job.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Patel`,
      designation: `Entrepreneur`,
      content: `The custom learning paths feature is a game-changer. It helped me acquire the exact skills I needed to launch my startup. EduHub is an invaluable resource for lifelong learners.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Thompson`,
      designation: `HR Director`,
      content: `Implementing EduHub for our company's L&D program has significantly improved employee engagement and skill development. The analytics provide valuable insights for our team.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Alex Nguyen`,
      designation: `Data Scientist`,
      content: `The quality and diversity of courses available through EduHub are unmatched. It's become my go-to platform for staying current in the fast-paced world of data science.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for individual learners`,
      monthly: 9.99,
      yearly: 99,
      features: [
        `Access to all courses`,
        `Basic progress tracking`,
        `Limited AI recommendations`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for serious learners and professionals`,
      monthly: 19.99,
      yearly: 199,
      features: [
        `Everything in Basic`,
        `Advanced analytics`,
        `Unlimited AI recommendations`,
        `Custom learning paths`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored for organizations and teams`,
      monthly: 49.99,
      yearly: 499,
      features: [
        `Everything in Pro`,
        `Team management`,
        `Dedicated support`,
        `API access`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does EduHub differ from other online learning platforms?`,
      answer: `EduHub aggregates courses from multiple providers, offering a unified interface for discovery, comparison, and access. We also provide AI-powered recommendations, cross-platform progress tracking, and detailed analytics to enhance your learning experience.`,
    },
    {
      question: `Can I transfer my existing course progress to EduHub?`,
      answer: `Yes, EduHub integrates with major course providers. Once you link your accounts, we'll automatically sync your progress for a seamless learning experience across platforms.`,
    },
    {
      question: `How does the AI recommendation system work?`,
      answer: `Our AI analyzes your learning history, goals, and performance to suggest courses that best fit your needs. It also considers factors like your preferred learning style and time availability to create personalized recommendations.`,
    },
    {
      question: `Is there a free trial available?`,
      answer: `Yes, we offer a 14-day free trial for all new users. This gives you full access to EduHub's features, allowing you to experience the benefits of our platform before committing to a subscription.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up and Connect`,
      description: `Create your EduHub account and link it with your existing online course platforms.`,
    },
    {
      heading: `Set Your Goals`,
      description: `Tell us about your learning objectives and career aspirations.`,
    },
    {
      heading: `Get Personalized Recommendations`,
      description: `Receive AI-powered course suggestions tailored to your goals and learning style.`,
    },
    {
      heading: `Learn and Track Progress`,
      description: `Start learning across platforms while EduHub tracks your progress and provides insights.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🔍`,
      title: `Endless searching for the right courses`,
    },
    {
      emoji: `😕`,
      title: `Difficulty comparing course quality`,
    },
    {
      emoji: `📊`,
      title: `Lack of unified progress tracking`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Unlock Your Full Potential with Unified Online Learning`}
        subtitle={`EduHub brings together the best courses from top platforms, powered by AI to accelerate your learning journey.`}
        buttonText={`Start Learning Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/FWa0nx-eduhub-OGPw`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={100000}
            suffixText={`learners already achieving their goals`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Education Providers`}
      />
      <LandingPainPoints
        title={`The Struggle of Modern Learners: 44% Can't Find the Right Courses`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Effortless Learning`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Supercharge Your Learning with EduHub`}
        subtitle={`Discover how our innovative features can help you achieve your educational goals faster and more efficiently.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How EduHub Transformed Careers`}
        subtitle={`Join thousands of learners who have accelerated their growth with EduHub.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Future, Not in Multiple Subscriptions`}
        subtitle={`Choose the plan that fits your learning journey and start saving time and money today.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how EduHub can revolutionize your online learning experience.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Learning Journey?`}
        subtitle={`Join EduHub today and take the first step towards a more efficient, personalized, and rewarding educational experience.`}
        buttonText={`Get Started for Free`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
