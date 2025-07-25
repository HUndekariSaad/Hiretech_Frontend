import React from 'react'; // optional: if you want to move styling here
import heroImg from '../../images/young-pretty-woman-looking.png';
import ellipseImg from '../../images/Ellipse 2.png';
import mobileImg from '../../images/iPhone Space Deep Purple Front 1.png';
import Avatar from '../../images/Avatar.png';
import MapSection from '../../images/MAP SECTION.png';
import { useState } from 'react';
import '../css/Home.css';
export default function Home() {
  const testimonials = [
    {
      name: "Dipak",
      role: "Data Analytic @ TCS",
      text: "The Data Analytics course provided a perfect blend of theory and hands-on practice. The real-world projects helped me build a portfolio that I now proudly showcase during job interviews.",
    },
    {
      name: "Sakshi",
      role: "Data Analytic @ TCS",
      text: "I had no prior experience in analytics, but this course made it approachable and even exciting. The instructor’s clear explanations and practical examples made all the difference.",
    },
    {
      name: "Ovi",
      role: "Data Analytic @ TCS",
      text: "The modules on Excel, SQL, and Python were incredibly helpful. I now feel confident in using data to make informed decisions at work.",
    },
  ];

  // FAQ Data Array
  const faqData = [
    {
      question: "Can I enroll in more than one course at a time?",
      answer: "Yes, you can enroll in multiple courses simultaneously based on your schedule.",
    },
    {
      question: "What kind of support do I get during the course?",
      answer:
        "You’ll get full access to instructor guidance, live doubt-clearing sessions, community forums, and downloadable resources. Our team is here to help you every step of the way—just like having a mentor beside you.",
      expanded: true,
    },
    {
      question: "Will I receive a certificate after completing a course?",
      answer:
        "Yes, you will receive a certificate of completion after successfully finishing the course.",
    },
    {
      question: "Do I need any prior experience to join?",
      answer: "No prior experience is required. The course is beginner-friendly.",
    },
  ];


  const [openIndex, setOpenIndex] = useState(
    faqData.findIndex((faq) => faq.expanded) ?? -1
  );
  return (
    <div className="container py-5">
      <div className="text-center py-5 position-relative overflow-hidden">
        <h1 className="display-5 fw-bold">
          Learn Skills That <br /> Get You Hired
        </h1>

        <div
          className="d-flex justify-content-center my-3 text-muted fs-6 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <div className="quote-mark me-2 fs-3">❝</div>
          <p className="mb-0">
            Learn Data Analytics, SAP, or CAD/CAE from industry experts. Get
            certified and land your dream job with expert mentorship and career
            support.
          </p>
        </div>

        {/* <div className="position-relative d-flex justify-content-center mt-4">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: '500px',
          height: '300px',
          backgroundColor: '#FF914D',
          bottom: '-50px',
          zIndex: 0,
          borderRadius:'223px 223px 0px 0px;'
        }}
      />
      <img
        src={heroImg}
        alt="girl"
        className="img-fluid"
        style={{
          maxWidth: '350px',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div> */}
        <div className="hero-container">
          <img src={ellipseImg} alt="ellipse background" className="ellipse-background" />
          <img src={heroImg} alt="girl" className="girl-image" />
        </div>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <button className="btn btn-warning px-4 py-2 rounded-pill">
            Explore Courses <span>&rarr;</span>
          </button>
          <button
            className="btn btn-outline-light px-4 py-2 rounded-pill text-white"
            style={{ backgroundColor: '#ff914d', borderColor: 'white' }}
          >
            Download Free Syllabus
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="text-warning fs-4 me-2">★★★★★</div>
          <div className="text-start">
            <h5 className="mb-0 text-white">10 Years</h5>
            <small className="text-muted">Experience</small>
          </div>
        </div>
      </div>
      <section className="why-section">
        {/* --- Simplified Learning Section --- */}
        <div className="row align-items-center flex-column-reverse flex-md-row mt-5">
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
            <h1 className="display-4 fw-bold">
              Your <br /> <span className="text-highlight">Learning,</span> <br /> Simplified
            </h1>
            <p className="my-3 text-muted">
              Live classes, notes, and progress — all in one smart dashboard. <br />
              No juggling apps or searching for links. Just log in and start learning.
            </p>
            <button className="btn btn-warning px-4 py-2 rounded-pill">Get Course Details</button>

            <div className="d-flex align-items-center gap-3 mt-4">
              <div className="d-flex">
                <img src="https://i.pravatar.cc/40?img=1" className="rounded-circle me-1" alt="student1" />
                <img src="https://i.pravatar.cc/40?img=2" className="rounded-circle me-1" alt="student2" />
                <img src="https://i.pravatar.cc/40?img=3" className="rounded-circle me-1" alt="student3" />
              </div>
              <div>
                <h1 className="mb-0">10,000+ Learners</h1>
                <small className="text-muted">Trusted across India</small>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img src={mobileImg} alt="mobile dashboard" className="img-fluid" style={{ maxWidth: '190px' }} />
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why You'll Love This Course</h2>

        <div className="why-grid">
          {[
            {
              number: '01',
              title: 'Flexible Learning Schedule',
              desc: 'Fit your coursework around your job, studies, or personal commitments.',
            },
            {
              number: '02',
              title: 'Expert Instruction',
              desc: 'Learn directly from experienced professionals working in top industries.',
            },
            {
              number: '03',
              title: 'Diverse Course Offerings',
              desc: 'Choose from high-demand fields like Data Analytics, SAP, and CAD/CAE.',
            },
            {
              number: '04',
              title: 'Updated Curriculum',
              desc: 'Stay current with content tailored to the latest tools and industry trends.',
            },
            {
              number: '05',
              title: 'Practical Projects & Assignments',
              desc: 'Work on real-world assignments and build a job-ready portfolio.',
            },
            {
              number: '06',
              title: 'Interactive Learning Environment',
              desc: 'Engage with peers, share feedback, and grow in a supportive environment.',
            },
          ].map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-number">{item.number}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="why-arrow">↗</div>
            </div>
          ))}
        </div>
      </section>

      <section className="courses-section">
        <h2>Our Courses</h2>
        <p className="courses-subtitle">
          Build job-ready skills with expert-led, hands-on programs in today's most in-demand tech fields.
        </p>

        <div className="courses-grid">
          {[
            {
              title: 'Data Analytics',
              image: require('../../images/image 8.png'),
            },
            {
              title: 'SAP',
              image: require('../../images/image 9.png'),
            },
            {
              title: 'CAD/CAE',
              image: require('../../images/industry-work.png'),
            },
          ].map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-overlay">
                <h3>{course.title}</h3>
                <span className="arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mentors-section">
        <h2 className="mentors-title">Meet Your Mentors</h2>

        <div className="mentors-grid">
          {[
            {
              name: "Priya Mehta",
              title: "Senior Data Analyst",
              desc: "With 8+ years in analytics, Priya brings real-world business intelligence into every session.",
            },
            {
              name: "Rajesh Kumar",
              title: "SAP FICO Consultant",
              desc: "Rajesh simplifies complex SAP modules with practical insights from real enterprise projects.",
            },
            {
              name: "Sneha Patil",
              title: "Design Engineer",
              desc: "From 3D modeling to simulation, Sneha teaches tools engineers actually use in the industry.",
            },
          ].map((mentor, index) => (
            <div key={index} className="mentor-card">
              <img src={Avatar} alt={mentor.name} className="mentor-avatar" />
              <div>
                <h4>{mentor.name}</h4>
                <p className="mentor-title">{mentor.title}</p>
                <p className="mentor-desc">{mentor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Testimonials */}
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div>
              <h2 class="fw-semibold">Our Testimonials</h2>
              <p class="text-muted small mt-2">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
              </p>
            </div>
            <button class="btn btn-outline-secondary btn-sm mt-3 mt-md-0">View All</button>
          </div>

          {/* <!-- Testimonial Cards Grid --> */}
          <div class="row g-4">
            {/* <!-- Card 1 --> */}
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <div class="text-warning fs-3">❝</div>
                      <div class="text-warning small">★★★★★</div>
                    </div>
                    <p class="card-text small">
                      The Data Analytics course provided a perfect blend of theory and hands-on practice. The real-world
                      projects helped me build a portfolio that I now proudly showcase during job interviews.
                    </p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div class="d-flex align-items-center">
                      <img src={Avatar} alt="Dipak" class="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div class="fw-semibold small">Dipak</div>
                        <div class="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <div class="text-warning fs-3">❝</div>
                      <div class="text-warning small">★★★★★</div>
                    </div>
                    <p class="card-text small">
                      I had no prior experience in analytics, but this course made it approachable and even exciting. The
                      instructor’s clear explanations and practical examples made all the difference.
                    </p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div class="d-flex align-items-center">
                      <img src={Avatar} alt="Sakshi" class="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div class="fw-semibold small">Sakshi</div>
                        <div class="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <div class="text-warning fs-3">❝</div>
                      <div class="text-warning small">★★★★★</div>
                    </div>
                    <p class="card-text small">
                      The modules on Excel, SQL, and Python were incredibly helpful. I now feel confident in using data,
                      to make informed decisions at work.
                    </p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div class="d-flex align-items-center">
                      <img src={Avatar} alt="Ovi" class="rounded-circle me-2" width="40" height="40" />
                      <div>
                        <div class="fw-semibold small">Ovi</div>
                        <div class="text-muted small">Data Analytic @ TCS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" py-5">
        <div class="container">
          {/* <!-- Section Title --> */}
          <div class="mb-4">
            <h3 class="fw-bold">Got Questions? Let’s Talk.</h3>
            <p class="text-muted small">Students From All Over India Trust Us</p>
          </div>

          {/* <!-- Form + Image Row --> */}
          <div class="row bg-white rounded shadow-sm p-4 g-4 align-items-center">
            {/* <!-- Form Column --> */}
            <div class="col-lg-6">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label small">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter First Name" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter Last Name" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Email</label>
                    <input type="email" class="form-control" placeholder="Enter your Email" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small">Phone</label>
                    <input type="tel" class="form-control" placeholder="Enter Phone Number" />
                  </div>
                  <div class="col-12">
                    <label class="form-label small">Course</label>
                    <select class="form-select">
                      <option selected disabled>Choose your course</option>
                      <option>Data Analytics</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label small">Message</label>
                    <textarea class="form-control" rows="4" placeholder="Enter your Message here..."></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-warning text-white px-4 mt-2">Send Your Message</button>
                  </div>
                </div>
              </form>
            </div>

            {/* <!-- Image Column --> */}
            <div class="col-lg-6 text-center">
              <img src={MapSection} alt="India Map" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left Side Title */}
            <div className="col-md-4">
              <h3 className="fw-bold">Frequently<br />Asked<br />Questions</h3>
            </div>

            {/* Accordion */}
            <div className="col-md-8">
              <div className="accordion" id="faqAccordion">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="accordion-item border-0 mb-2 rounded shadow-sm">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button rounded ${openIndex === idx ? 'bg-white text-orange fw-semibold' : 'collapsed bg-light'
                          }`}
                        type="button"
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${openIndex === idx ? 'show' : ''
                        }`}
                    >
                      <div
                        className={`accordion-body ${openIndex === idx ? 'border-start border-3 border-warning bg-light-subtle' : ''
                          }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>


  );
}
