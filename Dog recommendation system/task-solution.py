def find_similar_dogs(breed):
    t=dogs[breed];m=max(len(t&v)for k,v in dogs.items()if k!=breed)
    return{k for k,v in dogs.items()if k!=breed and len(t&v)==m}