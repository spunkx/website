import Navbar from '../Components/Navbar';
import ContentBlob from '../Components/ContentBlob';
import { Outlet } from "react-router-dom";

const testContent1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?";


function Projects(){
    return(
    <div className="flex flex-column container mx-auto space-y-16">
        <div>
            <Navbar/>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly my-32 min-w-fit w-11/12 mx-auto">
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
            <ContentBlob>{[{width:"third", bgColour:"default"},{header: "What is Lorem Ipsum?", content:testContent1}]}</ContentBlob>
        </div>
        <Outlet/>
    </div>
    );
}


export default Projects;