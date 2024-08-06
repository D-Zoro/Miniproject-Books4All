const buyBooksSection = document.getElementById('buyBooks');

// Retrieve all books stored for selling
const allBooks = Object.keys(localStorage).filter(key => key.startsWith('bookToSell')).map(key => JSON.parse(localStorage.getItem(key)));

// Display all books to buy
allBooks.forEach(bookToSell => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  bookItem.innerHTML = `
   
    <div id="imagu"><img src="${bookToSell.imageBase64}" alt="${bookToSell.title}"></div>
     <div id="imagu"><h3>${bookToSell.title}</h3>
    <p>By ${bookToSell.author}</p>
    <br>
    
    <pre>Price      :&#8377;${bookToSell.price}/-</pre>
    <pre>Seller     : ${bookToSell.userName}</pre>
    <pre>Ph no      : ${bookToSell.phoneNumber}</pre>
    <pre>Address    : ${bookToSell.address}</pre>
    <pre>Year Bought: ${bookToSell.yearBought}</pre>
    <button class="confirmPurchaseBtn">Confirm Purchase</button></div>
  `;
  buyBooksSection.appendChild(bookItem);

  const confirmPurchaseBtn = bookItem.querySelector('.confirmPurchaseBtn');
  confirmPurchaseBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to purchase this book?')) {
      // Remove book from local storage
      localStorage.removeItem(`bookToSell_${bookToSell.title}`);
      // Remove book from display
      buyBooksSection.removeChild(bookItem);
    }
  });
});
