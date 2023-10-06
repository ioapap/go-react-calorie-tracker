package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Entry struct {
	ID          primitive.ObjectID `bson:"id"`
	Dish        *string            `json:"dish"`
	Protein     *float64           `json:"protein"`
	Carbs       *float64           `json:"carbs"`
	Fat         *float64           `json:"fat"`
	Ingredients *string            `json:"ingredients"`
	Calories    *string            `json:"calories"`
}
