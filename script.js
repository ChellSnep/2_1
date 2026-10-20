(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          let htmlList = "<ul>";
          posts.forEach((post) => {
            htmlList += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
          });
          htmlList += "</ul>";

          answer.innerHTML = htmlList;
        }, 1000);
      });
  });

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";

    const selectedId = postId.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
      .then((response) => response.json())
      .then((post) => {
        setTimeout(() => {
          let htmlPost = `
            <ul>
              <li><strong>${post.title}</strong><br>${post.body}</li>
            </ul>
          `;

          answer.innerHTML = htmlPost;
        }, 1000);
      });
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
