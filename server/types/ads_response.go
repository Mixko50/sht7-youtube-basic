package types

import "server/database"

type AdsResponse struct {
	SkyScraperAds     []*database.Ads `json:"skyscraper_ads"`
	LeaderboardAds    []*database.Ads `json:"leaderboard_ads"`
	LargeRectangleAds []*database.Ads `json:"large_rectangle_ads"`
}
