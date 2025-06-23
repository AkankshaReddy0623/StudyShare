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
  },
  {
    id: 'python-programming',
    name: 'Python Programming',
    icon: 'FileText',
    color: 'from-yellow-500 to-yellow-600',
    presentationCount: 3,
    description: 'Introduction to Python Programming',
    subjectCode: '9FC02'
  },
  {
    id: 'business-economics-financial-analysis',
    name: 'Business Economics & Financial Analysis',
    icon: 'DollarSign',
    color: 'from-orange-500 to-orange-600',
    presentationCount: 4,
    description: 'Business Economics and Financial Analysis',
    subjectCode: '9ZC01'
  },
  {
    id: 'data-structures-algorithms',
    name: 'Design Analysis and Algorithms',
    icon: 'Network',
    color: 'from-indigo-500 to-indigo-600',
    presentationCount: 3,
    description: 'Design Analysis and Algorithms (DAA)',
    subjectCode: '9FC05'
  },
  {
    id: 'introduction-data-science',
    name: 'Introduction to Data Science',
    icon: 'Shield',
    color: 'from-teal-500 to-teal-600',
    presentationCount: 3,
    description: 'Introduction to Data Science (IDS)',
    subjectCode: '9EC16'
  }
];

export const presentations: Presentation[] = [
  {
    id: '1',
    title: 'UNIT-1 CO',
    subject: 'computer-organization',
    subjectCode: '9CC56',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
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
    uploadDate: '18-06-2025',
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
    uploadDate: '18-06-2025',
    fileSize: '7.4 MB',
    description: 'Computer Organization Unit 3',
    fileName: 'UNIT-3 CO - Copy.ppt'
  },
  {
    id: '4',
    title: 'UNIT-4 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.0 MB',
    description: 'Database Management Systems Unit 4',
    fileName: 'Unit-IV DBMS.ppt'
  },
  {
    id: '5',
    title: 'UNIT-5 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '935 KB',
    description: 'Database Management Systems Unit 5',
    fileName: 'Unit-V DBMS.ppt'
  },
  {
    id: '6',
    title: 'UNIT-6 DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '867 KB',
    description: 'Database Management Systems Unit 6',
    fileName: 'Unit-VI DBMS.ppt'
  },
  {
    id: '10',
    title: 'PLSQL DBMS',
    subject: 'database-management',
    subjectCode: '9FC04',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '2.5 MB',
    description: 'PLSQL in Database Management Systems',
    fileName: 'plsql dbms.pptx'
  },
  {
    id: '7',
    title: 'UNIT-4 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '27MB',
    description: 'Qualitative Analysis Unit 4',
    fileName: 'Unit4 QALR.pptx'
  },
  {
    id: '8',
    title: 'UNIT-5 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '20MB',
    description: 'Qualitative Analysis Unit 5',
    fileName: 'QALR Unit5 pptx.pptx'
  },
  {
    id: '9',
    title: 'UNIT-6 QALR',
    subject: 'qualitative-analysis',
    subjectCode: '9HC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '18MB',
    description: 'Qualitative Analysis Unit 6',
    fileName: 'QALR UNIT - 6 .pptx'
  },
  {
    id: '11',
    title: 'UNIT-3 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '4.0 MB',
    description: 'Computer Organization and Microprocessors Unit 3',
    fileName: 'Unit-3 co&mpi.ppt'
  },
  {
    id: '12',
    title: 'UNIT-1 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '3.5 MB',
    description: 'Computer Organization and Microprocessors Unit 1',
    fileName: 'Unit-1 co&mpi.ppt'
  },
  {
    id: '13',
    title: 'UNIT-2 CO & MPI',
    subject: 'computer-organization-microprocessors',
    subjectCode: '9CC54',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '3.8 MB',
    description: 'Computer Organization and Microprocessors Unit 2',
    fileName: 'Unit-2 co&mpi.ppt'
  },
  {
    id: '14',
    title: 'UNIT-4 Python',
    subject: 'python-programming',
    subjectCode: '9FC02',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.5 MB',
    description: 'Python Programming Unit 4',
    fileName: 'Python UNIT-IV.pptx'
  },
  {
    id: '15',
    title: 'UNIT-5 Python',
    subject: 'python-programming',
    subjectCode: '9FC02',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.3 MB',
    description: 'Python Programming Unit 5',
    fileName: 'Python UNIT-V.pptx'
  },
  {
    id: '16',
    title: 'UNIT-6 Python',
    subject: 'python-programming',
    subjectCode: '9FC02',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.6 MB',
    description: 'Python Programming Unit 6',
    fileName: 'Python UNIT-VI.pptx'
  },
  {
    id: '17',
    title: 'UNIT-4 BEFA',
    subject: 'business-economics-financial-analysis',
    subjectCode: '9ZC01',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '281KB',
    description: 'Business Economics and Financial Analysis Unit 4',
    fileName: 'UNIT IV BEFA.pdf'
  },
  {
    id: '18',
    title: 'UNIT-5 BEFA',
    subject: 'business-economics-financial-analysis',
    subjectCode: '9ZC01',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '735KB',
    description: 'Business Economics and Financial Analysis Unit 5',
    fileName: 'UNIT V BEFA.pdf'
  },
  {
    id: '19',
    title: 'UNIT-6 BEFA',
    subject: 'business-economics-financial-analysis',
    subjectCode: '9ZC01',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '176KB',
    description: 'Business Economics and Financial Analysis Unit 6',
    fileName: 'UNIT VI BEFA.pdf'
  },
  {
    id: '20',
    title: 'BEFA Unit 5 - Problems with Solutions',
    subject: 'business-economics-financial-analysis',
    subjectCode: '9ZC01',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '370KB',
    description: 'BEFA Unit 5 Problems with Solutions',
    fileName: 'BEFA- Unit - 5 Problems with Solutions.pdf'
  },
  {
    id: '21',
    title: 'DAA Unit 1',
    subject: 'data-structures-algorithms',
    subjectCode: '9FC05',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.7 MB',
    description: 'Introduction to Design Analysis and Algorithm Concepts',
    fileName: 'DAA-Unit-I.ppt'
  },
  {
    id: '22',
    title: 'DAA Unit 2',
    subject: 'data-structures-algorithms',
    subjectCode: '9FC05',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.3 MB',
    description: 'Algorithm Design Techniques and Analysis Methods',
    fileName: 'DAA-Unit-II.ppt'
  },
  {
    id: '23',
    title: 'DAA Unit 3',
    subject: 'data-structures-algorithms',
    subjectCode: '9FC05',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.1 MB',
    description: 'Advanced Algorithm Analysis and Complexity Theory',
    fileName: 'DAA-Unit-III.ppt'
  },
  {
    id: '24',
    title: 'IDS Unit 1',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.1 MB',
    description: 'Introduction to Data Science Concepts and Fundamentals',
    fileName: 'IDS Unit 1.pptx'
  },
  {
    id: '25',
    title: 'IDS Unit 2',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '2.0 MB',
    description: 'Data Analysis Techniques and Visualization Methods',
    fileName: 'IDS Unit 2.pptx'
  },
  {
    id: '26',
    title: 'IDS Unit 3',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.6 MB',
    description: 'Introduction to Machine Learning and Predictive Analytics',
    fileName: 'IDS Unit 3.pptx'
  },
  {
    id: '27',
    title: 'IDS Unit 4',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.8 MB',
    description: 'Advanced Data Science Topics and Applications',
    fileName: 'unit 4 IDS.pptx'
  },
  {
    id: '28',
    title: 'IDS Unit 5',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '2.1 MB',
    description: 'Data Science Project Case Studies and Real-World Examples',
    fileName: 'Unit 5 IDS.pptx'
  },
  {
    id: '29',
    title: 'IDS Unit 6',
    subject: 'introduction-data-science',
    subjectCode: '9EC16',
    uploadedBy: 'Aravind Pulluri',
    uploadDate: '18-06-2025',
    fileSize: '1.9 MB',
    description: 'Recent Trends and Future Directions in Data Science',
    fileName: 'UNIT 6 IDS.ppt'
  }
];