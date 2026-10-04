export interface AcademicService {
  date: string;
  role: string;
  organization: string;
  venue?: string;
}

export interface Award {
  category: string;
  name: string;
}

export const academicServiceData: AcademicService[] = [
  {
    date: "Dec. 2024—Jan. 2026",
    role: "Head Organizer",
    organization: "The Singing Voice Conversion Challenge 2025",
    venue: "ICASSP 2026",
  },
  {
    date: "Dec. 2022—Dec. 2023",
    role: "Organizing Committee",
    organization: "The Singing Voice Conversion Challenge 2023",
    venue: "ASRU 2023 Special Session",
  },
  {
    date: "Aug. 2024—Present",
    role: "Peer Review Committee",
    organization:
      "IEEE SLT, IEEE ICASSP, ISCA Interspeech, IEEE IJCNN, IEEE ASRU, IEEE JSTSP",
  },
];

export const awardData: Award[] = [
  {
    category: "Scholarship",
    name: "Monbukagakusho Japanese Government Scholarship (Ph.D.)",
  },
  {
    category: "Scholarship",
    name: "Monbukagakusho Japanese Government Scholarship (Master’s)",
  },
  {
    category: "Travel Grant",
    name: "Interspeech 2022 Travel Grant",
  },
  {
    category: "Fellowship",
    name: "Nagoya University Interdisciplinary Frontier Fellowship",
  },
];
