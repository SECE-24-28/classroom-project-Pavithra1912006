import React from "react";
import { PromiseStyle } from "./promise-style";

export default function OurPromise() {
  return (
    <PromiseStyle>
      <h1 className="title">Our Promise</h1>
      <p className="subtitle">
        As part of our high quality service, we'd like to offer something extra too.
      </p>

      <div className="grid">
        <div className="card teal">
          <div className="icon">💻</div>
          <h2>Top Code Quality</h2>
          <p>
            Our commitment goes beyond mere code – it encompasses providing 
            solutions. You receive W3C fully compliant markup, without any 
            compromise on quality.
          </p>
        </div>

        <div className="card yellow">
          <div className="icon">📱</div>
          <h2>Responsive</h2>
          <p>
          We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.
          </p>
        </div>

        <div className="card blue">
          <div className="icon">👥</div>
          <h2>Rockstar Team</h2>
          <p>
           Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.
          </p>
        </div>

        <div className="card purple">
          <div className="icon">🔃</div>
          <h2>Fast Turn-arounds</h2>
          <p>
            The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.

          </p>
        </div>

        <div className="card red">
          <div className="icon">⭕</div>
          <h2>Life-time support</h2>
          <p>
    Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.

          </p>
        </div>

        <div className="card green">
          <div className="icon">🛡️</div>
          <h2>Secured Agreement</h2>
          <p>
           The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).
          </p>
        </div>
      </div>
    </PromiseStyle>
  );
}
