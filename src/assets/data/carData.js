// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
 
import moment from "moment";
const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 5000,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    auctionStartTime : moment().set('hour', 9).set('minute', 0).set('second', 0), // بداية المزاد 11:00 صباحًا
    auctionEndTime : moment().set('hour', 11).set('minute', 30).set('second', 0),
    bidType:1,
    description:
    "details and description details and description details and description details and description details and description "
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 4500,
    speed: "220km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    auctionStartTime : moment().set({hour:23,minute:0,second:0}), // بداية المزاد 11:00 صباحًا
      auctionEndTime : moment().add(1,'day').set({hour:1,minute:0,second:0}),
       bidType:2,
    description:
    "details and description details and description details and description details and description details and description "
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 6500,
    speed: "250km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
      auctionStartTime : moment().set('hour', 21).set('minute', 0).set('second', 0), // بداية المزاد 11:00 صباحًا
      auctionEndTime : moment().set('hour', 24).set('minute', 0).set('second', 0), // نهاية المزاد 12:00 ظهرًا
      bidType:2,
    description:
    "details and description details and description details and description details and description details and description "
  }
 
   
];

export default carData;
