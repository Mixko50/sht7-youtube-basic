package fiber

import (
	"github.com/gofiber/fiber/v2"
	"server/utils/config"
)

func Init() {
	// Default config
	app := fiber.New(fiber.Config{
		CaseSensitive: false,
		ErrorHandler:  errorResponse,
		AppName:       "Stupid Hackathon 7 - Youtube Basic",
	})

	// * Router
	//app.Route("api/ads", router.Router)

	// * Listen
	app.Listen(config.C.Address)
}
