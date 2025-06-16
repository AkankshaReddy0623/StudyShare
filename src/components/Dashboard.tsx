import React from 'react';
import SubjectCard from './SubjectCard';
import { Subject } from '../types';

interface DashboardProps {
  subjects: Subject[];
  onSubjectClick: (subjectId: string) => void;
}

export default function Dashboard({ subjects, onSubjectClick }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center py-8 animate-bounce-in">
        <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Welcome to StudyShare
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Browse and download presentations organized by subject. 
          Find the study materials you need for your courses.
        </p>
        <div className="mt-6 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 text-sm">
            ✨ Discover knowledge, one presentation at a time
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Browse by Subject</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-white/60 text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            {subjects.length} subjects available
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <SubjectCard
                subject={subject}
                onClick={() => onSubjectClick(subject.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}