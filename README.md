# Geo Job

## Group number
10-1

## Team members
| Name              | GitLabID          |
| ----------------- | ----------------- |
| Cole Amlong       | @coleamlong       |
| Faiza Rahman      | @faiza2002        |
| Mikala Jaramillo  | @Mikalajj         |
| Sarthak Sirotiya  | @sarthaksirotiya  |
| Thomas Langford   | @thomas_langford  |

### URL of the GitLab repo
https://gitlab.com/sarthaksirotiya/cs373-idb

### Website URL
geo-jobs.xyz

# The proposed project
Allows users to search for jobs in a specific city. If they like the city, then they can find apartments that fit the budget of the jobs they searched for.

## API URLs
RoadGoat: https://www.roadgoat.com/business/cities-api
Google Maps API: https://developers.google.com/maps/documentation/places/web-service/supported_types
Apartments.com API: https://api.apartments.com/v1/
ZipRecruiter API: https://www.ziprecruiter.com/zipsearch

## At least three models
Jobs, cities, houses

## An estimate of the number of instances of each model
| Model      | Number of Instances |
| ---------- | ------------- |
| Jobs       | ~100,000 |
| Cities     | ~20,000 |
| Apartment  | ~200,000 |

## Model Attributes
### Jobs
Sort By
City
Salary
Posted date
Distance from apartment
Full time/Part time

Search For
Position name
Company
Benefits
Rating
Skills

### Cities
Sort By:
Population
Ability to get around
Average Rating
Safety Score
Budget Score

Search For:
Name
Activities
Family Friendly
State
Demographics

### Apartment
Sort By:
Price
Number of Bedrooms
Number of jobs nearby
Type
Rating

Search For:
City
State
Pet Friendly
Keywords
Move in date

## Each model must connect to at least two other models
Apartments are in cities and are near jobs
Jobs are in cities and employees need apartment
Cities contain both jobs and apartments

## Each model must be rich with different media
Cities have news feeds, pictures, videos, reviews, location maps
Apartments have pictures, videos, reviews, location maps
Jobs have company logos, reviews, location maps

## What three questions will you answer due to doing this data synthesis on your site?
Can I live in this city with this job?
What city is right for me to live in?
What job opportunities are available around me?