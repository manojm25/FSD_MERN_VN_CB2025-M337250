function downloadFile(filename, callback) {
  console.log("Downloading " + filename + "...");
  setTimeout(() => {
    callback();
  }, 2000);
}

function downloadComplete() {
  console.log("Download complete!");
}

// Function call
downloadFile("movie.mp4", downloadComplete);
