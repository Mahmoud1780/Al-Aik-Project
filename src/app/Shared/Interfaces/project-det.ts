export interface ProjectDet {
  id:           number;
  title:        string;
  description:  string;
  image:        string;
  category:     'pools' | 'landscaping';
  slug:         string; // for URL routing
  keyFeatures:  string[];
  location:     string;
  completed:    string;
  duration:    string;
}
