import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [UnoCSS()],
	esbuild: {
		jsxImportSource: "webjsx",
	},
})
