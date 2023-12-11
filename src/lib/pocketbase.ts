
import PocketBase from 'pocketbase'
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://randomappgps.pockethost.io/');

export const currentUser = writable(pb.authStore.model);