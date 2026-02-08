import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fixed: Added React import to define React.ReactNode
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export interface Value {
  title: string;
  description: string;
  // Fixed: Added React import to define React.ReactNode
  icon: React.ReactNode;
}