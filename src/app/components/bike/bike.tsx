import React from "react";
import classes from "./bike.module.scss";
import BikeNode from "../bike-node/bike-node";
const data: any[] = [
  {
    bikeName: "Bullet 350",
    imageSource: "/bikes/bike1.jpg",
  },
  {
    bikeName: "Super Meteor 650",
    imageSource: "/bikes/bike2.jpg",
  },
  {
    bikeName: "hunter 350",
    imageSource: "/bikes/bike3.jpg",
  },
  {
    bikeName: "Scram 411",
    imageSource: "/bikes/bike4.jpg",
  },
  {
    bikeName: "Classic 350",
    imageSource: "/bikes/bike5.jpg",
  },
  {
    bikeName: "Meteor 350",
    imageSource: "/bikes/bike6.jpg",
  },
  {
    bikeName: "Interceptor",
    imageSource: "/bikes/bike7.jpg",
  },
  {
    bikeName: "Continental GT",
    imageSource: "/bikes/bike8.jpg",
  },
  {
    bikeName: "Himalayan",
    imageSource: "/bikes/bike9.jpg",
  },
];

const Bike = () => {
  return (
    <section className={classes["section-wrapper"]}>
      <h1 className={classes["heading"]}>Our offerings</h1>

      <div className={classes["bike-wrapper"]}>
        {data.map((item, index) => (
          <BikeNode
            key={index}
            imageSource={item.imageSource}
            bikeName={item.bikeName}
          ></BikeNode>
        ))}
      </div>
    </section>
  );
};

export default Bike;
