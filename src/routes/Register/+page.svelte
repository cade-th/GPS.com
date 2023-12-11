<script lang="ts">
    import { page } from '$app/stores';

    let email = '';
    let password = '';
    let passwordConfirm = '';
    let error: string = '';

    // Reactive declaration
    $: {
        if ($page.error) {
            error = $page.error.message;
        }
    }
</script>

<div class="form-container">
    <h2 class="register-title">
        Register for an account
    </h2>
    <p class="already-registered">
        Or <a href="/Login" class="sign-in-link">sign in</a> if you already have an account.
    </p>

    {#if error}
        <p class="error-message">{error}</p>
    {/if}
    
    <form method="POST" action="/Register?register">
        <div class="form-group">
            <label for="email" class="form-label">
                Email
            </label>
            <input type="email" bind:value={email} class="form-input" name="email" required />
        </div>

        <div class="form-group">
            <label for="password" class="form-label">
                Password
            </label>
            <input type="password" bind:value={password} class="form-input" name="password" required />
        </div>

        <div class="form-group">
            <label for="passwordConfirm" class="form-label">
                Confirm Password
            </label>
            <input type="password" bind:value={passwordConfirm} class="form-input" name="passwordConfirm" required />
        </div>

        <div class="form-group">
            <button type="submit" class="submit-button">Register</button>
        </div>
    </form>
</div>

<style>
    .form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin-top:200px;
    }

    .register-title, .already-registered {
        margin-bottom: 20px;
        color: #333;
    }

    .sign-in-link {
        color: #0066cc;
        text-decoration: none;
    }

    .sign-in-link:hover {
        text-decoration: underline;
    }

    .form-group {
        margin-bottom: 15px;
        text-align: left;
    }

    .form-label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }

    .form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .submit-button {
        width: 100%;
        padding: 10px 15px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
    }

    .submit-button:hover {
        background-color: #218838;
    }

    .error-message {
        color: red;
        margin-bottom: 15px;
    }
</style>

