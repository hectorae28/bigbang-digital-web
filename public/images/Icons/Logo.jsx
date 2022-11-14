import * as React from "react"
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M402.01 60c-191.2-.1-341.63 154.89-342.28 340.72-.66 188.25 151.6 343.14 341.8 343.299 188.46.16 342.12-152.34 342.29-341.979C743.74 213.84 591.83 60.09 402.01 60zm265.32 508.12c-31 49.24-72.58 87.04-124.37 113.58-1.83.93-3.81 1.58-5.71 2.359l.09-.079c-.02.01-.04.029-.06.039-1 .65-1.94 1.421-3 1.921-18.25 8.529-37.141 15.27-56.681 20.149-13.46 3.37-27.08 5.86-40.869 7.36-18.23 1.979-36.49 2.47-54.811 1.25-63.93-4.25-121.41-25.78-171.88-65.141C151.17 603.65 113.25 544.03 96.14 471.3c-3.85-16.35-6.05-32.96-7.109-49.74-.96-15.119-.91-30.229.41-45.29 5.81-66.2 29.88-124.97 72.659-175.81 40.15-47.7 90.29-80.55 149.96-98.72 16.471-5.01 33.28-8.42 50.36-10.62 18.35-2.37 36.76-3.01 55.2-2.09 34.61 1.73 68.05 9 100.229 21.91 90.841 36.45 159.67 113.18 185.94 207.4 4.67 16.72 7.8 33.73 9.63 51 1.75 16.46 2.19 32.95 1.271 49.43-3 53.81-18.63 103.71-47.36 149.35z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M582.52 223.59v.07c.051 0 .11 0 .15-.01.01-.04.021-.08.021-.12a3 3 0 0 0-.171.06zm-4.03 5.86c.01-.02.02-.05.029-.07a.963.963 0 0 1-.1.12.176.176 0 0 0 .071-.05zm-41.21 454.57c-.011.011-.021.03-.03.04l.09-.079h-.03c-.01.009-.02.029-.03.039zM613.9 341.04c-5.811-23.91-16.591-45.49-31.21-65.18-9.16-12.34-20.79-21.83-34.45-28.85-14.75-7.58-30.53-11.52-46.91-13.3-13.84-1.5-27.7-1.28-41.53.08-13.25 1.31-26.34 3.63-39.27 6.85-1.57.39-3.12.92-4.96.88 0-1.41-.09-2.65.02-3.86.23-2.49.521-4.97.86-7.44 2.03-15.11 4.16-30.2 6.069-45.32.711-5.63.931-11.33 1.29-17 .11-1.65.04-3.33-.119-4.98-.261-2.76-1.421-3.94-4.21-4.22-1.65-.16-3.341-.16-4.98.02-5.41.61-10.53 2.35-15.59 4.25-1.32.5-1.95 1.46-1.92 2.88.06 3.05.069 6.1.149 9.15.591 22.73 1.2 45.46 1.801 68.19.029 1.39.109 2.78-.021 4.16-.189 2.17-1.27 2.86-3.37 2.18-3.689-1.2-7.319-2.56-11.03-3.68-2.329-.7-4.3-1.7-5.68-3.79-.52-.8-1.34-1.4-2.03-2.08-23.72-23.73-47.449-47.46-71.18-71.18-.88-.89-1.75-1.79-2.67-2.63-.37-.33-.88-.52-1.34-.79-.21.42-.43.65-.45.91-.12 1.1-.229 2.2-.25 3.31-.26 11.52.25 23.02 1.54 34.46 1 8.83 2.64 17.54 5.95 25.86.12.32.01.74.01 1.32-1.18.07-2.26.15-3.35.2-7.351.3-14.67.7-21.91 2.14-10.021 2-19.58 5.19-28.09 10.94-14.42 9.74-27.61 20.94-38.94 34.21-11.13 13.02-19.6 27.53-24.18 44.13-3.54 12.86-5.561 25.98-6.45 39.31-1.25 18.67.26 37.12 4.04 55.4 4.89 23.55 13.69 45.59 25.91 66.29 14.06 23.81 29.97 46.31 48.13 67.18 12.04 13.83 24.89 26.84 39.38 38.14 5.14 4.021 10.45 7.801 16.271 10.79 9.489 4.891 19.279 6.811 29.569 2.521 1.11-.471 2.16-.351 3.15.34.8.55 1.58 1.14 2.43 1.6 3.41 1.83 6.82 3.681 10.28 5.4 1.88.939 3.939 1.35 6.05 1.27 5.35-.189 10.41-1.489 15.08-4.13.77-.43 1.34-1.22 2.13-1.95-2.229-2.81-4.42-5.239-6.99-7.38-1.67.33-3.149.69-4.649.91-3.311.47-6.62.681-9.851-.53-3.26-1.229-5.319-3.579-5.87-6.97-.89-5.47 1.311-9.83 5.61-13.04 4.01-3.01 8.33-2.43 12.55-.3 2.38 1.2 4.44 2.88 6.13 4.91 1.94 2.34 3.801 4.77 5.49 7.3 2.95 4.4 6.15 8.54 10.09 12.11 10.12 9.16 21.67 11.029 34.431 6.779 3.6-1.21 6.71-3.22 9.479-5.779 1.061.3 1.98.569 2.91.81 5.29 1.36 10.62 1.87 16.06.94 4.271-.74 8.311-2.15 12.29-3.761 10.21-4.109 19.641-9.64 28.65-15.92 19.24-13.42 35.95-29.56 50.77-47.68 18.82-23.04 33.49-48.57 45.171-75.85 9.439-22.051 15.859-44.9 17.729-68.92 1.361-17.43.101-34.63-4.019-51.61zm-18.45 53.14c-1.47 28.02-9.391 54.22-22.16 79.04-9.37 18.21-20.93 34.931-34.86 49.98-4.25 4.59-8.81 8.819-13.699 12.729-6.711 5.36-13.24 10.96-19.91 16.37-6.141 4.99-12.551 9.61-19.36 13.641-6.84 4.029-13.95 7.42-21.74 9.149-3.529.79-7.09 1.26-10.72 1.2-4.58-.07-8.72-1.28-12.38-4.13-2.18-1.7-4.42-3.351-6.74-4.86-4.08-2.66-8.59-3.85-13.46-3.319-3.88.43-7.57 1.539-11.06 3.27-.07.65-.141 1.18-.19 1.69-.25 0-.57.1-.729-.021-1.23-.89-2.36-1.939-3.66-2.71-1.29-.76-2.75-1.25-4.4-1.979 0-64.25 0-128.57.01-192.891 0-.8.13-1.6.181-2.19.319-.29.41-.41.529-.48.11-.06.25-.11.381-.11 30.09-.05 60.17-.08 90.25-.12h3.819c.69 1.33 1.271 2.57 1.95 3.75 3.79 6.47 11.27 9.57 18.6 7.73 6.881-1.71 12.131-8.28 12.391-15.48.25-7.31-4.271-13.89-11.21-16.31-8.511-2.97-17.931 1.48-21.04 9.95-.471 1.3-.811 2.64-1.2 3.91-3.56.58-33.05.57-36.46 0-.04-.12-.12-.25-.12-.37 0-.13.03-.31.11-.39 4.149-4.28 8.31-8.54 12.449-12.81.091-.1.11-.26.221-.53-.771-1.58-2.21-2.63-3.71-3.98-.79.61-1.59 1.1-2.23 1.74-4.93 4.88-9.85 9.77-14.7 14.72-1.34 1.36-2.71 2.09-4.699 2.08-14.15-.08-28.29-.04-42.431-.05-.81 0-1.63-.11-2.59-.17-.17-.6-.45-1.1-.45-1.61-.02-7.62-.01-15.25.011-22.87 0-.27.119-.54.199-.84.971-1.07 2.29-.7 3.48-.71 8.6-.03 17.189-.01 25.79-.02.97 0 1.95-.08 2.91.02 2.239.23 3.89-.6 5.489-2.23 7.671-7.82 15.45-15.52 23.2-23.26.971-.98 1.98-1.92 3.12-3.01 1.18.46 2.29.97 3.46 1.33 8.86 2.74 18.311-2.05 20.88-10.89 3.13-10.76-3.62-18.59-10.56-20.69-6.521-1.97-12.45-.76-17.2 4.21-4.85 5.07-5.9 11.12-3.47 17.71.479 1.29 1.21 2.48 1.91 3.9-.21.36-.391.91-.75 1.27-8.431 8.44-16.87 16.85-25.46 25.4h-6.381c-1.069-.92-.72-2.11-.729-3.16-.03-8.18-.01-16.36-.021-24.54 0-1.37-.09-2.73-.14-4.24-1.86-.68-3.59-.48-5.58-.21-.109 1.13-.3 2.2-.3 3.26-.021 8.18 0 16.36-.021 24.54 0 1.36-.119 2.71-.189 4.29-2.96.41-5.71.18-8.44.22-2.909.04-5.819-.02-8.729.02-2.74.04-5.5-.2-8.351.21-.56 4.64-.22 9.06-.279 13.46-.061 4.3-.011 8.6-.011 12.9 0 4.43.011 8.87 0 13.31-.02 4.25.07 8.52-.069 12.61-1.21.57-1.601-.15-2.04-.59-7.37-7.33-14.7-14.7-22.09-22.02-1.17-1.16-1.7-2.4-1.7-4.04.04-10.26.06-20.52-.01-30.78-.011-1.87.739-3.09 2.09-4.25 5.24-4.54 10.41-9.15 15.6-13.75 1.141-1 2.25-2.04 3.47-3.14-.85-1.89-2.27-3.15-3.88-4.63-5.489 4.69-10.76 9.54-16.25 14.26-1.199-2.45-1.3-4.39-.55-8.77 1.04-.44 2.18-.88 3.28-1.42 6.42-3.14 9.91-10 8.6-16.87-1.38-7.19-7.12-12.45-14.319-12.93-7.601-.51-14.33 4.54-16.23 11.62-1.89 7.01 1.36 14.58 7.88 17.97 1.21.63 2.51 1.09 4.04 1.74.271 5.05.09 10.16.12 15.26.03 5.13.01 10.26.01 15.39-.01 5.07 0 10.15-.01 15.13-1.46.29-1.87-.59-2.41-1.13-5.609-5.56-11.24-11.11-16.74-16.78-1.68-1.72-3.449-2.53-5.859-2.39-2.62.15-5.271-.1-7.891.07-2.569.17-4.439-.61-6.119-2.66-2.99-3.64-6.261-7.05-9.421-10.55-.829-.92-1.699-1.81-2.649-2.82-1.8.9-3.101 2.23-4.45 3.84 3.01 4.04 6.73 7.35 9.79 11.36-3 .95-11 1.14-16.94.47-.56-1.23-1.13-2.61-1.819-3.94-3.17-6.09-10.54-9.81-18.01-7.79-6.82 1.85-11.681 8.31-11.53 15.48.14 7.16 5.13 13.27 12.21 14.97 6.84 1.64 14.229-1.81 17.47-8.22.561-1.11.96-2.3 1.521-3.68.81-.09 1.739-.3 2.659-.3 11.101-.03 22.19.04 33.28-.07 2.16-.02 3.601.75 5.061 2.21 17.22 17.29 34.47 34.55 51.76 51.77 1.49 1.47 2.41 2.95 2.17 5.09-.12 1.1-.021 2.22-.021 3.33V559.6c0 1.79.061 3.58.091 5.54 1.279.511 2.43.92 3.54 1.41 4.229 1.9 7.22 4.681 8.609 9.44 1.94 6.689 6.641 11.39 12.601 14.84.59.34 1.21.71 2.05.09-.32-.55-.641-1.13-.99-1.68-2.51-3.99-5.01-7.971-7.54-11.95-.29-.45-.71-.81-1.07-1.22.08-.28.15-.561.221-.84-.05.289-.11.579-.17.869.51-.02 1.22-.25 1.5-.01 1.52 1.351 3.29 1.3 5.109 1.11 1.24-.141 2.48-.4 3.721-.4 2.199.021 4.439-.01 6.6.351 4.14.67 6.66 3.319 7.51 7.34.4 1.87.42 3.859.29 5.779-.229 3.341-2.09 5.761-5.17 6.94-5.32 2.04-10.58 2.03-15.479-1.28-3.381-2.27-6.051-5.279-8.37-8.6-1.74-2.49-3.34-5.11-5.221-7.5-2.04-2.62-4.14-5.24-6.54-7.51-6.649-6.25-14.67-8.65-23.71-7.761-3.38.341-6.449 1.57-9.319 3.311-2.73 1.649-5.45 3.31-8.07 5.12-4.25 2.92-8.87 3.6-13.87 2.91-4.16-.57-8.17-1.561-11.96-3.33-15.74-7.33-30.8-15.82-44.62-26.42-30.42-23.311-52.689-52.851-67.39-88.16-5.601-13.46-10.22-27.271-12.94-41.601-7.59-39.979.061-76.649 24.98-109.14 15.53-20.25 35.64-34.31 60.22-41.6 15.09-4.47 30.45-5.55 46.07-3.21 13.08 1.96 25.7 5.58 38.17 9.84 6.149 2.1 12.25 4.38 18.39 6.53 1.44.51 2.9.98 4.4 1.23 3.12.52 6.04-.3 8.85-1.64 7.13-3.41 14.521-6.18 22.061-8.54 15.31-4.78 30.989-7.42 47.02-7.67 18.48-.28 36.45 2.7 53.66 9.58 15.07 6.03 27.75 15.54 38.51 27.62 11.94 13.39 19.94 28.92 24.601 46.18 4.29 15.922 5.69 32.142 4.83 48.612zm-93.29-30.43c.06-5.15 4.39-9.47 9.55-9.53 5.39-.06 9.8 4.31 9.76 9.67-.029 5.21-4.279 9.47-9.489 9.52-5.381.06-9.881-4.37-9.821-9.66zm-38.6-70.26c-.149-5.43 4.101-9.89 9.471-9.95 5.34-.06 9.77 4.37 9.729 9.73-.029 5.23-4.24 9.42-9.5 9.47-5.32.05-9.56-3.99-9.7-9.25zm-98.17 4.52c-4.81.03-8.819-3.92-8.81-8.67.01-4.59 3.8-8.45 8.439-8.6 4.9-.16 8.83 3.56 8.91 8.44.081 4.91-3.679 8.8-8.539 8.83zm-72.92 35.44c.19 4.55-3.38 8.72-8.569 8.86-4.74.14-8.771-3.99-8.75-8.75.02-4.64 3.779-8.46 8.43-8.57 4.949-.11 8.809 3.56 8.889 8.46z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M582.52 223.59v.07l.171-.13a3 3 0 0 0-.171.06zm-4.13 5.93c.011-.01.021-.01.03-.02.04-.04.07-.08.1-.12l-.13.14z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M588.9 190.57c-.99 1.42-2.011 2.87-3.021 4.34-1.02 1.48-2.04 2.97-3.05 4.45-.94 1.38-1.89 2.74-2.8 4.13-.99 1.51-1.931 3.04-2.9 4.56-.92 1.46-1.58 3.11-3.13 5.07.25-4.19.47-7.61.66-11.03.189-3.6.46-7.2.5-10.8.04-3.43.79-6.85.31-10.45-4.09-2.57-7.79-5.67-12.25-8.01-2.54 3.71-4.96 7.23-7.38 10.77l-7.5 10.98c-2.42 3.55-4.79 7.13-7.28 10.63-2.52 3.55-4.609 7.43-7.96 11.01-1.67-6.35-2.72-12.3-4.01-18.2-1.26-5.82-2.51-11.64-3.77-17.46-1.29-5.92-2.32-11.9-3.88-17.61-3.341-.88-14.03-1.7-16.69-1.33-.13.24-.29.48-.39.73-6.351 16.25-12.7 32.49-19.021 48.75-.229.59-.21 1.28-.35 2.29 4.24.08 8.16.82 12.17.77 1.89-3.2 2.45-6.86 4.35-9.85 4.681.14 9.07.25 13.471 1.24.729 3.52 1.43 6.87 2.17 10.39 4.21.36 8.189.87 12.18.99 2.89.09 5.35.78 7.66 2.57 2.05 1.59 4.18 3.13 6.62 4.36 1.43-1.19 2.17-2.7 3.12-4.02 1.05-1.46 2.029-2.98 3.05-4.46.93-1.38 1.87-2.75 2.81-4.12s1.87-2.75 2.8-4.12c1.021-1.49 1.99-3.02 3.061-4.46.939-1.27 1.35-2.93 2.93-4.19-1.229 12.22-1.81 24.09-2.41 36.04 3.24 2.21 6.311 4.33 9.4 6.4.32.22.78.21 1.439.38 1.771-2.57 3.54-5.2 5.391-7.77 1.01-1.4 2.14-2.7 3.22-4.04-.01.01-.02.01-.03.02.591-.96 1.19-1.91 1.79-2.86.101-.17.2-.34.311-.51.54-.97.84-2.14 2.029-2.56-.039-1.36.98-2.19 1.65-3.17 4.34-6.43 8.73-12.83 13.09-19.24.771-1.13 1.471-2.3 2.17-3.42-2.6-2.5-6.99-5.51-10.53-7.19zm-83.59 1.67c1.171-4.37 2.851-8.54 4.86-12.69 1.38 4.29 2.19 8.56 2.74 12.87-2.75.71-3.66.69-7.6-.18zM537.31 683.98c-.01.01-.02.029-.029.039-.011.011-.021.03-.03.04l.09-.079h-.031z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M538.08 672.17c-.01-.79-.25-1.58-.43-2.61h-4.261c-4.85 0-9.699.011-14.55-.02-.93-.01-1.85-.22-3.03-.37v-4.729c0-11.101.011-22.19-.02-33.28-.01-1.33.41-2.78-.61-3.94-4.739-.649-13.72-.5-16.72.351-.02 1.83-.06 3.75-.07 5.67-.01 1.939 0 3.88 0 5.819v29.53c0 1.95.03 3.891-.01 5.83-.03 1.85.16 3.73-.189 5.93-1.601-1.18-1.551-2.699-1.94-3.92-4.78-15.05-9.48-30.13-14.21-45.189-.45-1.42-.68-2.95-1.58-4.07-4.25-.47-14.8-.4-18.32.14-5.659 17.921-11.18 36.051-16.739 54.171-.15.489-.021 1.06-.021 1.96 4.47.119 8.83.26 13.32-.07 1.75-3.561 2.09-7.53 3.819-10.8 4.75-.521 11.7-.44 14.94.18 1.05 3.42 2.13 6.96 3.28 10.7 1.689.04 3.2.1 4.7.1 15.8 0 31.609-.01 47.42.021 1.479 0 2.96.27 4.449.41.771-1.04.811-2.261.801-3.49-.009-2.774.021-5.544-.029-8.324zm-72.2-12.57c.29-3.439 2.4-11.1 4.21-14.979l4.08 14.729c-2.96.89-5.61.64-8.29.25zM387.75 233.88a9.65 9.65 0 0 1-.37 1.61c-.06.19-.189.36-.32.53-.04.05-.079.1-.119.16-.12.01-.25.04-.381.02-.13-.02-.29-.04-.38-.13-25.51-25.46-51.01-50.93-76.52-76.41-.37-.37-.68-.82-1.521-1.85 1.9-.18 3.12-.37 4.341-.39 14.989-.24 29.93.38 44.729 3.02 5.05.9 10.06 2.04 14.79 4.09 2.65 1.14 5.26 2.49 7.7 4.03 3.25 2.07 5.399 5.07 6.609 8.79 1.86 5.71 2.83 11.59 3.19 17.54.802 13.05.012 26.05-1.748 38.99zM231.92 225.88c-.64-1.94-1.61-3.84-2.77-5.53-3.391-4.93-8.051-6.98-14.03-5.59-.57.14-1.18.1-1.96.15.439-1.37.85-2.4 1.09-3.47s.5-2.19.42-3.27c-.72-10.74-11.979-15.65-18.689-12.99-2.48.98-4.75 2.24-6.83 3.86a9439.28 9439.28 0 0 0-19.61 15.36c-.75.58-1.42 1.26-2.1 1.86 1.829 3.12 32.17 41.92 34.88 44.63.43-.24.949-.45 1.359-.77 6.87-5.37 13.771-10.71 20.561-16.17 1.93-1.55 3.649-3.39 5.3-5.24 3.349-3.77 3.889-8.19 2.379-12.83zm-39.02-2.15c-1.95-2.46-3.73-4.71-5.631-7.11 2.19-2.52 4.711-4.42 7.431-5.99 2.04-1.17 4.18-.55 5.55 1.23 1.57 2.05 1.64 4.22-.08 6.03-2.09 2.22-4.67 3.85-7.27 5.84zm21.36 11.68c-2.22 2.07-4.689 3.87-7.46 6.12-2.26-2.9-4.189-5.37-6.3-8.08 2.66-2.2 5.01-4.32 7.76-5.88 2.45-1.4 5.04-.75 6.62 1.43 1.42 1.96 1.31 4.61-.62 6.41zM324.54 644.16c-2.64-8.84-7.8-15.54-17.05-18.311-2.8-.83-5.66-1.3-8.59-1.29-6.931.011-13.851-.029-20.78-.02-.79 0-1.59.16-2.53.25-.109.86-.27 1.52-.27 2.18-.011 17.86-.011 35.721-.011 53.431.66.5.771.659.881.659 8.439.011 16.909.421 25.319-.09 10.98-.66 19.59-7.93 22.76-18.37 1.851-6.099 2.091-12.339.271-18.439zm-18.24 15.88c-.49 1.55-1.34 3.04-2.29 4.37-1.689 2.37-4.029 3.72-7.05 3.609-1.22-.039-2.43-.1-3.92-.159-.54-5.091-.21-10.03-.26-14.94-.04-4.96-.07-9.92.05-14.71.67-.52.77-.67.89-.68 7.33-.74 10.84 1.59 12.82 8.64 1.3 4.63 1.22 9.3-.24 13.87zM295.8 220.95c-2.55 1.4-5.189 1.12-7.76 1.59-.99-1.66-1.9-3.18-2.97-4.98-.681.67-1.311 1.16-1.761 1.77-2.34 3.12-5.409 5.12-9.14 6.11-8.72 2.32-16.439.67-22.93-5.81-2.08-2.07-3.78-4.43-5.01-7.09-4.221-9.1-5.25-18.57-2.99-28.35.46-2 1.29-3.94 2.14-5.82 2.48-5.45 6.68-9.1 12.25-11.16 4.351-1.61 8.87-2.19 13.48-1.76 2.93.27 5.699 1.16 8.22 2.69 5.34 3.24 8.55 8.07 10.58 14.35-5.391 1.47-10.26 2.96-15.41 3.98-.77-1.49-1.43-2.84-2.16-4.14-.99-1.76-2.41-3.06-4.41-3.52-2.96-.69-5.85.72-7.26 3.53-1.22 2.41-1.51 5.05-1.4 7.68.2 4.72.801 9.39 2.25 13.9.461 1.44 1.07 2.86 1.83 4.16 1.17 2.01 3.04 3.24 5.29 3.73 2.44.54 4.7-.08 6.57-1.74 1.771-1.57 2.61-3.52 2-6.13-2.82-.74-5.62 1.29-8.74.26-.569-3.75-1.14-7.53-1.7-11.24 2.78-1.14 19.29-3.81 23.98-3.92.17.45.45.94.53 1.45 1.431 10.12 3.271 20.18 4.521 30.46zM484.84 195.9c-1.06-3.54-3.359-5.98-6.859-7.28-.95-.35-2.011-.52-2.961-1.23.921-.8 1.681-1.39 2.37-2.06 1.54-1.48 2.42-3.31 3.021-5.36 1.92-6.56-2.74-16.95-12.891-17.04-1.38-.01-2.779.02-4.149.21-7.41 1.03-14.811 2.1-22.21 3.2-1.2.18-2.37.56-3.811.9 2.311 17.22 4.95 34.17 7.33 51.16.061.38.32.73.58 1.29.51 0 1.04.07 1.561-.01 8.5-1.22 17.02-2.35 25.489-3.75 2.421-.4 4.771-1.43 7.04-2.43 2.37-1.04 3.96-2.98 4.94-5.39 1.63-4 1.79-8.09.55-12.21zm-31.11-19.4c2.739-.76 5.43-1.28 8.189-1.22 2.48.05 3.94 1.39 4.2 3.69.26 2.29-.83 4.11-3.021 4.79-2.63.82-5.369.92-8.369 1.18-.379-2.9-1.269-5.5-.999-8.44zm13.02 28.05c-2.76.96-5.68.77-8.57 1.51-.319-.78-.62-1.26-.699-1.76-.391-2.44-.721-4.89-1.091-7.5 3.141-.83 6.07-1.49 9.101-1.42 2.39.07 4.13 1.72 4.55 4.06.379 2.13-.991 4.31-3.291 5.11zM392.14 682.22c0 .54-.13 1.07-.229 1.8-2.311.761-4.63.32-7.101.29-.68-1.67-1.35-3.31-2.109-5.18-.55.34-1.07.51-1.37.87-5.42 6.44-17.03 6.92-24.43 1.77-4.74-3.31-7.811-7.869-9.29-13.39-2.351-8.78-2.311-17.57.97-26.13 5.06-13.2 14.55-16.83 27.12-14.93 5.149.779 9.229 3.64 12.18 7.97 2.21 3.229 3.57 6.8 4.101 10.65-2.631 1.14-9.311 2-14.641 1.899-.28-.77-.57-1.66-.91-2.52-.399-1.03-.729-2.11-1.29-3.04-2.26-3.8-7.699-3.65-9.76-.3-.93 1.5-1.71 3.21-2.06 4.93-1.2 5.76-1.12 11.57-.12 17.359.31 1.771.93 3.48 2.21 4.851 2.07 2.21 4.52 3.14 7.51 2.24 2.84-.86 3.99-2.48 4.49-6.601-2.74-.1-5.19-.2-7.57-.29-.68-3.56-.71-7.55-.09-11.529 3.6-.71 7.32-.261 11.01-.33 3.59-.08 7.181-.021 10.891-.021.21.9.479 1.55.479 2.2.029 9.142.019 18.292.009 27.432zM578.52 229.38c-.01.02-.02.05-.029.07-.021.02-.04.04-.07.05-.01.01-.02.01-.03.02l.129-.14zM582.69 223.53c0 .04-.011.08-.021.12-.04.01-.1.01-.15.01l.171-.13z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M615 234.89c1.08-2.52.81-4.86-1.09-6.94-1.93-2.1-4.32-2.31-6.88-1.6-.92.25-1.811.7-2.63 1.21-5.03 3.11-9.101 7.23-12.37 12.13-1.45 2.17-1.94 4.57-1.141 7.14.761 2.42 2.38 4.11 4.761 4.84 2.189.67 4.359.54 6.189-1.49-1.149-2.48-3.7-3.73-5.17-6.19 2.01-2.86 4.82-5.07 7.23-7.54.399.04.77-.04.909.1 5.24 5.14 10.46 10.29 15.65 15.4-1.68 2.73-13.99 15.35-20.81 21.37-2.07-1.26-3.551-3.22-5.141-4.85-.22-2.04 1.83-3.31 1.271-5.45-.75-.07-1.54-.18-2.33-.2-3.17-.05-5.94-1.25-8.47-3.04-8.561-6.01-11.681-16.27-8-26.14.51-1.4 1-2.79 1.51-4.19 1.04-.63 1.52-1.62 1.689-2.79.101-.17.2-.34.311-.51 1.16-.48 2.06-1.17 2.18-2.5 1.21-.06 1.7-1.16 2.43-1.85 2.42-2.3 5.011-4.36 7.92-6.03 3.16-1.81 6.561-2.96 10.141-3.54 4.689-.77 9.109.17 13.2 2.54 4.14 2.41 7.449 5.72 10.09 9.71 4.75 7.18 3.569 17.55-1.54 23.24-2.53-1.12-8.62-5.92-11.65-9.22.561-1.16 1.211-2.36 1.741-3.61zM453.15 640.21c-3.45.58-7.051-.08-10.54.38-1.051 1.3-.641 2.74-.65 4.07-.03 11.22-.02 22.439-.02 33.66v4.59c-2.74 1.12-5.381.53-7.95.62-2.62.1-5.24.02-8.431.02-.329-4.069-.14-7.649-.18-11.22-.03-3.46 0-6.92 0-10.39 0-3.601.021-7.2-.01-10.801-.03-3.43.149-6.859-.17-10.47-3.8-.52-7.391.021-11.11-.4-.77-2.189-.34-4.399-.42-6.56-.06-2.05-.01-4.12-.01-6.36.89-.189 1.53-.439 2.17-.449 11.77-.021 23.54-.021 35.32-.011.659 0 1.319.17 1.93.261.711 3.27.751 9.07.071 13.06zM344.15 628.74c.029 9.56.01 19.12.01 28.68 0 6.38.01 12.75 0 19.12 0 1.37-.061 2.74-.09 4.04-2.95.75-11.051.91-16.91.36-.141-.71-.44-1.49-.44-2.261-.02-17.18-.02-34.37-.01-51.55 0-.67.12-1.35.25-2.6h16.41c1.12 1.451.77 2.881.78 4.211zM411.98 680.56c0 .671-.141 1.33-.2 1.91-3.261.66-12.41.75-16.931.181-.55-4.931-.43-52.73.11-55.82 3.03-.6 12.26-.68 16.67-.11.11.57.33 1.21.34 1.86.021 17.329.021 34.659.011 51.979zM251.66 228.95c-.7.39-1.38.84-2.12 1.18-3.53 1.58-7.06 3.12-10.78 4.76-.52-.78-1.05-1.39-1.37-2.09-6.729-15-13.439-30.01-20.149-45.03-.271-.61-.471-1.26-.69-1.86 2.67-1.84 8.71-4.62 13.21-6.1.25.27.61.52.771.87 7.01 15.63 14 31.27 20.979 46.92.149.35.099.8.149 1.35zM403.85 613.47c-1.68.58-3.1.391-4.5-.04-3.479-1.069-6.3-3.16-7.649-6.5-2.771-6.84-6.92-12.84-10.92-18.939-.08-.11-.08-.271-.25-.971.939.23 1.51.24 1.93.49 6.06 3.51 10.76 8.29 12.771 15.101 1.289 4.38 3.539 7.699 7.59 9.8.318.169.538.539 1.028 1.059zM420.58 545.84c.03.061.06.12.08.19h.01c-.03-.07-.05-.13-.09-.19zM411.78 575.23c-.05.289-.11.579-.17.869l-.051-.029c.081-.28.151-.56.221-.84z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M580.18 226.66c-.17 1.17-.649 2.16-1.689 2.79-.021.02-.04.04-.07.05-.01.01-.02.01-.03.02.589-.96 1.189-1.91 1.789-2.86zM582.69 223.53c0 .04-.011.08-.021.12-.12 1.33-1.02 2.02-2.18 2.5.54-.97.84-2.14 2.029-2.56.052-.02.112-.04.172-.06zM377.61 411.26c0-.38-.261-.76-.391-1.1-1.37-.68-2.779-.42-4.149-.43-8.73-.021-17.471.01-26.2-.03-1.351 0-2.78.35-3.97-.46-.16-.33-.391-.57-.391-.811-.06-7.76-.1-15.52-.12-23.28 0-.68.13-1.36.2-2.12 1.351-.54 2.65-.98 3.891-1.56 7.899-3.73 11.51-12.91 8.399-21.05-2.51-6.57-9.84-12.59-20.01-9.99-6.64 1.7-11.41 7.71-11.99 14.42-.68 7.81 3.63 13.84 9.42 16.62 1.23.59 2.53 1.03 3.851 1.56.21 1.89.359 3.65-.17 5.61-.94.11-1.87.32-2.811.32-4.57.04-9.15-.09-13.72.07-2.16.07-3.63-.73-5.08-2.22-5.03-5.16-10.17-10.22-15.28-15.31-.97-.97-1.979-1.91-3.09-2.99-.82.7-1.58 1.26-2.24 1.93-.66.66-1.22 1.42-1.939 2.28 1.08 1.15 2 2.17 2.96 3.13 3.71 3.74 7.439 7.46 11.16 11.19.489.49 1 1 .43 1.79h-23.7c-.57-1.38-1.04-2.68-1.63-3.93-3.75-7.92-12.92-11.58-21.03-8.4-7.04 2.77-11.26 9.76-10.529 17.13.779 7.83 6.899 13.7 13.699 14.71 9.5 1.41 15.59-4.12 18.04-9.63.511-1.13.91-2.31 1.36-3.44.5-.08.9-.21 1.31-.21 16.78-.01 33.551-.02 50.33 0 .641 0 1.271.28 2.101.47v6.791c0 2.22-.051 4.439.02 6.649.061 2.17-.34 4.38.41 6.66 1.53.05 2.89.13 4.26.14 9.01.011 18.021-.01 27.03.021 1.06 0 2.12.2 3.41.33v14.79c0 14.28.02 28.56-.021 42.84-.01 1.46.44 3.04-.72 4.62-13.07 0-26.229 0-39.38-.01-.53 0-1.05-.19-1.68-.311-.131-.63-.32-1.149-.32-1.67-.021-8.59-.03-17.189 0-25.79 0-.649.29-1.31.42-1.85 1.34-.53 2.53-.92 3.65-1.45 8.029-3.82 11.6-13.271 8.149-21.46-3.53-8.35-13.109-12.47-21.45-8.97-6.43 2.699-10.119 7.659-10.39 14.729-.28 7.24 3.1 12.46 9.5 15.74 1.2.62 2.5 1.04 3.95 1.64-.07 7.71.14 15.311-.15 22.92 0 .12-.09.261-.18.341-.1.079-.26.1-.71.25-8.48-8.49-17.08-17.07-25.76-25.771 2.29-3.99 3.779-7.97 3.02-12.43-.76-4.58-2.92-8.33-6.7-11.09a16.535 16.535 0 0 0-20.739.93c-5.931 5.229-7.391 14.04-3.421 20.84 1.961 3.35 4.771 5.73 8.37 7.16 5.101 2.04 10.03 1.149 14.891-1.17 1.1 1.05 2.12 1.979 3.09 2.95 9.12 9.109 18.24 18.229 27.36 27.35.68.69 1.409 1.33 2.06 2.05.9 1 1.97 1.45 3.32 1.37.96-.07 1.939-.01 2.909-.01 12.061 0 24.12-.021 36.181.02 1.479 0 3.03-.319 4.6.521.05 1.41.141 2.77.141 4.14.02 7.48.01 14.97.01 22.46 0 10.4.01 20.79-.021 31.19 0 1.2.37 2.52-.689 3.51-5.37.51-11.94.38-14.891-.29-.5-1.26-.939-2.59-1.54-3.82-3.97-8.109-13.76-11.55-21.93-7.729-8.22 3.83-11.96 13.56-8.189 21.77 2.859 6.21 7.869 9.66 14.699 9.86 7.03.21 12.181-3.14 15.46-9.33.631-1.2 1.051-2.51 1.66-3.979h7.101c2.359 0 4.72.039 7.069-.021 2.33-.04 4.67.24 6.96-.229.21-.54.48-.921.48-1.301.01-46.72.01-93.44-.01-140.17zm-111.73-9.63c-5.36-.07-9.52-4.55-9.479-9.97.029-4.23 3.89-9.61 10.159-9.24 5.181.3 9.23 4.66 9.061 9.91-.161 5.18-4.551 9.37-9.741 9.3zm73.66-25.64c-5.55.23-9.85-4.57-9.8-9.62.05-5.16 4.319-9.5 9.479-9.6 5.351-.1 9.761 4.29 9.74 9.69-.019 5.29-4.149 9.46-9.419 9.53zm-56.46 70.29c-5.28.12-9.85-4.38-9.83-9.681.02-5.319 4.57-9.75 9.88-9.609 5.23.13 9.351 4.399 9.34 9.66-.01 5.24-4.17 9.5-9.39 9.63zm43.49-4.43c-5.41.16-9.931-4.1-10.011-9.439-.069-5.25 4.49-9.91 9.74-9.79 5.09.13 9.46 4.04 9.51 9.52.081 5.289-3.979 9.559-9.239 9.709zm22.39 107.96c-.04 5.24-4.25 9.48-9.47 9.551-5.32.069-9.8-4.41-9.74-9.74.05-5.16 4.36-9.59 9.52-9.54 6.31.049 9.93 5.269 9.69 9.729zM420.58 545.84c.03.061.06.12.08.19h.01c-.03-.07-.05-.13-.09-.19z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#00F433"
      d="M454.7 401.32c2.149-2.14 4.319-4.26 6.29-6.2h57.149c.771 1.79 1.32 3.37 2.101 4.83 4.22 7.8 13.899 10.859 21.87 6.95 8-3.91 11.58-13.42 7.93-21.53-2.88-6.42-8.07-9.89-15.04-9.98-6.98-.08-12.14 3.34-15.28 9.64-.609 1.21-1.06 2.51-1.66 3.95h-29.18c-8.59 0-17.18-.02-25.78.01-5.76.02-4.149-.51-7.939 3.21-4.25 4.18-8.43 8.43-12.65 12.63-1.17 1.17-2.37 2.31-3.63 3.55h-4.17c-5.82 0-11.64-.02-17.46.01-.92.011-1.83.25-3 .41 0 47.34 0 94.46.02 141.58 0 .66.221 1.32.32 1.88 1.45.851 2.87.54 4.22.55 5.96.03 11.931 0 17.891.03 1.069 0 2.149.19 3.12.28.55 1.41.92 2.61 1.479 3.71 2.83 5.66 7.44 8.89 13.71 9.46 8.33.75 16.021-5.14 17.63-13.271 1.63-8.25-3.14-16.449-11.1-19.079a16.58 16.58 0 0 0-20.25 8.68c-.58 1.22-1.04 2.5-1.51 3.66-5.24.64-16.32.47-19.11-.25h-.01c-.021-.07-.05-.13-.08-.19-.021-.06-.061-.12-.08-.18a.936.936 0 0 1-.1-.38c-.04-21.21-.061-42.42-.08-63.62 0-.83.069-1.66.12-2.49 0-.13.05-.27.119-.38.07-.12.19-.2.551-.54 1.08-.04 2.439-.14 3.8-.14 7.76-.021 15.52-.011 23.28-.011 9.71 0 19.409.021 29.109-.01 4.4-.01 3.44.47 6.84-2.89.5-.48.98-.98 1.471-1.47 10.1-10.091 20.18-20.2 30.3-30.271 1.06-1.05 1.89-2.42 3.63-2.87 3.96 1.641 8.07 2.51 12.44 1.18 4.479-1.359 7.85-4.02 10.079-8.1 3.82-6.99 2.131-15.56-4.029-20.689a16.563 16.563 0 0 0-20.75-.351c-3.07 2.38-5.15 5.48-5.99 9.25-1.14 5.11-.12 9.9 2.91 14.101-2.99 3.819-16.92 17.56-19.48 19.25-.689-2.87-.76-6.61-.21-11.141 1.3-.56 2.721-1.08 4.07-1.76 8.08-4.09 11.37-13.88 7.439-22.021-4-8.3-14.01-11.859-22.229-7.72-6.1 3.07-9.35 8.18-9.31 15.04.039 6.86 3.39 11.83 9.51 14.91 1.22.61 2.5 1.09 3.92 1.7 0 5.76-.01 11.439.01 17.109.01 1.061-.439 1.851-1.16 2.551-2.069 2.05-4.18 4.05-6.17 6.18-1.22 1.31-2.56 1.91-4.37 1.9-8.04-.061-16.08-.021-24.12-.051-.609 0-1.22-.229-2.31-.449 4.34-5.07 9.13-9.03 13.25-13.771-1.13-1.75-2.42-3.07-4.16-4.18-1.11 1.069-2.12 2.01-3.09 2.979-4.521 4.5-9.06 8.971-13.521 13.53-1.239 1.27-2.529 1.97-4.35 1.94-4.99-.08-9.979-.021-14.97-.051-.78-.01-1.561-.239-2.46-.38-.07-.93-.17-1.6-.17-2.27 0-17.33-.011-34.65.01-51.98 0-.79.229-1.58.38-2.609 1.66-.051 3.16-.131 4.66-.131 10.68-.01 21.35.011 32.02-.02 1.49-.01 3.051.33 4.561-.51.53-1.73.52-3.46-.05-5.391-.96-.09-1.91-.239-2.851-.25-2.91-.04-5.819-.01-8.729-.029-.641-.011-1.42.189-1.7-.95 1.979-1.974 4.019-4.044 6.079-6.084zm80.27-18.92c5.261.15 9.42 4.29 9.431 9.55.02 5.4-4.381 9.77-9.75 9.68-5.181-.09-9.381-4.39-9.471-9.59-.07-4.88 4.12-9.8 9.79-9.64zm-78.85 157.66c5.27-.13 9.87 4.381 9.86 9.66-.011 5.15-4.261 9.48-9.461 9.63-5.17.15-9.579-4-9.77-9.229-.199-5.421 4.001-9.941 9.371-10.061zm71.36-123.93c5.199.03 9.46 4.28 9.529 9.5.26 4.59-3.38 9.7-9.62 9.79-5.149.08-9.51-4.32-9.6-9.47-.089-5.3 4.401-9.85 9.691-9.82zm-46.08 11.05c.14-5.38 4.84-9.54 10.199-9.229 5.25.31 9.311 4.72 9.04 9.93-.33 6.48-5.76 9.63-10.149 9.25-6.4-.561-9.21-5.571-9.09-9.951z"
    />
  </svg>
)
export default Logo