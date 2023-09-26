import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Img from "./assets/IMG_1708.jpg"

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbRiyd-ntAPnjKW0DUpCDa0nTVDDNjrefrsVpnApH&s",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s",
                width: 320,
                height: 213,
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s",
                width: 640,
                height: 427,
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s",
                width: 1200,
                height: 800,
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s",
                width: 2048,
                height: 1365,
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s",
                width: 3840,
                height: 2560,
              },
            ],
          },
          // ...
        ]}
      />
    </>
  );
}
