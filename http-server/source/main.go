package main

import (
	"fmt"
	"log"
	"net/http"
)

func root(w http.ResponseWriter, _ *http.Request) {
	log.Println("This is the root path")
	_, err := fmt.Fprintf(w, "hello\n")
	if err != nil {
		log.Fatal("can't write response")
	}
}

func main() {
	http.HandleFunc("/", root)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("can't start source")
	}
}
