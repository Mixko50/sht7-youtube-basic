package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
	"server/utils/config"
)

var DB *gorm.DB

func Init() {
	sqlDB, err := gorm.Open(mysql.Open(config.C.DatabaseURL), &gorm.Config{
		Logger: logger.New(
			log.New(
				os.Stdout, "\r\n", log.LstdFlags),
			logger.Config{
				LogLevel:                  logger.Info,
				Colorful:                  true,
				IgnoreRecordNotFoundError: false,
			}),
	})
	if err != nil {
		panic("UNABLE TO OPEN DATABASE CONNECTION")
	}

	DB = sqlDB
}
