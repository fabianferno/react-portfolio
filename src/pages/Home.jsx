import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import { HeroThree } from "../components/HeroThree";

export default function Home() {
  const RoleBadges = (props) => {
    return (
      <motion.button
        style={{ fontSize: "0.9em" }}
        className="btn btn-black mr-md-2 mt-3 mt-md-0 d-flex d-md-inline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {props.role}
      </motion.button>
    );
  };

  return (
    <Layout contained>
      <div className="row ml-md-3 d-flex ml-0 align-items-center justify-content-center">
        <HeroThree />

        <div
          style={{ position: "absolute", top: "120px" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h1
            className="hero  text-center mt-md-5 pb-3 "
            style={{ lineHeight: "115px" }}
          >
            Fabian Ferno
          </h1>

          <span
            style={{ letterSpacing: "7px" }}
            className="d-md-flex d-none justify-content-center align-items-center text-secondary text-uppercase"
          >
            <RoleBadges role="Freelancer" />
            <RoleBadges role="Web Developer" />
            <RoleBadges role="Graphic Designer" />
          </span>
        </div>
        <span
          style={{ letterSpacing: "7px" }}
          className="d-md-none d-flex flex-column justify-content-center align-items-center text-secondary text-uppercase"
        >
          <RoleBadges role="Freelancer" />
          <RoleBadges role="Web Developer" />
          <RoleBadges role="Graphic Designer" />
        </span>
      </div>
      <div
        style={{ lineHeight: "45px" }}
        className="container p-5 h3 text-secondary text-center"
      >
        “There’s a lot of beauty in ordinary things. <br /> Isn’t that kind of
        the point?” –{" "}
        <span className="text-white font-weight-bold"> Pam Beesly</span>
      </div>
    </Layout>
  );
}
