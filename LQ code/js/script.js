// 等待 DOM 完全加载
document.addEventListener("DOMContentLoaded", function() {
    // 获取按钮和结果显示区域
    const button = document.getElementById("random-name-button");
    const result = document.getElementById("result");
    
    // 获取所有菜品名称和图片路径
    const dishes = [
      { name: "凉皮", image: "凉皮.jpg" },
      { name: "重庆小面", image: "重庆小面.jpg" },
      { name: "饺子", image: "饺子.jpg" },
      { name: "肠粉", image: "肠粉.jpg" },
      { name: "炒河粉", image: "炒河粉.jpg" },
      { name: "湘菜", image: "湘菜.jpg" }
    ];
  
    // 为按钮添加点击事件
    button.addEventListener("click", function() {
      // 随机选择一个菜品
      const randomIndex = Math.floor(Math.random() * dishes.length);
      const selectedDish = dishes[randomIndex];
  
      // 更新结果区域显示菜品名称和图片
      result.innerHTML = `
        <h2>今天推荐的菜品是：${selectedDish.name}</h2>
        <img src="${selectedDish.image}" alt="${selectedDish.name}" style="max-width: 300px;">
      `;
    });
  });