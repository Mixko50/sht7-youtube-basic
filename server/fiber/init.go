package fiber

import (
	"github.com/gofiber/fiber/v2"
	"server/endpoints"
	"server/utils/config"
)

func Init() {
	// Default config
	app := fiber.New(fiber.Config{
		CaseSensitive: false,
		ErrorHandler:  errorResponse,
		AppName:       "Stupid Hackathon 7 - Youtube Basic",
	})

	// Router
	app.Get("api/ads", endpoints.GetAllAds)

	// Listen
	app.Listen(config.C.Address)
}
