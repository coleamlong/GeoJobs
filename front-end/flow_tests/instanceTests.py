import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

URL = "https://dev.geojobs.me/"

class Test(unittest.TestCase):

  @classmethod
  def setUpClass(self) -> None:
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    chrome_prefs = {}
    options.experimental_options["prefs"] = chrome_prefs
    # Disable images
    chrome_prefs["profile.default_content_settings"] = {"images": 2}
    self.driver = webdriver.Chrome(options=options, service=Service(ChromeDriverManager().install()))
    self.driver.get(URL)

  @classmethod
  def tearDownClass(self):
    self.driver.quit()

  def test_job(self):
    self.driver.get(URL + "jobs")
    self.assertEqual(self.driver.current_url, URL + "jobs")
  
  def test_city(self):
    self.driver.get(URL + "cities")
    self.assertEqual(self.driver.current_url, URL + "cities")

  def test_apartment(self):
    self.driver.get(URL + "apartments")
    self.assertEqual(self.driver.current_url, URL + "apartments")

if __name__ == '__main__':
    unittest.main()