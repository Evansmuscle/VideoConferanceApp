package main

import (
	"back-end/config"
	"back-end/db"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v10"
)

type TestPerson struct {
	Name string
	Age string
}

func initApi() (*pg.DB, *gin.Engine) {
	conf := config.NewConfig()
	database := db.Connect(conf.Addr, conf.User, conf.Password, conf.Database)
	r := gin.Default()
	
	return database, r
}

func main() {
	db, r := initApi()
	
	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "pong",
		})
	})
	
	r.POST("/writeTest", func(ctx *gin.Context) {
		conn := db.Conn()
		defer conn.Close()
		
		person := &TestPerson{
			Name: "Test",
			Age: "Test",
		}
		
		_, err := conn.Model(person).Insert()
		
		if err != nil {
			panic(err)
		}
		
		ctx.JSON(200, gin.H{
			"status": "success",
			"person": person,
		})
	})
	
	r.Run()
}