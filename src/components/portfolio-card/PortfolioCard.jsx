import React from "react";
import "./portfolio-card.scss";

function PortfolioCard({
  id,
  status,
  img,
  title,
  githubLink,
  websiteLink,
  notionLink,
  about,
  challenges,
  languages1,
  languages2,
  languages3,
  packages1,
  packages2,
  packages3,
  showWebsiteLink
}) {
  return (
    <div className="item-wrapper">
      {status === "active" ? (
        <div className="item-container">
          <div className="top" style={{ backgroundImage: `url(${img})` }}></div>
          <div className="bottom">
            <h3>{title}</h3>
            <div className="card-buttons">
              <a
                className="view-button github"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "black" }}
              >
                View Code
                <div className="icon">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "black" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
              {showWebsiteLink && websiteLink && (
                <a href={websiteLink} className="view-button">
                  View Project
                  <div className="icon">
                    <i className="fa-solid fa-eye" aria-hidden="true"></i>
                  </div>
                </a>
                )}
            </div>
          </div>
        </div>
      ) : (
        <div className="item-container">
          <h3 className="coming-soon-header">COMING SOON</h3>
        </div>
      )}
      {status === "active" ? (
        <div className="inside">
          <div className="information-icon">
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          </div>
          <div className="contents">
            <h4>About</h4>
            <p>{about}</p>
            <p>{challenges}</p>
            {notionLink && (
              <>
                <p>
                  A journal documenting the creation process for the application can be viewed at the link below:
                </p>
                <a
                  className="view-button notion-button"
                  href={notionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Journal
                  <div className="icon">
                    <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                  </div>
                </a>
              </>
            )}
            <h4>Technologies Used</h4>
            <table>
              <tbody>
                <tr>
                  <th>Languages</th>
                  <th>Packages</th>
                </tr>
                <tr>
                  <td>{languages1}</td>
                  <td>{packages1}</td>
                </tr>
                <tr>
                  <td>{languages2}</td>
                  <td>{packages2}</td>
                </tr>
                <tr>
                  <td>{languages3}</td>
                  <td>{packages3}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PortfolioCard;
