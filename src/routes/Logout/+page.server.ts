import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { currentUser } from "$lib/pocketbase";

export const actions: Actions = {
    default: async ({ locals, request}) => {
        console.log("Executing logout");
        locals.pb.authStore.clear();
        locals.user = null;
        currentUser.set(null);
        throw redirect(303, '/');
    }
}