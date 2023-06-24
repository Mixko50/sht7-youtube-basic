package based_response

import "server/utils/value"

type BasedResponse[T any] struct {
	Success *bool `json:"success"`
	Data    *T    `json:"data"`
}

func ErrorResponse(t any) BasedResponse[any] {
	return BasedResponse[any]{
		Success: value.Ptr(false),
		Data:    &t,
	}
}

func SuccessResponse(t any) BasedResponse[any] {
	return BasedResponse[any]{
		Success: value.Ptr(true),
		Data:    &t,
	}
}
