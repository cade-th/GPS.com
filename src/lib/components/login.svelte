<script lang="ts">
    import { currentUser , pb } from '../pocketbase';

    let userEmail: string;
    let password: string;

    async function login() {
        await pb.collection('users').authWithPassword(userEmail,password);
    }


</script>