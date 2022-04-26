# Add content to your PWA

In this step, we will update the source files of the generated solution to add core functionalities such as mood tracking and journaling. 

You can skip this step if you have other functionalities in mind. Or you can download the completed solution from [this folder - solution/02-repose](./solution/02-repose/).

***
**NOTE:** Make sure you have the solution running with this command `npm run dev`. So that as you save your changes, you can see them reflected in the browser. You can always stop the server by pressing the `ctrl + c` key combination.
***

## Update index.html

We will first take a look at the entry point of your app, the `index.html` file. Let's make a few changes:

1. Update title field with `<title>Repose</title>`.
1. Update description metadata field with `<meta name="description" content="This is a mental health journaling app" />`

## Update app-home.ts

This is the home page of Repose. We will add a hero section - the first thing people see when they visit Repose.

1. In the `render()` function, after `<app-header></app-header>`, add the following:

```html
  <div class="hero">
    <hero-decor></hero-decor>
    <div class="hero__inner">
      <div class="hero__top-content">
        <h1>Intelligent Daily Mood Journal</h1>
        <p>Repose is your personal mood tracking companion that helps you organize and reflect upon your daily thoughts.</p>
        <fluent-anchor href="/journal" appearance="lightweight">Mood check-in</fluent-anchor>
      </div>
      <div class="hero__bottom-content">
      <img src="assets/media/humans.svg" alt="Humans">
      </div>
    </div>
  </div>
```

2. In the `static get styles()` function, remove all css styles from the `return` statement. Add the following styles:

```css
  .hero {
    height: 90vh;
    min-height: 600px;
    max-height: 900px;
    max-width: 100%;
    max-width: 100vw;
    padding: 0 48px;
    overflow-x: hidden;
    position: relative;
  }

  .hero__inner {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero__top-content {
    flex: 1 1 0px;
    color: white;
    margin: 4rem 5rem 0;
    text-align: center;
    max-height: 25vh;
  }

  .hero__top-content h1 {
    font-weight: normal;
    font-size: 48px;
  }

  .hero__top-content fluent-anchor {
    margin-top: 1rem;
  }

  .hero__top-content fluent-anchor::part(control) {
    border-radius: 15px;
    color: #107652;
  }

  .hero__top-content fluent-anchor::part(control):hover {
    color: #2E765E;
  }

  .hero__bottom-content {
    flex: 1 1 0px;
    height: 50vh;
  }

  .hero__bottom-content img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 840px) and (min-width: 625px) {
    .hero__top-content {
      margin: 4rem 2rem 0px;
    }
  }

  @media screen and (max-width: 625px) and (min-width: 480px) {
    .hero__top-content {
      margin: 2rem 2rem 0px;
    }

    .hero__bottom-content {
      margin-top: 7rem;
    }
  }

  @media screen and (max-width: 480px) {
    header {
      margin: 0 2rem;
    }

    .hero {
      padding: 0 1rem;
    }

    .hero__top-content {
      margin: 1rem 0;
    }

    .hero__top-content h1 {
      font-size: 36px;
    }

    .hero__bottom-content {
      margin-top: 7rem;
    }
  }
```

## Add creatives folder

1. Add the [media folder](./solution/02-repose/public/assets/media/) that contains two creatives to `./public/assets` folder.

## Create a new reusable component

1. Create a hero decorative component called `hero-decor.ts` in `./src/script/components/` folder that renders as the hero section background. Import this component in `app-index.ts` file with `import './script/components/hero-decor';` on line 8 after the import of header component. And copy the code from [this hero-decor file](./solution/02-repose/src/script/components/hero-decor.ts) to it.

## Update global styles

1. Replace the `global.css` file in `./src/styles/` folder with the styles in [this file](./solution/02-repose/src/styles/global.css).

2. Remove unwanted styles from generated files, such as in `./src/script/app-index.ts`, remove `padding-left: 16px;` and `padding-right: 16px;` from `main` element.

## Update header component

1. Replace `header.ts` with the code in [this file](./solution/02-repose/src/script/components/header.ts).

2. Update `app-home.ts` to include "Go Back" function as part of the `app-header` component. Simply add attribute `enableBack="${true}"` to it. Now `app-header` element should look like this: `<app-header enableBack="${true}"></app-header>`.

## Update app-about.ts page to app-journal.ts

1. Change the name of file `app-about.ts` to `app-journal.ts`. You will also need to update this in `app.index.ts` file in router setup (`children` property of `router.setRoutes`) as following:

```typescript
  {
    path: '/journal',
    component: 'app-journal',
    action: async () => {
      await import('./script/pages/app-journal.js');
    },
  },
```

Now when you click "Mood check-in" button, Repose app will navigate to journal page with no content.

2. Add jounaling functionality to the `app-journal.ts` page with code from [this file](./solution/02-repose/src/script/pages/app-journal.ts).

3. Add this [interface file](./solution/02-repose/src/script/interfaces/journalEntry.ts), `./src/script/interfaces/journalEntry.ts` to the project.

4. Add this [utility file](./solution/02-repose/src/script/utils/journal.ts), `./src/script/utils/journal.ts` to the project.

5. Add `localforage` to the project devDependencies with this command: `npm i localforage -D`.

6. Now restart your dev server with `npm run dev` and you should see the journal page!

## *Bonus functionalities

If you would like to add functionality to show existing journals, you can take a look at the completed [`app-home.ts` file](./solution/02-repose/src/script/pages/app-home.ts) for reference. You can also add a [footer component](./solution/02-repose/src/script/components/footer.ts) to your app.

## Summary and next steps

Let's do a quick recap of what we did in this step:
- We updated `index.html` file to include title and metadata for Repose app.
- We did a complete redesign of the homepage including some custom CSS styles and creatives as background images.
- We created a reusable component called `hero-decor` that renders as the hero section background. This is used in both `app-index.ts` and `app-journal.ts` pages. You can also use it in other pages as you create them.
- We updated the existing header component.
- We created a new page called `app-journal.ts` that includes journaling functionality.

Something to consider for the next steps if you are building a production ready app: Instead of using `localforage`, which stores journal entries in indexDB of your local browser's storage, you should consider using a more persistent storage solution.

Next, we will make the Repose app secure, inatallable, network-independent, and work offline!

## Resources
// TODO: 30days of PWA web components best practice
// lit element tutorial
// localforage docs
// debugging with Edge dev tools?
