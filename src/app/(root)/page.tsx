import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="h-screen">
      <p>Home</p>
      <UserButton />
    </div>
  );
};

export default Home;
