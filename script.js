// Burger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => navLinks.classList.toggle('show'));
  if (document.getElementById('gallery-list')) loadGallery();
});
function loadGallery() {
  const list = document.getElementById('gallery-list');
  const items = JSON.parse(localStorage.getItem('galleryItems') || '[]');
  list.innerHTML = items.map((it, idx) => 
    `<li><img src="${it.url}" alt="${it.caption}"/><span>${it.caption}</span><button onclick="removeItem(${idx})">Hapus</button></li>`
  ).join('');
}
function addItem() {
  const url = document.getElementById('img-url').value;
  const cap = document.getElementById('img-caption').value;
  const items = JSON.parse(localStorage.getItem('galleryItems') || '[]');
  items.push({ url, caption: cap });
  localStorage.setItem('galleryItems', JSON.stringify(items));
  document.getElementById('img-url').value = '';
  document.getElementById('img-caption').value = '';
  loadGallery();
}
function removeItem(i) {
  const items = JSON.parse(localStorage.getItem('galleryItems') || '[]');
  items.splice(i, 1);
  localStorage.setItem('galleryItems', JSON.stringify(items));
  loadGallery();
}
