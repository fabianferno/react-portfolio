import Layout from "../layouts/Layout";
import Kathir from "../assets/img/project-screenshots/kathirkreations.gif";

function TechPills(props) {
  return (
    <span class="badge badge-pill badge-black p-2 mr-1 mt-1">{props.text}</span>
  );
}

export default function About() {
  return (
    <Layout contained>
      <div className="pt-3  container">
        <p className="text-primary ">&#47;&#47; fabianferno</p>
        <h1 className="text-left my-5 pb-3 text-justify  text-md-left ">
          About<span className="text-white "> Me</span>
        </h1>

        <p className="text-secondary text-justify pb-3  text-md-left ">
          I am a software engineer with 2.5 years of professional experience in
          designing and developing. I’m currently pursuing my Bachelor of
          Technology in IT - Engineering at Loyola - ICAM College of Engineering
          and Technology.
        </p>

        <div className="text-secondary text-justify text-md-left p mb-5 pb-5">
          <div id="languages" className="pt-5">
            <p className="text-primary">Languages</p>
            <TechPills text="HTML" />
            <TechPills text="Dart" />
            <TechPills text="Java" />
            <TechPills text="php" />
            <TechPills text="C#" />
            <TechPills text="Python" />
            <TechPills text="Embedded C" />
            <TechPills text="JavaScript - ES6" />
            <TechPills text="CSS3/SASS" />
          </div>
          <div id="databases" className="pt-5">
            <p className="text-primary ">Databases</p>
            <TechPills text="Micrsoft SQL " />
            <TechPills text="MariaDB" />
            <TechPills text="MySQL" />
            <TechPills text="PostgreSQL" />
            <TechPills text="MongoDB" />
            <TechPills text="SQLite" />
            <TechPills text="Firestore" />
          </div>
          <div id="frameworks" className="pt-5">
            <p className="text-primary ">Frameworks and Libraries</p>
            <TechPills text="ReactJS" />
            <TechPills text="Wordpress" />
            <TechPills text="Bootstrap" />
            <TechPills text="jQuery" />
            <TechPills text="ASP.NET" />
            <TechPills text="styled-components" />
            <TechPills text="Material UI" />
            <TechPills text="Tailwind UI" />
            <TechPills text="Flask" />
            <TechPills text="discord.py" />
            <TechPills text="Framer Motion" />
          </div>
          <div id="tools" className="pt-5">
            <p className="text-primary ">Tools</p>
            <TechPills text="Git" />
            <TechPills text="repl.it" />
            <TechPills text="Cloudflare" />
            <TechPills text="IFTTT" />
            <TechPills text="jQuery" />
            <TechPills text="npm" />
            <TechPills text="GitHub" />
            <TechPills text="Netlify" />
            <TechPills text="Heroku" />
            <TechPills text="Vercel" />
            <TechPills text="Github Actions" />
            <TechPills text="Linux" />
            <TechPills text="Supabase" />
            <TechPills text="Firebase" />
            <TechPills text="Selenium" />
          </div>
          <div id="design" className="pt-5">
            <p className="text-primary ">Creative Design</p>
            <TechPills text="Wireframing" />
            <TechPills text="Photoshop" />
            <TechPills text="Illustrator" />
            <TechPills text="InDesign" />
            <TechPills text="Premiere Pro" />
            <TechPills text="Adobe XD" />
            <TechPills text="Filmora" />
            <TechPills text="After Effects" />
            <TechPills text="Cinema4D" />
            <TechPills text="Sketchup3D" />
            <TechPills text="Unity3D" />
            <TechPills text="Unreal Engine" />
            <TechPills text="Thearender" />
          </div>
        </div>

        {/* ======= Resume Section ======= */}
        <section
          id="resume"
          className="resume  text-secondary inner-shadow card-rounded bg-black pl-2 pl-md-5 pb-5"
        >
          <div className="container ">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title pt-5">Education</h3>
                <div className="resume-item">
                  <h4>B.Tech Information Technology</h4>
                  <h5>June 2019 Present</h5>
                  <p>
                    <em>
                      Loyola ICAM College of Engineering and Technology, Chennai
                    </em>
                  </p>
                  <p>
                    Member of the Fablab Committee <br />
                    Part of Media Relations <br />
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Circle Program | Design</h4>
                  <h5>APRIL 2019 - AUGUST 2019 (5M)</h5>
                  <p>
                    Academy of Digital Arts, Chennai <br /> Graphic Designing
                    and Illustrations, Digital Communication and
                    Media/Multimedia
                  </p>
                  <p>
                    Adobe Photoshop <br /> Adobe illustrator <br /> Adobe
                    InDesign <br /> Corel Draw <br />
                    Adobe Premiere Pro
                  </p>
                </div>

                <div className="resume-item">
                  <h4>N5, Japanese Studies</h4>
                  <h5>FEB 2019 - JUNE 2019 (3M)</h5>
                  <p>
                    Hayakawa Japanese Language School & Cultural Center, Chennai
                  </p>
                  <p>Completed JLPT N5, CJAT 1.</p>
                </div>

                <div className="resume-item">
                  <h4>HSC &amp; SSLC</h4>
                  <h5>2005 – 2019</h5>
                  <p>Don Bosco Mat. Hr. Sec. School, Egmore, Chennai</p>
                  <p>
                    President of Red Ribbon Club <br /> Member of Bharat Scouts{" "}
                    <br />
                    Cultural Media Team
                  </p>
                </div>

                <h3 className="resume-title pt-5">Certifications</h3>

                <div className="resume-item">
                  <h4>Google</h4>
                  <p>
                    Google IT Automation with Python Professional Certificate
                  </p>
                  <p>Digital Marketing with Google</p>
                  <p>Google Technical Support Fundamentals</p>
                </div>

                <div className="resume-item">
                  <h4>Coursera</h4>
                  <p>System Administration and IT Infrastructure Services</p>
                  <p>Power User - Operating System</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title pt-5">Experience</h3>
                <div className="resume-item">
                  <h4>Pattarai</h4>
                  <h5>2020 - Present</h5>
                  <p>President and Co-Founder</p>
                  <p>
                    I run Pattarai, LICET's flagship project club. We aim to
                    give engineers, the engineering experience. Helped organise
                    8 events and lead more than 3 projects personally.
                  </p>
                </div>

                <div className="resume-item card bg-black d-flex">
                  <iframe
                    style={{ marginLeft: "-20px" }}
                    className="card-body"
                    height={315}
                    src="https://www.youtube.com/embed/gQRX1UlQ0Rs"
                    title="Pattarai"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="resume-item">
                  <h4>SÍMERA DESIGNS, Chennai</h4>
                  <h5>2019 - 2020</h5>
                  <p>Co-Founder and Designer</p>
                  <p>
                    A design company. <br /> Web Developers, Graphic Designers,
                    Videography, Photography, Mockups, Video Editing, etc.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>INNOWELL GROUP, Dubai </h4>
                  <h5>2019 – 2020 (9 months)</h5>
                  <p>Freelance Graphic Designer</p>
                </div>
                <div className="resume-item ">
                  <h4>Kathir Kreations</h4>
                  <h5>NOV 2020 - MAY 2021</h5>
                  <p>
                    Web Developer and Graphic Designer <br />- Part time{" "}
                  </p>
                  <img
                    src={Kathir}
                    className="img-fluid pr-4"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Resume Section */}
      </div>
    </Layout>
  );
}
