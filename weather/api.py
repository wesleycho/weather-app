from django.http import HttpResponse
import requests
import json

def get(request):
    json_string = request.body.decode(encoding='UTF-8')
    data = json.loads(json_string)
    state = data['state']
    city = data['city']

    r = requests.get('http://api.wunderground.com/api/326d7ed1f99b515e/conditions/q/' + state + '/' + city + '.json')
    weatherData = r.json()
    return HttpResponse(json.dumps(weatherData), content_type="application/json")

def autocomplete(request):
    query = request.GET.get('q', '')
    r = requests.get('http://autocomplete.wunderground.com/aq?query=' + query + '&c=US')
    results = r.json()
    return HttpResponse(json.dumps(results), content_type="application/json")