import React from 'react';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoleItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}