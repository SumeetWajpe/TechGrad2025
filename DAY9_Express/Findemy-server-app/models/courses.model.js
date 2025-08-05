// const mysql = require("mysql2/promise");

// async function connectToDB() {
//   const db = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "n3u3da!", // replace with your MySQL password
//     database: "findemy_db",
//   });
//   return db;
// }

// async function getCourses() {
//   try {
//     const db = await connectToDB();
//     if (!db) {
//       throw new Error("Database connection failed");
//     }
//     const [rows] = await db.query("SELECT * FROM courses");
//     return rows;
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     throw error;
//   } finally {
//     await db.end();
//   }
// }

// module.exports = {
//   getCourses,
//   connectToDB,
// };

// Create a new db -> FindemyDB
// Create a table -> courses
// Insert some data into the courses table

// npm i mysql2
// use above code to connect to the DB
// make request using ThunderClient
// observe the response

var courses = [
  {
    id: "1",
    title: "React",
    price: 5000,
    likes: 400,
    rating: 5,
    trainer: "Jack Well",
    imageUrl: "https://goodworklabs.com/wp-content/uploads/2016/10/reactjs.png",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
  },
  {
    id: "2",
    title: "Redux",
    price: 4000,
    likes: 600,
    rating: 5,
    trainer: "John Jacob",
    imageUrl:
      "https://negativeepsilon.com/media/attachments/blobs/2023/01/09/PNbZQxCiPVkNWzDNPDx24j_redux_rm05scp.png_riwC4kc5pLH7k1e5ReNajv_2FOQ.webp",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. ",
  },
  {
    id: "3",
    title: "Node",
    price: 6000,
    likes: 900,
    rating: 4,
    trainer: "Bishop Renny",
    imageUrl:
      "https://blog.logrocket.com/wp-content/uploads/2022/10/Building-simple-login-form-node-js.png",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
  },
  {
    id: "4",
    title: "Angular",
    price: 5000,
    likes: 200,
    rating: 3,
    trainer: "Matthew Bell",
    imageUrl:
      "https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?auto=webp&s=6611d9c403cb948d1caf33e595f129bd18d745e3",
    description:
      "Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
  },
  {
    id: "5",
    title: "Flutter",
    price: 7000,
    likes: 700,
    rating: 4,
    trainer: "Jenny Alter",
    imageUrl: "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
    description:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. First described in 2015, Flutter was released in May 2017. ",
  },
  {
    id: "6",
    title: "GraphQL",
    price: 7000,
    likes: 700,
    rating: 4,
    trainer: "Jenny Alter",
    imageUrl: "https://cdn.codersociety.com/uploads/graphql-reasons.png",
    description:
      "GraphQL is a data query and manipulation language for APIs that allows a client to specify what data it needs (declarative data fetching). A GraphQL server can fetch data from separate sources for a single client query and present the results in a unified graph.[2] It is not tied to any specific database or storage engine. ",
  },
  {
    id: "7",
    title: "Kubernetes",
    rating: "5",
    price: "5000",
    likes: "200",
    trainer: "Sumeet Wajpe",
    imageUrl:
      "https://concisesoftware.com/wp-content/uploads/2020/01/Kubernetes-logo.png",
    description:
      "Kubernetes (/ˌk(j)uːbərˈnɛtɪs, -ˈneɪtɪs, -ˈneɪtiːz, -ˈnɛtiːz/, K8s)[3] is an open-source container orchestration system for automating software deployment, scaling, and management.[4][5] Originally designed by Google, the project is now maintained by a worldwide community of contributors, and the trademark is held by the Cloud Native Computing Foundation.",
  },
  {
    id: "8",
    title: "F#",
    rating: "4",
    price: "1000",
    likes: "100",
    trainer: "Jack Well",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxrk8A5_FFzs6QhjdjFPhQ5DGe0poOHycjQ&s",
    description: "F # !",
  },
  {
    id: "9",
    title: "Go lang",
    rating: "4",
    price: "2000",
    likes: "400",
    trainer: "Jack Well",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/0*SoqCeEz9EctJBXKw.png",
    description: "Go Lang go !",
  },
  {
    id: "11",
    title: "Rancher",
    rating: "4",
    price: "2000",
    likes: "100",
    trainer: "Jack Well",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E12AQE8rcE6ueAYug/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675891131553?e=2147483647&v=beta&t=PpGP55ID-Lg62rx5EbSkOQiYW3CaWqDFJmYBpdDogG0",
    description: "Rancher !",
  },
];

module.exports = courses;
