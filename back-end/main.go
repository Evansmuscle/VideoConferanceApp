package main

import (
	"back-end/config"
	"back-end/db"

	"github.com/gin-gonic/gin"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/extra/bundebug"
)

func initApi() (*bun.DB, *gin.Engine) {
	cfg := config.NewConfig()
	database := db.Connect(cfg.URI)
	r := gin.Default()
	
	database.AddQueryHook(bundebug.NewQueryHook(
		bundebug.WithVerbose(true),
		bundebug.FromEnv("BUNDEBUG"),
	))
	
	return database, r
}

func main() {
	_, r := initApi()
	
	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "pong",
		})
	})
	
	r.POST("/writeTest", func(ctx *gin.Context) {
		//
	})
	
	r.Run()
}