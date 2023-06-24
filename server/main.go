package main

import (
	"server/database"
	"server/fiber"
	"server/utils/config"
)

func main() {
	// Read config
	config.Init()

	// Init database
	database.Init()

	// Init fiber
	fiber.Init()
}
