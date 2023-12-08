<script>
    import { currentUser , pb } from '../pocketbase';

    function signOut() {
        pb.authStore.clear();
    }

    $: isLoggedIn = $currentUser === null? false : true;

</script>

{#if $currentUser }
    <div class="logout-container">
        <p class="state">Logged in as {$currentUser.username}: </p> 
        <button class="sign-out" on:click={signOut}>Sign Out</button>
    </div>
    
{:else}
   <p class="state"></p>
{/if}

<slot></slot>

<style>
    .state {
        
        color:white;
        font-size: large;
        font-weight: bolder;
        
    }



    .sign-out {
        margin-top:20px;
        background: black;
        color: white;
    }

    .sign-out:hover {
        background-color: rgb(95, 89, 89);
    }
</style>