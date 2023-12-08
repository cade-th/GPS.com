<script lang="ts">
    import { currentUser , pb } from '../pocketbase';

    let userEmail: string;
    let password: string;

    async function login() {
        await pb.collection('users').authWithPassword(userEmail,password);
    }

    async function signUp() {
        try {
            const data = {
                userEmail,
                password,
                passwordConfirm: password,
                name: 'hi mom!',
            };
            const createdUser = await pb.collection('users').create(data);
            await login();
        } catch(err) {
            //handle error
        }
    }

</script>

{#if $currentUser }
    <h1>You're Logged in</h1>
{:else}


    <form  class="login-form" on:submit|preventDefault>

        <p1>
            Already have an Account? Sign in
        </p1>

        <input
            placeholder="Email"
            type="Email"
            bind:value={userEmail}
        />

        <input
            placeholder="Password"
            type="password"
            bind:value={password}
        />

        <input
            placeholder="Retype Password"
            type="Retype Password"
            bind:value={password}
        />
        <button on:click={signUp}> Make Account</button>
        
    </form>

{/if}

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .login-form input {
        margin: 10px 0;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #333;
        color: white;
        width: 200px;
    }

    .login-form input::placeholder {
        color: #aaa;
    }

    .login-form button {
        margin: 5px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #555;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 10px;
    }

    .login-form button:hover {
        background-color: #777;
    }

    h1 {
        text-align: center;
        color:white;
        font-size: xx-large;
    }

    p1 {
        text-align: center;
        color: white;
        margin-bottom: 10px;
    }
</style>
