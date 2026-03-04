# 🎮 Tic Tac Toe - Maven Web Project

A simple Tic Tac Toe game built using:

* HTML
* CSS
* JavaScript
* Apache Maven (WAR Packaging)

---

## 📁 Project Structure

```
tic-tac-toe/
│
├── pom.xml
├── README.md
└── src/
    └── main/
        └── webapp/
            ├── index.html
            ├── style.css
            └── script.js
```

---

## 🚀 Features

* 2 Player Game (X and O)
* Winner Detection
* Restart Button
* Simple UI Design
* Maven WAR packaging support
* Ready for Jenkins CI/CD

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Apache Maven

---

## ▶️ How To Run Locally

### Option 1: Direct Browser

1. Go to:

   ```
   src/main/webapp/
   ```
2. Open:

   ```
   index.html
   ```
3. Play the game 🎮

---

### Option 2: Using Maven

Make sure Maven is installed.

Run:

```
mvn clean package
```

Output will be generated in:

```
target/tic-tac-toe.war
```

---

## 🌐 Deploy on Tomcat

1. Copy the WAR file:

   ```
   target/tic-tac-toe.war
   ```
2. Paste inside:

   ```
   apache-tomcat/webapps/
   ```
3. Start Tomcat server.
4. Open browser:

   ```
   http://localhost:8080/tic-tac-toe
   ```

---

## 🔄 Jenkins CI/CD

This project can be used in a Jenkins Pipeline with:

* GitHub integration
* Maven build stage
* Docker build stage
* Tomcat deployment

---

## 📦 Build Command

```
mvn clean package
```

---

## 👨‍💻 Author

Your Name

---

## 📌 Version

1.0
