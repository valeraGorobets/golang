package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/tidwall/gjson"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type databaseObject struct {
	Database []movieType `json:"Database`
}

type movieType struct {
	id    *int    `json:"id"`
	name  *string `json:"name"`
	year  *int    `json:"year"`
	genre *string `json:"genre"`
}

func main() {
	r := mux.NewRouter()
	// r.HandleFunc("/video", getAllMoviesWithInfo)
	// r.HandleFunc("/video", getMoviesNames)
	// r.HandleFunc("/video/{id}", getMovieInfo)
	r.HandleFunc("/addNewMovie", addNewMovie)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./client/dist")))
	log.Fatal(http.ListenAndServe(":3000", r))
}

func getAllMoviesWithInfo(w http.ResponseWriter, r *http.Request) {
	file, e := ioutil.ReadFile("./movies.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	// fmt.Printf("%s\n", string(file))
	w.Header().Set("Content-Type", "application/json")
	w.Write(file)
}

func getMoviesNames(w http.ResponseWriter, r *http.Request) {
	file, e := ioutil.ReadFile("./movies.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}

	value := gjson.Get(string(file), "Database.#.name")

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(value.String()))
}

func getMovieInfo(w http.ResponseWriter, r *http.Request) {
	file, e := ioutil.ReadFile("./movies.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	value := gjson.Get(string(file), "Database.#[id=="+mux.Vars(r)["id"]+"]")

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(value.String()))
}

func addNewMovie(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Added new Movie")
	var m movieType
	b, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(b, &m)
	fmt.Printf(string(b))
	j, _ := json.Marshal(m)
	fmt.Printf(string(j))
	w.Write(j)
}
