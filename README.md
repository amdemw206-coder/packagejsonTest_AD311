## Project Title: AD 311 Exploring package.json in Node.js
#### By: Amde Wubshet

### Breif Description: 
The purpose of this project is to understand the structure and functionality of package.json in a Node.js instance. 

### The Importance of Versioning: 
- The version field in your package.json is much more than just a label; it is a critical piece of metadata that tells the npm ecosystem how to handle your code. Without a version number, other developers and automated systems wouldn't know if they are using the stable release or a "work-in-progress" draft.

- Most JavaScript projects follow Semantic Versioning, often abbreviated as SemVer. It uses a three-part number system: MAJOR.MINOR.PATCH (e.g., 1.4.2).

#### Commands: 
go to your terminal (ensure you are inside your project folder) and run these commands to observe the output: 

- *npm start*: You should see the output of your index.js file, and then the process will end (returning you to the command prompt).

- *npm run dev*: The terminal will stay active. Try changing a console.log in your index.js and hitting Ctrl+S (Save). You’ll see the terminal message "restarting due to changes..." and your new output will appear automatically.

- *npm test*: The Jest dev dependency starts a "Search and Destroy" mission:
    - File Discovery: It scans your project for files ending in .test.js or .spec.js.
    - Environment Setup: It creates a "virtual" environment (usually based on Node.js or a mock browser) to run your code safely without affecting your actual system files.

    