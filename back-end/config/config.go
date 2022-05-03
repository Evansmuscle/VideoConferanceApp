package config

import (
	"os"
)

type config struct {
	Addr     string
	User     string
	Password string
	Database string
}

func NewConfig() *config {
	cfg := config{
		Addr:     os.Getenv("Addr"),
		User:     os.Getenv("User"),
		Password: os.Getenv("Password"),
		Database: os.Getenv("Database"),
	}
	
	return &cfg
}