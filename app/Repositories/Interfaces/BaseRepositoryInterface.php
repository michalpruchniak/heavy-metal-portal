<?php

namespace App\Repositories\Interfaces;

use Illuminate\Database\Eloquent\Model;

interface BaseRepositoryInterface
{
    /**
     * Get records with optional where and order conditions.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function get(array $where = [], array $between = [], array $order = [], array $relationships = [], ?int $limit = null);

    /**
     * Creating a record.
     *
     * @param  array<string, mixed>  $data
     */
    public function create(array $data): ?Model;

    /**
     * Find or fail record
     */
    public function findOrFail(int $id, array $relationships = []): ?Model;

    public function firstOrFail(array $where, array $relationships = []): ?Model;

    /**
     * Record update based on Model.
     *
     * @param  array<string, mixed>  $data
     */
    public function update(?Model $model, array $data): ?Model;

    /**
     * Delete record.
     */
    public function delete(?Model $model): ?bool;
}
