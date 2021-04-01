import { useRouter } from "next/router";
import NotFound from "../src/pages/NotPound";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <NotFound />;
};

export default Post;
