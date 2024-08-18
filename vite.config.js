import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Reactを使用する場合のプラグイン

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/ts/index.tsx',   // TypeScriptファイル
                'resources/sass/app.scss', // Sassファイル
            ],
            refresh: true,
        }),
        react(),  // Reactを使用する場合
    ],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: ({ name }) => {
                    if (/\.(css)$/.test(name ?? '')) {
                        return 'css/[name].[ext]';
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
        outDir: 'public', // 出力ディレクトリをpublicに設定
        emptyOutDir: false, // 出力ディレクトリを空にしない
    },
});
