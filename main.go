package main

import (
    "github.com/kataras/iris"
    "github.com/kataras/iris/context"
)

func main() {
    app := iris.New()
    app.Get("/", func(ctx context.Context){
        ctx.WriteString("hi")
    })
    app.Run(iris.Addr(":8010"))
}