// 粒子时钟
function initClock() {
  var digit = [
    // 0-9 的点阵数据
    [[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],
    [[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],
    [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],
    [[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
    [[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],
    [[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
    [[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
    [[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],
    [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
    [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],
    [[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]]
  ];

  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) return;

  var cxt = canvas.getContext('2d');
  var H = 100, W = 700;
  canvas.height = H;
  canvas.width = W;

  var data = [];
  var balls = [];
  var R = canvas.height/20-1;

  // 颜色配置
  const colors = {
    light: {
      digit: '#555',
      particles: ["#3BE","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"]
    },
    dark: {
      digit: '#eee',
      particles: ["#FF3E96", "#FF69B4", "#FF6EB4", "#FF83FA", "#FF00FF", "#FF1493", "#FF34B3", "#FF3E96", "#FF69B4", "#FF00FF"]
    }
  };

  function updateDigitTime() {
    var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    var NewData = [temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]];
    var changeNumArray = [];
    
    for(var i = data.length-1; i >= 0; i--) {
      if(NewData[i] !== data[i]) {
        changeNumArray.push(i + '_' + (Number(data[i])+1)%10);
      }
    }
    
    // 限制同时产生的小球数量
    const maxBalls = 3;
    if (changeNumArray.length > maxBalls) {
      changeNumArray = changeNumArray.slice(0, maxBalls);
    }
    
    for(var i = 0; i < changeNumArray.length; i++) {
      addBalls.apply(this, changeNumArray[i].split('_'));
    }
    data = NewData.concat();
  }

  function updateBalls() {
    // 限制最大小球数量
    const maxBalls = 100;
    if (balls.length > maxBalls) {
      balls.splice(maxBalls);
    }
    
    for(var i = 0; i < balls.length; i++) {
      balls[i].stepY += balls[i].disY;
      balls[i].x += balls[i].stepX;
      balls[i].y += balls[i].stepY;
      if(balls[i].x > W + R || balls[i].y > H + R) {
        balls.splice(i,1);
        i--;
      }
    }
  }

  function addBalls(index, num) {
    var numArray = [1,2];  // 减少初始速度选项
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var colorArray = isDark ? colors.dark.particles : colors.light.particles;
    
    // 减少每个数字产生的小球数量
    const maxBallsPerDigit = 15;
    let ballCount = 0;
    
    for(var i = 0; i < digit[num].length; i++) {
      for(var j = 0; j < digit[num][i].length; j++) {
        if(digit[num][i][j] == 1 && ballCount < maxBallsPerDigit) {
          var ball = {
            x: 14*(R+2)*index + j*2*(R+1)+(R+1),
            y: i*2*(R+1)+(R+1),
            stepX: Math.floor(Math.random() * 4 -2),
            stepY: -2*numArray[Math.floor(Math.random()*numArray.length)],
            color: colorArray[Math.floor(Math.random()*colorArray.length)],
            disY: 0.95
          };
          balls.push(ball);
          ballCount++;
        }
      }
    }
  }

  function renderDigit(index, num) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    for(var i = 0; i < digit[num].length; i++) {
      for(var j = 0; j < digit[num][i].length; j++) {
        if(digit[num][i][j] == 1) {
          cxt.beginPath();
          // 在暗黑模式下，绘制稍大一点的底层圆形作为发光效果
          if (isDark) {
            cxt.fillStyle = 'rgba(255, 255, 255, 0.1)';
            cxt.arc(14*(R+2)*index + j*2*(R+1)+(R+1), i*2*(R+1)+(R+1), R + 1, 0, 2*Math.PI);
            cxt.fill();
          }
          // 绘制主要数字
          cxt.fillStyle = isDark ? colors.dark.digit : colors.light.digit;
          cxt.beginPath();
          cxt.arc(14*(R+2)*index + j*2*(R+1)+(R+1), i*2*(R+1)+(R+1), R, 0, 2*Math.PI);
          cxt.fill();
        }
      }
    }
  }

  function render() {
    canvas.height = H;
    
    for(var i = 0; i < data.length; i++) {
      renderDigit(i, data[i]);
    }
    
    // 使用离屏 canvas 优化小球渲染
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = W;
    offscreenCanvas.height = H;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    
    for(var i = 0; i < balls.length; i++) {
      offscreenCtx.beginPath();
      offscreenCtx.arc(balls[i].x, balls[i].y, R, 0, 2*Math.PI);
      offscreenCtx.fillStyle = balls[i].color;
      offscreenCtx.fill();
    }
    
    cxt.drawImage(offscreenCanvas, 0, 0);
  }

  // 监听主题变化
  const observer = new MutationObserver(() => {
    // 清空现有小球并重新生成
    balls = [];
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // 初始化时间数据
  (function(){
    var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    data.push(temp[1],temp[2],10,temp[3],temp[4],10,temp[5],temp[6]);
  })();

  // 启动时钟
  var clockTimer = null;
  function startClock() {
    if (clockTimer) return;
    clockTimer = setInterval(function(){
      updateDigitTime();
      updateBalls();
      render();
    }, 50);
  }

  // 停止时钟
  function stopClock() {
    if (clockTimer) {
      clearInterval(clockTimer);
      clockTimer = null;
    }
  }

  // 页面可见性变化时控制时钟
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopClock();
    } else {
      startClock();
    }
  });

  // 在页面加载完成且 loading 结束后启动时钟
  window.addEventListener('load', function() {
    setTimeout(startClock, 1000);
  });
}

// 在 DOM 加载完成后初始化时钟
document.addEventListener('DOMContentLoaded', initClock); 