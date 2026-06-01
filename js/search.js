// 搜索功能
document.addEventListener('DOMContentLoaded', () => {
  // 检查搜索配置是否存在
  if (!window.searchConfig) return;

  const searchBtn = document.querySelector('.search-icon');
  const searchPopup = document.getElementById('search-popup');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // 打开搜索弹窗
  searchBtn?.addEventListener('click', () => {
    searchPopup.classList.add('active');
    searchInput.focus();
  });

  // 关闭搜索弹窗
  searchCloseBtn?.addEventListener('click', () => {
    searchPopup.classList.remove('active');
  });

  // 点击遮罩层关闭
  searchPopup?.addEventListener('click', (e) => {
    if (e.target === searchPopup) {
      searchPopup.classList.remove('active');
    }
  });

  // ESC键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchPopup.classList.contains('active')) {
      searchPopup.classList.remove('active');
    }
  });

  // 加载搜索数据
  let searchData = null;
  let searchXhr = null;

  const loadSearchData = () => {
    if (searchXhr) {
      searchXhr.abort();
    }

    searchXhr = new XMLHttpRequest();
    searchXhr.open('GET', window.searchConfig.path);
    searchXhr.onload = () => {
      if (searchXhr.status === 200) {
        const xml = searchXhr.responseXML;
        const entries = xml.getElementsByTagName('entry');
        searchData = Array.from(entries).map(entry => ({
          title: entry.getElementsByTagName('title')[0].textContent,
          content: entry.getElementsByTagName('content')[0].textContent,
          url: entry.getElementsByTagName('url')[0].textContent,
          date: entry.getElementsByTagName('date')[0].textContent,
          categories: Array.from(entry.getElementsByTagName('category')).map(cat => cat.textContent)
        }));
      }
    };
    searchXhr.send();
  };

  // 初始加载搜索数据
  loadSearchData();

  // 搜索处理函数
  const handleSearch = debounce((keyword) => {
    if (!searchData || keyword.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const results = searchData.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(keyword);
      const contentMatch = post.content.toLowerCase().includes(keyword);
      return titleMatch || contentMatch;
    });

    renderResults(results, keyword);
  }, 300);

  // 渲染搜索结果
  const renderResults = (results, keyword) => {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="no-results">未找到相关结果</div>';
      return;
    }

    const html = results.map(post => `
      <div class="search-result-item">
        <div class="title">
          <a href="${post.url}">${highlightKeyword(post.title, keyword)}</a>
        </div>
        <div class="content">${getSearchSnippet(post.content, keyword)}</div>
        <div class="meta">
          <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fas fa-folder"></i> ${post.categories.join(', ')}</span>
        </div>
      </div>
    `).join('');

    searchResults.innerHTML = html;
  };

  // 高亮关键词
  const highlightKeyword = (text, keyword) => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // 获取搜索片段
  const getSearchSnippet = (content, keyword) => {
    const index = content.toLowerCase().indexOf(keyword.toLowerCase());
    if (index === -1) return '';

    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + 100);
    let snippet = content.substring(start, end);

    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    return highlightKeyword(snippet, keyword);
  };

  // 格式化日期
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // 防抖函数
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // 监听搜索输入
  searchInput?.addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    handleSearch(keyword);
  });
}); 