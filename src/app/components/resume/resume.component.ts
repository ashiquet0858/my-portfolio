import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  skills = [
    { name: 'Java', value: 70 },
    { name: 'Javascript', value: 70 },
    { name: 'Spring Boot', value: 70 },
    { name: 'Angular', value: 80 },
    { name: 'CSS', value: 80 },
    { name: 'Bootstrap', value: 80 },
    {
      name: 'UI Materials (Angular Material, Kendo, Ant UI, UIKit)',
      value: 80,
    },
    { name: 'Figma', value: 70 },
  ];
}
