import Navbar from '../Components/Navbar';
import ContentBlob from '../Components/ContentBlob';

const content = {
    contentId: 0,
    alias: '',
    content: [],
};

function Home(){
    return(
    <div className="flex flex-column container mx-auto space-y-22">
        <div>
            <Navbar/>
        </div>
        <div className="flex flex-row flex-wrap my-32 min-w-min w-11/12 m-auto">
            <ContentBlob>{content}</ContentBlob>
            <ContentBlob>{content}</ContentBlob>
            <ContentBlob>{content}</ContentBlob>
        </div>
    </div>
    );
}


export default Home;