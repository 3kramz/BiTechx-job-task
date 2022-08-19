import AmazingAuthors from "./Components/AmazingAuthors";
import LongStory from "./Components/LongStory";
import ShortStory from "./Components/ShortStory";
import AmaizingCommunity from './Components/AmazingCommunity'
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
    
        <ShortStory data={shortStory[0]} img='/images/short-cover.png' />
        <ShortStory data={shortStory[1]} img='' />

        <AmazingAuthors />

        <LongStory data={longStory[1]} img={null} />

        <ShortStory data={shortStory[2]} img='' />
        <ShortStory data={shortStory[3]} img='/images/short-cover.png' />

        <AmaizingCommunity />
      </div>
    </div>
  );
}

export default App;
