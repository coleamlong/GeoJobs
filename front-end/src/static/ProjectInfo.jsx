import ReactLogo from '../assets/logos/tools/react-logo.png'
import PostmanLogo from '../assets/logos/tools/postman-logo.png'
import AWSLogo from '../assets/logos/tools/aws-logo.png'
import DockerLogo from '../assets/logos/tools/docker-logo.png'
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
		description: "A JavaScript framework that allows users to build robust, dynamic front-ends",
		link: "https://reactjs.org/",
	},
	{
		title: "Postman",
		image: PostmanLogo,
		description: "A tool for building and testing RESTful APIs",
		link: "https://postman.com/",
	},
	{
		title: "AWS",
		image: AWSLogo,
		description: "A cloud hosting service used for deployment",
		link: "https://aws.amazon.com/",
	},
	{
		title: "Docker",
		image: DockerLogo,
		description:
			"A Containerization tool for consistent runtime environments",
		link: "https://docker.com/",
	},
	{
		title: "GitLab",
		image: GitLabLogo,
		description: "A Git Repository host and CI/CD platform",
		link: "https://gitlab.com/",
	},
	{
		title: "Discord",
		image: DiscordLogo,
		description: "A team communication platform",
		link: "https://discord.com/",
	},
	{
		title: "Namecheap",
		image: NamecheapLogo,
		description: "A domain name registrar",
		link: "https://namecheap.com/",
	},
]

const apiInfo = [
  {
		title: "RoadGoat API",
		image: RoadGoatLogo,
		description: "RoadGoat is a geographic API that contains both quanitative and qualitative data on cities across the globe. GeoJobs pulls many of the APIs features to help users immerse themselves in cities they have never visited!",
		link: "https://www.roadgoat.com/",
	},
  {
		title: "Google Maps API",
		image: GoogleMapsLogo,
		description: "Google Maps API is a geographic interface with transportation route times and apartment address information. GeoJobs calcuates apartment-to-job commute times using Google Maps.",
		link: "https://developers.google.com/maps",
	},
  {
		title: "Yelp API",
		image: YelpLogo,
		description: "Yelp, although commonly know for it's food recommendations, also allows users to hunt for apartments. GeoJobs pulls reviews, real estate listings, and geographic data from Yelp's API.",
		link: "https://www.yelp.com/developers",
	},
  {
		title: "Adzuna API",
		image: AdzunaLogo,
		description: "Adzuna is an online job board that allows its users to search open job listings which meet specific criterea. Adzuna is GeoJob's main source for job information.",
		link: "https://developer.adzuna.com/",
	},
]

export { toolInfo, apiInfo }