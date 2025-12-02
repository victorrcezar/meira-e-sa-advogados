import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  subtext: string;
  trend?: 'positive' | 'negative' | 'neutral';
  icon?: LucideIcon;
}

export interface BottleneckItem {
  title: string;
  description: string;
  severity: 'high' | 'medium';
}

export interface PlanStep {
  phase: string;
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface JourneyStep {
  step: string;
  status: 'ok' | 'warning' | 'critical';
  observation: string;
}
