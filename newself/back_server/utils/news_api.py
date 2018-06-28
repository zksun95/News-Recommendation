import requests
import os, sys
from json import loads

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

import config

NEWS_API_POINT = "https://newsapi.org/v1/"
NEWS_API_KEY = config.NEWS_API_KEY
ARTICLES_API = "articles"

SOURCES = ["cnn"]
SORT_BY = "top"

def buildURL(end_point=NEWS_API_POINT, api_name=ARTICLES_API):
    return end_point + api_name

def getNewsBySource(sources=SOURCES, sortBy=SORT_BY):
    news = []
    for source in sources:
        payload = {
            'apiKey': NEWS_API_KEY,
            'source': source,
            'sortBy': sortBy
        }
        response = requests.get(buildURL(), params=payload)
        j_response = loads(response.content)

        if(j_response is not None and
            j_response['status'] == "ok" and
            j_response['source'] is not None):
            for ns in j_response['articles']:
                ns['source'] = j_response['source']
            news.extend(j_response['articles'])
    return news