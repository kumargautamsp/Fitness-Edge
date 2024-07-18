import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  
  foodDetails = [
    {
      id:1,
      foodName:"CARDIO STRENGTH",
      foodDetails:"Our Cardio Strength program combines cardiovascular workouts with strength training to enhance endurance and build muscle.",
      foodImg:"assets/img/blog-1.jpeg"
    },
    {
      id:2,
      foodName:"WEIGHT LIFTING",
      foodDetails:"The Weight Lifting program focuses on developing strength, muscle mass, and overall fitness through targeted resistance training.",
      foodImg:"assets/img/blog-2.jpeg"
    },
    {
      id:3,
      foodName:"BODY BALANCE",
      foodDetails:"Join our Body Balance program to improve flexibility, stability, and posture while reducing stress and enhancing overall well-being.",
      foodImg:"assets/img/blog-3.jpeg"
    },
    {
      id:4,
      foodName:"MUSCLE STRETCHING",
      foodDetails:"Experience the benefits of increased flexibility and reduced muscle tension in our Muscle Stretching program.",
      foodImg:"assets/img/blog-4.jpeg"
    },
    {
      id:5,
      foodName:"BASIC YOGA",
      foodDetails:"Our Basic Yoga classes provide a foundation for mind-body wellness, promoting relaxation, flexibility, and inner peace.",
      foodImg:"assets/img/blog-5.jpeg"
    },
    {
      id:6,
      foodName:"BEGINNER PILATES",
      foodDetails:"Join our Beginner Pilates program to strengthen your core, improve posture, and enhance body awareness through controlled movements and breathing exercises.",
      foodImg:"assets/img/blog-8.jpeg"
    }
  ]
}
