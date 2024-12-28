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

  // 处理页面返回事件
  window.addEventListener('pageshow', function(event) {
    // 如果是从缓存加载的页面，直接结束loading状态
    if (event.persisted) {
      finishLoading();
    }
  });

  // 监听浏览器前进后退按钮
  window.addEventListener('popstate', function() {
    // 延迟一点执行，确保页面已经加载
    setTimeout(finishLoading, 100);
  });

  // 监听页面跳转
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && 
        link.href && 
        !link.target && 
        link.href.startsWith(window.location.origin) &&
        !link.closest('.article-toc') && // 排除目录链接
        !link.closest('.reward-qrcodes') && // 排除打赏二维码
        !link.closest('.share-links')) { // 排除分享链接
      e.preventDefault();
      startLoading();
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    }
  });

  // 初始加载
  startLoading();

  // 页面加载完成时
  window.addEventListener('load', function() {
    finishLoading();
  });

  // 如果页面加载时间过长，自动隐藏loading
  setTimeout(function() {
    if (!loadingContainer.classList.contains('hide')) {
      finishLoading();
    }
  }, 5000); // 5秒后自动隐藏
}); 