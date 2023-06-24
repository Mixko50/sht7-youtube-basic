package config

import (
	"gopkg.in/yaml.v3"
	"io/ioutil"
)

var C = new(config)

func Init() {
	// Load YAML configuration
	yml, err := ioutil.ReadFile("config.yaml")
	if err != nil {
		panic("UNABLE TO READ YAML CONFIGURATION FILE")
	}
	err = yaml.Unmarshal(yml, C)
	if err != nil {
		panic("UNABLE TO PARSE YAML CONFIGURATION FILE")
	}
}
