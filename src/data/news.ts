export interface News {
  date: string;
  title: string;
  description?: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "July 2026",
    title: "🎯 New blog post: post-training TTS models with reinforcement learning. (in Japanese)",
    link: "https://blog.dubguild.com/melte/posttrain/",
  },
  {
    date: "July 2026",
    title: "📝 New blog post: pre-training methods for speech LLM. (in Japanese)",
    link: "https://blog.dubguild.com/melte/pretrain/",
  },
  {
    date: "May 2026",
    title: "🎤 Our extended SVCC 2025 analysis is now on arXiv!",
    link: "https://arxiv.org/abs/2509.15629",
  },
  {
    date: "April 2026",
    title: "⚙️ New blog post: our 500k-hour audio preprocessing pipeline. (in Japanese)",
    link: "https://blog.dubguild.com/melte/preprocessing-pipeline/",
  },
  {
    date: "April 2026",
    title: "📈 New blog post: scaling our Japanese speech LLM to 8B. (in Japanese)",
    link: "https://blog.dubguild.com/melte/llm-tts-scaling/",
  },
  {
    date: "March 2026",
    title: "🎓 Graduated with my Ph.D. from Nagoya University!",
  },
  {
    date: "October 2025",
    title: "🚀 Joined DubGuild full-time as a Research Scientist!",
    link: "https://dubguild.com",
  },
];
