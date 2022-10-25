import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

URL = "localhost:3000"

class Test(unittest.TestCase):

  @classmethod
  def setUpClass(self) -> None:
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    self.driver.get(URL)

  @classmethod
  def tearDownClass(self):
    self.driver.quit()

  def test_Brand(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    self.assertEqual(self.driver.current_url, URL)
  
  def test_Home(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/div/div/a[1]')
    element.click()
    self.assertEqual(self.driver.current_url, URL)

  def test_About(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/div/div/a[2]')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "about")

  def test_Jobs(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/div/div/a[3]')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "jobs")

  def test_Cities(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/div/div/a[4]')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "cities")
  
  def test_Apartments(self):
    element = self.driver.find_element(By.CLASS_NAME, 'navbar-brand')
    element.click()
    element = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/nav/div/div/div/a[5]')
    element.click()
    self.assertEqual(self.driver.current_url, URL + "apartments")

if __name__ == '__main__':
    unittest.main()