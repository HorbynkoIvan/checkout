import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  //Native custom scrollbar properties start
// -------
// Webkit style start
/* width */
::-webkit-scrollbar {
    width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #888;
}
// Webkit style end
// -------
// FF style start
:root {
    scrollbar-face-color: #c7c7c7;
    scrollbar-track-color: #f1f1f1;
    scrollbar-color: #c7c7c7 #f1f1f1;
    scrollbar-width: thin;

    * {
        scrollbar-face-color: #c7c7c7;
        scrollbar-track-color: #f1f1f1;
        scrollbar-color: #c7c7c7 #f1f1f1;
        scrollbar-width: thin;
    }
}
// FF style end
// -------
//Native custom scrollbar properties end

.is-hide-scroll {
  overflow: hidden;
  height: 100vh;
  width: 100%;
}
`;
