import { logo, upload, folder, doc } from './images';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Main Container */}
      <main className="bg-bg bg-[url('./images/bg-mobile.png')] lg:bg-[url('./images/bg-desktop.png')] bg-center
      p-6 lg:bg-no-repeat lg:bg-w-[100%] desktop-bg w-100 bg-cover h-[100vh] bg-no-repeat lg:bg-bottom lg:bg-contain flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center lg:align-middle lg:mx-auto lg:p-0">
        {/* First Container */}
      <div className="bg-cardBG w-[80%] p-8 h-[190px] rounded-xl rounded-tr-[80px] mx-auto lg:w-[25%] lg:mx-0 ">
        {/* Logo */}
        <img src={logo} alt="logo"/>
        {/* List of Features */}
        <ul className="flex mt-8 gap-4">
          {/* Document */}
          <li className="bg-bg w-12 h-12 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-white"><img src={doc} alt="document"/></li>
          {/* Folder */}
          <li className="bg-bg w-12 h-12 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-white"><img src={folder} alt="folder"/></li>
          {/* Upload */}
          <li className="bg-bg w-12 h-12 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-white"><img src={upload} alt="upload"/></li>
        </ul>
      </div>
      {/* Storage Container for Data */}
      <div className="bg-cardBG w-[80%] p-8 h-[170px] rounded-xl mt-4  mx-auto flex flex-col relative lg:text-left lg:w-[48%] lg:mx-0 lg:ml-4">
        <p className="text-paleblue font-thin mb-3 tracking-wider">    You’ve used <b className=" font-bold">815 GB</b> of your storage</p>
        {/* DataLine */}
        <div className="w-[100%] h-5 bg-bg rounded-full mb-2 flex align-middle items-center p-1">
          {/* Gradient Line */}
           <div className='w-[70%] h-4 rounded-full p-[2px] bg-gradient-to-r flex justify-end items-center from-peach to-pink lg:w-[80%]'>
            {/* White Dot */}
             <div className="bg-white w-[10px] h-[10px] rounded-full float-right"></div></div></div>
             {/* Min to Max Numbers */}
        <div className="flex justify-between text-paleblue">
          <p className="font-bold">0 GB
</p>
          <p className="font-bold">
1000 GB</p>
        </div>
        {/* Bottom Box - GB Container */}
        <div className="bg-white w-44 h-[72px] flex justify-center align-middle items-center rounded-lg absolute bottom-[-30px] left-[100px] lg:left-[510px] lg:h-[60px] lg:top-[-30px]   gb-box"><p className=" uppercase text-bg text-center flex align-middle justify-center items-center"><span className="text-4xl font-extrabold"> 185 </span><span className="opacity-50 font-bold ml-2 text-xs"> GB Left</span></p></div>



      </div>

</main>
    </div>
  );
}

export default App;
