<script lang="ts">
    import Header from "../lib/components/header.svelte";
    import Logout from "../lib/components/logout.svelte";
    
    import "../css/global.css"

</script>

<div class="header-container">
    <Header />
</div>

<div class="background-container">
    <div class="content">
       
        <slot></slot>
        
    </div>

    <div class="logout-container">
        <Logout />
    </div>
</div>



<style>

    .logout-container {
        margin-left: 20px;
        margin-top:350px;
        position: fixed;
        z-index: 1000;
        
    }

    .background-container {
        background-image: url('../lib/images/world.webp');
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100vw;
    }

    .header-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000; /* Ensures the div stays above other content */
    }

    
</style>



