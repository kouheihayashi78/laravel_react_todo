<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Task一覧を返す
     *
     * @return \Illuminate\Support\Collection
     */
    public function index()
    {
        // Laravelではそのままreturnするだけでjsonに変換する
        return Task::orderByDesc('id')->get(); // 降順で取得

    }

    /**
     * Taskを登録する
     *
     * @param Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $task = Task::create($request->all());
        return $task
            ? response()->json($task, 200)
            : response()->json([], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * タスクを更新する
     *
     * @param Request $request
     * @param Task $task
     * @return Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Task $task)
    {
        $task->title = $request->title;

        return $task->update()
            ? response()->json($task)
            : response()->json([], 500);
    }

    /**
     * タスクを削除する
     *
     * @param Task $task
     * @return Illuminate\Http\JsonResponse
     */
    public function destroy(Task $task)
    {
        return $task->delete()
            ? response()->json($task)
            : response()->json([], 500);
    }
}
