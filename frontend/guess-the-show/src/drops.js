import React, {useImperativeHandle, useEffect, useState , forwardRef} from "react";



const Drops = forwardRef((props, ref) => {
  // Component logic
      const [cordinates, setCordinates] = useState ({x: 0 , y : 0})

    useEffect ( function dropAtRandomLocation() {
        const maxX = window.innerWidth; // maximum x coordinate
        const maxY = window.innerHeight; // maximum y coordinate
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        setCordinates({ x: randomX, y: randomY });
    },[])

    useImperativeHandle(ref, () => ({
      getBoundary : () =>{
        const boundary = { ...cordinates, xEnd:cordinates.x+50, yEnd: cordinates.y+50};
        return boundary 
      }
    }));


  return(
            <div ref={ref}
            style={{
              position: 'absolute',
              top: cordinates.y,
              left: cordinates.x,
              width: '50px',
              height: '50px',
              backgroundColor: 'green',
            }}
          ></div>
           
        )
});
export  default Drops