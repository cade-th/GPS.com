<script lang="ts">

    let sidebarShown = true;

</script>

<nav>
    <ul class="sidebar" class:hidden={!sidebarShown}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={() => sidebarShown = true}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#ffffff">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/Dashboard">Dashboard</a></li>
        <li><a href="/Map">Map</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Planning">Planning</a></li>
        <li><a class="loginLink" href="/Login">Sign Up</a></li>
    </ul>
    <ul>
        <li ><a class="logo-Link" href="/">GPS.com </a></li>
        <li class="hideOnMobile"><a href="/About">About Us</a></li>
        <li class="hideOnMobile"><a href="/Dashboard">Dashboard</a></li>
        <li class="hideOnMobile"><a href="/Map">Map</a></li>
        <li class="hideOnMobile"><a href="/Services">Services</a></li>
        <li class="hideOnMobile"><a href="/Planning">Planning</a></li>
        <li class="hideOnMobile"><a class="loginLink" href="/Login">Sign Up</a></li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="menu-button"  on:click={() => sidebarShown = !sidebarShown}><a class="menu-Link"href="/"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#ffffff">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
    </ul>
</nav>


<style>
    nav {
        background-color: black;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
        
    }

    nav ul {
        width: 100%;
        list-style:none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav li {
        height: 50px;
    }

    nav a {
        height: 100%;
        padding: 0 30px;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: white;
        border-radius: 10px;
        
    }

    .logo-Link {
        font-size: xx-large;
        margin-top: 10px
    }

    nav a:hover {
        background-color: rgb(27, 133, 30);
        margin-top: 15px;
        font-weight: bolder;
       
    }

    .logo-Link:hover {
        
        background-color: black;
    }

    .menu-Link:hover {
        margin-top:0px
    }

    .loginLink:hover {
        margin-top:0px;
        background-color:rgb(17, 55, 205);
    }

    nav li:first-child {
        margin-right: auto;
    }


    .sidebar {
        position:fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 250px;
        z-index: 999;
        background-color: black;
        backdrop-filter: blur(10px);
        box-shadow: -10px 0px 10px rgba(0,0,0,0.1);
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

   

    .sidebar li {
        width: 100%;
    }

    .sidebar a {
        width:100%;
    }

    .hidden {
        display:flex
    }

    .menu-button {
        display: none;
    }

    

    @media(max-width: 950px) {
        .hideOnMobile {
            display: none;
        }

        .menu-button {
            display: block;
        }

    }

    @media(max-width: 400px) {
        .sidebar {
            width:100%;
        }
    }

</style>