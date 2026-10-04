export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jul. 2025 to Present",
    title: "Research Scientist",
    company: "DubGuild",
    description:
      "Focused on the training and evaluation of conversational speech LLMs for synthetic dialogue generation, including full-parameter SFT and RL post-training.",
    companyUrl: "https://dubguild.com",
  },
  {
    date: "Nov. 2024 to Jul. 2025",
    title: "Research Engineer",
    company: "CoeFont",
    description:
      "Developed real-time voice conversion models for the CoeFont Voice Changer and trained large-scale emotional TTS models.",
    companyUrl: "https://coefont.cloud/vc/en",
  },
  {
    date: "Feb. 2024 to Nov. 2024",
    title: "ML Engineer",
    company: "Voice-Swap.AI",
    description:
      "Developed singing voice conversion models for the Voice-Swap singing studio, used by music-industry clients.",
    companyUrl: "https://voice-swap.ai",
  },
  {
    date: "Oct. 2023 to Mar. 2024",
    title: "Research Assistant",
    company: "Sony CSL Tokyo",
    description:
      "Researched highly controllable, low-resource singing voice synthesis.",
    manager: "Dr. Taketo Akama",
    companyUrl: "https://www.sonycsl.co.jp/category/tokyo",
  },
  {
    date: "Mar. 2022",
    title: "Research Intern",
    company: "NTT Media Intelligence Laboratories",
    description:
      "Developed and analyzed speaker diarization systems using various encoders.",
    manager: "Dr. Atsushi Ando",
    companyUrl: "https://www.rd.ntt/e/cs/team_project/media/",
  },
  {
    date: "Jan. 2022 to Feb. 2022",
    title: "Research Intern",
    company: "Hitachi Ltd.",
    description:
      "Developed speech recognition systems for low-resource datasets.",
    manager: "Dr. Takashi Sumiyoshi",
    companyUrl: "https://www.hitachi.com/rd/",
  },
];
