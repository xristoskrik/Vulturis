// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: orders.sql

package database

import (
	"context"

	"github.com/google/uuid"
)

const createOrder = `-- name: CreateOrder :one
INSERT INTO orders (order_code, created_at, updated_at ,user_uuid ,complete_status)
VALUES (
    gen_random_uuid (),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    $1,
    $2
)
RETURNING order_code, created_at, updated_at, user_uuid, complete_status
`

type CreateOrderParams struct {
	UserUuid       uuid.UUID
	CompleteStatus string
}

func (q *Queries) CreateOrder(ctx context.Context, arg CreateOrderParams) (Order, error) {
	row := q.db.QueryRowContext(ctx, createOrder, arg.UserUuid, arg.CompleteStatus)
	var i Order
	err := row.Scan(
		&i.OrderCode,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserUuid,
		&i.CompleteStatus,
	)
	return i, err
}

const deleteOrderByID = `-- name: DeleteOrderByID :exec
delete from orders WHERE order_code = $1
`

func (q *Queries) DeleteOrderByID(ctx context.Context, orderCode uuid.UUID) error {
	_, err := q.db.ExecContext(ctx, deleteOrderByID, orderCode)
	return err
}

const deleteOrderByUser = `-- name: DeleteOrderByUser :exec
delete from orders WHERE user_uuid = $1
`

func (q *Queries) DeleteOrderByUser(ctx context.Context, userUuid uuid.UUID) error {
	_, err := q.db.ExecContext(ctx, deleteOrderByUser, userUuid)
	return err
}

const deleteOrders = `-- name: DeleteOrders :exec
delete  from orders
`

func (q *Queries) DeleteOrders(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, deleteOrders)
	return err
}

const getOrder = `-- name: GetOrder :one
SELECT order_code, created_at, updated_at, user_uuid, complete_status FROM orders WHERE $1 = orders.order_code
`

func (q *Queries) GetOrder(ctx context.Context, orderCode uuid.UUID) (Order, error) {
	row := q.db.QueryRowContext(ctx, getOrder, orderCode)
	var i Order
	err := row.Scan(
		&i.OrderCode,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserUuid,
		&i.CompleteStatus,
	)
	return i, err
}

const getOrderByUserID = `-- name: GetOrderByUserID :one
SELECT order_code, created_at, updated_at, user_uuid, complete_status FROM orders WHERE $1 = orders.user_uuid
`

func (q *Queries) GetOrderByUserID(ctx context.Context, userUuid uuid.UUID) (Order, error) {
	row := q.db.QueryRowContext(ctx, getOrderByUserID, userUuid)
	var i Order
	err := row.Scan(
		&i.OrderCode,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserUuid,
		&i.CompleteStatus,
	)
	return i, err
}

const updateOrder = `-- name: UpdateOrder :one
UPDATE orders
SET updated_at = NOW (), user_uuid = $1, complete_status = $2
WHERE order_code = $3
RETURNING order_code, created_at, updated_at, user_uuid, complete_status
`

type UpdateOrderParams struct {
	UserUuid       uuid.UUID
	CompleteStatus string
	OrderCode      uuid.UUID
}

func (q *Queries) UpdateOrder(ctx context.Context, arg UpdateOrderParams) (Order, error) {
	row := q.db.QueryRowContext(ctx, updateOrder, arg.UserUuid, arg.CompleteStatus, arg.OrderCode)
	var i Order
	err := row.Scan(
		&i.OrderCode,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserUuid,
		&i.CompleteStatus,
	)
	return i, err
}

const updateOrderStatus = `-- name: UpdateOrderStatus :one
UPDATE orders
SET updated_at = NOW (), complete_status = $1
WHERE order_code = $2
RETURNING order_code, created_at, updated_at, user_uuid, complete_status
`

type UpdateOrderStatusParams struct {
	CompleteStatus string
	OrderCode      uuid.UUID
}

func (q *Queries) UpdateOrderStatus(ctx context.Context, arg UpdateOrderStatusParams) (Order, error) {
	row := q.db.QueryRowContext(ctx, updateOrderStatus, arg.CompleteStatus, arg.OrderCode)
	var i Order
	err := row.Scan(
		&i.OrderCode,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserUuid,
		&i.CompleteStatus,
	)
	return i, err
}