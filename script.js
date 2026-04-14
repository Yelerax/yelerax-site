document.addEventListener('DOMContentLoaded', () => {
  // Download buttons
  const mainDownloadBtn = document.getElementById('main-download-btn');
  const footerDownloadBtn = document.getElementById('footer-download-btn');
  const navDownloadBtn = document.querySelector('.nav-download-btn');

  function handleDownloadClick(e) {
    if (e) e.preventDefault();
    showToast("Download is currently unavailable. Check back later!");
  }

  if (mainDownloadBtn) mainDownloadBtn.addEventListener('click', handleDownloadClick);
  if (footerDownloadBtn) footerDownloadBtn.addEventListener('click', handleDownloadClick);
  if (navDownloadBtn) navDownloadBtn.addEventListener('click', handleDownloadClick);

  // Simple Toast Notification System for regular web page
  function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('hiding');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, duration);
  }
});
