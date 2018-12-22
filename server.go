package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
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
	r.HandleFunc("/allMoviesWithInfo", getAllMoviesWithInfo)
	r.HandleFunc("/movieNames", getMoviesNames)
	r.HandleFunc("/movie/{id}", getMovieInfo)
	r.HandleFunc("/addNewMovie", addNewMovie)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./client/dist")))
	log.Fatal(http.ListenAndServe(":3000", r))
}

func getFile() []byte {
	file, e := ioutil.ReadFile("./movies.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	return file
}

func getAllMoviesWithInfo(w http.ResponseWriter, r *http.Request) {
	file := getFile()
	w.Header().Set("Content-Type", "application/json")
	w.Write(file)
}

func getMoviesNames(w http.ResponseWriter, r *http.Request) {
	file := getFile()
	value := gjson.Get(string(file), "Database.#.name")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(value.String()))
}

func getMovieInfo(w http.ResponseWriter, r *http.Request) {
	file := getFile()
	value := gjson.Get(string(file), "Database.#[id=="+mux.Vars(r)["id"]+"]")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(value.String()))
}

func addNewMovie(w http.ResponseWriter, r *http.Request) {
	file := getFile()
	b, _ := ioutil.ReadAll(r.Body)
	json.Marshal(b)

	value, _ := sjson.Set(string(file), "Database.-1", b)
	println(value)

	e := ioutil.WriteFile("./movies.json", []byte(value), 0644)
	if e != nil {
		w.Write([]byte("Appending faild"))
		os.Exit(1)
	}
	getAllMoviesWithInfo(w, r)
}
