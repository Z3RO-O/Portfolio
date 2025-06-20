/* eslint-disable react/prop-types */
import { makeStyles } from "@mui/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import placeholder from "./placeholder.png";
import "./SingleProject.css";

// eslint-disable-next-line react/prop-types
function SingleProject({ id, name, desc, tags, code, demo, image }) {
  const useStyles = makeStyles(() => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      border: `2px solid `,
      transition: "all 0.2s",
    },
    icon: {
      fontSize: "1rem",
      transition: "all 0.2s",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div key={id} className="singleProject">
        <div className="projectContent">
          <h2 id={name}>{name}</h2>
          <img src={image ? image : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name} ${name}-demo`}
            >
              <FaPlay
                id={`${name}-demo`}
                color="white"
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name} ${name}-code`}
            >
              <FaCode
                // color="white"
                id={`${name}-code`}
                color="white"
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p className="project--desc">{desc}</p>
        <div className="project--lang">
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleProject;
