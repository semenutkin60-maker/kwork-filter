import requests
from bs4 import BeautifulSoup
import json
import re
import os

from skills import MY_SKILLS


def load_page():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    response = requests.get('https://kwork.ru/projects', headers=headers)
    print(f"Статус стрницы: {response.status_code}")

    if response.status_code == 200:
        return response.text
    else:
        return None


def extract_state_data(html):
    