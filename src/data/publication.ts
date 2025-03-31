export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Preprint",
    title: "Serenade: A Singing Style Conversion Framework Based on Audio Infilling",
    authors: "Lester Phillip Violeta, Wen-Chin Huang, Tomoki Toda",
    paperUrl: "https://arxiv.org/abs/2503.12388",
    codeUrl: "https://github.com/lesterphillip/serenade",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    imageUrl:
      "/images/serenade.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "ICASSP",
    title: "Electrolaryngeal Speech Intelligibility Enhancement through Robust Linguistic Encoders",
    authors: "Lester Phillip Violeta, Wen-Chin Huang, Ding Ma, Ryuichi Yamamoto, Kazuhiro Kobayashi, Tomoki Toda",
    paperUrl: "https://arxiv.org/pdf/2309.09627",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Developed robust linguistic encoder to disentangle speaker information from electrolaryngeal speech.",
    imageUrl:
      "/images/icassp24-el.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "IEEE/ACM TASLP",
    title: "Pretraining and Adaptation Techniques for Electrolaryngeal Speech Recognition",
    authors: "Lester Phillip Violeta, Ding Ma, Wen-Chin Huang, Tomoki Toda",
    paperUrl: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10533680",
    imageUrl:
    "/images/taslp-asr.png",
  },
  {
    year: "2024",
    conference: "Technical Report",
    title: "A Preliminary Investigation on Flexible Singing Voice Synthesis Through Decomposed Framework with Inferrable Features",
    authors: "Lester Phillip Violeta, Taketo Akama",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    imageUrl:
    "/images/svs-techreport.png",
  },
  {
    year: "2023",
    conference: "ASRU",
    title: "The Singing Voice Conversion Challenge 2023",
    authors: "Wen-Chin Huang, Lester Phillip Violeta, Songxiang Liu, Jiatong Shi, Tomoki Toda",
    paperUrl: "https://arxiv.org/pdf/2306.14422",
    imageUrl:
    "/images/asru23-svcc23.png",
  },
  {
    year: "2023",
    conference: "APSIPA",
    title: "An Analysis of Personalized Speech Recognition System Development for the Deaf and Hard-of-hearing",
    authors: "Lester Phillip Violeta, Tomoki Toda",
    paperUrl: "https://arxiv.org/pdf/2306.13953",
    imageUrl:
    "/images/apsipa23-dhh.png",
  },
  {
    year: "2023",
    conference: "ICASSP",
    title: "Intermediate Fine-tuning Using Imperfect Synthetic Speech for Improving Electrolaryngeal Speech Recognition",
    authors: "Lester Phillip Violeta, Ding Ma, Wen-Chin Huang, Tomoki Toda",
    paperUrl: "https://arxiv.org/pdf/2211.01079",
    imageUrl:
    "/images/icassp23-inter.png",
  },
  {
    year: "2022",
    conference: "Interspeech",
    title: "Investigating Self-Supervised Pretraining Frameworks for Pathological Speech Recognition",
    authors: "Lester Phillip Violeta, Wen-Chin Huang, Tomoki Toda",
    paperUrl: "https://arxiv.org/pdf/2203.15431",
    imageUrl:
    "/images/is22-pasr.png",
  },
];
