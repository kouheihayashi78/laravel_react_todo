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
    public function test(): void
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response
        ->assertOk()
        ->assertJsonCount($tasks->count());
    }
}
