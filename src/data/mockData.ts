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
  },
  {
    id: 'computer-organization-microprocessors',
    name: 'Computer Organization & Microprocessors',
    icon: 'Microscope',
    color: 'from-red-500 to-red-600',
    presentationCount: 3,
    description: 'Computer Organization and Microprocessors',
    subjectCode: '9CC54'
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
    fileSize: '1.0 MB',
    description: 'Database Management Systems Unit 1',
    fileName: 'Unit-IV DBMS.ppt'
  },
  {
    id: '5',
    title: 'UNIT-2 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '935 KB',
    description: 'Database Management Systems Unit 2',
    fileName: 'Unit-V DBMS.ppt'
  },
  {
    id: '6',
    title: 'UNIT-3 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '867 KB',
    description: 'Database Management Systems Unit 3',
    fileName: 'Unit-VI DBMS.ppt'
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
  ,
  {
    id: '11',
    title: 'UNIT-1 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '3.5 MB',
    description: 'Computer Organization and Microprocessors Unit 1',
    fileName: 'Unit-1 co&mpi.ppt'
  },
  {
    id: '12',
    title: 'UNIT-2 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '3.8 MB',
    description: 'Computer Organization and Microprocessors Unit 2',
    fileName: 'Unit-2 co&mpi.ppt'
  },{
    id: '13',
    title: 'UNIT-3 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '2024-03-19',
    fileSize: '4.0 MB',
    description: 'Computer Organization and Microprocessors Unit 3',
    fileName: 'Unit-3 co&mpi.ppt'
  }
];