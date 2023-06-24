package fiber

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"server/utils/config"
)

func Cors() fiber.Handler {
	origins := ""
	for i, s := range config.C.Cors {
		origins += s
		if i < len(config.C.Cors)-1 {
			origins += ", "
		}
	}

	return cors.New(cors.Config{
		AllowOrigins:     origins,
		AllowCredentials: true,
		AllowMethods:     "GET",
	})
}
