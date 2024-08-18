<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{
    // テスト実行時にデータベースがリセットされる
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function testList(): void
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response
        ->assertOk()
        ->assertJsonCount($tasks->count());
    }

    /**
     * A basic test example.
     */
    public function testCreate(): void
    {
        $data = [
            'title' => 'テスト投稿'
        ];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(200)
            ->assertJsonFragment($data); //レスポンス中のどこかに指定JSONデータが含まれていることを宣言
    }

    /**
     * A basic test example.
     */
    public function testUpdate()
    {
        $task = Task::factory()->create();
        $task->title = '書き換えしました。';
        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        $response
            ->assertOk()
            ->assertJsonFragment($task->toArray());
    }

    /**
     * A basic test example.
     */
    public function testDelete()
    {
        $task = Task::factory()->create();  // タスクを一つ作成

        $response = $this->deleteJson("api/tasks/{$task->id}");  // 作成したタスクのIDで削除リクエストを送信
        $response->assertStatus(200);

        $response = $this->getJson("api/tasks");
        $response->assertJsonCount(0);  // 残りのタスクが0になることを確認

    }
}
