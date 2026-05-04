def sort_me(courses):
    return sorted(courses, key=lambda c: (c.rsplit("-", 1)[1], c.rsplit("-", 1)[0]))