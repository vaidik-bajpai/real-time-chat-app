package main

import (
	"fmt"
	"net/http"

	"github.com/vaidik-bajpai/chat-app/pkg/websocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Websocket Endpoint")

	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	pool := websocket.NewPool()
	go pool.Start()

	mux.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})

	return mux
}
func main() {
	fmt.Println("Vaidik's full stack project")
	srv := http.Server{
		Addr:    ":3000",
		Handler: setupRoutes(),
	}

	srv.ListenAndServe()
}
