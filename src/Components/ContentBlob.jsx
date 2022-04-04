const widths = {
    full: 'w-full',
    half: 'w-1/2',
    third: 'w-1/3',
    fourth: 'w-1/4',
}

const bgColours = {
    default: 'bg-[#F7FFF7]',
}

function ContentBlob(props){
    let width = widths[props.children[0].width];
    let bgColour = bgColours[props.children[0].bgColour];

    console.log(width);
    console.log(bgColour);

    return(
        <div className={`border-1 rounded drop-shadow-xl ${width} ${bgColour} w-min-fit h-fit m-2 p-5`}>
            <h1>{props.children[1].header}</h1>
            <p>{props.children[1].content}</p>
        </div>
    );
}

export default ContentBlob;