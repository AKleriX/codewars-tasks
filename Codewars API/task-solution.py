import json, re
from urllib.request import urlopen

html = urlopen('https://www.codewars.com/users/leaderboard').read().decode()

def get_code_challenges(n):
    user = re.search(rf'#{n}\b.*?href="/users/([^"]+)"', html, re.S).group(1)
    data = urlopen(f'https://www.codewars.com/api/v1/users/{user}').read().decode()
    challenges = json.loads(data)['codeChallenges']
    return [challenges['totalAuthored'], challenges['totalCompleted']]