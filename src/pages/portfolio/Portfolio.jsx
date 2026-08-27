import { useEffect, useState } from "react";
import PortfolioCard from "../../components/portfolio-card/PortfolioCard.jsx";
import PortfolioList from "../../components/portfolio-list/PortfolioList.jsx";
import "./portfolio.scss";
import "../../components/view-button/ViewButton.jsx";
import {
  productive,
  weatherApp,
  wardle,
  feedbackRating,
  readBay,
  wildernest
} from "../../projectsData.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("productive");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "productive",
      title: "Productive",
    },
    {
      id: "readBay",
      title: "ReadBay",
    },
    {
      id: "wildernest",
      title: "Wildernest",
    },
    {
      id: "weatherApp",
      title: "Weather App",
    },
    {
      id: "wardle",
      title: "Wardle",
    },
    {
      id: "feedbackRating",
      title: "Feedback Rating",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "productive":
        setData(productive);
        break;
      case "weatherApp":
        setData(weatherApp);
        break;
      case "wardle":
        setData(wardle);
        break;
      case "feedbackRating":
        setData(feedbackRating);
        break;
      case "readBay":
        setData(readBay);
        break;
      case "wildernest":
        setData(wildernest);
        break;
      default:
        setData(productive);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <ul role="tablist" aria-label="Select project">
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="item">
        {data.map((d) => (
          <PortfolioCard
          id={d.id}
            title={d.title}
            status={d.status}
            img={d.img}
            githubLink={d.githubLink}
            websiteLink={d.websiteLink}
            notionLink={d.notionLink}
            about={d.about}
            challenges={d.challenges}
            languages1={d.languages1}
            languages2={d.languages2}
            languages3={d.languages3}
            packages1={d.packages1}
            packages2={d.packages2}
            packages3={d.packages3}
            showWebsiteLink={d.showWebsiteLink}          
          />
        ))}
      </div>
    </div>
  );
}
