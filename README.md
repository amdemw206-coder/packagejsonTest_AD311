## Project Title: AD 311 Exploring package.json in Node.js
#### By: Amde Wubshet

### Breif Description: 
The purpose of this project is to understand the structure and functionality of package.json in a Node.js instance. 

### Commands: 
go to your terminal (ensure you are inside your project folder) and run these commands to observe the output: 

- *npm start*: You should see the output of your index.js file, and then the process will end (returning you to the command prompt).

- *npm run dev*: The terminal will stay active. Try changing a console.log in your index.js and hitting Ctrl+S (Save). You’ll see the terminal message "restarting due to changes..." and your new output will appear automatically.

- *npm test*: The Jest dev dependency starts a "Search and Destroy" mission:
    - File Discovery: It scans your project for files ending in .test.js or .spec.js.
    - Environment Setup: It creates a "virtual" environment (usually based on Node.js or a mock browser) to run your code safely without affecting your actual system files.


### The Importance of Versioning: 
- The version field in your package.json is much more than just a label; it is a critical piece of metadata that tells the npm ecosystem how to handle your code. Without a version number, other developers and automated systems wouldn't know if they are using the stable release or a "work-in-progress" draft.

- Most JavaScript projects follow Semantic Versioning, often abbreviated as SemVer. It uses a three-part number system: MAJOR.MINOR.PATCH (e.g., 1.4.2). When you look at your dependencies list, you’ll rarely see just a raw number. You’ll usually see symbols like ^ or ~. These are range operators that tell npm how "adventurous" it should be when updating: 
    - Caret (^) Allows Minor and Patch updates. (e.g., ^1.2.3 allows 1.9.0 but not 2.0.0)
    - Tilde (~) Allows only Patch updates. (e.g., ~1.2.3 allows 1.2.9 but not 1.3.0)
    - Wildcard (*) Allows any version. (Generally a bad idea for stability!)
    - No Symbol only installs the specific version listed.

### The Purpose of package-lock.json: 
- While package.json uses flexible ranges (like the ^ or ~ we discussed), package-lock.json pins down the exact version of every single dependency—and their dependencies—at the moment of installation. 

- It is a common mistake to add package-lock.json to .gitignore. Here is why you should always include it in your repository:
    - Consistent Environments: It ensures that your local environment, your teammates' environments, and your Production/CI-CD servers are running the exact same code.
    - Security Auditing: By tracking the lockfile in Git, you can see exactly when a dependency was updated in your commit history. If a bug or security vulnerability is introduced, you can trace it back to the specific version change.
    - Integrity Verification: The lockfile stores a sha512 hash for every package. If a package's code is secretly modified on the npm registry (a "supply chain attack"), the lockfile will detect the mismatch and fail the installation.
    