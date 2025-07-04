import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';

function getGitHash(short: boolean = false): string {
	try {
		return execSync(`git rev-parse ${short ? "--short" : ""} HEAD`, { encoding: 'utf8' }).trim();
	} catch (error) {
		console.warn('Could not get git hash:', error);
		return 'unknown';
	}
}

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__GIT_HASH_SHORT__: JSON.stringify(getGitHash(true)),
		__GIT_HASH_LONG__: JSON.stringify(getGitHash(false))
	}
});
