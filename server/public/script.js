const button = document.querySelector(".checkout-btn");
button.addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // window.location = url;
      console.log(url);
    })
    .catch((e) => {
      console.error(e.error);
    });
});
