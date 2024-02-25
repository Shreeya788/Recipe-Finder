import Card from "../Components/Card";
import Badge from "../assets/Badge.png";
import food from "../assets/food.png";
import chef from "../assets/chef.png";

const Home = () => {
  const title = "Everyone can be a \n chef in their own kitchen";
  return (
    <>
      <Card
        title="Healthy Cooking Recipes"
        description="Never waste food again: Use what you have, cook something great!"
        Badge={Badge}
        alt="A A Badge of like"
        image={food}
        buttonText="Explore recipes"
        bgColor="#E7FAFE"
        padding="p-[5%]"
        width="2/4"
      />
      <div className="mt-5 pt-5">
        <p className="text-5xl font-semibold text-center ">
          Become a Professional Chef
        </p>
        <p className="text-center text-gray-500 pt-3">
          Never waste food again: Use what you have, cook something great!
        </p>
      </div>
      <Card
        title={title}
        description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rem cumque nemo similique minima optio dolores sint corporis voluptas. Quis sequi architecto optio dolorem dolorum tempore animi quae, ex ut. "
        image={chef}
        buttonText="Learn more"
        bgColor="#F3FDFF"
        width="w-3/4"
      />
    </>
  );
};
export default Home;
