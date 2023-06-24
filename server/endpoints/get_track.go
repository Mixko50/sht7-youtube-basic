package endpoints

import (
	"github.com/gofiber/fiber/v2"
	"server/database"
	"server/types/based_response"
	"server/utils/value"
)

func GetTrack(c *fiber.Ctx) error {
	id := c.Params("id")

	if id == "" {
		return c.Status(fiber.StatusInternalServerError).JSON(based_response.ErrorResponse("id is required"))
	}

	var ads *database.Ads
	if err := database.DB.First(&ads, "id = ?", id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(based_response.ErrorResponse(err.Error))
	}

	if err := database.DB.Model(&ads).Update("count", *ads.Count+1); err.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(based_response.ErrorResponse(err.Error))
	}

	return c.JSON(based_response.SuccessResponse(based_response.MessageResponse{
		Message: value.Ptr("Success"),
	}))
}
