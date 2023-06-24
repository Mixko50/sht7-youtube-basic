package fiber

import (
	"github.com/gofiber/fiber/v2"
	"server/types/based_response"
	"server/utils/value"
)

func errorResponse(c *fiber.Ctx, err error) error {
	// * Case of *fiber.Error.
	if err, ok := err.(*fiber.Error); ok {
		return c.Status(err.Code).JSON(based_response.BasedResponse[based_response.MessageResponse]{
			Success: value.Ptr(false),
			Data: &based_response.MessageResponse{
				Message: value.Ptr(err.Message),
			},
		})
	}

	return c.Status(fiber.StatusInternalServerError).JSON(based_response.BasedResponse[based_response.MessageResponse]{
		Success: value.Ptr(false),
		Data: &based_response.MessageResponse{
			Message: value.Ptr("Internal Server Error"),
		},
	})
}
