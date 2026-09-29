const fs = require("fs");

console.log("Starting file operations...");

// CREATE FILE
fs.writeFile("sample.txt", "Hello Node.js!", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    // READ FILE
    fs.readFile("sample.txt", "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File Content:", data);

        // UPDATE FILE
        fs.appendFile("sample.txt", "\nThis is updated content.", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully");

            // DELETE FILE
            fs.unlink("sample.txt", (err) => {

                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("File deleted successfully");
            });
        });
    });
});