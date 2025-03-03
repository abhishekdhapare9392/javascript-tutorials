document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelector("#posts");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        let post = `
            <div class="card bg-base-100 shadow-xl p-3">
                <div class="card-body">
                    <h2 class="card-title">Post ${element.id}</h2>
                    <p>${element.body}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            `;
        posts.innerHTML += post;
      });
    })
    .catch((error) => console.log(error));
});
