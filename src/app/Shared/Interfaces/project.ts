export interface Project {
  id:           number;
  title:        string;
  description:  string;
  image:        string;
  category:     'pools' | 'landscaping';
  slug:         string; // for URL routing
}
