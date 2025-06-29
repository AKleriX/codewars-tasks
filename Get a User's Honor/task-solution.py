import json,urllib.request
def get_honor(u):
    try:return json.load(urllib.request.urlopen('https://www.codewars.com/api/v1/users/'+u))['honor']
    except:raise ValueError