import { Presentation, Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'computer-organization',
    name: 'Computer Organization',
    icon: 'Cpu',
    color: 'from-blue-500 to-blue-600',
    presentationCount: 3,
    description: 'Computer Organization and Architecture',
    subjectCode: '9CC56'
  },
  {
    id: 'database-management',
    name: 'Database Management',
    icon: 'Database',
    color: 'from-purple-500 to-purple-600',
    presentationCount: 4,
    description: 'Database Management Systems',
    subjectCode: '9FC04'
  },
  {
    id: 'qualitative-analysis',
    name: 'Qualitative Analysis and Logical Reasoning',
    icon: 'LineChart',
    color: 'from-green-500 to-green-600',
    presentationCount: 3,
    description: 'Qualitative Analysis and Logical Reasoning',
    subjectCode: '9HC16'
  }
];

export const presentations: Presentation[] = [
  {
    id: '1',
    title: 'UNIT-1 CO',
    subject: 'computer-organization',
    subjectCode: '9CC56',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '172 KB',
    description: 'Computer Organization Unit 1',
    fileName: 'UNIT-1 CO - Copy.pptx'
  },
  {
    id: '2',
    title: 'UNIT-2 CO',
    subject: 'computer-organization',
    subjectCode: '9CC56',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '246 KB',
    description: 'Computer Organization Unit 2',
    fileName: 'UNIT-2 CO - Copy.pptx'
  },
  {
    id: '3',
    title: 'UNIT-3 CO',
    subject: 'computer-organization',
    subjectCode: '9CC56',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '7.4 MB',
    description: 'Computer Organization Unit 3',
    fileName: 'UNIT-3 CO - Copy.ppt'
  },
  {
    id: '4',
    title: 'UNIT-1 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '2.1 MB',
    description: 'Database Management Systems Unit 1',
    fileName: 'UNIT-1 DBMS - Copy.pptx'
  },
  {
    id: '5',
    title: 'UNIT-2 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '1.8 MB',
    description: 'Database Management Systems Unit 2',
    fileName: 'UNIT-2 DBMS - Copy.pptx'
  },
  {
    id: '6',
    title: 'UNIT-3 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '2.3 MB',
    description: 'Database Management Systems Unit 3',
    fileName: 'UNIT-3 DBMS - Copy.pptx'
  },
  {
    id: '10',
    title: 'PLSQL DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '2.5 MB',
    description: 'PLSQL in Database Management Systems',
    fileName: 'plsql dbms.pptx'
  },
  {
    id: '7',
    title: 'UNIT-1 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '1.5 MB',
    description: 'Qualitative Analysis Unit 1',
    fileName: 'UNIT-1 QALR - Copy.pptx'
  },
  {
    id: '8',
    title: 'UNIT-2 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '1.7 MB',
    description: 'Qualitative Analysis Unit 2',
    fileName: 'UNIT-2 QALR - Copy.pptx'
  },
  {
    id: '9',
    title: 'UNIT-3 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '1.9 MB',
    description: 'Qualitative Analysis Unit 3',
    fileName: 'UNIT-3 QALR - Copy.pptx'
  }
];