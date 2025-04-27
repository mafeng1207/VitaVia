// 更新状态栏时间
function updateStatusBarTime() {
  const timeElement = document.querySelector('.ios-status-bar .time');
  if (timeElement) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 补零
    if (minutes < 10) minutes = '0' + minutes;
    
    timeElement.textContent = `${hours}:${minutes}`;
  }
}

// 设置活动标签
function setActiveTab(id) {
  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach(item => {
    item.classList.remove('active');
  });
  
  const activeTab = document.getElementById(id);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

// 文档加载完成后
document.addEventListener('DOMContentLoaded', function() {
  // 初始化时间并每分钟更新一次
  updateStatusBarTime();
  setInterval(updateStatusBarTime, 60000);
  
  // 获取当前页面名称并设置活动标签
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  
  // 根据页面设置活动标签
  switch(currentPage) {
    case 'home':
      setActiveTab('tab-home');
      break;
    case 'health_data':
      setActiveTab('tab-health');
      break;
    case 'exercise':
      setActiveTab('tab-exercise');
      break;
    case 'diet':
      setActiveTab('tab-diet');
      break;
    case 'profile':
      setActiveTab('tab-profile');
      break;
  }
}); 