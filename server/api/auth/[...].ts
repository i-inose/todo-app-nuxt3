import { NuxtAuthHandler } from "#auth"
import GithubProvider from "next-auth/providers/github"

export default NuxtAuthHandler({
	pages: {
		signin: "/login",
	},
	providers: [
		GithubProvider.default({
			clientId: "Ov23liOzLak1DA768ZEP",
			clientSecret: "079e250f8f1cfbc76ab15798c1cb658acbccfbc1"
		})
	]
})
