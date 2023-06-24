package config

type config struct {
	DatabaseURL string   `yaml:"databaseUrl"`
	Address     string   `yaml:"address"`
	AutoMigrate bool     `yaml:"autoMigrate"`
	Cors        []string `yaml:"cors"`
}
