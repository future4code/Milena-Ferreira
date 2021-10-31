import React from "react";
import CardPostFeed from "../../components/CardPostFeed/CardPostFeed";
import useProtectedPage from "../../hooks/useProtectedPage";
import { FeedScreenContainer } from "./FeedScreenStyles";

const FeedScreen = () => {
  useProtectedPage();

  const fakePost = {
    "id": "ba669614-8caa-41ae-8bc0-1ea05046ce29",
    "body": `Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
    large plate and set aside, leaving chicken and chorizo in the pan. Add
    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
    stirring often until thickened and fragrant, about 10 minutes. Add
    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.`,
    "title": "Luciano Huck de presidente é uma loucura",
    "createdAt": "2021-10-26T13:38:00.128Z",
    "userId": "24a8f80e-0a27-492c-b56e-ffcca59fba6e",
    "voteSum": "-1",
    "commentCount": null,
    "userVote": null,
    "username": "Jonas"
  }

  return (
    <FeedScreenContainer>
      <CardPostFeed post={fakePost} />
      <CardPostFeed post={fakePost} />
      <CardPostFeed post={fakePost} />
      <CardPostFeed post={fakePost} />
    </FeedScreenContainer>
  );
}

export default FeedScreen;
