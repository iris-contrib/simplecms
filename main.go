package main

import "github.com/kataras/iris/v12"

func main() {
	app := iris.New()
	app.Get("/", func(ctx iris.Context) {
		ctx.WriteString("hi")
	})

	// app.HandleDir("/", "./web")
	app.Run(iris.Addr(":8010"))
}
