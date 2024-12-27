// 瀑布流布局初始化
document.addEventListener('DOMContentLoaded', () => {
  const initMasonry = () => {
    const grid = document.querySelector('.post-grid');
    if (!grid) return;

    // 移除之前的实例
    if (grid.masonry) {
      grid.masonry.destroy();
    }

    // 初始化新实例
    const masonry = new Masonry(grid, {
      itemSelector: '.post-card',
      columnWidth: '.post-card',
      percentPosition: true,
      gutter: 20,
      transitionDuration: '0.3s',
      initLayout: false // 禁用自动初始化布局
    });

    // 等待图片加载完成后再布局
    imagesLoaded(grid, () => {
      masonry.layout();
      grid.style.opacity = '1';
    });

    // 保存实例引用
    grid.masonry = masonry;
  };

  // 初始化
  initMasonry();

  // 监听窗口大小变化
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMasonry, 300);
  });
}); 