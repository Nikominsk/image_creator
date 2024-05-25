<template>
  
    <div>
        <div>
          <header>
              <ul>
                  <li>
                      <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li>
                      <NuxtLink to="/about">About</NuxtLink>
                  </li>
              </ul>
          </header>
        </div>

        <slot />
    </div>

</template>

<style>

 :root {
    --ff: white;
    --nn: black;
    --nn-gray: rgb(60, 56, 56);
    --clr-accent-first: rgb(200, 55, 200);
    --clr-accent-sec: rgb(62, 62, 193);

    --font-family: "Helvetica";

    --h1-font: bold max(36px, 4vw) / max(48px, 5vw) var(--font-family);
  }

  /* reset everything */
  *, *::before,*::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0 solid transparent;
  }

   
  html {
    /* prevent iOS font size change */
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    line-height: 1;
    text-rendering: optimizeSpeed;
  }

  button {
      outline: none;
      border: none;
      padding: 0.8em 1.2em;
      cursor: pointer;
  }

  .hero-section {
    width: 100%;
    height: 100vh;
  }

  .center {
    text-align: center;
  }

</style>
