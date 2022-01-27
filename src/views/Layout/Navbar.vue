<template>
 <header>
     <span class="logo">Simple Blog</span>
        <nav>
            <a href="#">Статьи</a>
            <a href="#">Категории</a>
            <a href="#">Топ</a>
            <a href="#">Рекомендуюмое для меня</a>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            active: 'guide'
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display+SC');

* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
    font: normal 18px 'Open Sans', sans-serif;
    background: #fafafa;
    color: #333;
}

main {
    min-height: 50vh;
}



header {
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);


span {
    position: absolute;
    left: 0;
    margin: 10px 0 0 15px;
    font-size: 30px;
    }

    
    
    h1{
        font: normal 4em 'Playfair Display SC', serif;
        text-align:center;
    }

    nav {
        max-width: 800px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

        nav a {
            flex-grow: 1;
            text-align: center;
            padding: 1em;
            position: relative;
        }

        // animmation
        nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right:0;
            height: 2px;
            transform: scaleX(0);
            background: #333;
            transition: 0.7s transform cubic-bezier(0.06, 0.9, 0.28, 1);
        }

        nav a:hover::after{
            transform: scaleX(1)
        }
}
</style>