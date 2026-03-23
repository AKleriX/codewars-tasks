from itertools import combinations

def maxmin_areas(points):
    a=[abs((b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]))/2 for a,b,c in combinations(points,3)]
    a=[x for x in a if x]
    return round(max(a),1), round(min(a),1)