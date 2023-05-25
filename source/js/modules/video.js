
const videoBtn = document.getElementById('desc-btn-video');
const videoContainer = document.getElementById('desc-video');
const videoWrapper = document.querySelector('.main__desc-video-wrapper');

if (videoWrapper) {
  videoWrapper.classList.remove('main__desc-video-wrapper--no-js');
}

if (videoBtn) {
  videoBtn.addEventListener('click', function () {
    videoContainer.classList.toggle('main__desc-video-wrapper--active');
  });
}
