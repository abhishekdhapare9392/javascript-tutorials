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
                    <div class="card-actions justify-end bottom-0 mt-5">
                        <button onclick="showPost(${element.id})" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"><i class="fa-solid fa-arrow-right"></i> Read More</button>
                    </div>
                </div>
            </div>
            `;
        posts.innerHTML += post;
      });
    })
    .catch((error) => console.log(error));
});
function goBack() {
  document.getElementById("posts").style.display = "grid";
  document.getElementById("post-details").innerHTML = "";
}
function showPost(id) {
  const postId = id;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          return response.json();
        })
        .then((comments) => {
          console.log(comments);

          document.getElementById("posts").style.display = "none";
          document.getElementById("post-details").innerHTML = `
                <div class="card bg-base-100 shadow-xl p-3">
                    <div class="card-body">
                        <h2 class="card-title">Post ${data.id}</h2>
                        <p>${data.body}</p>
                        <div class="card-actions justify-end bottom-0 mt-5">
                            <button onclick="goBack()" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Comments</h2>
                        <ul class="list-disc pl-4">
                            ${comments
                              .map((comment) => {
                                return `<li>${comment.body}</li>`;
                              })
                              .join("")}
                        </ul>
                    </div>    
                </div>
                `;
        });
      //   document.getElementById("post-details").innerHTML = `
      //         <div class="card bg-base-100 shadow-xl p-3">
      //             <div class="card-body">
      //                 <h2 class="card-title">Post ${data.id}</h2>
      //                 <p>${data.body}</p>
      //                 <div class="card-actions justify-end bottom-0 mt-5">
      //                     <button onclick="goBack()" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Go Back</button>
      //                 </div>
      //             </div>
      //         </div>
      //         `;
    });
}

document.getElementById("add-post").addEventListener("click", () => {
  document.getElementById("add-post-form").style.display = "block";
});

document.getElementById("cancel-add-post").addEventListener("click", () => {
  document.getElementById("add-post-form").style.display = "none";
});

document.getElementById("save-post").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  if (title == "" || body == "") {
    // alert("Please enter title and body");
    let span = document.createElement("span");
    span.classList.add("text-red-500", "bg-red-200", "p-2", "w-100", "m-2");
    span.innerText = "Please enter title and body";
    document.getElementById("messages").appendChild(span);
    setTimeout(() => {
      document.getElementById("messages").removeChild(span);
    }, 5000);
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.getElementById("title").value = "";
      document.getElementById("body").value = "";
      document.getElementById("add-post-form").style.display = "none";
      let span = document.createElement("span");
      span.classList.add(
        "text-green-500",
        "bg-green-200",
        "p-2",
        "w-100",
        "m-2",
      );
      span.innerText = "Post added successfully!";
      document.getElementById("success-message").appendChild(span);
      setTimeout(() => {
        document.getElementById("success-message").removeChild(span);
      }, 5000);
    })
    .catch((error) => console.error("Error: ", error));
});
