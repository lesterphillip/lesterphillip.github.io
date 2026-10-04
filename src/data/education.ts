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
    year: "Apr. 2023—Mar. 2026",
    institution: "Nagoya University, Japan",
    degree: "Ph.D. in Informatics",
    advisor: "Prof. Tomoki Toda",
    thesis:
      "Domain Adaptation Techniques for Electrolaryngeal Speech Recognition and Enhancement",
  },
  {
    year: "Apr. 2021—Mar. 2023",
    institution: "Nagoya University, Japan",
    degree: "M.S. in Informatics",
    advisor: "Prof. Tomoki Toda",
    thesis:
      "Pretraining and Adaptation Techniques for Pathological Speech Recognition",
  },
  {
    year: "2015—2020",
    institution: "Ateneo de Manila University, Philippines",
    degree: "B.S. Electronics Engineering",
  },
  {
    year: "Aug. 2019—Feb. 2020",
    institution:
      "Institut catholique d'arts et métiers — Site de Paris-Sénart, France",
    degree: "Research Exchange Semester",
  },
];
