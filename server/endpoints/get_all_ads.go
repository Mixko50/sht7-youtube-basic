package endpoints

import (
	"github.com/gofiber/fiber/v2"
	"server/database"
	"server/types"
	"server/types/based_response"
	"server/utils/value"
	"sync"
)

func GetAllAds(c *fiber.Ctx) error {

	wg := sync.WaitGroup{}
	wg.Add(3)

	var skyscraperAds []*database.Ads
	go func() error {
		if err := database.DB.Find(&skyscraperAds, "ads_type = ?", "skyscraper").Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(based_response.BasedResponse[based_response.MessageResponse]{
				Success: value.Ptr(false),
				Data: &based_response.MessageResponse{
					Message: value.Ptr("Unable to get skyscraper ads"),
				},
			})
		}

		defer wg.Done()
		return nil
	}()

	var leaderboardAds []*database.Ads
	go func() error {
		if err := database.DB.Find(&leaderboardAds, "ads_type = ?", "leaderboard").Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(based_response.BasedResponse[based_response.MessageResponse]{
				Success: value.Ptr(false),
				Data: &based_response.MessageResponse{
					Message: value.Ptr("Unable to get leaderboard ads"),
				},
			})
		}

		defer wg.Done()
		return nil
	}()

	var largeRectangleAds []*database.Ads
	go func() error {
		if err := database.DB.Find(&largeRectangleAds, "ads_type = ?", "large_rectangle").Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(based_response.BasedResponse[based_response.MessageResponse]{
				Success: value.Ptr(false),
				Data: &based_response.MessageResponse{
					Message: value.Ptr("Unable to get large_rectangle ads"),
				},
			})
		}

		defer wg.Done()
		return nil
	}()

	wg.Wait()

	return c.JSON(based_response.BasedResponse[types.AdsResponse]{
		Success: value.Ptr(true),
		Data: &types.AdsResponse{
			SkyScraperAds:     skyscraperAds,
			LeaderboardAds:    leaderboardAds,
			LargeRectangleAds: largeRectangleAds,
		},
	})
}
