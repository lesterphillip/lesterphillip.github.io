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
  title: "Ph.D. Candidate",
  institution: "Nagoya University, Japan",
  // Note that links work in the description
  description:
    'I am a final year (!) Ph.D. student at <a href="https://www.toda.is.i.nagoya-u.ac.jp/">Nagoya University, Japan at Toda Laboratory</a> under the supervision of <a href="https://sites.google.com/site/tomokitoda/home_eng">Professor Tomoki Toda</a> through a full scholarship from the Monbukagakusho Japanese Government. My <a href="https://scholar.google.com/citations?user=iN-bKpcAAAAJ&hl">research</a> mainly focuses on speech synthesis, particularly with electrolaryngeal speech data and singing voice data.<br><br>My work has been published in top speech and audio conferences/journals such as Interspeech, ICASSP, ASRU, SLT, and TASLP. I have also been involved in several academic activities, where I was co-organizer of the recent <a href="https://www.vc-challenge.org/">Singing Voice Conversion Challenge</a> in 2023 (and also co-organizing 2025!). I am also part of the peer-review committee for several academic conferences such as ASRU, SLT, ICASSP, Interspeech, IJCNN, and journals like IEEE JSTSP. <br><br> Aside from research, I also have various experiences in the engineering side, creating custom models and deploying these as products for companies. I am currently a part-time speech researcher at <a href="https://coefont.cloud/">CoeFont</a> in the voice conversion team. Previously, I was also a founding AI engineer at <a href="https://www.voice-swap.ai/">VoiceSwap.AI</a> and have also worked on research internships at <a href="https://www.sonycsl.co.jp/category/tokyo/">Sony Computer Science Laboratories Tokyo</a>, <a href="https://www.rd.ntt/e/cs/team_project/media/">NTT Media Intelligence Laboratories</a>, and <a href="https://www.hitachi.com/rd/">Hitachi Ltd</a>. Thus, I have extensive experience in both the academic research and engineering sides of AI.  <br><br> I have a deep international background now studying in Japan, and having done my B.S. in the Philippines and done a research exchange in France. Outside of programming, I like bouldering (check out <a href="https://www.instagram.com/lester.iwanoboru/">this page</a>) and learning Japanese.',
  email: "lpgvioleta [at] gmail [dot] com",
  imageUrl:
    "/images/personal.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=iN-bKpcAAAAJ&hl",
  githubUsername: "lesterphillip",
  linkedinUsername: "lestervioleta",
  twitterUsername: "lesterphv",
  // blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1bfM-srBJYDNctALeEY943RB2jujnjK-p/view?usp=sharing",
  institutionUrl: "https://www.toda.is.i.nagoya-u.ac.jp/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
