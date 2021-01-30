import { addDecorator, addParameters } from "@storybook/react";
import GlobalStyle from "../src/components/globalStyle";
addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

const viewports = {
  extrasmall: {
    name: "default small (sm)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },

  medium: {
    name: "table (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },

  large: {
    name: "desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },

  large: {
    name: "extraLarge (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
