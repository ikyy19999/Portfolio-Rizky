// Mendapatkan elemen-elemen form dan daftar buku
const bookForm = document.getElementById("bookForm");
const searchBookForm = document.getElementById("searchBook");
const incompleteBookList = document.getElementById("incompleteBookList");
const completeBookList = document.getElementById("completeBookList");
const backButton = document.getElementById("backButton");

// Menyimpan data buku dari localStorage atau array kosong jika belum ada data
let books = JSON.parse(localStorage.getItem("books")) || [];
let editingBookId = null; // Variabel untuk melacak buku yang sedang diedit

// Fungsi untuk menyimpan data buku ke localStorage
function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Fungsi untuk merender buku ke dalam daftar
function renderBooks() {
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.dataset.bookid = book.id;
    bookElement.dataset.testid = "bookItem";

    const titleElement = document.createElement("h3");
    titleElement.dataset.testid = "bookItemTitle";
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.dataset.testid = "bookItemAuthor";
    authorElement.textContent = `Penulis: ${book.author}`;

    const yearElement = document.createElement("p");
    yearElement.dataset.testid = "bookItemYear";
    yearElement.textContent = `Tahun: ${book.year}`;

    const buttonsDiv = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.dataset.testid = "bookItemIsCompleteButton";
    completeButton.textContent = book.isComplete ? "Tandai Belum Selesai" : "Tandai Selesai";
    completeButton.addEventListener("click", () => toggleBookStatus(book.id));

    const deleteButton = document.createElement("button");
    deleteButton.dataset.testid = "bookItemDeleteButton";
    deleteButton.textContent = "Hapus Buku";
    deleteButton.addEventListener("click", () => deleteBook(book.id));

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Buku";
    editButton.addEventListener("click", () => editBook(book.id));

    buttonsDiv.append(completeButton, deleteButton, editButton);
    bookElement.append(titleElement, authorElement, yearElement, buttonsDiv);

    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}

// Fungsi untuk mengganti status buku antara "selesai" dan "belum selesai"
function toggleBookStatus(bookId) {
  const book = books.find((b) => b.id === bookId);
  book.isComplete = !book.isComplete;
  saveBooksToLocalStorage();
  renderBooks();
}

// Fungsi untuk menghapus buku
function deleteBook(bookId) {
  books = books.filter((b) => b.id !== bookId);
  saveBooksToLocalStorage();
  renderBooks();
}

// Fungsi untuk mengedit buku
function editBook(bookId) {
  const book = books.find((b) => b.id === bookId);
  editingBookId = bookId;

  // Hapus buku yang sedang diedit dari daftar
  books = books.filter((b) => b.id !== bookId);

  // Scroll ke form edit buku
  bookForm.scrollIntoView({ behavior: 'smooth' });

  // Isi form dengan data buku yang sedang diedit
  document.getElementById("bookFormTitle").value = book.title;
  document.getElementById("bookFormAuthor").value = book.author;
  document.getElementById("bookFormYear").value = book.year;
  document.getElementById("bookFormIsComplete").checked = book.isComplete;

  // Ubah teks judul form dan tombol untuk menunjukkan mode edit
  document.getElementById("formTitle").textContent = "Edit Buku";
  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Simpan Perubahan";

  // Ubah fungsi onsubmit untuk memperbarui buku saat form disubmit
  bookForm.onsubmit = function (e) {
    e.preventDefault();

    const updatedTitle = document.getElementById("bookFormTitle").value;
    const updatedAuthor = document.getElementById("bookFormAuthor").value;
    const updatedYear = document.getElementById("bookFormYear").value;
    const updatedIsComplete = document.getElementById("bookFormIsComplete").checked;

    const updatedBook = {
      id: bookId, // ID tetap dari buku yang diedit
      title: updatedTitle,
      author: updatedAuthor,
      year: parseInt(updatedYear),
      isComplete: updatedIsComplete
    };

    books.push(updatedBook);
    saveBooksToLocalStorage();
    renderBooks();

    resetForm();
  };
}

// Fungsi untuk menambah buku baru
function addNewBook(e) {
  e.preventDefault();

  const bookTitle = document.getElementById("bookFormTitle").value;
  const bookAuthor = document.getElementById("bookFormAuthor").value;
  const bookYear = document.getElementById("bookFormYear").value;
  const bookIsComplete = document.getElementById("bookFormIsComplete").checked;

  const newBook = {
    id: new Date().getTime(), // ID unik berdasarkan timestamp
    title: bookTitle,
    author: bookAuthor,
    year: parseInt(bookYear),
    isComplete: bookIsComplete,
  };

  books.push(newBook);
  saveBooksToLocalStorage();
  renderBooks();

  resetForm();
}

// Fungsi untuk mereset form ke keadaan awal (untuk menambah buku baru)
function resetForm() {
  document.getElementById("bookFormTitle").value = "";
  document.getElementById("bookFormAuthor").value = "";
  document.getElementById("bookFormYear").value = "";
  document.getElementById("bookFormIsComplete").checked = false;

  document.getElementById("formTitle").textContent = "Tambah Buku Baru";
  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Masukkan Buku ke rak Belum Selesai Dibaca";

  bookForm.onsubmit = addNewBook;
  editingBookId = null;
}

// Event listener untuk submit form menambah buku baru
bookForm.addEventListener("submit", addNewBook);

// Event listener untuk tombol "Kembali"
backButton.addEventListener("click", function () {
  window.location.href = "../index.html"; // Mengarahkan ke halaman index.html
});

// Fungsi untuk mencari buku
searchBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = document.getElementById("searchBookTitle").value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.dataset.bookid = book.id;
    bookElement.dataset.testid = "bookItem";

    const titleElement = document.createElement("h3");
    titleElement.dataset.testid = "bookItemTitle";
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.dataset.testid = "bookItemAuthor";
    authorElement.textContent = `Penulis: ${book.author}`;

    const yearElement = document.createElement("p");
    yearElement.dataset.testid = "bookItemYear";
    yearElement.textContent = `Tahun: ${book.year}`;

    const buttonsDiv = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.dataset.testid = "bookItemIsCompleteButton";
    completeButton.textContent = book.isComplete ? "Tandai Belum Selesai" : "Tandai Selesai";
    completeButton.addEventListener("click", () => toggleBookStatus(book.id));

    const deleteButton = document.createElement("button");
    deleteButton.dataset.testid = "bookItemDeleteButton";
    deleteButton.textContent = "Hapus Buku";
    deleteButton.addEventListener("click", () => deleteBook(book.id));

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Buku";
    editButton.addEventListener("click", () => editBook(book.id));

    buttonsDiv.append(completeButton, deleteButton, editButton);
    bookElement.append(titleElement, authorElement, yearElement, buttonsDiv);

    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
});

// Initial render
renderBooks();
