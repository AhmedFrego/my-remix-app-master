/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	serverModuleFormat: "cjs",
	serverDependenciesToBundle: ["@raphiniert/ra-data-postgrest"],
};
