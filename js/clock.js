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
      digit: '#ddd',
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
    
    for(var i = 0; i < changeNumArray.length; i++) {
      addBalls.apply(this, changeNumArray[i].split('_'));
    }
    data = NewData.concat();
  }

  function updateBalls() {
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
    var numArray = [1,2,3];
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var colorArray = isDark ? colors.dark.particles : colors.light.particles;
    
    for(var i = 0; i < digit[num].length; i++) {
      for(var j = 0; j < digit[num][i].length; j++) {
        if(digit[num][i][j] == 1) {
          var ball = {
            x: 14*(R+2)*index + j*2*(R+1)+(R+1),
            y: i*2*(R+1)+(R+1),
            stepX: Math.floor(Math.random() * 4 -2),
            stepY: -2*numArray[Math.floor(Math.random()*numArray.length)],
            color: colorArray[Math.floor(Math.random()*colorArray.length)],
            disY: 1
          };
          balls.push(ball);
        }
      }
    }
  }

  function renderDigit(index, num) {
    for(var i = 0; i < digit[num].length; i++) {
      for(var j = 0; j < digit[num][i].length; j++) {
        if(digit[num][i][j] == 1) {
          cxt.beginPath();
          cxt.arc(14*(R+2)*index + j*2*(R+1)+(R+1), i*2*(R+1)+(R+1), R, 0, 2*Math.PI);
          cxt.closePath();
          cxt.fill();
        }
      }
    }
  }

  function render() {
    canvas.height = H;
    setColor(); // 每次渲染前更新颜色
    for(var i = 0; i < data.length; i++) {
      renderDigit(i, data[i]);
    }
    for(var i = 0; i < balls.length; i++) {
      cxt.beginPath();
      cxt.arc(balls[i].x, balls[i].y, R, 0, 2*Math.PI);
      cxt.fillStyle = balls[i].color;
      cxt.closePath();
      cxt.fill();
    }
  }

  // 初始化时间数据
  (function(){
    var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    data.push(temp[1],temp[2],10,temp[3],temp[4],10,temp[5],temp[6]);
  })();

  // 设置颜色
  function setColor() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    cxt.fillStyle = isDark ? colors.dark.digit : colors.light.digit;
    // 添加发光效果
    if (isDark) {
      cxt.shadowColor = '#fff';
      cxt.shadowBlur = 2;
    } else {
      cxt.shadowColor = 'transparent';
      cxt.shadowBlur = 0;
    }
  }

  // 监听主题变化
  const observer = new MutationObserver(() => {
    setColor();
    // 清空现有小球并重新生成
    balls = [];
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // 初始化颜色
  setColor();

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

  // 在页面加载完成且 loading 结束后启动时钟
  window.addEventListener('load', function() {
    setTimeout(startClock, 1000);
  });
}

// 在 DOM 加载完成后初始化时钟
document.addEventListener('DOMContentLoaded', initClock); 