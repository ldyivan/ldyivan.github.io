(function() {
    // 相册类
    function PhotoGallery() {
        this.container = document.querySelector('.photo-wrapper');
        this.init();
        this.initPreview();
    }

    PhotoGallery.prototype = {
        init: function() {
            var self = this;
            this.fetchPhotoData()
                .then(function(data) {
                    self.render(data);
                    self.initLazyLoad();
                })
                .catch(function(error) {
                    console.error('Failed to initialize photo gallery:', error);
                    self.showError();
                });
        },

        initPreview: function() {
            var self = this;
            // 创建预览框HTML
            var previewHtml = [
                '<div class="preview-overlay">',
                '    <div class="preview-close">&times;</div>',
                '    <div class="preview-container">',
                '        <div class="preview-loading">',
                '            <div class="loading-icon"></div>',
                '            <div class="loading-text">加载中...</div>',
                '        </div>',
                '        <img class="preview-image" src="" alt="" />',
                '        <div class="preview-text"></div>',
                '    </div>',
                '</div>'
            ].join('');

            // 添加预览框到body
            document.body.insertAdjacentHTML('beforeend', previewHtml);

            // 获取预览框元素
            this.previewOverlay = document.querySelector('.preview-overlay');
            this.previewImage = this.previewOverlay.querySelector('.preview-image');
            this.previewText = this.previewOverlay.querySelector('.preview-text');
            this.previewLoading = this.previewOverlay.querySelector('.preview-loading');

            // 绑定关闭事件
            this.previewOverlay.addEventListener('click', function(e) {
                if (e.target === this || e.target.classList.contains('preview-close')) {
                    self.closePreview();
                }
            });

            // 绑定键盘事件
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    self.closePreview();
                }
            });
        },

        showPreview: function(src, text) {
            var self = this;
            this.previewLoading.style.display = 'block';
            this.previewImage.style.display = 'none';
            this.previewOverlay.classList.add('active');
            this.previewText.textContent = text;

            // 加载原图
            var img = new Image();
            img.onload = function() {
                self.previewLoading.style.display = 'none';
                self.previewImage.style.display = 'block';
                self.previewImage.src = src;
            };
            img.onerror = function() {
                self.previewLoading.innerHTML = '<div class="error-message">图片加载失败</div>';
            };
            img.src = src;
        },

        closePreview: function() {
            this.previewOverlay.classList.remove('active');
            this.previewImage.src = '';
            this.previewText.textContent = '';
        },

        fetchPhotoData: function() {
            return fetch('./data.json')
                .then(function(response) {
                    if (!response.ok) throw new Error('Failed to fetch photo data');
                    return response.json();
                });
        },

        render: function(data) {
            var groupedPhotos = this.processPhotoData(data);
            var html = Object.keys(groupedPhotos)
                .sort(function(a, b) { return b.localeCompare(a); })
                .map(function(date) {
                    return [
                        '<div class="photo-section">',
                        '    <div class="photo-date"># ' + date + '</div>',
                        '    <div class="photo-grid">',
                        groupedPhotos[date].map(this.createPhotoHTML).join(''),
                        '    </div>',
                        '</div>'
                    ].join('');
                }, this).join('');
            this.container.innerHTML = html;
        },

        processPhotoData: function(data) {
            var groupedPhotos = {};
            data.list.forEach(function(item) {
                var yearMonth = item.date.split('-');
                var year = yearMonth[0];
                var month = yearMonth[1];
                var dateKey = year + '年' + month + '月';
                
                if (!groupedPhotos[dateKey]) {
                    groupedPhotos[dateKey] = [];
                }

                item.arr.link.forEach(function(link, index) {
                    var cleanLink = link.replace(/\s+/g, '%20');
                    groupedPhotos[dateKey].push({
                        src: window.CONFIG.CDN_URL + cleanLink,
                        thumbnail: window.CONFIG.THUMBNAIL_URL + cleanLink,
                        text: item.arr.text[index],
                        date: dateKey
                    });
                });
            });
            return groupedPhotos;
        },

        createPhotoHTML: function(photo) {
            return [
                '<div class="photo-item" onclick="window.photoGallery.showPreview(\'' + photo.src + '\', \'' + photo.text + '\')">',
                '    <div class="photo-placeholder">',
                '        <div class="loading-icon"></div>',
                '        <span class="loading-text">加载中...</span>',
                '    </div>',
                '    <img',
                '        class="lazy"',
                '        data-src="' + photo.thumbnail + '"',
                '        data-original="' + photo.src + '"',
                '        src="' + window.CONFIG.DEFAULT_IMAGE + '"',
                '        alt="' + photo.text + '"',
                '    />',
                '    <div class="photo-info">',
                '        <p>' + photo.text + '</p>',
                '    </div>',
                '</div>'
            ].join('');
        },

        initLazyLoad: function() {
            try {
                var myLazyLoad = new window.LazyLoad({
                    elements_selector: ".lazy",
                    threshold: 50,
                    callback_loaded: function(el) {
                        el.classList.add('loaded');
                        el.parentElement.classList.add('loaded');
                        var placeholder = el.parentElement.querySelector('.photo-placeholder');
                        if (placeholder) {
                            placeholder.style.display = 'none';
                        }
                    },
                    callback_error: function(el) {
                        var retryCount = el.getAttribute('data-retry-count') || 0;
                        if (retryCount < 3) {
                            el.setAttribute('data-retry-count', parseInt(retryCount) + 1);
                            var originalSrc = el.dataset.src.split('?')[0];
                            el.src = originalSrc;
                        } else {
                            el.src = window.CONFIG.DEFAULT_IMAGE;
                            el.classList.add('error');
                            var placeholder = el.parentElement.querySelector('.photo-placeholder');
                            if (placeholder) {
                                placeholder.innerHTML = '<div class="error-message">加载失败</div>';
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('LazyLoad initialization failed:', error);
                var images = document.querySelectorAll('.lazy');
                images.forEach(function(img) {
                    img.src = img.getAttribute('data-src').split('?')[0];
                });
            }
        },

        showError: function() {
            this.container.innerHTML = '<div class="error">相册加载失败，请刷新重试</div>';
        }
    };

    // 当页面加载完成时初始化相册
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            window.photoGallery = new PhotoGallery();
        });
    } else {
        window.photoGallery = new PhotoGallery();
    }
})();