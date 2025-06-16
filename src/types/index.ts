export interface Presentation {
  id: string;
  title: string;
  subject: string;
  subjectCode: string;
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  description?: string;
  fileName: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  presentationCount: number;
  description: string;
  subjectCode: string;
}