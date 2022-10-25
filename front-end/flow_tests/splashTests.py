import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

URL = "https://dev.geojobs.me/"

class splashTests(unittest.TestCase):
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

  def test_SplashJobsLink(self):
    try:
      WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[1]/div/div/a')))
      element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[1]/div/div/a')
      element.click()
    except Exception as ex:
      print("Couldn't find jobs splash link: " + str(ex))
    self.assertEqual(self.driver.current_url, URL + "jobs")
    
  def test_SplashCitiesLink(self):
    try:
      WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/nav/div/a')))
      element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/a')
      element.click()
    except Exception as ex:
      print("Couldn't find navbar: " + str(ex))

    try:
      WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[2]/div/div/a')))
      element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[2]/div/div/a')
      element.click()
    except Exception as ex:
      print("Couldn't find cities splash link: " + str(ex))

    self.assertEqual(self.driver.current_url, URL + "cities")

  def test_SplashApartmentsLink(self):
    try:
      WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/nav/div/a')))
      element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/a')
      element.click()
    except Exception as ex:
      print("Couldn't find navbar: " + str(ex))

    try:
      WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[3]/div/div/a')))
      element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[3]/div/div/a')
      element.click()
    except Exception as ex:
      print("Couldn't find cities splash link: " + str(ex))
    self.assertEqual(self.driver.current_url, URL + "apartments")
  

if __name__ == '__main__':
    unittest.main()