import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string;
            password: string;
        };

        console.log("Login data:", data);

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (e) {
            console.error("Login error:", e);
            throw e;
        }

        throw redirect (303, '/');
        
    }
}