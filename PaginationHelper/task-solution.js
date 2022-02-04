// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.items = [...collection];
  this.itemsPerPage = itemsPerPage;
  this.pages = [];
  for (let i = 0; i < this.items.length; i += this.itemsPerPage)
    this.pages.push(this.items.slice(i, i + this.itemsPerPage));
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function(){
  return this.items.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function(){  
  return this.pages.length;
}
// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex){
  console.log(this.pages[pageIndex], pageIndex);
  return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
 }

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex){
  return itemIndex >= 0 && itemIndex < this.items.length ? Math.trunc(itemIndex / this.itemsPerPage) : -1;
 }