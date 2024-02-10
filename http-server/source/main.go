package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type generic struct {
	foo    string
	bar    string
	foobar string
}

func root(w http.ResponseWriter, _ *http.Request) {
	log.Println("This is the root path")
	_, err := fmt.Fprintf(w, "hello\n")
	if err != nil {
		log.Fatal("can't write response")
	}
}

func memoryFlood(w http.ResponseWriter, _ *http.Request) {
	var persons []generic

	for i := 0; i < 1000000; i++ {
		log.Printf("Iteration: %v\n", i)
		persons = append(persons, generic{
			foo:    "Absocfdspi,fjeopzod,ndqskloazkdn,",
			bar:    "opreogkoerjg,ierongiorengreoingreklgnreklkgnrekl",
			foobar: "fjklfjndsjfndsljfndsljfndslkfndslknfeoijf'éàççjrfioepzùf,pezoijfj,fepzo,fklez",
		})
	}

	_, err := fmt.Fprintf(w, "done\n")
	if err != nil {
		log.Fatal("can't write response")
	}
}

func main() {
	log.SetOutput(os.Stdout)

	http.HandleFunc("/", root)
	http.HandleFunc("/flood", memoryFlood)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("can't start source")
	}
}
