package main

import (
	"myapp/migration"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type I map[string]interface{}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	migration.DBInit()

	e.GET("/", func(c echo.Context) error {
		c.Response().Header().Set("Access-Control-Allow-Origin", "*")
		return c.JSON(http.StatusOK, I{
			"msg": "Hello World!",
		})
	})

	// e.GET("/test", func(c echo.Context) error {
	// 	c.Response().Header().Set("Access-Control-Allow-Origin", "*")
	// 	return c.JSON(http.StatusOK, I{
	// 		"test": 200,
	// 	})
	// })

	e.Logger.Fatal(e.Start(":8000"))
}
