export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  keyFeatures: string[];
  serviceBenefits: string[];
  gallery: { url: string; alt: string }[];
}
