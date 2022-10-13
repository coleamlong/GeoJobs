import JobImage from "../assets/page-images/job.jpeg";
import CityImage from "../assets/page-images/city.jpeg";
import HomeImage from "../assets/page-images/home.jpeg";


const pageInfo = [
    {
      pageName: "Jobs",
      pageImage: JobImage,
      pageDescription: "Find your dream job!",
      pageLink: "/jobs",
    },
    {
        pageName: "Cities",
        pageImage: CityImage,
        pageDescription: "Find your dream city!",
        pageLink: "/cities",
    },
    {
        pageName: "Apartments",
        pageImage: HomeImage,
        pageDescription: "Find your dream apartment!",
        pageLink: "/apartments",
      },
  ];
  
  export { pageInfo };
  