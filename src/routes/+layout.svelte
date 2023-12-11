<script lang="ts">
    import Header from "../lib/components/header.svelte";
    import "../css/global.css";
	import UserActions from "$lib/components/useractions.svelte";

    function handleLogout() {
        // Full-page reload after the form is submitted
        window.location.reload();
        
    }

</script>

<div class="header-container">
    <Header />
</div>

<div class="background-container">
    <div class="content"> 
        <slot></slot>
    </div>

    <UserActions />
    
</div>

<style>
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
