export enum Section {
  Education = "education",
  Experience = "experience",
  TechnicalFocus = "technical-focus",
  Portfolio = "portfolio",
  Publication = "publication",
  News = "news",
  AcademicService = "academic-service",
}

export const sectionOrder = [
  Section.News,
  Section.Experience,
  Section.TechnicalFocus,
  Section.Publication,
  Section.Education,
  Section.AcademicService,
  // Section.Portfolio,
];
