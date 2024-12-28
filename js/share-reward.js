// 处理复制链接和赞赏功能
document.addEventListener('DOMContentLoaded', function() {
  // 分享功能
  const shareLinks = document.querySelectorAll('.share-link');
  if (shareLinks) {
    shareLinks.forEach(link => {
      if (link.classList.contains('copy')) {
        // 复制链接功能
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.style.cssText = `
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          margin-bottom: 8px;
          z-index: 1000;
        `;
        link.appendChild(tooltip);
        
        link.addEventListener('click', async function(e) {
          e.preventDefault();
          const url = this.getAttribute('data-clipboard-text');
          
          try {
            if (navigator.clipboard && window.isSecureContext) {
              await navigator.clipboard.writeText(url);
              tooltip.textContent = '复制成功！';
              tooltip.style.opacity = '1';
            } else {
              const textArea = document.createElement('textarea');
              textArea.value = url;
              textArea.style.position = 'fixed';
              textArea.style.left = '0';
              textArea.style.top = '0';
              textArea.style.opacity = '0';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              
              try {
                const successful = document.execCommand('copy');
                if (successful) {
                  tooltip.textContent = '复制成功！';
                  tooltip.style.opacity = '1';
                } else {
                  tooltip.textContent = '复制失败，请重试';
                  tooltip.style.opacity = '1';
                }
              } catch (err) {
                console.error('复制失败:', err);
                tooltip.textContent = '复制失败，请重试';
                tooltip.style.opacity = '1';
              }
              
              document.body.removeChild(textArea);
            }
          } catch (err) {
            console.error('复制失败:', err);
            tooltip.textContent = '复制失败，请重试';
            tooltip.style.opacity = '1';
          }
          
          setTimeout(() => {
            tooltip.style.opacity = '0';
          }, 2000);
        });
      } else {
        // 其他分享按钮
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const url = this.href;
          const title = document.title;
          const text = document.querySelector('meta[name="description"]')?.content || '';
          
          // 检查是否支持 Web Share API
          if (navigator.share && /mobile/i.test(navigator.userAgent)) {
            navigator.share({
              title: title,
              text: text,
              url: url
            }).catch((error) => {
              // 如果分享失败，回退到原始链接
              window.open(url, '_blank');
            });
          } else {
            // 在桌面端或不支持 Web Share API 时，使用原始链接
            window.open(url, '_blank');
          }
        });
      }
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