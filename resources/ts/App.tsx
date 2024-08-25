import React from "react";
import Router from "./router";
// useQueryを使う際は親コンポーネントでQueryClientの設定を行う
// 取得したデータをキャッシュしたり、サーバー上のデータと同期することができるらしい
// useEffectを使わなくてもいけそうなので、これで実装する！
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
    // react-queryの初期設定
    const queryClient = new QueryClient({
        defaultOptions: {
            // エラー時に何回再取得するか
            queries: {
                retry: false // 無効
            },
            // データを更新するときに使用する
            mutations: {
                retry: false
            }
        }
    })
    return(
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
};

export default App;
