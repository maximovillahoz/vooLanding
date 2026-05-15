import './style.css'

function showTab(btn, id) {
  btn.closest('.content section').querySelectorAll('.tbtn').forEach(b => b.classList.remove('act'))
  btn.closest('.content section').querySelectorAll('.tc').forEach(t => t.classList.remove('act'))
  btn.classList.add('act')
  document.getElementById(id).classList.add('act')
}

function toggleFaq(btn) {
  const ans = btn.nextElementSibling
  const open = btn.classList.contains('open')
  btn.closest('section').querySelectorAll('.fq').forEach(b => {
    b.classList.remove('open')
    b.nextElementSibling.classList.remove('open')
  })
  if (!open) {
    btn.classList.add('open')
    ans.classList.add('open')
  }
}

const sections = document.querySelectorAll('.content section[id]')
const links = document.querySelectorAll('.sb-link')
window.addEventListener('scroll', () => {
  let cur = ''
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id
  })
  links.forEach(l => {
    l.classList.remove('act')
    if (l.getAttribute('href') === '#' + cur) l.classList.add('act')
  })
}, { passive: true })

window.showTab = showTab
window.toggleFaq = toggleFaq
