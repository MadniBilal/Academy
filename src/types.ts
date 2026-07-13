export interface Course {
  id: string;
  title: string;
  category: 'FSc' | 'Matric' | 'Entry Test' | 'Core';
  description: string;
  subjects: string[];
  duration: string;
  features: string[];
  iconName: string; // Used to dynamic render Lucide icons
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  subject: string;
  image: string;
  bio: string;
  experience: string;
}

export interface BoardResult {
  id: string;
  studentName: string;
  achievement: string;
  detail: string; // e.g. "1088/1100 - BISE Faisalabad"
  year: string;
  category: 'FSc Pre-Medical' | 'FSc Pre-Engineering';
  avatarSeed: string; // Used for unique visual placeholder
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'classroom' | 'labs' | 'events';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Parent of FSc Student", "Alumni - KEMU"
  quote: string;
  rating: number;
}
