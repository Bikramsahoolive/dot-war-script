# DOT WAR SCRIPT

## FOR ANGULAR
```bash
ng build
``` 
Copy All Build Files From Dist/project-name Folder

dist/your-app-name/<br>
├── index.html<br>
├── main.js<br>
├── styles.css<br>
├── assets/<br>
└── ...<br>

Paste In Target Folder.

dot-war-script/ TARGET/<br>
├── index.html<br>
├── main.js<br>
├── assets/<br>
└── WEB-INF/<br>
    └── web.xml (optional, can be empty or minimal)<br>

Please Configure web.xml according to your Project 
OR
In web.xml create minimum code.
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         version="3.1">
</web-app>

## FOR .WAR CREATE
```bash
cd dot-war-script
```
Then
```bash
 npm start
 ```

.WAR FILE IS READY IN OUTPUT FOLDER.



### Important!!!

1: Do Not Add Any Additional Folder After TARGET Folder.<br>
2: Project Name And File Name Should Be Same.<br>
2: Base Href: Set base href correctly in index.html: ```html <base href="/output-filename">```
