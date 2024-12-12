const express = require('express');
const app = express();
const port = 3000;

// 提供靜態文件
app.use(express.static('public'));

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});