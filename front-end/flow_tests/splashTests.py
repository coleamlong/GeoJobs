import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

URL = "localhost:3000"

class splashTests(unittest.TestCase):
  @classmethod
  def setUpClass(self) -> None:
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    self.driver.get(URL)

  @classmethod
  def tearDownClass(self):
    self.driver.quit()

  def test_SplashJobsLink(self):
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[1]/div/div/a')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "jobs")
  
  def test_SplashCitiesLink(self):
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/a')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[2]/div/div/a')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "cities")

  def test_SplashApartmentsLink(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[3]/div/div/a')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "apartments")
  

if __name__ == '__main__':
    unittest.main()