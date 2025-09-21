<?php

namespace App\Repositories;

use App\Repositories\Interfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

abstract class BaseRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected Model $model,
    ) {}

    /**
     * Get records with optional where, order conditions and relationships.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function get(array $where = [], array $between = [], array $order = [], array $relationships = [], ?int $limit = null)
    {
        $query = $this->model->newQuery();

        if (! empty($relationships)) {
            $query->with($relationships);
        }

        foreach ($where as $column => $value) {
            $query->where($column, $value);
        }

        foreach ($between as $column => [$from, $to]) {
            $query->whereBetween($column, [$from, $to]);
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

    public function firstOrFail(array $where, array $relationships = []): ?Model
    {
        return $this->model->where($where)->with($relationships)->firstOrFail();
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

    public function search(string $text): Collection
    {
        return $this->model->search($text)->get();
    }
}
