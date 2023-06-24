package database

import (
	"time"
)

type Ads struct {
	Id        *uint64    `json:"id" gorm:"primary_key"`
	Name      *string    `json:"name" gorm:"type:varchar(255);not null"`
	ImageUrl  *string    `json:"image_url" gorm:"type:varchar(255);not null"`
	AdsType   *AdsType   `json:"ads_type" gorm:"type:enum('skyscraper', 'leaderboard', 'square', 'large_rectangle');not null"`
	Count     *uint64    `json:"count" gorm:"not null"`
	CreatedAt *time.Time `json:"created_at" gorm:"not null"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"not null"`
}

type AdsType string

const (
	Skyscraper     AdsType = "skyscraper"
	Leaderboard    AdsType = "leaderboard"
	Square         AdsType = "square"
	LargeRectangle AdsType = "large_rectangle"
)
