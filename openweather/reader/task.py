import requests

from django.conf import settings
from openweather.reader import models
from openweather.reader.celery import app


@app.task(name='openweather.get_current_weather')
def get_current_weather(city: str) -> None:
    url = settings.OPEN_WEATHER_API_URL
    headers = {
        'x-api-key': settings.OPEN_WEATHER_API_KEY
    }
    city = models.City.objects.get(name=city)
    response = requests.get(url, headers=headers, params=city.querystring)
    if response.status_code != 200:
        response.raise_for_status()
