def is_square(points):
    if len(points) != 4:
        return False

    def dist2(p1, p2):
        return (p1[0] - p2[0])**2 + (p1[1] - p2[1])**2

    dists = []
    for i in range(4):
        for j in range(i + 1, 4):
            dists.append(dist2(points[i], points[j]))

    dists.sort()

    return (
        dists[0] > 0 and
        dists[0] == dists[1] == dists[2] == dists[3] and
        dists[4] == dists[5] and
        dists[4] == 2 * dists[0]
    )