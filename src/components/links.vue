<template>
    <header class="header">
            <div class="header_container">
                <div class="header_body">
                    <nav class="header_nav">
                        <RouterLink class="page_1" to="/first">FirstUser</RouterLink>
                        <RouterLink class="page_2" to="/second">SecondUser</RouterLink>
                    </nav>
                </div>
            </div>
        </header>
    </template>


<script>
    export default{}
</script>


<style scoped>
* {
    font-family:  sans-serif;
}
.header {
    background-color: #15172b;
}
.header_container {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1200px;
}
.header_body {
    display: flex;
    justify-content: space-between;
    background-color: #15172b;
    padding: 10px 0;
    margin:auto
}
.header_nav {
    display: flex;
    align-items: center;
    font-size: 40px;
    margin: auto;
}

.page_1 {
    font-size: 50px;
    color: aliceblue;
    text-decoration: none;
}
.page_2 {
    margin-left: 50px;
    font-size: 50px;
    text-decoration: none;
    color: aliceblue;
}
</style>
