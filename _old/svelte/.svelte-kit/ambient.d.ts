
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const WINDOWID: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const NVIM: string;
	export const DRONE_SERVER: string;
	export const READER: string;
	export const I3SOCK: string;
	export const PIPENV_SKIP_LOCK: string;
	export const NODE: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const ANSIBLE_HASHI_VAULT_ADDR: string;
	export const OPENER: string;
	export const DOTNET_ROOT: string;
	export const FLYCTL_INSTALL: string;
	export const AWS_PROFILE: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const npm_config_globalconfig: string;
	export const CLOUDSDK_PYTHON_ARGS: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_init_module: string;
	export const GPG_AGENT_INFO: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const DESKTOP_STARTUP_ID: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const DRONE_AUTOSCALER: string;
	export const WINDOWPATH: string;
	export const MOTD_SHOWN: string;
	export const LD_PRELOAD: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const npm_package_version: string;
	export const RTV_BROWSER: string;
	export const CLOUDSDK_ROOT_DIR: string;
	export const INVOCATION_ID: string;
	export const INIT_CWD: string;
	export const DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
	export const npm_lifecycle_script: string;
	export const CLOUDSDK_PYTHON: string;
	export const NVM_DIR: string;
	export const XDG_SESSION_CLASS: string;
	export const PIPENV_MAX_DEPTH: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_mb: string;
	export const ZSH: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const npm_config_prefix: string;
	export const GOOGLE_CLOUD_SDK_HOME: string;
	export const USER: string;
	export const VAULT_ADDR: string;
	export const COLORFGBG: string;
	export const MANPAGER: string;
	export const PYTHON_KEYRING_BACKEND: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const LESS_TERMCAP_ue: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const LESS_TERMCAP_us: string;
	export const PAGER: string;
	export const PIPENV_SPINNER: string;
	export const LC_MESSAGES: string;
	export const DRONE_TOKEN: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const PIPENV_DEFAULT_PYTHON_VERSION: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const ZSHRC: string;
	export const MOZ_PLUGIN_PATH: string;
	export const LC_CTYPE: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_json: string;
	export const BUN_INSTALL: string;
	export const TMOUT: string;
	export const LFS: string;
	export const BASTION_USER: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const GITLAB_TOKEN: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_config_global_prefix: string;
	export const NVM_BIN: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const PIPENV_DOTENV_LOCATION: string;
	export const OLDPWD: string;
	export const GOPATH: string;
	export const GITLAB_URI: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		WINDOWID: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_cache: string;
		LESS: string;
		NVIM: string;
		DRONE_SERVER: string;
		READER: string;
		I3SOCK: string;
		PIPENV_SKIP_LOCK: string;
		NODE: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		ANSIBLE_HASHI_VAULT_ADDR: string;
		OPENER: string;
		DOTNET_ROOT: string;
		FLYCTL_INSTALL: string;
		AWS_PROFILE: string;
		COLOR: string;
		npm_config_local_prefix: string;
		npm_config_globalconfig: string;
		CLOUDSDK_PYTHON_ARGS: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		npm_config_init_module: string;
		GPG_AGENT_INFO: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		DESKTOP_STARTUP_ID: string;
		FZF_DEFAULT_COMMAND: string;
		DRONE_AUTOSCALER: string;
		WINDOWPATH: string;
		MOTD_SHOWN: string;
		LD_PRELOAD: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		npm_package_version: string;
		RTV_BROWSER: string;
		CLOUDSDK_ROOT_DIR: string;
		INVOCATION_ID: string;
		INIT_CWD: string;
		DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
		npm_lifecycle_script: string;
		CLOUDSDK_PYTHON: string;
		NVM_DIR: string;
		XDG_SESSION_CLASS: string;
		PIPENV_MAX_DEPTH: string;
		ANDROID_HOME: string;
		TERM: string;
		npm_package_name: string;
		LESS_TERMCAP_mb: string;
		ZSH: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		npm_config_prefix: string;
		GOOGLE_CLOUD_SDK_HOME: string;
		USER: string;
		VAULT_ADDR: string;
		COLORFGBG: string;
		MANPAGER: string;
		PYTHON_KEYRING_BACKEND: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		LESS_TERMCAP_ue: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		LESS_TERMCAP_us: string;
		PAGER: string;
		PIPENV_SPINNER: string;
		LC_MESSAGES: string;
		DRONE_TOKEN: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		PIPENV_DEFAULT_PYTHON_VERSION: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		ZSHRC: string;
		MOZ_PLUGIN_PATH: string;
		LC_CTYPE: string;
		XDG_RUNTIME_DIR: string;
		npm_package_json: string;
		BUN_INSTALL: string;
		TMOUT: string;
		LFS: string;
		BASTION_USER: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		GITLAB_TOKEN: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		FZF_DEFAULT_OPTS: string;
		npm_config_global_prefix: string;
		NVM_BIN: string;
		MAIL: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		PIPENV_DOTENV_LOCATION: string;
		OLDPWD: string;
		GOPATH: string;
		GITLAB_URI: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
