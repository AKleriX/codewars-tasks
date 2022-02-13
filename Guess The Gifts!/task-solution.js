const guessGifts = (wishlist, presents) => wishlist.filter(wish => presents.filter(present => present.size === wish.size && 
    present.clatters === wish.clatters && 
    present.weight === wish.weight).length > 0).map(wish => wish.name);