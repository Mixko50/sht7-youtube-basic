package based_response

type BasedResponse[T any] struct {
	Success *bool `json:"success"`
	Data    *T    `json:"data"`
}
