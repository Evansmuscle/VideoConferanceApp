package config

import (
	"os"

	"github.com/golobby/dotenv"
)

type Config struct {
	URI     string `env:"URI"`
}

func NewConfig() *Config {
	file, err := os.Open(".env")
	cfg := Config{}
	
	if err != nil {
		panic(err)
	}
	
	err = dotenv.NewDecoder(file).Decode(&cfg)
	
	if err != nil {
		panic(err)
	}
	
	return &cfg
}