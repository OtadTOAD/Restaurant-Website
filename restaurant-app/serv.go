package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

// Angular bundles have hashed filenames; copied assets use a content hash in ?v=.
// HTML and unversioned files revalidate on every visit.
var hashedBundle = regexp.MustCompile(`^/[^/]+-[0-9A-Z]{8}\.(js|css)$`)
var assetVersion = regexp.MustCompile(`^[0-9a-f]{16}$`)

func main() {
	// Folder where your SPA build is located
	publicDir := "./dist/restaurant-app/browser/"

	fs := http.FileServer(http.Dir(publicDir))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(publicDir, filepath.FromSlash(strings.TrimPrefix(r.URL.Path, "/")))
		if info, err := os.Stat(path); err == nil && !info.IsDir() {
			if hashedBundle.MatchString(r.URL.Path) ||
				(strings.HasPrefix(r.URL.Path, "/assets/") && assetVersion.MatchString(r.URL.Query().Get("v"))) ||
				(r.URL.Path == "/icon.png" && assetVersion.MatchString(r.URL.Query().Get("v"))) {
				w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
			} else {
				w.Header().Set("Cache-Control", "no-cache")
			}
			fs.ServeHTTP(w, r)
			return
		}

		// Serve the SPA for client-side routes, but keep missing assets as 404s.
		w.Header().Set("Cache-Control", "no-cache")
		if filepath.Ext(r.URL.Path) != "" {
			http.NotFound(w, r)
			return
		}
		http.ServeFile(w, r, filepath.Join(publicDir, "index.html"))
	})

	port := "65000"
	log.Printf("Serving SPA on http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
