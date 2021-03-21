async function commentButtonAction(post_id) {
  let comment_text = prompt("Please enter the comment below", "");
  //alert(comment_text + ". And the post_id is " + post_id);

  if (comment_text) {

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}