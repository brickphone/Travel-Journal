import japan from './Images/japan.jpg'
import australia from './Images/australia.jpg'
import norway from './Images/norway.jpg'

export default [
  {
    id:1,
    img:japan,
    title:"Mount Fuji",
    location: {
      country:"JAPAN",
      link:"https://www.google.com/maps?q=mount+fuji&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjO9ui39b3_AhXRl4sKHW7YCN8Q0pQJegQIBRAE",
              },
    date:"12 Jan, 2021 - 24 Jan, 2021",
    description:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
  },
  {
    id:2,
    img:australia,
    location: {
      country:"AUSTRALIA",
      link:"https://www.google.com/maps?q=sydney+opera+house&um=1&ie=UTF-8&sa=X&ved=2ahUKEwijju-Nm9T_AhUNR_EDHX-kCRAQ0pQJegQIAxAE",
    },
    date:"27 May, 2021 - 8 Jun, 2021",
    description:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
  },
  {
    id:3,
    img:norway,
    location: {
      country:"NORWAY",
      link:"https://www.google.com/maps?q=geirangerfjorden&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjH-pb9u9T_AhWNSvEDHZQlB4IQ0pQJegQIBBAE"
    },
    date:"01 Oct, 2021 - 18 Nov, 2021",
    description:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
  },
];