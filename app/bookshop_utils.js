function addVAT(price) {
    return price + (0.2 * price);
}


function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}


function makeHalfPrice(price) {
    return price - (0.5*price);
}


function countBooks(bookTitles) {
    return bookTitles.length;
}


function isInStock(book) {
    if (book.quantity > 0) {  
        return true 
    } else {
        return false;
    }  
}


function getTotalOrderPrice(price, quantity) {
    return price * quantity * 1.2;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};