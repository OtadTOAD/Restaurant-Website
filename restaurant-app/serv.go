package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
)

// Angular bundles like main-5FOEO5O6.js carry a content hash in the name,
// so they can be cached forever; everything else must revalidate (cheap 304s).
var hashedBundle = regexp.MustCompile(`^/[^/]+-[0-9A-Z]{8}\.(js|css)$`)

func main() {
	// Folder where your SPA build is located
	publicDir := "./dist/restaurant-app/browser/"

	fs := http.FileServer(http.Dir(publicDir))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if hashedBundle.MatchString(r.URL.Path) {
			w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		} else {
			w.Header().Set("Cache-Control", "no-cache")
		}

		path := filepath.Join(publicDir, r.URL.P