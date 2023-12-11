<script lang="ts">
    import { currentUser } from "$lib/pocketbase";
    import { applyAction, enhance } from "$app/forms";

    // Any other script logic that is specifically related to user actions
</script>

<div class="user-actions">
    {#if $currentUser}
        <p class="user-info">Logged in as {$currentUser.email}</p>
        <form class="logout-form" method="POST" action="/Logout" use:enhance>
            <button class="logout-button">Log out</button>
        </form>
    {:else}
        <p class="user-info">Guest User</p>
    {/if}
</div>

<style>

.user-actions {
        position: fixed;
        bottom: 10px;
        left: 10px;
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 5px;
        z-index: 1000;
    }

.user-info {
    margin: 0;
    font-weight: bold;
}

.logout-form {
    margin-top: 10px;
}

.logout-button {
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.logout-button:hover {
    background-color: #d32f2f;
}

</style>