import React from "react";
import AboutNode from "./node";
import classes from "./about-container.module.scss";

const data = [
  {
    imageSrc: "/about/1891.jpg",
    title: "1891",
    description:
      "In November 1891, entrepreneurs Bob Walker Smith and Albert Eadie buy George Townsend & Co. of Hunt End, Redditch. Townsend’s is a well-respected needle manufacturer of almost 50 years standing which has recently begun manufacturing bicycles.",
  },
  {
    imageSrc: "/about/1893.jpg",
    title: "1893",
    description:
      "The duo win a contract to supply precision parts to the Royal Small Arms Factory of Enfieldex. To celebrate this prestigious order, they rename their undertaking the Enfield Manufacturing Company Ltd. and call their first Bob Walker Smith designed bicycle, the Enfield. The following year, their bicycles are renamed Royal Enfields and the trademark ‘Made Like A Gun’ is introduced.",
  },
  {
    imageSrc: "/about/1898.jpg",
    title: "1898",
    description:
      "Bob Walker Smith designs the company’s first motorised vehicle. Known as a quadricycle, it is built around two sturdy bicycle frames and uses a proprietary 1 1/2 hp De Dion engine. The company finalises its trading name as The Enfield Cycle Co. Ltd., a name it is to use for the following 70 years.",
  },
  {
    imageSrc: "/about/1891.jpg",
    title: "1900",
    description:
      "Royal Enfield delves into motorsport when one of its quadricycles enters the inaugural 1000 Mile Trial. Following a torturous cross-country route from London to Edinburgh and back, the event does much to convince the British public of the viability of motorised transport.",
  },
  {
    imageSrc: "/about/1901.jpg",
    title: "1901",
    description:
      "The first Royal Enfield motorcycle is produced. Designed by Bob Walker Smith and Frenchman Jules Gobiet, it is launched at the Stanley Cycle Show in London. The 1 1/2 hp engine is mounted in front of the steering head and the rear wheel driven by a long rawhide belt.",
  },
  {
    imageSrc: "/about/1909.jpg",
    title: "1909",
    description:
      "Royal Enfield’s first V-twin, using a 297cc Swiss-made Motosacoche engine, is launched at the Stanley Cycle Show. The model achieves numerous competition successes the following year, including in the John O’ Groats to Lands End Trial.",
  },
  {
    imageSrc: "/about/1914.jpg",
    title: "1914",
    description:
      "Royal Enfield's first 2-stroke motorcycle goes into full production. As Britain becomes embroiled in World War I, production of the company’s biggest motorcycle, the 770cc 6 hp V-twin, takes precedence. During the conflict, the company supplies motorcycles to the British, Belgian, French, United States and Imperial Russian armies.",
  },
  {
    imageSrc: "/about/1924.jpg",
    title: "1924",
    description:
      "Continuous development results in a range of 8 models, including the launch of the Sports Model 351, the first Royal Enfield 350cc OHV 4-stroke motorcycle with foot operated gear change. A unique 225cc 2-stroke step-through 'Ladies Model' is also introduced.",
  },
  {
    imageSrc: "/about/1930.jpg",
    title: "1930",
    description:
      "The decade begins with a diverse eleven model range, from the 225cc 2-stroke Model A to the 976cc V-twin Model K. New 350 and 500cc side-valve and overhead valve machines with dry-sump lubrication are also produced.",
  },
];
const AboutContainer = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>The Royal Enfield Story - Since 1901</h1>
      {data.map((item, index) => (
        <AboutNode
          key={index}
          imageSource={item.imageSrc}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default AboutContainer;
