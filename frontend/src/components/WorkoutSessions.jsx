import { List } from "lucide-react";
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          "Welcome to Fitzone Fitness! Our workout sessions are designed to
          challenge and inspire you, helping you reach new heights in your
          fitness journey."
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          With a mix of strength training, cardio, and flexibility exercises,
          each session is crafted to maximize results and keep you motivated.
          Let’s sweat, work hard, and have fun together as we achieve our
          fitness goals!
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT) Bootcamp</h4>
            <p>
              <ul>
                <li>
                  This bootcamp focuses on high-intensity exercises followed by
                  short rest periods. It’s designed to burn maximum calories in
                  a short amount of time.
                </li>
                <li>
                  Activities: Sprinting, burpees, kettlebell swings, and
                  plyometric exercises.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning Bootcamp</h4>
            <p>
              <ul>
                <li>
                  This program is tailored for those looking to build muscle and
                  increase overall strength through a variety of resistance
                  training exercises.
                </li>
                <li>
                  Activities: Weightlifting, resistance band exercises,
                  bodyweight training, and core strengthening.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>Fat Blaster Bootcamp</h4>
            <p>
              <ul>
                <li>
                  Aimed at burning maximum calories and shedding fat through a
                  combination of high-intensity cardio and strength training
                  exercises.
                </li>
                <li>
                  Activities: Interval running, circuit training, kettlebell
                  swings, and bodyweight exercises.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>Mind-Body Bootcamp</h4>
            <p>
              <ul>
                <li>
                  A holistic program that integrates physical exercise with
                  mindfulness practices to improve both body and mind.
                </li>
                <li>
                  Activities: Yoga, Pilates, meditation, and light cardio
                  exercises.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
