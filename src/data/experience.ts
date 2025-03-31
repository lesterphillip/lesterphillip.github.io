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
    date: "Nov. 2024 to Present",
    title: "Researcher",
    company: "CoeFont",
    description:
      "Part-time, voice conversion team",
    companyUrl: "https://coefont.com",
  },
  {
    date: "Feb. 2024 to Nov. 2024",
    title: "Founding AI Engineer",
    company: "Voice-Swap.AI",
    description:
      "Custom singing voice conversion models and speech synthesis for B2B customers",
    //manager: "Elise Brown",
    companyUrl: "https://voice-swap.ai",
  },
  {
    date: "Oct. 2023 to Mar. 2024",
    title: "Research Assistant",
    company: "Sony CSL Tokyo",
    description:
      "Research on singing voice synthesis systems",
    manager: "Dr. Taketo Akama",
    companyUrl: "https://www.sonycsl.co.jp/category/tokyo",
  },
  {
    date: "Mar. 2022",
    title: "Research Intern",
    company: "NTT Media Intelligence Laboratories",
    description:
      "Research on speech diarization systems",
    manager: "Dr. Atsushi Ando",
    companyUrl: "https://www.rd.ntt/e/cs/team_project/media/",
  },
  {
    date: "Jan. 2022 to Feb. 2022",
    title: "Research Intern",
    company: "Hitachi Ltd.",
    description:
      "Research on low-resourced speech recognition",
    manager: "Dr. Takashi Sumiyoshi",
    companyUrl: "https://www.hitachi.com/rd/",
  },
];
