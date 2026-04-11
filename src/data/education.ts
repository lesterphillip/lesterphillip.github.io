export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—2026",
    institution: "Nagoya University, Japan",
    degree: "Ph.D. Computer Science",
    advisor: "Prof. Tomoki Toda",
    thesis: "Speech Synthesis, Voice Conversion",
  },
  {
    year: "2021—2023",
    institution: "Nagoya University, Japan",
    degree: "M.S. Computer Science",
    advisor: "Prof. Tomoki Toda",
    thesis: "Speech Recognition",
  },
  {
    year: "2015—2020",
    institution: "Ateneo de Manila University, Philippines",
    degree: "B.S. Electronics Engineering",
    thesis: "Renewable Energy, Microgrid Optimization",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2019",
    institution: "Institut Catholique d'Arts et Metiers Paris, France",
    degree: "Research Exchange Semester",
    thesis: "Renewable Energy, Microgrid Optimization",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
