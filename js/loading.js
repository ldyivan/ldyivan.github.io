document.addEventListener('DOMContentLoaded', function() {
  const loadingContainer = document.querySelector('.loading-container');
  const loadingBar = document.querySelector('.loading-bar');
  let loadingProgress = 0;
  let progressInterval;

  // 更新进度条
  function updateLoadingBar() {
    if (loadingProgress < 90) {
      loadingProgress += Math.random() * 10;
      loadingBar.style.width = `${loadingProgress}%`;
    }
  }

  // 开始加载动画
  function startLoading() {
    loadingContainer.classList.remove('hide');
    loadingBar.classList.add('loading');
    loadingProgress = 0;
    loadingBar.style.width = '0%';
    loadingBar.style.opacity = '1';
    progressInterval = setInterval(updateLoadingBar, 200);
  }

  // 结束加载动画
  function finishLoading() {
    clearInterval(progressInterval);
    loadingBar.style.width = '100%';
    loadingBar.classList.remove('loading');
    loadingBar.classList.add('finished');
    
    setTimeout(() => {
      loadingContainer.classList.add('hide');
      setTimeout(() => {
        loadingBar.style.width = '0';
        loadingBar.classList.remove('finished');
        loadingBar.style.opacity = '1';
      }, 300);
    }, 500);
  }

  // 页面加载完成时
  window.addEventListener('load', function() {
    finishLoading();
  });

  // 监听页面跳转
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.target && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      startLoading();
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    }
  });

  // 处理浏览器前进后退
  window.addEventListener('popstate', function() {
    startLoading();
  });

  // 初始加载
  startLoading();
}); 