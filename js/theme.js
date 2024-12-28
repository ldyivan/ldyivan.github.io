// 代码块复制功能
function initCodeCopy() {
  // console.log('初始化代码复制功能')
  const highlights = document.querySelectorAll('.highlight')
  
  highlights.forEach(highlight => {
    // 创建复制按钮
    const copyButton = document.createElement('button')
    copyButton.className = 'copy-button'
    copyButton.textContent = '复制代码'
    highlight.appendChild(copyButton)
    
    // 点击复制事件
    copyButton.addEventListener('click', async () => {
      // 获取代码内容 - 修复获取方式
      const codeElement = highlight.querySelector('.code pre') || highlight.querySelector('pre code')
      if (!codeElement) {
        // console.error('未找到代码元素')
        return
      }
      
      // 获取纯文本内容，移除多余的行号
      const code = codeElement.textContent || codeElement.innerText
      
      try {
        // 尝试使用现代 Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(code)
          showCopyResult(copyButton, true)
        } else {
          // 回退方案：使用传统的复制方法
          const textArea = document.createElement('textarea')
          textArea.value = code
          textArea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;'
          document.body.appendChild(textArea)
          
          if (navigator.userAgent.match(/ipad|iphone/i)) {
            // iOS 设备特殊处理
            const range = document.createRange()
            range.selectNodeContents(textArea)
            const selection = window.getSelection()
            selection.removeAllRanges()
            selection.addRange(range)
            textArea.setSelectionRange(0, code.length)
          } else {
            // 其他设备
            textArea.select()
          }
          
          try {
            document.execCommand('copy')
            showCopyResult(copyButton, true)
          } catch (err) {
            console.error('复制失败:', err)
            showCopyResult(copyButton, false)
          }
          
          document.body.removeChild(textArea)
        }
      } catch (err) {
        console.error('复制失败:', err)
        showCopyResult(copyButton, false)
      }
    })
  })
}

// 显示复制结果
function showCopyResult(button, success) {
  const originalText = button.textContent
  button.textContent = success ? '已复制!' : '复制失败'
  button.classList.toggle('copied', success)
  
  setTimeout(() => {
    button.textContent = originalText
    button.classList.remove('copied')
  }, 2000)
}

  // 初始化文章目录
  function initArticleToc() {
    const tocButton = document.querySelector('.toc-toggle')
    const articleToc = document.getElementById('article-toc')
    
    if (!tocButton || !articleToc) {
      // console.log('目录元素未找到')
      return
    }
    
    // console.log('初始化目录功能')
    
    // 切换目录显示状态
    const toggleToc = (show) => {
      if (show === undefined) {
        show = articleToc.classList.contains('collapsed')
      }
      articleToc.classList.toggle('collapsed', !show)
      tocButton.classList.toggle('active', show)
    }
    
    // 点击按钮切换目录显示状态
    tocButton.addEventListener('click', () => {
      // console.log('点击目录按钮')
      toggleToc()
    })
    
    // 点击文档其他地方关闭目录
    document.addEventListener('click', (e) => {
      if (!articleToc.classList.contains('collapsed') && // 目录展开状态
          !articleToc.contains(e.target) && // 点击不在目录内
          e.target !== tocButton && // 点击不是目录按钮
          !tocButton.contains(e.target)) { // 点击不在目录按钮内
        toggleToc(false)
      }
    })
    
    // 点击目录项时滚动到对应位置
    const tocLinks = articleToc.getElementsByTagName('a')
    Array.from(tocLinks).forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = decodeURIComponent(link.getAttribute('href').slice(1))
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          // 计算目标位置，考虑固定导航栏的高度
          const offset = 80 // 根据实际导航栏高度调整
          const targetPosition = targetElement.offsetTop - offset
          
          // 平滑滚动到目标位置
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
          
          // 关闭目录
          toggleToc(false)
        }
      })
    })
    
    // 监听滚动事件，更新目录项的激活状态
    const updateActiveLink = () => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4'))
      const scrollPosition = window.scrollY + 100 // 添加偏移量以提前激活
      
      let currentHeading = null
      for (const heading of headings) {
        if (heading.offsetTop <= scrollPosition) {
          currentHeading = heading
        } else {
          break
        }
      }
      
      Array.from(tocLinks).forEach(link => {
        link.classList.remove('active')
        if (currentHeading && link.getAttribute('href') === `#${currentHeading.id}`) {
          link.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', updateActiveLink)
    updateActiveLink() // 初始化时执行一次
    
    // 初始状态为收起
    toggleToc(false)
  }

// 返回顶部功能
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top')
  if (!backToTop) return

  // 显示/隐藏返回顶部按钮
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show')
    } else {
      backToTop.classList.remove('show')
    }
  })

  // 点击返回顶部
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

// 暗黑模式切换功能
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle')
  if (!darkModeToggle) return

  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // 预设背景色，避免闪烁
    document.documentElement.style.backgroundColor = isDark ? '#ffffff' : '#1a1a1a';
    
    // 切换主题
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  })
}

// 移动端菜单切换功能
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle')
  const sidebar = document.querySelector('.sidebar')
  const overlay = document.getElementById('overlay')
  
  if (!menuToggle || !sidebar || !overlay) return
  
  const toggleMenu = () => {
    sidebar.classList.toggle('active')
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none'
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : ''
  }
  
  menuToggle.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)
}

// 文章阅读进度条
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress-bar')
  if (!progressBar) return

  function updateProgress() {
    const article = document.querySelector('.article-inner')
    if (!article) return

    const windowHeight = window.innerHeight
    const documentHeight = article.clientHeight
    const scrolled = window.scrollY
    const articleTop = article.offsetTop
    const articleBottom = articleTop + documentHeight

    // 计算阅读进度
    if (scrolled < articleTop) {
      progressBar.style.width = '0%'
    } else if (scrolled > articleBottom - windowHeight) {
      progressBar.style.width = '100%'
    } else {
      const progress = ((scrolled - articleTop) / (documentHeight - windowHeight)) * 100
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`
    }
  }

  // 监听滚动事件
  window.addEventListener('scroll', updateProgress)
  window.addEventListener('resize', updateProgress)
  
  // 初始化进度
  updateProgress()
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
  // console.log('页面加载完成，开始初始化功能')
  initArticleToc()
  initCodeCopy()
  initBackToTop()
  initDarkMode()
  initMobileMenu()
  initReadingProgress()
})

// 页面加载完成后启用过渡效果
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.documentElement.style.setProperty('--transition-time', '0.3s');
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }, 300);
}); 