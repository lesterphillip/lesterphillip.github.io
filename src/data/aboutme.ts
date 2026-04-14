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
  title: "Research Scientist (Speech AI)",
  institution: "DubGuild, Tokyo, Japan",
  // Note that links work in the description
  description:
    'I am currently a Research Scientist at <a href="https://dubguild.com">DubGuild</a>, where I work on scaling generative spoken language models.<br><br> Prior to this, I received my Ph.D. in Computer Science at Nagoya University, Japan at Toda Laboratory under the supervision of Professor Tomoki Toda, where my <a href="https://scholar.google.com/citations?user=iN-bKpcAAAAJ&hl">research</a> mainly focused on speech synthesis, voice conversion, and speech recognition. My Ph.D. work has been published in top speech and audio conferences/journals such as Interspeech, ICASSP, ASRU, SLT, and TASLP. I am also currently part of the peer-review committee for several academic conferences such as ASRU, SLT, ICASSP, Interspeech, IJCNN, and journals like IEEE JSTSP. I was also the main organizer of the <a href="https://www.vc-challenge.org/">Singing Voice Conversion Challenge</a> in 2023 and 2025. <br><br> I have a deep international background now based in Japan, and having done my B.S. in the Philippines and done a research exchange in France. Outside of research, I like bouldering (check out <a href="https://www.instagram.com/lester.vsgravity/">this page</a>) and learning Japanese.',
  email: "lpgvioleta [at] gmail [dot] com",
  imageUrl:
    "/images/personal.png",
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
