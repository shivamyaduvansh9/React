function printHello() {
   console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleClick(event) {
    console.log("hello!");
    console.log(event);
}

function handleDblClick() {
    console.log("you double clicked!");
}


export default function Button() {
    return (
        <div>
            <button onClick = {handleClick}>Click me!</button>
            <p onMouseOver = {handleMouseOver}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus illum quam, laudantium corporis iure, 
                ipsam enim hic officia autem doloribus, 
                libero reprehenderit? Unde sit perspiciatis 
                est error enim deleniti aperiam? 
            </p>
            <button onDoubleClick = {handleDblClick}>double click me!</button>
        </div>
    );
}