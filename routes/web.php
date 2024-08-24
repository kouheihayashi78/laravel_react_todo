<?php

use Illuminate\Support\Facades\Route;

// 全てのアクセスでindexが読み込まれる
Route::get('{all}', function () {
    return view('index');
})->where(['all' => '.*']);
