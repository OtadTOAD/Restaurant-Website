package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	// Folder where your SPA build is located
	publicDir := "./dist/restaurant-app/browser/"

	fs := http.FileServer(http.Dir(publicDir))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(publicDir, r.URL.Path)

		// If the file exists, serve it
		if info, err := os.Stat(path); err == nil && !info.IsDir() {
			fs.ServeHTTP(w, r)
			return
		}

		// Otherwise serve index.html for SPA routing
		http.ServeFile(w, r, filepath.Join(publicDir, "index.html"))
	})

	port := "65000"
	log.Printf("Serving SPA on http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
