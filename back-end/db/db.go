package db

import "github.com/go-pg/pg/v10"

func Connect(addr, user, pass, database string) (db *pg.DB) {
	db = pg.Connect(&pg.Options{
		Addr: addr,
		User: user,
		Password: pass,
		Database: database,
	})

	return
}