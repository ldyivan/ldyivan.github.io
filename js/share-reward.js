// 处理复制链接和赞赏功能
document.addEventListener('DOMContentLoaded', function() {
  // 复制链接功能
  const copyButton = document.querySelector('.share-link.copy');
  if (copyButton) {
    // 初始化提示文本
    copyButton.setAttribute('data-tooltip', '复制链接');
    
    copyButton.addEventListener('click', function() {
      const url = this.getAttribute('data-clipboard-text');
      navigator.clipboard.writeText(url).then(() => {
        // 显示复制成功提示
        this.setAttribute('data-tooltip', '复制成功！');
        this.classList.add('tooltip-show');
        
        setTimeout(() => {
          this.classList.remove('tooltip-show');
          this.setAttribute('data-tooltip', '复制链接');
        }, 2000);
      }).catch(() => {
        this.setAttribute('data-tooltip', '复制失败，请重试');
        this.classList.add('tooltip-show');
        
        setTimeout(() => {
          this.classList.remove('tooltip-show');
          this.setAttribute('data-tooltip', '复制链接');
        }, 2000);
      });
    });
  }

  // 赞赏功能
  const rewardButton = document.getElementById('reward-button');
  const rewardQrcodes = document.getElementById('reward-qrcodes');
  const rewardClose = document.getElementById('reward-close');
  const rewardOverlay = document.getElementById('reward-overlay');

  if (rewardButton && rewardQrcodes && rewardClose) {
    let isRewardVisible = false;

    // 显示赞赏弹窗
    function showReward(event) {
      if (event) {
        event.preventDefault();
      }
      if (!isRewardVisible) {
        document.body.style.overflow = 'hidden'; // 防止背景滚动
        rewardQrcodes.style.display = 'flex';
        rewardOverlay.style.display = 'block';
        // 强制重排
        rewardQrcodes.offsetHeight;
        rewardQrcodes.classList.add('active');
        rewardOverlay.classList.add('active');
        isRewardVisible = true;
      }
    }

    // 关闭赞赏弹窗
    function closeReward(event) {
      if (event) {
        event.preventDefault();
      }
      if (isRewardVisible) {
        document.body.style.overflow = ''; // 恢复背景滚动
        rewardQrcodes.classList.remove('active');
        rewardOverlay.classList.remove('active');
        isRewardVisible = false;
        
        setTimeout(() => {
          if (!isRewardVisible) {
            rewardQrcodes.style.display = 'none';
            rewardOverlay.style.display = 'none';
          }
        }, 300);
      }
    }

    // 绑定事件
    rewardButton.addEventListener('click', showReward);
    rewardClose.addEventListener('click', closeReward);
    rewardOverlay.addEventListener('click', closeReward);
    
    // 点击弹窗内部不关闭
    rewardQrcodes.addEventListener('click', function(event) {
      event.stopPropagation();
    });

    // ESC键关闭弹窗
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && isRewardVisible) {
        closeReward();
      }
    });
  }
}); 