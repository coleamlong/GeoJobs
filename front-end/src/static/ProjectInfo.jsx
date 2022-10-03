import ReactLogo from '../assets/logos/tools/react-logo.png'
import PostmanLogo from '../assets/logos/tools/postman-logo.png'
import AmplifyLogo from '../assets/logos/tools/amplify-logo.png'
// import DockerLogo from '../assets/logos/tools/docker-logo.png'
import GitLabLogo from '../assets/logos/tools/gitlab-logo.png'
import DiscordLogo from '../assets/logos/tools/discord-logo.png'
import NamecheapLogo from '../assets/logos/tools/namecheap-logo.png'

import RoadGoatLogo from '../assets/logos/apis/roadgoat-logo.png'
import GoogleMapsLogo from '../assets/logos/apis/googlemaps-logo.png'
import YelpLogo from '../assets/logos/apis/yelp-logo.png'
import AdzunaLogo from '../assets/logos/apis/adzuna-logo.png'

const toolInfo = [
  {
		title: "React",
		image: ReactLogo,
		description: "JavaScript library for front-end development",
		link: "https://reactjs.org/",
	},
	{
		title: "Postman",
		image: PostmanLogo,
		description: "Tool for designing and testing APIs",
		link: "https://postman.com/",
	},
	{
		title: "AWS Amplify",
		image: AmplifyLogo,
		description: "Web application building and hosting platform",
		link: "https://aws.amazon.com/amplify/",
	},
	// {
	// 	title: "Docker",
	// 	image: DockerLogo,
	// 	description:
	// 		"Containerization tool for consistent runtime environments",
	// 	link: "https://docker.com/",
	// },
	{
		title: "GitLab",
		image: GitLabLogo,
		description: "Git repository and CI/CD platform",
		link: "https://gitlab.com/",
	},
	{
		title: "Discord",
		image: DiscordLogo,
		description: "Team communication platform",
		link: "https://discord.com/",
	},
	{
		title: "Namecheap",
		image: NamecheapLogo,
		description: "Domain name registrar",
		link: "https://namecheap.com/",
	},
]

const apiInfo = [
  {
		title: "RoadGoat API",
		image: RoadGoatLogo,
		description: "Geological API with information on cities",
		link: "https://www.roadgoat.com/",
	},
  {
		title: "Google Maps API",
		image: GoogleMapsLogo,
		description: "Geological API with route times and address information",
		link: "https://developers.google.com/maps",
	},
  {
		title: "Yelp API",
		image: YelpLogo,
		description: "Real Estate API",
		link: "https://www.ziprecruiter.com/zipsearch",
	},
  {
		title: "Adzuna API",
		image: AdzunaLogo,
		description: "Get addresses and prices of apartments on the market in a city",
		link: "https://api.apartments.com/v1",
	},
]

export { toolInfo, apiInfo }