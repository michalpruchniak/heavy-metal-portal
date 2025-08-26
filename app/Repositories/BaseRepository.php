<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    public function __construct(
        protected Model $model,
    ) {}

    /**
     * Get records with optional where, order conditions and relationships.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function get(array $where = [], array $order = [], array $relationships = [], ?int $limit = null)
    {
        $query = $this->model->newQuery();

        if (! empty($relationships)) {
            $query->with($relationships);
        }

        foreach ($where as $column => $value) {
            $query->where($column, $value);
        }

        foreach ($order as $column => $direction) {
            $query->orderBy($column, $direction);
        }
        if ($limit) {
            $query->limit($limit);
        }

        return $query->get();
    }

    /**
     * Creating a record.
     *
     * @param  array<string, mixed>  $data
     */
    public function create(array $data): ?Model
    {
        return $this->model->create($data);
    }

    /**
     * Find or fail record
     */
    public function findOrFail(int $id, array $relationships = []): ?Model
    {
        return $this->model->with($relationships)->findOrFail($id);
    }

    /**
     * Record update based on Model.
     *
     * @param  array<string, mixed>  $data
     */
    public function update(?Model $model, array $data): ?Model
    {
        if ($model) {
            $model->update($data);

            return $model;
        }

        return null;
    }

    /**
     * Delete record.
     */
    public function delete(?Model $model): ?bool
    {
        if ($model) {
            return $model->delete();
        }

        return null;
    }
}
