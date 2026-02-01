const mouseFollower = document.querySelector("mouse-follower");

let x = 0 , y = 0;

document.addEventListener("mousemove",(e)=>{
    // console.log(e);
    // console.log(clientX,clientY);
    const { clientX , clientY } = e;

    x = clientX;
    y = clientY;
    far();
})


function far()
{
    console.log('hello');
    mouseFollower.style.transform = `translate(${x}px,${y}px)`;
    requestAnimationFrame(far)
}

    far();
