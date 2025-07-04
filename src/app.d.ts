// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	
	// Global build-time constants
	const __GIT_HASH_SHORT__: string;
	const __GIT_HASH_LONG__: string;
}

export {};
