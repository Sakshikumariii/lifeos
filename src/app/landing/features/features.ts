import { Component } from '@angular/core';
import { FeatureCard } from './feature-card/feature-card';

@Component({
  selector: 'app-features',
  imports: [FeatureCard],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  readonly items = [
    {
      title: 'Daily Tasks',
      description: 'Organize your everyday activities.',
      icon: 'tasks' as const
    },
    {
      title: 'Work Notes',
      description: 'Keep your important notes in one place.',
      icon: 'notes' as const
    },
    {
      title: 'Finance',
      description: 'Track your income and expenses.',
      icon: 'finance' as const
    },
    {
      title: 'Health & Fitness',
      description: 'Manage your health goals and daily habits.',
      icon: 'health' as const
    }
  ];
}
