const myService = Vue.createApp({
    data() {
        return {
            Services: [
                {
                    icon: "fa-shopping-cart",
                    heading: "E-Commerce",
                    text: "提供高效、安全的電子商務解決方案，幫助您快速搭建網店。"
                },
                {
                    icon: "fa-laptop",
                    heading: "Responsive Design",
                    text: "打造響應式網站，保證在所有設備上的完美呈現。"
                }
            ]
        };
    },
    mounted() {
        // 模擬動態新增服務項目
        setTimeout(() => {
            this.Services.push({
                icon: "fa-lock",
                heading: "Web Security",
                text: "專注於網站安全，保障您的數據與業務安全。"
            });
        }, 2000);
    }
}).mount("#services");

const vueProfolio = Vue.createApp({
    data() {
        return {
            Portfolio: [] // 初始化為空，稍後從後端獲取數據
        };
    },
    mounted() {
        // 模擬 AJAX 請求後端獲取數據
        setTimeout(() => {
            this.Portfolio = [
                {
                    id: 1,
                    image: "image/portfolio1.png",
                    title: "專案 A",
                    description: "這是一個創新的解決方案，提升用戶體驗。"
                },
                {
                    id: 2,
                    image: "image/portfolio2.png",
                    title: "專案 B",
                    description: "高度響應的設計，適合多設備使用。"
                },
                {
                    id: 3,
                    image: "image/portfolio3.png",
                    title: "專案 C",
                    description: "強調數據安全與性能的解決方案。"
                }
            ];
        }, 1000);
    }
}).mount("#portfolio");