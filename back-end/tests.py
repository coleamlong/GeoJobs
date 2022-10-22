from app import app
import unittest


class Tests(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        self.client = app.test_client()

    def testGetAllCities(self):
        with self.client:
            response = self.client.get("/cities")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(len(data), 50)
    
    def testGetAllApartments(self):
        with self.client:
            response = self.client.get("/apartments")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(len(data), 500)
        
    def testGetAllJobs(self):
        with self.client:
            response = self.client.get("/jobs")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            # TODO change this when the database is populated with jobs
            self.assertEqual(len(data), 0)
    
    def testGetCitiesPagination(self):
        with self.client:
            response = self.client.get("/cities?page=1&perPage=25")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(len(data), 25)
        
    def testGetCityInstance(self):
        with self.client:
            response = self.client.get("/cities/10773037")
            self.assertEqual(response.status_code, 200)
            resp = response.json()
            data = resp["data"]
            tags = resp["tags"]
            self.assertEqual(data["name"], "Seattle")
            self.assertEqual(data["state"], "Washington")
            self.assertEqual(len(tags), 8)

if __name__ == "__main__":
    unittest.main()