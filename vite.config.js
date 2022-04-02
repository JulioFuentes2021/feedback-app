import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	base: "feedback-app/",
	plugins: [react()],
	resolve: {
		alias: {
			'@AddAndUpdateFeedback': path.resolve(__dirname, './src/components/AddAndUpdateFeedback'),
			'@AddFeedbackBar': path.resolve(__dirname, './src/components/AddFeedbackBar'),
			'@Comments': path.resolve(__dirname, './src/components/Comments'),
			'@FeedbackCard': path.resolve(__dirname, './src/components/FeedbackCard'),
			'@Header': path.resolve(__dirname, './src/components/Header'),
			'@LoginAndRegister': path.resolve(__dirname, './src/components/LoginAndRegister'),
			'@Status': path.resolve(__dirname, './src/components/Status'),
			'@Utilities': path.resolve(__dirname, './src/components/Utilities'),
			'@Axios': path.resolve(__dirname, './src/Axios'),
			'@redux': path.resolve(__dirname, './src/redux'),
			'@images': path.resolve(__dirname, './src/images'),
		}
	},
	server: {
		// proxy: {
		// 	'http://localhost:3000': {
		// 		target: 'http://localhost:5000',
		// 		changeOrigin: true,
		// 		// 			// rewrite: (path) => path.replace(/^\/  http://localhost:3000  /, '')
		// 	},
		// }
	}
});
