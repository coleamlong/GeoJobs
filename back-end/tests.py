import app
import unittest


class Tests(unittest.TestCase):
    def setUp(self):
        app.app.config["TESTING"] = True
        self.client = app.app.test_client()

    def testGetAllCities(self):
        with self.client:
            response = self.client.get("/cities")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 50)
    
    def testGetAllApartments(self):
        with self.client:
            response = self.client.get("/apartments")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 500)
        
    def testGetAllJobs(self):
        with self.client:
            response = self.client.get("/jobs")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            # TODO change this when the database is populated with jobs
            self.assertEqual(len(data), 0)
    
    def testGetCitiesPagination(self):
        with self.client:
            response = self.client.get("/cities?page=1&perPage=25")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 25)
        
    def testGetCityInstance(self):
        with self.client:
            response = self.client.get("/cities/10773037")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            tags = resp["tags"]
            self.assertEqual(data["name"], "Seattle")
            self.assertEqual(data["state"], "Washington")
            self.assertEqual(len(tags), 8)
    
    def testGetApartmentInstance(self):
        with self.client:
            response = self.client.get("/apartments/1-E-Delaware-Pl,-Apt-30B,-Chicago,-IL-60611")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            self.assertEqual(data["address"], "1 E Delaware Pl, Apt 30B, Chicago, IL 60611")
            self.assertEqual(data["bathroom"], 2)
    
    #TODO Fix this when jobs are added to database
    def testGetJobInstance(self):
        self.assertEqual(True, True)

if __name__ == "__main__":
    unittest.main()