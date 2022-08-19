import AmazingAuthors from "./Components/AmazingAuthors";
import LongStory from "./Components/LongStory";
import Navbar from "./Components/Navbar"

import { stories } from './data'

function App() {

  const longStory = stories.filter((item) => item["type"] === "long")
  const shortStory = stories.filter((item) => item["type"] === "short")

 
  return (
    <div className="bg-[#18191B] h-fit">

      <Navbar />

      <div className="w-11/12 lg:w-[820px] mx-auto ">
       {/* ---------Long story - 1------ */}
        <LongStory data={longStory[0]} img={longStory[0].coverImage} />
       <AmazingAuthors/>
       <LongStory data={longStory[0]} img={longStory[0].coverImage} />
      </div>
    </div>
  );
}

export default App;
