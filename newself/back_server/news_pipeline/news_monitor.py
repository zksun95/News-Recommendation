import os, sys
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'utils'))
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

import config
import news_api
from cloud_amqp import CLoudAMQPCli

REDIS_HOST = "localhost"
REDIS_PORT = "6379"

QUEUE_URL = config.QUEUE_FROM_NEWSAPI_URL
QUEUE_NAME = config.QUEUE_FROM_NEWSAPI_NAME
