import React from "react";
import classes from "./news.module.scss";
import NewsNode from "../news-node/news-node";
const data = [
  {
    imageSource: "/news/1.jpg",
    heading: "The All-New Royal Enfield Classic 350 - Legend Reborn",
    description:
      "Royal Enfield has been a symbol of resilience, purposeful longevity, and authenticity since 1901. It has preserved the legacy of building simple, harmonious classic motorcycles by blending traditional craftsmanship with modern technology, to create pure motorcycling experiences.",
    date: "23 June 2023",
  },
  {
    imageSource: "/news/2.jpg",
    heading:
      "The Royal Enfield 650 Twin Motorcycles get new colourways with an array of Make-it-Yours (MiY) Options",
    description:
      "The Royal Enfield 650 Twin Motorcycles get new colourways with an array of Make-it-Yours (MiY) Options",
    date: "23 June 2023",
  },
  {
    imageSource: "/news/3.jpg",
    heading:
      "The Royal Enfield 650 Twin Motorcycles get new colourways with an array of Make-it-Yours (MiY) Options",
    description:
      "Interceptor 650 and Continental GT 650 launched in 5 new colours each along with several personalisation options offered via Royal Enfield MiY.",
    date: "23 June 2023",
  },
  {
    imageSource: "/news/4.jpg",
    heading:
      "Royal Enfield launches the all-new Easy Cruiser, The Meteor 350    ",
    description:
      "Royal Enfield Meteor 350 cc - Explore specifications, colours, engine, reviews, gallery and more about Meteor.",
    date: "23 June 2023",
  },
  {
    imageSource: "/news/5.jpg",
    heading: "Royal Enfield launches BS VI compliant Classic 350",
    description:
      "Royal Enfield, the global leader in the mid-size motorcycle segment, announced the launch of the new Bharat Stage VI compliant Royal Enfield Classic 350, the first motorcycle under the company's Unit Construction Engine (UCE) platform to transition to the new regulatory emission norms.",
    date: "23 June 2023",
  },
  {
    imageSource: "/news/6.jpg",
    heading:
      "Royal Enfield launches The Classic 500 Tribute Black - A commemorative End of Production Limited Edition motorcycle",
    description:
      "Royal Enfield today announced an end-of-production, special series motorcycles, the Classic 500 Tribute Black Limited Edition.",
    date: "23 June 2023",
  },
];
const News = () => {
  return (
    <section className={classes["section-wrapper"]}>
      <h1 className={classes["heading"]}>Press Releases</h1>

      <div className={classes["news-wrapper"]}>
        {data.map((item, index) => (
          <NewsNode
            key={index}
            imageSource={item.imageSource}
            description={item.description}
            heading={item.heading}
            date={item.date}
          ></NewsNode>
        ))}
      </div>
    </section>
  );
};

export default News;
