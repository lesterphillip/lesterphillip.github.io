export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Lester Phillip Violeta",
  title: "Research Scientist (Speech LLMs & Post-Training)",
  institution: "DubGuild, Tokyo, Japan",
  // Note that links work in the description
  description:
    'I am a Research Scientist at <a href="https://dubguild.com">DubGuild</a> in Tokyo, where I work on scaling and post-training speech LLMs for natural conversation. My research interests sit at the intersection of speech generation and LLM post-training: reinforcement learning for spoken dialogue behavior, neural audio representations, and large-scale evaluation methodology.<br><br> I received my Ph.D. in Computer Science from Nagoya University at Toda Laboratory under the supervision of Professor Tomoki Toda, where my <a href="https://scholar.google.com/citations?user=iN-bKpcAAAAJ&hl">research</a> on speech synthesis, voice conversion, and speech recognition was published in top speech and audio venues such as Interspeech, ICASSP, ASRU, SLT, and IEEE/ACM TASLP. I was the main organizer of the <a href="https://www.vc-challenge.org/">Singing Voice Conversion Challenge</a> in 2023 and 2025, and I serve on the peer-review committees of conferences such as ASRU, SLT, ICASSP, Interspeech, and IJCNN, and journals like IEEE JSTSP.<br><br> I have a deep international background now based in Japan, having done my B.S. in the Philippines and a research exchange in France. Outside of research, I like bouldering (<a href="https://www.instagram.com/lester.vsgravity/">checkout my instagram page</a>) and learning Japanese.',
  email: "lpgvioleta [at] gmail [dot] com",
  imageUrl:
    "/images/personal-2026.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=iN-bKpcAAAAJ&hl",
  githubUsername: "lesterphillip",
  linkedinUsername: "lestervioleta",
  twitterUsername: "lesterphv",
  // blogUrl: "https://",
  // cvUrl: "https://drive.google.com/file/d/1bfM-srBJYDNctALeEY943RB2jujnjK-p/view?usp=sharing",
  institutionUrl: "https://dubguild.com/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
