package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		c.Response().Header().Set("Access-Control-Allow-Origin", "*")
		return c.String(http.StatusOK, "Hello World!")
	})

	e.Logger.Fatal(e.Start(":8000"))
}
