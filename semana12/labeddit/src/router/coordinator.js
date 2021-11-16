export const goToLogin = (history) => {
  history.push("/login");
}

export const goToPost = (history, id) => {
  history.push(`/post/${id}`);
}

export const goToSignUp = (history) => {
  history.push("/cadastro");
}

export const goToFeed = (history) => {
  history.push("/");
}

