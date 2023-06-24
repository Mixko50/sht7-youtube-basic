package fiber

import (
	"github.com/gofiber/fiber/v2"
	"server/types/based_response"
)

func errorResponse(c *fiber.Ctx, err error) error {
	// * Case of *fiber.Error.
	if err, ok := err.(*fiber.Error); ok {
		return c.Status(err.Code).JSON(based_response.ErrorResponse(err.Message))
	}

	return c.Status(fiber.StatusInternalServerError).JSON(based_response.ErrorResponse(err.Error()))
}
