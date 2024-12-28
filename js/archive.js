// 归档页面功能
(function() {
  // 检查是否在归档页面
  if (!document.querySelector('.archive-list')) {
    return;
  }

  // 添加滚动动画
  const archiveItems = document.querySelectorAll('.archive-post-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    archiveItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'all 0.5s ease';
      observer.observe(item);
    });
  }

  // 年份展开折叠功能
  function toggleYear(yearSection) {
    const yearPosts = yearSection.querySelector('.year-posts');
    const icon = yearSection.querySelector('.toggle-year i');
    const yearTitle = yearSection.querySelector('.year-title');
    
    // 如果点击的年份已经展开，就折叠它
    if (yearPosts.classList.contains('expanded')) {
      // 先获取当前高度
      const currentHeight = yearPosts.scrollHeight;
      yearPosts.style.height = currentHeight + 'px';
      
      // 强制回流
      yearPosts.offsetHeight;
      
      // 设置高度为0，触发动画
      yearPosts.style.height = '0';
      
      // 动画结束后移除expanded类和内联样式
      setTimeout(() => {
        yearPosts.classList.remove('expanded');
        yearPosts.style.height = '';
      }, 300);
      
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    } else {
      // 记录当前点击的年份位置
      const clickedYearTop = yearSection.getBoundingClientRect().top + window.pageYOffset;
      
      // 折叠其他所有年份
      document.querySelectorAll('.year-posts.expanded').forEach(posts => {
        const otherIcon = posts.closest('.archive-year').querySelector('.toggle-year i');
        
        // 先获取当前高度
        const currentHeight = posts.scrollHeight;
        posts.style.height = currentHeight + 'px';
        
        // 强制回流
        posts.offsetHeight;
        
        // 设置高度为0，触发动画
        posts.style.height = '0';
        
        // 动画结束后移除expanded类和内联样式
        setTimeout(() => {
          posts.classList.remove('expanded');
          posts.style.height = '';
        }, 300);
        
        otherIcon.classList.remove('fa-chevron-up');
        otherIcon.classList.add('fa-chevron-down');
      });
      
      // 展开当前点击的年份
      yearPosts.classList.add('expanded');
      const targetHeight = yearPosts.scrollHeight;
      yearPosts.style.height = '0';
      
      // 强制回流
      yearPosts.offsetHeight;
      
      // 设置目标高度，触发动画
      yearPosts.style.height = targetHeight + 'px';
      
      // 动画结束后移除内联样式
      setTimeout(() => {
        yearPosts.style.height = '';
        
        // 计算展开后的位置偏移
        const newYearTop = yearSection.getBoundingClientRect().top + window.pageYOffset;
        const offset = newYearTop - clickedYearTop;
        
        // 如果年份不在视图中，滚动到年份位置
        const yearRect = yearTitle.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (yearRect.top < 0 || yearRect.bottom > viewportHeight) {
          window.scrollTo({
            top: window.pageYOffset + yearRect.top - 20, // 20px的额外空间
            behavior: 'smooth'
          });
        }
      }, 300);
      
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    }
  }

  // 为年份标题添加点击事件
  const yearTitles = document.querySelectorAll('.year-title');
  yearTitles.forEach(title => {
    title.addEventListener('click', function(e) {
      // 如果点击的是切换按钮本身，不做处理（让按钮自己的事件处理）
      if (e.target.closest('.toggle-year')) {
        return;
      }
      // 否则触发年份切换
      toggleYear(this.closest('.archive-year'));
    });
  });

  // 为切换按钮添加点击事件
  const yearButtons = document.querySelectorAll('.toggle-year');
  yearButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // 阻止事件冒泡到标题
      toggleYear(this.closest('.archive-year'));
    });
  });
})(); 