import { Component } from '@angular/core';
import { Navbar } from './landing/navbar/navbar';
import { Hero } from './landing/hero/hero';
import { Features } from './landing/features/features';
import { Cta } from './landing/cta/cta';
import { Footer } from './landing/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [Navbar, Hero, Features, Cta, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {}
